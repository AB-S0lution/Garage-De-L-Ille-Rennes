// Briques d'interface partagées par les vues.
import { SITE, phoneHref } from '../data/site'
import { ico } from '../core/icons'
import { glyph, partSVG, wearTag } from '../core/art'
import { esc, u } from '../core/dom'
import { attribution, type Review } from '../data/reviews'
import type { Family } from '../data/families'
import type { PartShape } from '../data/parts'
import type { FamilySlug } from '../data/services'
import { PHOTO_NOTE, type Photo } from '../data/photos'

export const PRICE_NOTE = 'Tarif indicatif (exemple), devis gratuit'

export function pageHead(o: { title: string; lead?: string; crumb?: Array<[string, string]>; kicker?: string }): string {
  const crumb = o.crumb
    ? `<nav class="crumb" aria-label="Fil d’Ariane"><a href="${u('/')}">Accueil</a>${o.crumb
        .map(([l, h]) => (h ? `<span aria-hidden="true">/</span><a href="${u(h)}">${l}</a>` : `<span aria-hidden="true">/</span><span aria-current="page">${l}</span>`))
        .join('')}</nav>`
    : ''
  return `<header class="page-head wrap">
    ${crumb}
    ${o.kicker ? `<p class="kicker">${o.kicker}</p>` : ''}
    <h1 data-split data-split-now>${o.title}</h1>
    ${o.lead ? `<p class="lead" data-reveal>${o.lead}</p>` : ''}
  </header>`
}

export const callButton = (label = 'Appeler le garage', cls = '') =>
  `<a class="btn btn-primary ${cls}" href="${phoneHref}"><span class="ring">${ico.phone(18)}</span><span class="lbl">${label}</span><span class="mono num">${SITE.phone}</span></a>`

export const quoteButton = (label = 'Demander un devis', cls = 'btn-ghost') =>
  `<a class="btn ${cls}" href="${u('/devis')}">${label}${ico.arrow(18)}</a>`

export function finalCta(title = 'Un bruit, un voyant, un doute ?', text = 'Décrivez-nous le problème. Nous vous rappelons, nous vous disons ce qu’il faut vraiment faire, et le devis est gratuit.'): string {
  return `<section class="final-cta" aria-labelledby="fcta">
    <div class="wrap fc-in">
      <div>
        <h2 id="fcta" data-split>${title}</h2>
        <p data-reveal>${text}</p>
      </div>
      <div class="fc-actions" data-reveal>
        ${callButton()}
        ${quoteButton('Décrire mon problème', 'btn-light')}
        <p class="fc-hours">Du lundi au vendredi, de 8 h à 12 h et de 13 h à 18 h.</p>
      </div>
    </div>
  </section>`
}

export function quoteCard(r: Review): string {
  return `<figure class="quote" data-reveal>
    <blockquote><p>« ${esc(r.quote)} »</p></blockquote>
    <figcaption>${attribution(r)}</figcaption>
  </figure>`
}

const baseName = (l: string) => l.replace(/ (usé|usée|glacée|voilé|voilée|craquelée|colmaté|colmatée|saturé|saturée|encrassé|encrassée|fuyard|fendu|fendue|poreuse|fatigué|fatiguée|bruyant|jouée)\b.*$/i, '')

/** Établi: les pièces d'une famille, côte à côte, avec bascule usée / neuve. */
export function benchHTML(f: Family, state: 'worn' | 'new'): string {
  return f.bench
    .map((p) => {
      const worn = state === 'worn'
      return `<li class="bench-part ${worn ? 'is-worn' : 'is-new'}">
        <svg viewBox="0 0 120 130" role="img" aria-label="${esc(p.label)}, ${worn ? 'usée' : 'neuve'}" class="bp-svg">
          ${glyph(p.shape, state, 60, 62, 104)}
          ${worn && p.tagged ? wearTag(40, 106) : ''}
        </svg>
        <span class="bp-name mono">${esc(worn ? p.label : baseName(p.label))}</span>
        <span class="bp-note">${worn ? esc(p.wornNote) : 'neuve, propre, aux cotes'}</span>
      </li>`
    })
    .join('')
}

export function stateToggle(): string {
  return `<div class="seg" role="group" aria-label="État de la pièce">
    <button type="button" class="seg-b is-on" data-state="worn" aria-pressed="true">Pièce usée</button>
    <button type="button" class="seg-b" data-state="new" aria-pressed="false">Pièce neuve</button>
  </div>`
}

/** Mini glyphe de famille (une pièce usée + une neuve) pour les cartes. */
const familyShape: Record<FamilySlug, PartShape> = {
  entretien: 'filter',
  freinage: 'pad',
  'moteur-distribution': 'belt',
  'embrayage-boite': 'clutch',
  'echappement-fap': 'filter',
  'pneus-suspension': 'tyre',
  'hybride-gpl': 'plug',
}
export const shapeOf = (s: FamilySlug) => familyShape[s]
export const miniPair = (s: FamilySlug) =>
  `<span class="pair" aria-hidden="true"><span class="pw">${partSVG(familyShape[s], 'worn', '')}</span><span class="pn">${partSVG(familyShape[s], 'new', '')}</span></span>`

export function chips(items: Array<{ value: string; label: string }>, name: string, selected = ''): string {
  return `<div class="chips" role="group" aria-label="${name}">${items
    .map((i) => `<button type="button" class="chip${i.value === selected ? ' is-on' : ''}" data-value="${esc(i.value)}" aria-pressed="${i.value === selected}">${esc(i.label)}</button>`)
    .join('')}</div>`
}

export const arrowLink = (href: string, label: string, cls = '') => `<a class="arrow-link ${cls}" href="${href}">${label}${ico.arrow(18)}</a>`

/** Écoute des puces: renvoie la valeur choisie. */
export function bindChips(root: HTMLElement, onPick: (v: string) => void) {
  root.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>('.chip')
    if (!b || !root.contains(b)) return
    root.querySelectorAll('.chip').forEach((c) => {
      c.classList.toggle('is-on', c === b)
      c.setAttribute('aria-pressed', String(c === b))
    })
    onPick(b.dataset.value || '')
  })
}

/* Photos d'illustration (Unsplash), jamais présentées comme celles du garage */
export function photoFig(p: Photo, cls = '', caption = true): string {
  return `<figure class="ph ${cls}" data-reveal>
    <img src="${p.src}" alt="${esc(p.alt)}" width="${p.width}" height="${p.height}" loading="lazy" decoding="async">
    ${caption ? `<figcaption class="ph-cap mono">${PHOTO_NOTE} · <a href="${p.url}" target="_blank" rel="noopener">${esc(p.credit)}, Unsplash</a></figcaption>` : ''}
  </figure>`
}
/** Bande fine de photos (pages FAQ, légales, avis…): légende sur la première seulement. */
export function photoSlim(list: Photo[], label: string, cls = ''): string {
  return `<section class="wrap ph-slim ${cls}" aria-label="${esc(label)}">${list.map((p, i) => photoFig(p, '', i === 0)).join('')}</section>`
}
export const photoThumb = (p: Photo, cls = '') =>
  `<span class="ph-thumb ${cls}"><img src="${p.src}" alt="" width="${p.width}" height="${p.height}" loading="lazy" decoding="async"><span class="ph-tag mono">${PHOTO_NOTE}</span></span>`
