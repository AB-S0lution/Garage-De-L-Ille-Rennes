import type { View } from '../core/router'
import { carSVG, glyph, quartierSVG, wearTag } from '../core/art'
import { gsap, ScrollTrigger, DESKTOP_MOTION, TOUCH_MOTION } from '../core/motion'
import { u } from '../core/dom'
import { ico } from '../core/icons'
import { statusChip } from '../core/status'
import { hoursTable } from '../core/layout'
import { SITE } from '../data/site'
import { families } from '../data/families'
import { services } from '../data/services'
import { cases } from '../data/cases'
import { reviews } from '../data/reviews'
import { headlineRating } from '../data/ratings'
import { process, stats, brands, quartier, access } from '../data/misc'
import { etabliHTML, initEtabli } from './etabli'
import { arrowLink, callButton, finalCta, miniPair, quoteCard, photoFig, photoThumb } from './ui'
import { photos, photoBySlug, familyPhoto } from '../data/photos'

const firstSentence = (s: string) => s.split(/(?<=[.!?])\s/)[0]

function heroHTML(): string {
  return `
<section class="hero" aria-labelledby="hero-h">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <h1 id="hero-h" data-split data-split-now>On vous montre la pièce.</h1>
      <p class="hero-sub" data-reveal>${SITE.tagline}. Garage indépendant toutes marques, à 220 m du métro B.</p>
      <div class="hero-cta" data-reveal>
        ${callButton()}
        <a class="btn btn-ghost" href="${u('/atelier')}">Voir l’atelier${ico.arrow(18)}</a>
      </div>
      <p class="hero-status" data-reveal>${statusChip()}</p>
    </div>
    <figure class="sheet hero-sheet" aria-label="Dessin: une voiture et les pièces de frein sorties, la plaquette usée à côté de la neuve">
      ${carSVG({ exploded: true })}
    </figure>
  </div>
</section>`
}

function proofHTML(): string {
  const num = (s: (typeof stats)[number]) => {
    const c = s.count
    if (!c) return s.value
    const group = c.to === 2012 || c.to < 10 ? ' data-group="false"' : ''
    return `<span data-count="${c.to}" data-decimals="${c.decimals ?? 0}"${c.suffix ? ` data-suffix="${c.suffix}"` : ''}${s.id === 'note' ? ' data-suffix="/5"' : ''}${group}>${s.value}</span>`
  }
  return `
<section class="proof" aria-label="Repères">
  <div class="wrap proof-grid">
    ${stats.map((s) => `<div class="proof-item" data-reveal><p class="proof-num mono">${num(s)}</p><p class="proof-lbl">${s.label}</p></div>`).join('')}
  </div>
  <p class="wrap proof-note" data-reveal>${ico.leaf(16)} Démarche Garage Propre, Garage Vert, déclarée par le garage: huiles, liquides, batteries, filtres et pneus partent dans des filières conformes. Note relevée en octobre 2026.</p>
</section>`
}

function parcoursHTML(): string {
  return `
<section class="parcours" aria-labelledby="parcours-h">
  <div class="pin wrap">
    <div class="p-left">
      <h2 id="parcours-h" data-split>Le parcours de votre voiture</h2>
      <ol class="p-list">
        ${process
          .map(
            (s, i) => `<li class="p-step"><span class="p-n mono">${i + 1}/6</span><h3>${s.title}</h3><p>${s.text}</p></li>`,
          )
          .join('')}
      </ol>
      <div class="p-bar" aria-hidden="true"><i></i></div>
    </div>
    <div class="p-right" aria-hidden="true">
      <div class="sheet p-sheet">
        ${carSVG({ exploded: true, label: 'Dessin du parcours' })}
        <span class="pc-scan"></span>
        <div class="pc-ring"><span>${ico.phone(26)}</span></div>
        <div class="pc-devis mono"><strong>Devis</strong><span>Vous décidez</span><i>Gratuit</i></div>
        <div class="pc-bag"><svg viewBox="0 0 120 80">${glyph('pad', 'worn', 40, 40, 70)}${wearTag(66, 30, 'À VOUS')}</svg></div>
      </div>
    </div>
  </div>
</section>`
}

