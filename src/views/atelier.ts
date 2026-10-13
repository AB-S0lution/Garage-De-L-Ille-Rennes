import type { View } from '../core/router'
import { families, familyBySlug } from '../data/families'
import { services, type Energy, type FamilySlug, type Service } from '../data/services'
import { cases } from '../data/cases'
import { faq } from '../data/faq'
import { gsap } from '../core/motion'
import { eur, esc, norm, reducedMotion, typo, u } from '../core/dom'
import { ico } from '../core/icons'
import { SITE } from '../data/site'
import { bindChips, callButton, chips, finalCta, miniPair, PRICE_NOTE, pageHead, arrowLink } from './ui'
import { benchHTML, stateToggle } from './ui'
import { bindBench } from './etabli'
import { photoFig } from './ui'
import { photoBySlug } from '../data/photos'

const famPhotos: Record<FamilySlug, [string, string]> = {
  entretien: ['appoint-huile', 'caisse-outils'],
  freinage: ['frein-gros-plan', 'systeme-freinage'],
  'moteur-distribution': ['bloc-moteur', 'mecanicien-moteur'],
  'embrayage-boite': ['voiture-pont', 'piece-etabli'],
  'echappement-fap': ['sous-vehicule', 'pieces-vrac'],
  'pneus-suspension': ['jante-pneu', 'piles-pneus'],
  'hybride-gpl': ['capot-ouvert', 'tableau-bord'],
}

const energyLabel: Record<Energy, string> = { thermique: 'Thermique', hybride: 'Hybride', gpl: 'GPL' }
const duree = (h: number) => (h < 1 ? `${h * 60} min` : `${String(h).replace('.', ',')} h`)

function serviceCard(s: Service): string {
  const fam = familyBySlug(s.family)!
  return `<li class="svc" data-id="${s.id}">
    <div class="svc-top"><span class="svc-fam mono">${fam.name}</span>${miniPair(s.family)}</div>
    <h3>${esc(s.name)}</h3>
    <p>${esc(s.blurb)}</p>
    <div class="svc-tags">${s.energies.map((e) => `<span class="tag-e">${energyLabel[e]}</span>`).join('')}<span class="tag-d">${ico.clock(14)} ${duree(s.hours)}</span></div>
    <p class="svc-price"><strong class="mono">${eur(s.priceMin)} à ${eur(s.priceMax)}</strong><span>${PRICE_NOTE}</span></p>
  </li>`
}

export function atelierView(): View {
  const html = `
${pageHead({ title: 'Nos prestations', lead: 'Cinquante travaux courants, du simple filtre à la distribution. Les tarifs ci-dessous sont des exemples indicatifs: le devis est toujours gratuit et rien n’est fait sans votre accord.', crumb: [['Atelier', '']] })}
<section class="wrap catalog" aria-label="Catalogue des prestations">
  <div class="filters" data-reveal>
    <label class="search" for="q">${ico.search(20)}<span class="sr-only">Rechercher une prestation</span><input id="q" type="search" placeholder="Vidange, plaquettes, FAP, distribution…" autocomplete="off" /></label>
    <div class="f-row"><span class="f-lbl mono">Famille</span>${chips([{ value: '', label: 'Toutes' }, ...families.map((f) => ({ value: f.slug, label: f.name }))], 'Famille', '')}</div>
    <div class="f-row"><span class="f-lbl mono">Énergie</span>${chips([{ value: '', label: 'Toutes' }, { value: 'thermique', label: 'Thermique' }, { value: 'hybride', label: 'Hybride' }, { value: 'gpl', label: 'GPL' }], 'Énergie', '')}</div>
    <div class="f-row"><span class="f-lbl mono">Durée</span>${chips([{ value: '', label: 'Toutes' }, { value: 'short', label: 'Moins de 1 h' }, { value: 'mid', label: '1 à 3 h' }, { value: 'long', label: 'Plus de 3 h' }], 'Durée', '')}</div>
  </div>
  <p class="count" aria-live="polite" id="count"></p>
  <ul class="svc-grid" id="svc-grid"></ul>
  <div class="empty" id="empty" hidden>
    <p><strong>Aucune prestation ne correspond.</strong> Décrivez-nous votre cas, nous trouverons ce qu’il faut.</p>
    ${callButton()}
  </div>
</section>
${finalCta('Pas sûr du bon geste ?', 'Le plus simple est de nous décrire le problème. Nous cherchons la cause avant de parler de pièces.')}`
  return {
    html,
    init(root) {
      const grid = root.querySelector<HTMLElement>('#svc-grid')!
      const count = root.querySelector<HTMLElement>('#count')!
      const empty = root.querySelector<HTMLElement>('#empty')!
      const q = root.querySelector<HTMLInputElement>('#q')!
      const state = { fam: '', en: '', dur: '', q: '' }
      const render = (animate = true) => {
        const list = services.filter(
          (s) =>
            (!state.fam || s.family === (state.fam as FamilySlug)) &&
            (!state.en || s.energies.includes(state.en as Energy)) &&
            (!state.dur || (state.dur === 'short' ? s.hours < 1 : state.dur === 'mid' ? s.hours >= 1 && s.hours <= 3 : s.hours > 3)) &&
            (!state.q || norm(s.name + ' ' + s.blurb).includes(norm(state.q))),
        )
        grid.innerHTML = typo(list.map(serviceCard).join(''))
        count.textContent = `${list.length} prestation${list.length > 1 ? 's' : ''}`
        empty.hidden = list.length > 0
        if (animate && !reducedMotion() && list.length) gsap.from(grid.children, { y: 16, opacity: 0, duration: 0.5, ease: 'power3.out', stagger: { each: 0.025, amount: 0.35 }, clearProps: 'all' })
      }
      const rows = root.querySelectorAll<HTMLElement>('.filters .chips')
      bindChips(rows[0], (v) => ((state.fam = v), render()))
      bindChips(rows[1], (v) => ((state.en = v), render()))
      bindChips(rows[2], (v) => ((state.dur = v), render()))
      q.addEventListener('input', () => ((state.q = q.value.trim()), render()))
      const pre = new URLSearchParams(location.search).get('famille')
      if (pre) state.fam = pre
      render(false)
    },
  }
}

