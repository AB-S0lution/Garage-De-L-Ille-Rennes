// Interaction signature: « L'établi ». On touche une zone de la voiture, les pièces sortent sur l'établi,
// on bascule pièce usée / pièce neuve, et un panneau (vrai HTML) explique en trois blocs.
import { families, familyBySlug, type Family } from '../data/families'
import { carSVG, zoneMeta } from '../core/art'
import { gsap } from '../core/motion'
import { reducedMotion, typo, u } from '../core/dom'
import { arrowLink, benchHTML, callButton, stateToggle } from './ui'

export function etabliHTML(): string {
  return `
<section class="etabli" id="etabli" aria-labelledby="etabli-h">
  <div class="wrap">
    <h2 id="etabli-h" data-split>L’établi: touchez une zone, la pièce sort.</h2>
    <p class="lead" data-reveal>Choisissez une partie de la voiture. Nous posons les pièces sur l’établi comme nous le faisons au garage: l’usée à côté de la neuve, avec ce qu’il faut savoir.</p>
    <div class="sheet car-sheet" data-reveal>${carSVG({ interactive: true, label: 'Voiture compacte en vue de côté: six zones à toucher (freins, moteur, embrayage, échappement, pneus, entretien)' })}</div>
    <div class="etabli-tabs" role="tablist" aria-label="Zones de la voiture" data-reveal>
      ${families
        .map(
          (f, i) =>
            `<button type="button" role="tab" class="tab" id="tab-${f.slug}" aria-controls="etabli-panel" aria-selected="${i === 1}" tabindex="${i === 1 ? 0 : -1}" data-slug="${f.slug}">${f.zoneLabel}</button>`,
        )
        .join('')}
    </div>
    <div class="etabli-panel" id="etabli-panel" role="tabpanel" aria-live="polite" tabindex="-1">
      <div class="bench-col">
        <div class="bench-top"><p class="mono bench-lbl">Sur l’établi</p>${stateToggle()}</div>
        <ul class="bench" data-bench></ul>
      </div>
      <div class="panel-copy" data-copy></div>
    </div>
  </div>
</section>`
}

function copyHTML(f: Family): string {
  return `
    <h3>${f.name}</h3>
    <div class="pc"><h4>À quoi ça sert</h4><p>${f.whatItDoes}</p></div>
    <div class="pc"><h4>Les signes qui doivent alerter</h4><ul class="ticks">${f.signs.slice(0, 4).map((s) => `<li>${s}</li>`).join('')}</ul></div>
    <div class="pc"><h4>Ce qu’on vérifie et ce qu’on vous montre</h4><ul class="ticks">${f.checks.slice(0, 3).map((s) => `<li>${s}</li>`).join('')}</ul><p class="shown"><strong>On vous montre:</strong> ${f.shown}</p></div>
    <div class="pc-actions">${callButton('Appeler pour un devis')}${arrowLink(u('/atelier/' + f.slug), 'Voir toutes les prestations')}</div>`
}

/** Bascule usée / neuve pour une liste `.bench` (réutilisée sur les pages famille). */
export function bindBench(scope: HTMLElement, getFamily: () => Family) {
  const bench = scope.querySelector<HTMLElement>('[data-bench]')!
  let state: 'worn' | 'new' = 'worn'
  const paint = (animate: boolean) => {
    const swap = () => {
      bench.innerHTML = benchHTML(getFamily(), state)
    }
    if (animate && !reducedMotion()) {
      gsap.to(bench, { opacity: 0, filter: 'blur(3px)', duration: 0.12, ease: 'power1.in', onComplete: () => { swap(); gsap.to(bench, { opacity: 1, filter: 'blur(0px)', duration: 0.22, ease: 'power2.out' }) } })
    } else swap()
  }
  scope.querySelectorAll<HTMLButtonElement>('.seg-b').forEach((b) =>
    b.addEventListener('click', () => {
      const next = b.dataset.state as 'worn' | 'new'
      if (next === state) return
      state = next
      scope.querySelectorAll('.seg-b').forEach((x) => {
        x.classList.toggle('is-on', x === b)
        x.setAttribute('aria-pressed', String(x === b))
      })
      paint(true)
    }),
  )
  const reset = () => {
    state = 'worn'
    scope.querySelectorAll('.seg-b').forEach((x) => {
      const on = (x as HTMLElement).dataset.state === 'worn'
      x.classList.toggle('is-on', on)
      x.setAttribute('aria-pressed', String(on))
    })
  }
  return { paint, reset }
}