function photoBandHTML(): string {
  const pick = ['mecanicien-moteur', 'frein-gros-plan', 'appoint-huile', 'piles-pneus', 'caisse-outils'].map(photoBySlug)
  return `
<section class="wrap ph-home" aria-labelledby="phh-h">
  <div class="ph-home-head">
    <h2 id="phh-h" data-split>Le métier, de près.</h2>
    <p data-reveal>Disques, huile, pneus, outillage: ce qui passe sur nos ponts chaque semaine. Photos d’illustration, en attendant celles de l’atelier.</p>
  </div>
  <div class="ph-bento">${pick.map((p, i) => photoFig(p, `b${i}`, i === 0)).join('')}</div>
</section>`
}

function photoStripHTML(): string {
  const strip = photos.slice(10, 22)
  return `
<section class="ph-strip" aria-label="Photos d’illustration de l’atelier">
  <div class="ph-strip-track">${[...strip, ...strip].map((p, i) => `<a class="ph-strip-it" href="${u('/galerie')}"${i >= strip.length ? ' aria-hidden="true" tabindex="-1"' : ''}>${photoThumb(p)}<span class="sr-only">${p.alt}</span></a>`).join('')}</div>
  <p class="wrap ph-strip-more">${arrowLink(u('/galerie'), 'Toute la galerie')}</p>
</section>`
}

function famillesHTML(): string {
  const spans = ['s7', 's5', 's5', 's7', 's4', 's4', 's4']
  return `
<section class="familles wrap" aria-labelledby="fam-h">
  <h2 id="fam-h" data-split>Sept familles de travaux, une seule façon de faire.</h2>
  <div class="fam-grid">
    ${families
      .map((f, i) => {
        const n = services.filter((s) => s.family === f.slug).length
        return `<a class="fam-card ${spans[i]}" href="${u('/atelier/' + f.slug)}" data-reveal>
          ${photoThumb(familyPhoto(f.slug, 1), 'fam-ph')}
          <div class="fam-art">${miniPair(f.slug)}</div>
          <div class="fam-txt"><h3>${f.name}</h3><p>${firstSentence(f.intro)}</p><span class="fam-meta mono">${n} prestations</span></div>
          <span class="fam-go" aria-hidden="true">${ico.arrow(22)}</span>
        </a>`
      })
      .join('')}
  </div>
</section>`
}

function marqueeHTML(): string {
  const items = brands.map((b) => `<li>${b}</li>`).join('')
  return `
<section class="brands" aria-labelledby="brands-h">
  <div class="wrap"><h2 id="brands-h" class="brands-h" data-reveal>Des pièces de marques reconnues</h2></div>
  <div class="marquee" data-reveal>
    <ul class="marquee-row" aria-label="Marques de pièces utilisées">${items}</ul>
    <ul class="marquee-row" aria-hidden="true">${items}</ul>
  </div>
</section>`
}

function casesHTML(): string {
  return `
<section class="cases-pan" aria-labelledby="cases-h">
  <div class="cases-wrap">
    <div class="cases-head wrap">
      <h2 id="cases-h" data-split>Pièces sur l’établi</h2>
      <p class="lead" data-reveal>Des cas types, racontés comme au comptoir: ce que le client entendait, ce que nous avons trouvé, ce que nous avons montré. Les exemples sont fictifs, sauf un.</p>
    </div>
    <p class="swipe-hint mono" aria-hidden="true">Faites glisser pour voir les ${cases.length} cas ${ico.arrow(16)}</p>
    <ul class="cases-track" tabindex="0" aria-label="Cas d’atelier, à faire défiler">
      ${cases
        .map(
          (c) => `<li class="case-card${c.realStory ? ' is-real' : ''}">
        <div class="case-art">${miniPair(c.family)}</div>
        <p class="case-tag mono">${c.realStory ? 'Cas réel, garage de Chantepie' : 'Exemple fictif'}</p>
        <h3>${c.title}</h3>
        <p class="case-car">${c.car}</p>
        <dl>
          <dt>Le client disait</dt><dd>${c.symptom}</dd>
          <dt>Nous avons trouvé</dt><dd>${c.found}</dd>
          <dt>La pièce montrée</dt><dd>${c.shown}</dd>
          <dt>Ce que nous avons fait</dt><dd>${c.done}${c.notDone ? ' ' + c.notDone : ''}</dd>
        </dl>
      </li>`,
        )
        .join('')}
    </ul>
  </div>
</section>`
}