export function familleView(slug: string): View | null {
  const f = familyBySlug(slug)
  if (!f) return null
  const list = services.filter((s) => s.family === f.slug)
  const myCases = cases.filter((c) => c.family === f.slug)
  const related = faq.filter((x) => norm(x.q + x.a).includes(norm(f.faqHint))).slice(0, 3)
  const faqPick = related.length ? related : faq.slice(0, 3)
  const idx = families.findIndex((x) => x.slug === f.slug)
  const prev = families[(idx - 1 + families.length) % families.length]
  const next = families[(idx + 1) % families.length]
  const html = `
${pageHead({ title: f.name, lead: f.intro, crumb: [['Atelier', '/atelier'], [f.name, '']] })}
<section class="wrap ph-pair" aria-label="${f.name} en images">${famPhotos[f.slug].map((x, i) => photoFig(photoBySlug(x), '', i === 0)).join('')}</section>
<section class="wrap fam-hero" aria-label="Les pièces de ${f.name}">
  <div class="sheet fam-bench" data-reveal>
    <div class="bench-top"><p class="mono bench-lbl">Sur l’établi</p>${stateToggle()}</div>
    <ul class="bench big" data-bench>${benchHTML(f, 'worn')}</ul>
  </div>
  <div class="fam-what" data-reveal>
    <h2>À quoi ça sert</h2>
    <p>${f.whatItDoes}</p>
    <p class="shown"><strong>On vous montre:</strong> ${f.shown}</p>
    <div class="fam-actions">${callButton('Appeler pour un devis')}</div>
  </div>
</section>
<section class="wrap two-lists" aria-label="Signes et vérifications">
  <div data-reveal><h2>Les signes qui doivent alerter</h2><ul class="ticks big">${f.signs.map((s) => `<li>${s}</li>`).join('')}</ul></div>
  <div data-reveal><h2>Ce que nous vérifions</h2><ul class="ticks big">${f.checks.map((s) => `<li>${s}</li>`).join('')}</ul></div>
</section>
<section class="wrap fam-services" aria-labelledby="fs-h">
  <h2 id="fs-h" data-split>Prestations ${f.slug === 'hybride-gpl' ? 'hybride et GPL' : 'de la famille'}</h2>
  <ul class="svc-grid">${list.map(serviceCard).join('')}</ul>
  <p class="price-foot" data-reveal>${PRICE_NOTE}. Les durées sont indicatives et dépendent du véhicule.</p>
</section>
${
  myCases.length
    ? `<section class="wrap fam-cases" aria-labelledby="fc-h"><h2 id="fc-h" data-split>Ce que nous avons déjà vu</h2><div class="cases-list">${myCases
        .map(
          (c) => `<article class="case-line" data-reveal><p class="case-tag mono">${c.realStory ? 'Cas réel, garage de Chantepie' : 'Exemple fictif'}</p><h3>${c.title}</h3><p>${c.symptom} ${c.found}</p><p><strong>Montré:</strong> ${c.shown}</p><p><strong>Fait:</strong> ${c.done}</p></article>`,
        )
        .join('')}</div></section>`
    : ''
}
<section class="wrap fam-faq" aria-labelledby="ff-h">
  <h2 id="ff-h" data-split>Questions sur ce sujet</h2>
  <div class="faq-list">${faqPick.map((x) => `<details class="faq-item" data-reveal><summary>${x.q}${ico.plus(20)}</summary><p>${x.a}</p></details>`).join('')}</div>
  <p data-reveal>${arrowLink(u('/faq'), 'Toutes les questions')}</p>
</section>
<nav class="wrap fam-nav" aria-label="Autres familles">
  <a href="${u('/atelier/' + prev.slug)}">${ico.arrowLeft(18)} ${prev.name}</a>
  <a href="${u('/atelier')}">Toutes les prestations</a>
  <a href="${u('/atelier/' + next.slug)}">${next.name} ${ico.arrow(18)}</a>
</nav>
${finalCta(`${f.name}: parlons de votre voiture`, `Garage indépendant toutes marques, ${SITE.street} à ${SITE.city}. Devis gratuit.`)}`
  return {
    html,
    init(root) {
      const scope = root.querySelector<HTMLElement>('.fam-bench')!
      const b = bindBench(scope, () => f)
      b.paint(false)
      if (!reducedMotion()) gsap.from(scope.querySelectorAll('.bench-part'), { y: -40, opacity: 0, scale: 0.92, duration: 0.8, ease: 'expo.out', stagger: 0.09, delay: 0.4 })
    },
  }
}
