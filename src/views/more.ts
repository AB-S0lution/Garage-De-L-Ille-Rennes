// Conseils (blog), FAQ, devis, pages légales, 404.
import type { View } from '../core/router'
import { posts, type Post } from '../data/posts'
import { faq } from '../data/faq'
import { symptoms } from '../data/symptoms'
import { makes } from '../data/misc'
import { SITE, phoneHref } from '../data/site'
import { carSVG } from '../core/art'
import { gsap } from '../core/motion'
import { esc, frDate, norm, reducedMotion, typo, u } from '../core/dom'
import { ico } from '../core/icons'
import { arrowLink, bindChips, callButton, chips, finalCta, pageHead, photoThumb, photoFig, photoSlim } from './ui'
import { photos, photoBySlug } from '../data/photos'

const postPhoto: Record<string, string> = {
  Quartier: 'suv-atelier',
  Entretien: 'appoint-huile',
  Moteur: 'bloc-moteur',
  Pneus: 'sculpture-pneu',
  Freinage: 'systeme-freinage',
  'Hybride et GPL': 'capot-ouvert',
  'Contrôle technique': 'voiture-pont',
}
const photoForPost = (p: Post) => {
  const i = posts.indexOf(p)
  return postPhoto[p.category] && posts.findIndex((x) => x.category === p.category) === i ? photoBySlug(postPhoto[p.category]) : photos[(i * 7 + 3) % photos.length]
}

/* -------------------------------- Conseils -------------------------------- */
const card = (p: Post, big = false) => `<article class="post-card${big ? ' big' : ''}" data-reveal>
  <a href="${u('/conseils/' + p.slug)}">
    ${photoThumb(photoForPost(p), 'post-ph')}
    <p class="post-meta mono">${p.category}<span> ${frDate(p.date)}</span></p>
    <h2>${p.title}</h2>
    <p>${p.excerpt}</p>
    <span class="post-read mono">${p.readMinutes} min de lecture ${ico.arrow(16)}</span>
  </a>
</article>`

export function conseilsView(): View {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date))
  const cats = Array.from(new Set(sorted.map((p) => p.category)))
  const html = `
${pageHead({ title: 'Conseils du garage', lead: 'Ce que nous répétons au comptoir, écrit une bonne fois. Des repères généraux: le carnet d’entretien de votre voiture reste la référence.', crumb: [['Conseils', '']] })}
<section class="wrap posts" aria-label="Articles">
  <div data-reveal>${chips([{ value: '', label: 'Tous' }, ...cats.map((c) => ({ value: c, label: c }))], 'Catégorie', '')}</div>
  <div class="post-grid" id="post-grid"></div>
</section>
${finalCta('Une question précise ?', 'Un article ne remplace pas un regard sur votre voiture. Appelez-nous.')}`
  return {
    html,
    init(root) {
      const grid = root.querySelector<HTMLElement>('#post-grid')!
      const draw = (cat: string) => {
        const l = sorted.filter((p) => !cat || p.category === cat)
        grid.innerHTML = typo(l.map((p, i) => card(p, i === 0 && !cat)).join(''))
        if (!reducedMotion()) gsap.from(grid.children, { y: 16, opacity: 0, duration: 0.5, ease: 'power3.out', stagger: 0.04, clearProps: 'all' })
      }
      bindChips(root.querySelector<HTMLElement>('.chips')!, draw)
      draw('')
    },
  }
}

function bodyHTML(body: string[]): string {
  let out = ''
  let list: string[] = []
  const flush = () => {
    if (list.length) out += `<ul class="ticks big">${list.map((x) => `<li>${x}</li>`).join('')}</ul>`
    list = []
  }
  for (const para of body) {
    if (para.startsWith('## ')) {
      flush()
      out += `<h2>${para.slice(3)}</h2>`
    } else if (para.startsWith('- ')) list.push(para.slice(2))
    else {
      flush()
      out += `<p>${para}</p>`
    }
  }
  flush()
  return out
}

