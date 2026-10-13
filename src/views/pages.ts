// Pages de contenu: notre façon, histoire, avis, infos pratiques.
import type { View } from '../core/router'
import { process, history, team, quartier, brands, access, networkLine } from '../data/misc'
import { cases } from '../data/cases'
import { reviews, themeList, attribution, type ReviewTheme } from '../data/reviews'
import { ratings, headlineRating } from '../data/ratings'
import { SITE } from '../data/site'
import { holidayNote } from '../data/hours'
import { glyph, quartierSVG, shopfrontSVG, wearTag } from '../core/art'
import { gsap, ScrollTrigger } from '../core/motion'
import { reducedMotion, typo } from '../core/dom'
import { ico } from '../core/icons'
import { hoursTable } from '../core/layout'
import { statusChip } from '../core/status'
import { arrowLink, bindChips, callButton, chips, finalCta, miniPair, pageHead } from './ui'
import { quoteButton, photoFig } from './ui'
import { photos, photoBySlug, type PhotoTag } from '../data/photos'

/* ------------------------------ Notre façon ------------------------------ */
export function faconView(): View {
  const principles = [
    ['Expliquer', 'Nous disons ce qui ne va pas avec des mots simples, sans jargon, et ce qui peut attendre.', 'pulley'],
    ['Montrer la pièce', 'La pièce abîmée est gardée et posée devant vous, à côté d’une neuve. Vous la voyez, vous pouvez l’emporter.', 'pad'],
    ['Réparer plutôt que changer', 'Quand une réparation tient la route, nous la proposons d’abord. Remplacer est le dernier recours.', 'filter'],
    ['Vous décidez', 'Un devis gratuit, clair, avec ce qui est urgent et ce qui ne l’est pas. Rien n’est fait sans votre accord.', 'belt'],
  ] as const
  const featured = cases.slice(0, 3)
  const html = `
${pageHead({ title: 'Pièce à l’appui', lead: 'Une expression qui veut dire «&nbsp;avec la preuve en main&nbsp;». Chez nous, la preuve est une pièce: celle qui a lâché, posée sur le comptoir.', crumb: [['Notre façon', '']] })}
<section class="wrap principles" aria-label="Quatre principes">
  ${principles
    .map(
      ([t, d, shape], i) => `<article class="principle" data-reveal><svg viewBox="0 0 100 100" aria-hidden="true">${glyph(shape, i === 1 ? 'worn' : 'new', 50, 50, 84)}${i === 1 ? wearTag(28, 84) : ''}</svg><h2>${t}</h2><p>${d}</p></article>`,
    )
    .join('')}
</section>
<section class="wrap steps" aria-labelledby="steps-h">
  <h2 id="steps-h" data-split>Du coup de téléphone aux clés</h2>
  <ol class="step-list">${process.map((s) => `<li data-reveal><h3>${s.title}</h3><p>${s.text}</p></li>`).join('')}</ol>
</section>
<section class="wrap how-cases" aria-labelledby="hc-h">
  <h2 id="hc-h" data-split>Trois histoires d’établi</h2>
  <div class="case-trio">${featured
    .map(
      (c) => `<article class="case-line" data-reveal>${miniPair(c.family)}<p class="case-tag mono">${c.realStory ? 'Cas réel, garage de Chantepie' : 'Exemple fictif'}</p><h3>${c.title}</h3><p>${c.symptom}</p><p><strong>Montré:</strong> ${c.shown}</p><p><strong>Fait:</strong> ${c.done}</p></article>`,
    )
    .join('')}</div>
</section>
<section class="wrap eco-row" aria-labelledby="eco-h">
  <div class="eco" data-reveal>
    <h2 id="eco-h">${ico.leaf(26)} Garage Propre, Garage Vert</h2>
    <p>Le garage indique suivre la démarche Garage Propre: huiles usagées, liquide de refroidissement, batteries, filtres et pneus sont traités par des filières conformes à la réglementation.</p>
    <p class="fine">Démarche déclarée par le garage. Aucun label officiel n’est affiché ici tant qu’il n’est pas confirmé.</p>
  </div>
  <div class="parts-col" data-reveal>
    <h2>Pièces de marques reconnues</h2>
    <p>Nous travaillons avec des équipementiers que vous connaissez.</p>
    <ul class="brand-list">${brands.map((b) => `<li>${b}</li>`).join('')}</ul>
  </div>
  <div class="loan" data-reveal>
    <h2>${ico.car(26)} Véhicule de remplacement</h2>
    <p>Selon disponibilité et sur demande lors de la prise de rendez-vous. Autre option: la station de métro B Les Gayeulles est à environ 220 m.</p>
  </div>
</section>
<section class="wrap indep" aria-labelledby="indep-h" data-reveal>
  <h2 id="indep-h">Indépendant, toutes marques</h2>
  <p>${networkLine()}. Quand un outil propre à une marque nous manque pour un travail précis, nous vous orientons vers un confrère plutôt que d’improviser.</p>
</section>
${finalCta()}`
  return { html }
}