export function initEtabli(root: HTMLElement) {
  const sec = root.querySelector<HTMLElement>('#etabli')
  if (!sec) return
  const svg = sec.querySelector<SVGSVGElement>('.car-svg')!
  const tabs = Array.from(sec.querySelectorAll<HTMLButtonElement>('[role="tab"]'))
  const bench = sec.querySelector<HTMLElement>('[data-bench]')!
  const copy = sec.querySelector<HTMLElement>('[data-copy]')!
  const panel = sec.querySelector<HTMLElement>('.etabli-panel')!
  let current = familyBySlug('freinage')!
  const b = bindBench(sec, () => current)

  const leader = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  leader.setAttribute('class', 'active-leader')
  leader.setAttribute('fill', 'none')
  svg.appendChild(leader)

  const select = (slug: string, focus = false) => {
    const f = familyBySlug(slug)
    if (!f) return
    current = f
    tabs.forEach((t) => {
      const on = t.dataset.slug === slug
      t.setAttribute('aria-selected', String(on))
      t.tabIndex = on ? 0 : -1
      if (on && focus) t.focus()
    })
    panel.setAttribute('aria-labelledby', `tab-${slug}`)
    svg.querySelectorAll('.zone').forEach((z) => z.classList.toggle('is-active', (z as SVGElement).dataset.zone === f.zone))
    svg.classList.toggle('has-active', !!f.zone)
    const meta = zoneMeta.find((m) => m.id === f.zone)
    if (meta) {
      leader.setAttribute('d', `M${meta.ax} ${meta.ay} V372`)
      leader.style.opacity = '1'
      if (!reducedMotion()) gsap.fromTo(leader, { strokeDashoffset: 60 }, { strokeDashoffset: 0, duration: 0.6, ease: 'power2.out' })
    } else leader.style.opacity = '0'
    b.reset()
    b.paint(false)
    copy.innerHTML = typo(copyHTML(f))
    if (!reducedMotion()) {
      gsap.from(bench.children, { y: -40, opacity: 0, scale: 0.92, duration: 0.75, ease: 'expo.out', stagger: 0.08 })
      gsap.from(copy.children, { y: 12, opacity: 0, duration: 0.5, ease: 'power3.out', stagger: 0.05 })
    }
  }

  tabs.forEach((t) => t.addEventListener('click', () => select(t.dataset.slug!)))
  sec.querySelector('[role="tablist"]')!.addEventListener('keydown', (e) => {
    const k = (e as KeyboardEvent).key
    const i = tabs.findIndex((t) => t.tabIndex === 0)
    let n = -1
    if (k === 'ArrowRight' || k === 'ArrowDown') n = (i + 1) % tabs.length
    else if (k === 'ArrowLeft' || k === 'ArrowUp') n = (i - 1 + tabs.length) % tabs.length
    else if (k === 'Home') n = 0
    else if (k === 'End') n = tabs.length - 1
    if (n >= 0) {
      e.preventDefault()
      select(tabs[n].dataset.slug!, true)
    }
  })
  svg.querySelectorAll<SVGGElement>('.zone').forEach((z) => {
    z.addEventListener('click', () => {
      const f = families.find((x) => x.zone === z.dataset.zone)
      if (f) select(f.slug)
    })
  })
  select('freinage')
}