export function postView(slug: string): View | null {
  const p = posts.find((x) => x.slug === slug)
  if (!p) return null
  const others = posts.filter((x) => x.slug !== p.slug && (x.category === p.category || x.family === p.family)).slice(0, 2)
  const more = (others.length >= 2 ? others : [...others, ...posts.filter((x) => x.slug !== p.slug && !others.includes(x))]).slice(0, 2)
  const html = `
${pageHead({ title: p.title, lead: p.excerpt, crumb: [['Conseils', '/conseils'], [p.category, '']] })}
<div class="wrap post-hero-ph">${photoFig(photoForPost(p), 'ph-wide')}</div>
<article class="wrap article">
  <p class="post-meta mono" data-reveal>${frDate(p.date)}<span> ${p.readMinutes} min de lecture, ${p.author}</span></p>
  <div class="prose" data-reveal>${bodyHTML(p.body)}</div>
  <aside class="note-box" data-reveal><p><strong>Bon à savoir.</strong> Ces repères sont généraux. Pour votre voiture, fiez-vous au carnet d’entretien du constructeur, et n’hésitez pas à nous poser la question.</p>${callButton('Appeler le garage')}</aside>
</article>
<section class="wrap more-posts" aria-labelledby="mp-h">
  <h2 id="mp-h">À lire aussi</h2>
  <div class="post-grid two">${more.map((x) => card(x)).join('')}</div>
  <p>${arrowLink(u('/conseils'), 'Tous les conseils')}</p>
</section>
${finalCta()}`
  return { html }
}

/* ----------------------------------- FAQ ----------------------------------- */
export function faqView(): View {
  const groups = Array.from(new Set(faq.map((f) => f.group)))
  const html = `
${pageHead({ title: 'Questions fréquentes', lead: 'Rendez-vous, devis, véhicule de remplacement, hybrides et GPL: les réponses courtes. Pour le reste, appelez-nous.', crumb: [['Questions', '']] })}
${photoSlim(['controle-moteur', 'caisse-outils', 'piles-pneus'].map(photoBySlug), 'Au comptoir et à l’atelier, photos d’illustration')}
<section class="wrap faq-wrap" aria-label="Questions fréquentes">
  <label class="search" for="fq" data-reveal>${ico.search(20)}<span class="sr-only">Chercher dans les questions</span><input id="fq" type="search" placeholder="Chercher : devis, paiement…" autocomplete="off" /></label>
  <p class="count" id="fcount" aria-live="polite"></p>
  <div id="faq-groups">${groups
    .map(
      (g) => `<section class="faq-group" data-group="${esc(g)}"><h2>${g}</h2><div class="faq-list">${faq
        .filter((f) => f.group === g)
        .map((f) => `<details class="faq-item" id="${f.id}" data-q="${esc(norm(f.q + ' ' + f.a))}"><summary>${f.q}${ico.plus(20)}</summary><p>${f.a}</p></details>`)
        .join('')}</div></section>`,
    )
    .join('')}</div>
  <p class="none" id="fnone" hidden>Aucune question ne correspond. ${callButton('Appeler le garage')}</p>
</section>
${finalCta('Votre question n’y est pas ?')}`
  return {
    html,
    init(root) {
      const input = root.querySelector<HTMLInputElement>('#fq')!
      const items = Array.from(root.querySelectorAll<HTMLDetailsElement>('.faq-item'))
      const count = root.querySelector<HTMLElement>('#fcount')!
      const none = root.querySelector<HTMLElement>('#fnone')!
      const run = () => {
        const t = norm(input.value.trim())
        let n = 0
        items.forEach((d) => {
          const hit = !t || (d.dataset.q || '').includes(t)
          d.hidden = !hit
          if (hit) n++
        })
        root.querySelectorAll<HTMLElement>('.faq-group').forEach((g) => (g.hidden = !g.querySelector('.faq-item:not([hidden])')))
        count.textContent = `${n} question${n > 1 ? 's' : ''}`
        none.hidden = n > 0
      }
      input.addEventListener('input', run)
      run()
      if (location.hash) {
        const d = root.querySelector<HTMLDetailsElement>(location.hash)
        if (d) d.open = true
      }
    },
  }
}

