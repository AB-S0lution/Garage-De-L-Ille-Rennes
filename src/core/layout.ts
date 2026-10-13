import { SITE, phoneHref } from '../data/site'
import { hours } from '../data/hours'
import { networkLine } from '../data/misc'
import { ico } from './icons'
import { logoArrow, shopfrontSVG } from './art'
import { statusChip } from './status'
import { u } from './dom'
import { stopSmooth, startSmooth } from './motion'

export const nav = [
  { href: '/atelier', label: 'Atelier' },
  { href: '/diagnostic', label: 'Diagnostic' },
  { href: '/notre-facon', label: 'Notre façon' },
  { href: '/histoire', label: 'Histoire' },
  { href: '/avis', label: 'Avis' },
  { href: '/conseils', label: 'Conseils' },
  { href: '/infos-pratiques', label: 'Infos pratiques' },
]

export const wordmark = (cls = '') =>
  `<span class="wordmark ${cls}">${logoArrow}<span class="wm-1">GARAGE</span><span class="wm-2">DE L’ILLE</span></span>`

const hoursRows = () =>
  hours
    .map((h) => {
      const t = h.slots.length ? h.slots.map(([a, b]) => `${Math.floor(a / 60)} h - ${Math.floor(b / 60)} h`).join(' et ') : 'Fermé'
      return `<tr><th scope="row">${h.label}</th><td>${t}</td></tr>`
    })
    .join('')

export const hoursTable = () => `<table class="hours-table"><caption class="sr-only">Horaires d’ouverture</caption><tbody>${hoursRows()}</tbody></table>`

export function headerHTML(): string {
  return `
<a class="skip" href="#main">Aller au contenu</a>
<header class="site-header" id="top">
  <div class="wrap hdr">
    <a class="brand" href="${u('/')}" aria-label="Garage de l’Ille, accueil">${wordmark()}</a>
    <nav class="primary" aria-label="Navigation principale">
      ${nav.map((n) => `<a href="${u(n.href)}" data-nav="${n.href}">${n.label}</a>`).join('')}
    </nav>
    <div class="hdr-end">
      ${statusChip('on-dark hide-lg')}
      <a class="btn btn-call" href="${phoneHref}"><span class="ring">${ico.phone(18)}</span><span class="call-num">${SITE.phone}</span><span class="call-lbl">Appeler</span></a>
      <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu" aria-label="Ouvrir le menu">${ico.menu(24)}</button>
    </div>
  </div>
</header>
<div class="menu" id="menu" hidden>
  <div class="wrap menu-in">
    <nav aria-label="Menu mobile">
      <a href="${u('/')}" data-nav="/">Accueil</a>
      ${nav.map((n, i) => `<a href="${u(n.href)}" data-nav="${n.href}" style="--i:${i + 1}">${n.label}</a>`).join('')}
      <a href="${u('/galerie')}" data-nav="/galerie" style="--i:8">Galerie</a>
      <a href="${u('/faq')}" data-nav="/faq" style="--i:9">Questions fréquentes</a>
      <a href="${u('/devis')}" data-nav="/devis" style="--i:10">Demander un devis</a>
    </nav>
    <div class="menu-foot">${statusChip('on-dark')}<p>${SITE.street}, ${SITE.zip} ${SITE.city}</p></div>
  </div>
</div>`
}

export function footerHTML(): string {
  return `
<footer class="site-footer">
  <div class="wrap foot-grid">
    <div class="foot-brand">
      ${wordmark('big')}
      <p class="foot-tag">${SITE.tagline}.</p>
      <p>${networkLine()}.</p>
      <div class="foot-draw" aria-hidden="false">${shopfrontSVG()}</div>
    </div>
    <div>
      <h2 class="foot-h">Le garage</h2>
      <address>
        ${SITE.street}<br>${SITE.zip} ${SITE.city}<br>
        <a href="${phoneHref}" class="mono">${SITE.phone}</a>
      </address>
      <ul class="foot-links">
        <li><a href="${SITE.gmaps}" target="_blank" rel="noopener">Itinéraire Google Maps ${ico.external(14)}</a></li>
        <li><a href="${SITE.facebook}" target="_blank" rel="noopener">Page Facebook ${ico.external(14)}</a></li>
        <li><a href="${u('/infos-pratiques')}">Accès: métro B, Les Gayeulles, à environ 220 m</a></li>
      </ul>
    </div>
    <div>
      <h2 class="foot-h">Horaires</h2>
      ${hoursTable()}
      <p class="foot-note">Fermé les jours fériés.</p>
    </div>
    <div>
      <h2 class="foot-h">Le site</h2>
      <ul class="foot-links">
        ${nav.map((n) => `<li><a href="${u(n.href)}">${n.label}</a></li>`).join('')}
        <li><a href="${u('/galerie')}">Galerie</a></li>
        <li><a href="${u('/faq')}">Questions fréquentes</a></li>
        <li><a href="${u('/devis')}">Demander un devis</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap foot-legal">
    <p>Garage de l’Ille, ${SITE.legalForm}, SIREN ${SITE.siren}. Site de démonstration: les tarifs, articles et exemples de pannes sont des échantillons.</p>
    <p><a href="${u('/mentions-legales')}">Mentions légales</a> <a href="${u('/confidentialite')}">Confidentialité</a></p>
  </div>
</footer>
<div class="mobile-bar" role="group" aria-label="Contact rapide">
  <a href="${phoneHref}" class="mb-call">${ico.phone(20)}<span>Appeler</span></a>
  <a href="${SITE.gmaps}" target="_blank" rel="noopener">${ico.pin(20)}<span>Itinéraire</span></a>
  <a href="${u('/devis')}" data-nav="/devis">${ico.wrench(20)}<span>Devis</span></a>
</div>`
}

export function initMenu() {
  const btn = document.querySelector<HTMLButtonElement>('.menu-btn')
  const menu = document.getElementById('menu')
  if (!btn || !menu) return
  const set = (open: boolean) => {
    btn.setAttribute('aria-expanded', String(open))
    btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu')
    btn.innerHTML = open ? ico.close(24) : ico.menu(24)
    document.body.classList.toggle('menu-open', open)
    if (open) {
      menu.hidden = false
      requestAnimationFrame(() => menu.classList.add('is-open'))
      stopSmooth()
    } else {
      menu.classList.remove('is-open')
      startSmooth()
      window.setTimeout(() => {
        if (!menu.classList.contains('is-open')) menu.hidden = true
      }, 320)
    }
  }
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'))
  menu.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) set(false)
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      set(false)
      btn.focus()
    }
  })
  window.matchMedia('(min-width: 1100px)').addEventListener('change', (e) => e.matches && set(false))
}