/* -------------------------------- Histoire -------------------------------- */
export function histoireView(): View {
  const html = `
${pageHead({ title: 'De Chantepie aux Gayeulles', lead: 'Un garage de quartier, deux adresses, la même façon de travailler. Les dates ci-dessous viennent des registres officiels.', crumb: [['Histoire', '']] })}
<section class="wrap timeline" aria-label="Chronologie">
  <svg class="tl-line" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 20 1000"><path id="tl-path" d="M10 0 C 4 120, 16 220, 10 320 S 4 560, 10 680 S 16 880, 10 1000" fill="none" stroke="var(--enseigne)" stroke-width="3" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg>
  <ol class="tl-list">
    ${history
      .map(
        (e) => `<li class="tl-item" data-reveal><p class="tl-date mono">${e.date}</p><h2>${e.title}</h2><p class="tl-place">${e.place}</p><p>${e.text}</p><p class="tl-src">Source: ${e.source}</p></li>`,
      )
      .join('')}
  </ol>
</section>
<section class="wrap atelier-maurepas" aria-labelledby="am-h">
  <div data-reveal>
    <h2 id="am-h" data-split>Les Ateliers de Maurepas</h2>
    <p>Le garage fait partie des Ateliers de Maurepas, des ateliers d’artisans créés avec le renouvellement du quartier. La Ville de Rennes cite l’activité de réparation automobile comme un exemple d’activité productive au cœur de la ville.</p>
    <p class="fine">Source: site de quartier de la Ville de Rennes (rennes-maurepas.fr).</p>
  </div>
  <figure class="sheet shop-sheet" data-reveal>${shopfrontSVG()}<figcaption>Notre atelier, dessiné d’après son allure: bardage noir, enseigne, écran rouille.</figcaption></figure>
</section>
<section class="wrap ph-band" aria-label="L’atelier en images">
  ${['voiture-pont', 'cle-mains', 'pieces-etagere'].map((x, i) => photoFig(photoBySlug(x), i === 0 ? 'ph-tall' : '', i === 0)).join('')}
</section>
<section class="wrap quartier-list" aria-labelledby="ql-h">
  <h2 id="ql-h" data-split>Autour du garage</h2>
  <div class="q-grid wide">
    <figure class="sheet q-map" data-reveal>${quartierSVG(quartier)}</figure>
    <ul class="landmarks">${quartier
      .map((l) => `<li data-reveal><h3>${l.name}</h3><p class="mono lm-d">${l.distance}</p><p>${l.text}</p></li>`)
      .join('')}</ul>
  </div>
</section>
<section class="wrap team" aria-labelledby="team-h">
  <h2 id="team-h" data-split>Deux voix, un même comptoir</h2>
  <div class="team-grid">${team
    .map(
      (t) => `<article class="role" data-reveal><div class="photo-slot" role="img" aria-label="Emplacement réservé à une photo fournie par le garage"><span class="mono">Photo à fournir par le garage</span></div><h3>${t.role}${SITE.CONFIRMED_TEAM_NAMES && t.firstName ? `, ${t.firstName}` : ''}</h3><p>${t.text}</p></article>`,
    )
    .join('')}</div>
</section>
${finalCta('Passez nous voir', `${SITE.street}, ${SITE.zip} ${SITE.city}, à environ 220 m du métro B Les Gayeulles.`)}`
  return {
    html,
    init(root) {
      const path = root.querySelector<SVGPathElement>('#tl-path')
      if (!path || reducedMotion()) return
      path.setAttribute('pathLength', '1')
      path.style.strokeDasharray = '1'
      gsap.fromTo(path, { strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '.timeline', start: 'top 70%', end: 'bottom 70%', scrub: 0.5 } })
    },
  }
}