/* ----------------------------------- Devis ----------------------------------- */
export function devisView(): View {
  const html = `
${pageHead({ title: 'Décrivez votre problème', lead: 'Marque, modèle, ce que vous entendez ou voyez. Ce site n’envoie rien: il prépare un message que vous pouvez nous lire au téléphone ou nous écrire.', crumb: [['Devis', '']] })}
<section class="wrap devis" aria-label="Formulaire de devis">
  <form id="devis-form" class="form" novalidate>
    <div class="grid2">
      <div class="field"><label for="f-make">Marque</label><input id="f-make" name="make" list="makes" autocomplete="off" required aria-describedby="e-make"><datalist id="makes">${makes.map((m) => `<option value="${m}">`).join('')}</datalist><p class="err" id="e-make" hidden>Indiquez la marque de votre voiture.</p></div>
      <div class="field"><label for="f-model">Modèle</label><input id="f-model" name="model" autocomplete="off"></div>
      <div class="field"><label for="f-year">Année</label><input id="f-year" name="year" inputmode="numeric" maxlength="4" autocomplete="off"></div>
      <div class="field"><label for="f-km">Kilométrage</label><input id="f-km" name="km" inputmode="numeric" autocomplete="off"></div>
      <div class="field"><label for="f-en">Énergie</label><select id="f-en" name="energy"><option>Essence</option><option>Diesel</option><option>Hybride</option><option>GPL</option><option>Je ne sais pas</option></select></div>
      <div class="field"><label for="f-name">Prénom (facultatif)</label><input id="f-name" name="name" autocomplete="given-name"></div>
    </div>
    <fieldset class="field"><legend>Ce que vous constatez</legend>
      <div class="chips multi" id="sym-pick">${symptoms.slice(0, 14).map((s) => `<label class="chip-check"><input type="checkbox" value="${esc(s.label)}"><span>${esc(s.label)}</span></label>`).join('')}</div>
    </fieldset>
    <div class="field"><label for="f-msg">Dites-nous en plus</label><textarea id="f-msg" name="msg" rows="5" placeholder="Depuis quand, dans quelles conditions, ce que vous avez déjà essayé."></textarea></div>
    <button class="btn btn-primary" type="submit">Préparer mon message</button>
  </form>
  <aside class="devis-out" id="devis-out" aria-live="polite" hidden>
    <h2>Votre message est prêt</h2>
    <pre class="msg mono" id="msg-text"></pre>
    <p>Le plus rapide: appelez et lisez-le nous.</p>
    <div class="res-actions">${callButton()}${SITE.CONFIRMED_EMAIL ? `<a class="btn btn-ghost" id="mailto" href="#">${ico.mail(18)} Envoyer par courriel</a>` : ''}<button type="button" class="btn btn-ghost" id="copy">Copier le texte</button></div>
    <p class="fine" id="copy-ok" hidden>Texte copié.</p>
  </aside>
  <aside class="devis-side" data-reveal>
    ${photoThumb(photoBySlug('controle-moteur'), 'card-ph')}
    <h2>Avant de nous écrire</h2>
    <ul class="ticks"><li>Le devis est gratuit.</li><li>Nous cherchons la cause avant de parler de pièces.</li><li>Rien n’est fait sans votre accord.</li></ul>
    <p>Fermé le week-end: un message laissé le samedi sera lu le lundi.</p>
    <a class="arrow-link" href="${phoneHref}">${SITE.phone}${ico.arrow(18)}</a>
  </aside>
</section>`
  return {
    html,
    init(root) {
      const form = root.querySelector<HTMLFormElement>('#devis-form')!
      const out = root.querySelector<HTMLElement>('#devis-out')!
      const text = root.querySelector<HTMLElement>('#msg-text')!
      const make = root.querySelector<HTMLInputElement>('#f-make')!
      const err = root.querySelector<HTMLElement>('#e-make')!
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        const fd = new FormData(form)
        if (!String(fd.get('make') || '').trim()) {
          err.hidden = false
          make.setAttribute('aria-invalid', 'true')
          make.focus()
          return
        }
        err.hidden = true
        make.removeAttribute('aria-invalid')
        const sym = Array.from(root.querySelectorAll<HTMLInputElement>('#sym-pick input:checked')).map((i) => i.value)
        const lines = [
          `Bonjour${fd.get('name') ? ', ici ' + fd.get('name') : ''},`,
          `Voiture: ${fd.get('make')} ${fd.get('model') || ''}${fd.get('year') ? ' (' + fd.get('year') + ')' : ''}, ${String(fd.get('energy')).toLowerCase()}${fd.get('km') ? ', ' + fd.get('km') + ' km' : ''}.`,
          sym.length ? `Je constate: ${sym.join('; ')}.` : '',
          fd.get('msg') ? `${fd.get('msg')}` : '',
          'Pouvez-vous me rappeler pour un devis ? Merci.',
        ].filter(Boolean)
        const msg = lines.join('\n')
        text.textContent = msg
        out.hidden = false
        const mailto = root.querySelector<HTMLAnchorElement>('#mailto')
        if (mailto && SITE.CONFIRMED_EMAIL) mailto.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Demande de devis')}&body=${encodeURIComponent(msg)}`
        if (!reducedMotion()) gsap.from(out, { y: 16, opacity: 0, duration: 0.5, ease: 'power3.out' })
        out.scrollIntoView({ block: 'nearest', behavior: reducedMotion() ? 'auto' : 'smooth' })
      })
      root.querySelector('#copy')?.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(text.textContent || '')
          root.querySelector<HTMLElement>('#copy-ok')!.hidden = false
        } catch {
          /* le presse-papiers peut être refusé: le texte reste sélectionnable */
        }
      })
    },
  }
}