function reviewsHTML(): string {
  const ids = [3, 5, 10, 9, 15, 1]
  const picked = ids.map((id) => reviews.find((r) => r.id === id)!).filter(Boolean)
  return `
<section class="wall wrap" aria-labelledby="wall-h">
  <div class="wall-head">
    <h2 id="wall-h" data-split>« Vous pouvez y aller les yeux fermés »</h2>
    <p class="wall-rate" data-reveal><strong class="mono">${headlineRating.value}/5</strong> sur Google, plus de 150 avis. Les mots qui reviennent: honnête, confiance, les yeux fermés.</p>
    ${arrowLink(u('/avis'), 'Lire les avis')}
  </div>
  <div class="wall-cols">${picked.map(quoteCard).join('')}</div>
  <p class="wall-note" data-reveal>Extraits d’avis Google. Les avis antérieurs à avril 2023 concernent le garage de Chantepie.</p>
</section>`
}

function teaserHTML(): string {
  return `
<section class="teaser" aria-labelledby="teaser-h">
  <div class="wrap teaser-grid">
    <div>
      <h2 id="teaser-h" data-split>De Chantepie aux Gayeulles</h2>
      <p data-reveal>Né à Chantepie en 2012, le garage s’est installé en avril 2023 rue de Jinan, à Rennes, à deux pas du métro B. Même façon de travailler, nouveau quartier.</p>
      <div data-reveal>${arrowLink(u('/histoire'), 'Lire l’histoire du garage')}</div>
    </div>
    <div class="river" aria-hidden="true">
      <svg viewBox="0 0 440 150"><path data-draw d="M24 118 C110 118 120 40 220 56 S350 30 416 34" fill="none" stroke="var(--enseigne)" stroke-width="3" stroke-linecap="round"/>
      <circle cx="24" cy="118" r="7"/><circle cx="416" cy="34" r="7"/></svg>
      <p class="r-a mono">2012<br><span>Chantepie</span></p>
      <p class="r-b mono">avril 2023<br><span>rue de Jinan, Rennes</span></p>
    </div>
  </div>
</section>`
}

function quartierHTML(): string {
  return `
<section class="quartier wrap" aria-labelledby="q-h">
  <h2 id="q-h" data-split>À deux pas du métro B</h2>
  <div class="q-grid">
    <figure class="sheet q-map" data-reveal>
      ${quartierSVG(quartier)}
      <figcaption class="q-walk"><span class="mono">≈ <span data-count="220" data-suffix=" m" data-group="false">220 m</span></span> à pied jusqu’à la station Les Gayeulles</figcaption>
    </figure>
    <div class="q-side">
      <div class="q-hours" data-reveal>
        <p>${statusChip()}</p>
        ${hoursTable()}
        <p class="q-note">Fermé samedi, dimanche et jours fériés.</p>
      </div>
      <ul class="q-access" data-reveal>
        ${access.slice(0, 3).map((a) => `<li><strong>${a.mode}</strong> ${a.detail}, ${a.distance}</li>`).join('')}
      </ul>
      <p class="q-addr" data-reveal>${SITE.street}, ${SITE.zip} ${SITE.city}</p>
      <div class="q-actions" data-reveal>
        <a class="btn btn-primary" href="${SITE.gmaps}" target="_blank" rel="noopener">${ico.pin(18)} Itinéraire</a>
        ${arrowLink(u('/infos-pratiques'), 'Toutes les infos pratiques')}
      </div>
    </div>
  </div>
</section>`
}

