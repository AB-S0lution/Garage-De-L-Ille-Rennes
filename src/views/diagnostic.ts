import type { View } from '../core/router'
import { symptoms } from '../data/symptoms'
import { voyants } from '../data/voyants'
import { checklists } from '../data/checklists'
import { familyBySlug } from '../data/families'
import { carSVG, voyantBadge } from '../core/art'
import { gsap } from '../core/motion'
import { esc, norm, reducedMotion, typo, u } from '../core/dom'
import { ico } from '../core/icons'
import { arrowLink, callButton, finalCta, pageHead, photoFig, photoSlim } from './ui'
import { photoBySlug } from '../data/photos'

const urgencyText = { surveiller: 'À surveiller', 'bientôt': 'À voir bientôt', rapidement: 'À voir rapidement' } as const

export function diagnosticView(): View {
  const html = `
${pageHead({ title: 'Ça fait quel bruit ?', lead: 'Choisissez ce que vous entendez, voyez ou sentez. Nous vous montrons la zone concernée et les pistes les plus probables. Ce sont des pistes, pas un diagnostic: seul un essai et la valise électronique permettent de le poser.', crumb: [['Diagnostic', '']] })}
<section class="wrap finder" aria-label="Chercheur de symptômes">
  <div class="finder-left" data-reveal>
    <label class="search" for="sq">${ico.search(20)}<span class="sr-only">Filtrer les symptômes</span><input id="sq" type="search" placeholder="Filtrer : freins, fumée, voyant…" autocomplete="off" /></label>
    <div class="chips sym-chips" role="group" aria-label="Symptômes">${symptoms
      .map((s) => `<button type="button" class="chip" data-id="${s.id}" aria-pressed="false">${esc(s.label)}</button>`)
      .join('')}</div>
    <p class="none" id="sym-none" hidden>Aucun symptôme ne correspond. Appelez-nous et décrivez ce que vous entendez.</p>
  </div>
  <div class="finder-right" data-reveal>
    <div class="sheet mini-car" id="mini-car">${carSVG({ label: 'Voiture: la zone concernée est mise en évidence' })}</div>
    <div class="result" id="result" aria-live="polite">
      <p class="placeholder">Choisissez un symptôme à gauche. La zone s’allume sur la voiture et les pistes apparaissent ici.</p>
    </div>
  </div>
</section>

<section class="wrap voyants" aria-labelledby="voy-h">
  <h2 id="voy-h" data-split>Les voyants du tableau de bord</h2>
  <div class="ph-pair voy-ph">${['tableau-bord', 'compte-tours'].map((x, i) => photoFig(photoBySlug(x), '', i === 0)).join('')}</div>
  <p class="lead" data-reveal>Rouge: arrêtez-vous dès que possible. Orange: à faire contrôler bientôt. Quelques repères, valables pour la plupart des voitures; le carnet de la vôtre fait foi.</p>
  <ul class="voy-grid">${voyants
    .map(
      (v) => `<li class="voy" data-reveal>${voyantBadge(v.code, v.color)}<div><h3>${v.name}</h3><p>${v.meaning}</p><p class="voy-act"><strong>À faire:</strong> ${v.action}</p></div></li>`,
    )
    .join('')}</ul>
</section>

${photoSlim(['pneu-voiture', 'capot-ouvert', 'sculpture-pneu'].map(photoBySlug), 'Contrôles avant de partir, photos d’illustration')}
<section class="wrap checks" aria-labelledby="chk-h">
  <h2 id="chk-h" data-split>Les listes avant de partir</h2>
  <div class="chips" role="tablist" aria-label="Listes">${checklists
    .map((c, i) => `<button type="button" role="tab" class="chip${i === 2 ? ' is-on' : ''}" aria-selected="${i === 2}" data-id="${c.id}">${c.title}</button>`)
    .join('')}</div>
  <div class="check-body" id="check-body" role="tabpanel"></div>
</section>
${finalCta('Une piste ne suffit pas ?', 'Appelez-nous, décrivez le bruit comme vous pouvez. Nous vous disons si on peut attendre.')}`
  return {
    html,
    init(root) {
      const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>('.sym-chips .chip'))
      const result = root.querySelector<HTMLElement>('#result')!
      const car = root.querySelector<SVGSVGElement>('#mini-car .car-svg')!
      const sq = root.querySelector<HTMLInputElement>('#sq')!
      const none = root.querySelector<HTMLElement>('#sym-none')!
      const pick = (id: string) => {
        const s = symptoms.find((x) => x.id === id)
        if (!s) return
        buttons.forEach((b) => {
          b.classList.toggle('is-on', b.dataset.id === id)
          b.setAttribute('aria-pressed', String(b.dataset.id === id))
        })
        const f = familyBySlug(s.family)!
        car.querySelectorAll('.zone').forEach((z) => z.classList.toggle('is-active', (z as SVGElement).dataset.zone === f.zone))
        car.classList.toggle('has-active', !!f.zone)
        result.innerHTML = typo(`
          <p class="urg u-${s.urgency}"><span class="mono">${urgencyText[s.urgency]}</span></p>
          <h3>${esc(s.label)}</h3>
          <h4>Pistes probables</h4>
          <ul class="ticks">${s.causes.map((c) => `<li>${c}</li>`).join('')}</ul>
          <p>${s.advice}</p>
          <div class="res-actions">${callButton('Appeler le garage')}${arrowLink(u('/atelier/' + f.slug), f.name)}</div>`)
        if (!reducedMotion()) gsap.from(result.children, { y: 12, opacity: 0, duration: 0.45, ease: 'power3.out', stagger: 0.05 })
      }
      root.querySelector('.sym-chips')!.addEventListener('click', (e) => {
        const b = (e.target as HTMLElement).closest<HTMLButtonElement>('.chip')
        if (b?.dataset.id) pick(b.dataset.id)
      })
      sq.addEventListener('input', () => {
        const t = norm(sq.value.trim())
        let n = 0
        buttons.forEach((b) => {
          const s = symptoms.find((x) => x.id === b.dataset.id)!
          const hit = !t || norm(s.label + ' ' + s.causes.join(' ')).includes(t)
          b.hidden = !hit
          if (hit) n++
        })
        none.hidden = n > 0
      })

      // listes à cocher (état gardé seulement en mémoire)
      const body = root.querySelector<HTMLElement>('#check-body')!
      const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('.checks [role="tab"]'))
      const draw = (id: string) => {
        const c = checklists.find((x) => x.id === id)!
        body.innerHTML = typo(`<p class="lead">${c.intro}</p><ul class="check-list">${c.items
          .map((it, i) => `<li><label><input type="checkbox" id="ck-${id}-${i}"><span class="ck-box" aria-hidden="true">${ico.check(16)}</span><span><strong>${it.label}</strong><em>${it.detail}</em></span></label></li>`)
          .join('')}</ul>`)
      }
      tabs.forEach((t) =>
        t.addEventListener('click', () => {
          tabs.forEach((x) => {
            x.classList.toggle('is-on', x === t)
            x.setAttribute('aria-selected', String(x === t))
          })
          draw(t.dataset.id!)
        }),
      )
      draw('controle-technique')
    },
  }
}