/* ---------------------------------- Légal ---------------------------------- */
export function legalView(): View {
  const html = `
${pageHead({ title: 'Mentions légales', crumb: [['Mentions légales', '']] })}
${photoSlim(['pieces-etagere', 'reserve-pieces', 'piece-etabli'].map(photoBySlug), 'Photos d’illustration', 'is-short')}
<section class="wrap legal">
  <h2>Éditeur</h2>
  <p>${SITE.legalName}, ${SITE.legalForm}, SIREN ${SITE.siren}, SIRET ${SITE.siret}, code NAF ${SITE.naf}. Siège: ${SITE.street}, ${SITE.zip} ${SITE.city}. Téléphone: ${SITE.phone}.</p>
  <h2>Nature du site</h2>
  <p>Ce site est une maquette de démonstration. Les tarifs, les articles de conseils, les exemples de pannes, les listes de contrôle et les descriptions de prestations sont des échantillons à remplacer par les informations propres au garage. Les avis cités sont des extraits d’avis publics, sans nom de client.</p>
  <h2>Hébergement</h2>
  <p>Site statique hébergé sur GitHub Pages.</p>
  <h2>Propriété intellectuelle</h2>
  <p>Les dessins de ce site sont des créations originales. Les photographies sont des photos d’illustration issues d’Unsplash (licence Unsplash), créditées sous chaque image: elles ne montrent ni le garage, ni son équipe, ni ses clients. Aucun logo de marque n’est utilisé. Les noms de marques de pièces et de voitures sont cités à titre indicatif.</p>
  <h2>Responsable de la publication</h2>
  <p>À renseigner avec le gérant du garage avant la mise en ligne définitive.</p>
</section>`
  return { html }
}

export function privacyView(): View {
  const html = `
${pageHead({ title: 'Confidentialité', crumb: [['Confidentialité', '']] })}
${photoSlim(['caisse-outils', 'cle-mains', 'pieces-vrac'].map(photoBySlug), 'Photos d’illustration', 'is-short')}
<section class="wrap legal">
  <h2>Données collectées</h2>
  <p>Ce site ne collecte aucune donnée personnelle, n’utilise aucun cookie de suivi et n’envoie aucun formulaire. Le formulaire de devis prépare un texte dans votre navigateur: rien n’est transmis tant que vous n’appelez pas ou n’écrivez pas vous-même.</p>
  <h2>Photos</h2>
  <p>Les photos d’illustration sont servies depuis ce site, sans appel à un service tiers.</p>
  <h2>Services tiers</h2>
  <p>Les liens vers Google Maps, OpenStreetMap et Facebook mènent vers des sites tiers qui ont leur propre politique de confidentialité.</p>
  <h2>Contact</h2>
  <p>Pour toute question, appelez le garage au ${SITE.phone}.</p>
</section>`
  return { html }
}

/* ----------------------------------- 404 ----------------------------------- */
export function notFoundView(): View {
  const html = `
<section class="wrap nf">
  <div class="sheet nf-sheet jack">${carSVG({ label: 'Une voiture sur un cric' })}</div>
  <h1 data-split data-split-now>Cette page est au garage.</h1>
  <p class="lead">Elle a été démontée, déplacée, ou n’a jamais existé. Revenez à l’accueil, ou appelez-nous.</p>
  <div class="hero-cta">${callButton()}<a class="btn btn-ghost" href="${u('/')}">Retour à l’accueil${ico.arrow(18)}</a></div>
</section>`
  return { html }
}