export function homeView(): View {
  const html =
    heroHTML() + proofHTML() + photoBandHTML() + etabliHTML() + parcoursHTML() + famillesHTML() + photoStripHTML() + marqueeHTML() + casesHTML() + reviewsHTML() + teaserHTML() + quartierHTML() + finalCta()
  return {
    html,
    init(root) {
      // Héros: les pièces de frein sortent une fois la voiture dessinée
      const ex = root.querySelectorAll('.hero .ex-part')
      if (ex.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Sur téléphone: course plus courte et départ plus tôt (le dessin est petit, l'attente se voit)
        const phone = window.matchMedia('(max-width: 599px)').matches
        gsap.from(ex, { y: phone ? 60 : 100, opacity: 0, duration: phone ? 0.9 : 1.1, ease: 'expo.out', stagger: phone ? 0.12 : 0.16, delay: phone ? 0.9 : 1.5 })
        gsap.from('.hero .callout', { opacity: 0, y: 6, duration: 0.6, stagger: 0.12, delay: phone ? 1.6 : 2.4 })
      }

      initEtabli(root)

      const mm = gsap.matchMedia()

      // Parcours: une voiture, six étapes, défilement épinglé et "scrubbé"
      mm.add(DESKTOP_MOTION, () => {
        const sec = root.querySelector<HTMLElement>('.parcours')!
        sec.classList.add('is-pinned')
        const steps = gsap.utils.toArray<HTMLElement>('.p-step', sec)
        const parts = gsap.utils.toArray<SVGGElement>('.ex-part', sec)
        const sheet = sec.querySelector<HTMLElement>('.p-sheet')!
        gsap.set(steps, { opacity: 0, y: 30 })
        gsap.set(steps[0], { opacity: 1, y: 0 })
        gsap.set(parts, { y: 90, opacity: 0 })
        gsap.set('.pc-devis, .pc-bag, .pc-ring', { opacity: 0 })
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: { trigger: sec, start: 'top top', end: () => `+=${window.innerHeight * 5}`, pin: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true },
        })
        steps.forEach((s, i) => {
          if (i === 0) return
          tl.to(steps[i - 1], { opacity: 0, y: -30, duration: 0.3 }, i - 0.3).fromTo(s, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.3 }, i - 0.05)
        })
        tl.fromTo('.p-bar i', { scaleX: 0.02 }, { scaleX: 1, duration: 5.6 }, 0)
        tl.fromTo('.pc-ring', { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.3 }, 0.1).to('.pc-ring', { opacity: 0, scale: 1.3, duration: 0.4 }, 0.8)
        tl.fromTo('.pc-scan', { x: 0, opacity: 0 }, { x: () => sheet.clientWidth - 6, opacity: 1, duration: 1 }, 1).to('.pc-scan', { opacity: 0, duration: 0.1 }, 2)
        tl.to(parts, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' }, 2)
        tl.fromTo('.pc-devis', { x: 70, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, 3.1).to('.pc-devis', { x: 70, opacity: 0, duration: 0.4 }, 4.1)
        tl.to(parts, { y: 90, opacity: 0, duration: 0.8, stagger: 0.05, ease: 'power2.in' }, 4.05)
        tl.fromTo('.pc-bag', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 5.05)
        return () => {
          sec.classList.remove('is-pinned')
        }
      })

      // L'établi des cas: défilement horizontal épinglé
      mm.add(DESKTOP_MOTION, () => {
        const wrap = root.querySelector<HTMLElement>('.cases-wrap')!
        const track = root.querySelector<HTMLElement>('.cases-track')!
        const dist = () => Math.max(0, track.scrollWidth - window.innerWidth + 64)
        root.querySelector('.cases-pan')!.classList.add('is-pinned')
        gsap.to(track, {
          x: () => -dist(),
          ease: 'none',
          scrollTrigger: { trigger: wrap, start: 'top top', end: () => `+=${dist()}`, pin: true, scrub: 0.8, anticipatePin: 1, invalidateOnRefresh: true },
        })
        return () => root.querySelector('.cases-pan')?.classList.remove('is-pinned')
      })

      // Téléphones et tablettes tactiles: pas d'épinglage. Les étapes montent une à une,
      // les pièces sortent de la voiture au fil du défilement (scrub court, sans pin),
      // et les cas glissent au doigt avec une entrée en cascade.
      mm.add(TOUCH_MOTION, () => {
        const sec = root.querySelector<HTMLElement>('.parcours')
        if (!sec) return
        gsap.utils.toArray<HTMLElement>('.p-step', sec).forEach((s) =>
          gsap.from(s, { y: 22, opacity: 0, duration: 0.55, ease: 'power3.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: s, start: 'top 90%', once: true } }),
        )
        const sheet = sec.querySelector<HTMLElement>('.p-sheet')
        const parts = gsap.utils.toArray<SVGGElement>('.ex-part', sec)
        if (sheet && parts.length)
          gsap.fromTo(parts, { y: 60, opacity: 0.15 }, { y: 0, opacity: 1, stagger: 0.12, ease: 'none', scrollTrigger: { trigger: sheet, start: 'top 85%', end: 'center 50%', scrub: 0.4 } })
        const cards = gsap.utils.toArray<HTMLElement>('.case-card', root).slice(0, 3)
        if (cards.length)
          gsap.from(cards, { x: 48, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08, clearProps: 'transform,opacity', scrollTrigger: { trigger: '.cases-track', start: 'top 85%', once: true } })
      })

      // Plan du quartier: la ligne vers le métro se trace
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const line = root.querySelector<SVGPathElement>('#walk-line')
        if (!line) return
        line.removeAttribute('stroke-dasharray')
        line.setAttribute('pathLength', '1')
        gsap.fromTo(line, { strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '.q-map', start: 'top 80%', end: 'center 50%', scrub: true } })
      })

      return () => {
        mm.revert()
        ScrollTrigger.refresh()
      }
    },
  }
}