/* ---------------------------------- Avis ---------------------------------- */
export function avisView(): View {
  const visible = reviews.filter((r) => !r.namesStaff && (r.verified || SITE.SHOW_UNVERIFIED_REVIEWS))
  const html = `
${pageHead({ title: 'Ce que disent nos clients', lead: `${headlineRating.label}. Nous ne publions que des extraits d’avis réellement écrits, sans nom de client.`, crumb: [['Avis', '']] })}
<section class="wrap rating-sum" aria-label="Notes par annuaire">
  <div class="rs-big" data-reveal><p class="mono rs-num">${headlineRating.value}<span>/5</span></p><p>sur Google, plus de 150 avis</p><p class="fine">${headlineRating.seen}, à revérifier avant publication</p></div>
  <ul class="rs-list">${ratings
    .map((r) => `<li data-reveal><strong class="mono">${String(r.rating).replace('.', ',')}/5</strong> <span>${r.platform}, ${r.count}</span><em>${r.via}, relevé le ${new Date(r.seenOn + 'T12:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</em></li>`)
    .join('')}</ul>
</section>
<section class="wrap reviews-all" aria-label="Avis">
  <div class="rv-top" data-reveal>
    ${chips([{ value: '', label: 'Tous' }, ...themeList.map((t) => ({ value: t, label: t }))], 'Thème', '')}
    <p class="count" id="rv-count" aria-live="polite"></p>
  </div>
  <div class="wall-cols" id="rv-list"></div>
  <p class="wall-note">Les avis datés d’avant avril 2023 concernent le garage de Chantepie. Les plus récents ont été écrits après l’installation à Rennes. ${arrowLink(SITE.gmaps, 'Voir la fiche Google')}</p>
</section>
${finalCta('Venez vous faire votre avis', 'Le mieux, c’est encore de passer la porte. Ou de décrocher le téléphone.')}`
  return {
    html,
    init(root) {
      const list = root.querySelector<HTMLElement>('#rv-list')!
      const count = root.querySelector<HTMLElement>('#rv-count')!
      const draw = (theme: string) => {
        const rs = visible.filter((r) => !theme || r.themes.includes(theme as ReviewTheme))
        list.innerHTML = typo(
          rs
            .map((r) => `<figure class="quote"><blockquote><p>« ${r.quote} »</p></blockquote><figcaption>${attribution(r)}</figcaption></figure>`)
            .join(''),
        )
        count.textContent = `${rs.length} extrait${rs.length > 1 ? 's' : ''}`
        if (!reducedMotion()) gsap.from(list.children, { y: 14, opacity: 0, duration: 0.5, ease: 'power3.out', stagger: 0.04, clearProps: 'all' })
      }
      bindChips(root.querySelector<HTMLElement>('.rv-top .chips')!, draw)
      draw('')
    },
  }
}

/* ----------------------------- Infos pratiques ----------------------------- */
export function infosView(): View {
  const html = `
${pageHead({ title: 'Infos pratiques', lead: 'Où nous trouver, quand venir, comment payer, et comment reconnaître l’atelier.', crumb: [['Infos pratiques', '']] })}
<section class="wrap info-grid" aria-label="Coordonnées et horaires">
  <div class="info-card" data-reveal>
    <h2>Adresse</h2>
    <address>${SITE.name}<br>${SITE.street}<br>${SITE.zip} ${SITE.city}</address>
    <p class="q-addr">Quartier ${SITE.quartier}, Rennes</p>
    <p><a class="btn btn-primary" href="${SITE.gmaps}" target="_blank" rel="noopener">${ico.pin(18)} Itinéraire Google Maps</a></p>
    <p>${arrowLink(SITE.osm, 'Voir sur OpenStreetMap')}</p>
  </div>
  <div class="info-card" data-reveal>
    <h2>Horaires</h2>
    <p>${statusChip()}</p>
    ${hoursTable()}
    <p class="fine">${holidayNote}</p>
  </div>
  <div class="info-card" data-reveal>
    <h2>Contact</h2>
    <p>Le téléphone est le moyen le plus rapide.</p>
    <p>${callButton()}</p>
    <p>${quoteButton('Décrire mon problème', 'btn-ghost')}</p>
    <p><a href="${SITE.facebook}" target="_blank" rel="noopener">Page Facebook du garage ${ico.external(14)}</a></p>
  </div>
</section>
<section class="wrap recognize" aria-labelledby="rec-h">
  <div data-reveal>
    <h2 id="rec-h" data-split>Comment nous reconnaître</h2>
    <p>Un atelier bas, au bardage noir, avec une enseigne orange et blanche et un écran de couleur rouille à l’extrémité. Il se trouve avenue de Rochester, dans Les Ateliers de Maurepas.</p>
    <p>Depuis la station de métro Les Gayeulles, comptez environ 220 m à pied.</p>
  </div>
  <figure class="sheet shop-sheet" data-reveal>${shopfrontSVG()}</figure>
</section>
<section class="wrap q-block" aria-labelledby="acc-h">
  <h2 id="acc-h" data-split>Venir au garage</h2>
  <div class="q-grid wide">
    <figure class="sheet q-map" data-reveal>${quartierSVG(quartier)}<figcaption class="q-walk"><span class="mono">≈ 220 m</span> à pied depuis la station Les Gayeulles</figcaption></figure>
    <ul class="access-list">${access
      .map((a) => `<li data-reveal><h3>${a.mode}</h3><p>${a.detail}</p><p class="mono lm-d">${a.distance}</p></li>`)
      .join('')}</ul>
  </div>
</section>
<section class="wrap pay-row" aria-label="Paiement et services">
  <div class="info-card" data-reveal><h2>Paiement</h2><p>Carte bancaire, Visa, Mastercard, espèces et chèque.</p></div>
  <div class="info-card" data-reveal><h2>Accessibilité</h2><p>Stationnement adapté et entrée de plain-pied.</p></div>
  <div class="info-card" data-reveal><h2>Véhicule de remplacement</h2><p>Selon disponibilité, à demander lors de la prise de rendez-vous.</p></div>
</section>
${finalCta('À bientôt au garage', 'Du lundi au vendredi, de 8 h à 12 h et de 13 h à 18 h.')}`
  return { html }
}


/* --------------------------------- Galerie -------------------------------- */
const tagLabel: Record<PhotoTag, string> = {
  atelier: 'Atelier',
  moteur: 'Moteur',
  freinage: 'Freinage',
  pneus: 'Pneus',
  entretien: 'Entretien',
  outils: 'Outillage',
  'pièces': 'Pièces',
  diagnostic: 'Diagnostic',
}

export function galerieView(): View {
  const tags = [...new Set(photos.map((p) => p.tag))]
  const html = `
${pageHead({ title: 'L’atelier en images', lead: 'Freins, moteur, pneus, outillage: le métier en photos. Ce sont des photos d’illustration (Unsplash), pas encore celles du garage.', crumb: [['Galerie', '']] })}
<section class="wrap gal" aria-label="Galerie de photos">
  <div class="gal-filters">${chips([{ value: '', label: 'Tout' }, ...tags.map((t) => ({ value: t, label: tagLabel[t] }))], 'Filtrer les photos', '')}</div>
  <div class="gal-grid">${photos.map((p) => `<div class="gal-item" data-tag="${p.tag}">${photoFig(p, p.height > p.width ? 'ph-tall' : '')}</div>`).join('')}</div>
  <p class="fine gal-note">Photos sous licence Unsplash, crédits sous chaque image. Elles illustrent le métier et ne montrent ni le garage, ni son équipe, ni ses clients.</p>
</section>
${finalCta()}`
  return {
    html,
    init(root) {
      const items = [...root.querySelectorAll<HTMLElement>('.gal-item')]
      bindChips(root.querySelector<HTMLElement>('.gal-filters')!, (v) => {
        items.forEach((el) => (el.hidden = !!v && el.dataset.tag !== v))
        ScrollTrigger.refresh()
      })
    },
  }
}
