// Mouvement: GSAP + ScrollTrigger + SplitText (gratuits depuis GSAP 3.13) et Lenis.
// Règles: transform / opacité / stroke-dashoffset / clip-path uniquement. Tout a une raison:
// révéler l'ordre de lecture, montrer comment une pièce se démonte, ou confirmer un geste.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'
import { $$, reducedMotion } from './dom'

gsap.registerPlugin(ScrollTrigger, SplitText)

export { gsap, ScrollTrigger }

let lenis: Lenis | null = null

export function initSmooth() {
  if (reducedMotion() || lenis) return
  lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 0.95, anchors: false })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis?.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
}

export function scrollToY(y: number, immediate = false) {
  if (lenis) lenis.scrollTo(y, { immediate, duration: 0.9 })
  else window.scrollTo({ top: y, behavior: immediate || reducedMotion() ? 'auto' : 'smooth' })
}

export function scrollToEl(el: Element) {
  const y = el.getBoundingClientRect().top + window.scrollY - 84
  scrollToY(y)
}

export const stopSmooth = () => lenis?.stop()
export const startSmooth = () => lenis?.start()

/** Exécute `fn` seulement quand la requête média correspond, avec nettoyage automatique. */
export function withMedia(mm: gsap.MatchMedia, query: string, fn: () => void | (() => void)) {
  mm.add(query, fn)
}

export const DESKTOP_MOTION = '(min-width: 900px) and (prefers-reduced-motion: no-preference)'
export const ANY_MOTION = '(prefers-reduced-motion: no-preference)'

const fr = (n: number, decimals = 0) => n.toLocaleString('fr-FR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })

/**
 * Mouvement commun à toutes les pages. Retourne le nettoyage.
 * Les états initiaux sont posés en CSS (classe .js-motion), jamais cachés sans JS.
 */
export function enhance(root: HTMLElement, extra?: (ctx: gsap.Context) => void): () => void {
  const ctx = gsap.context(() => {
    if (!reducedMotion()) {
      // Titres: lignes qui montent depuis un masque
      const splits = $$('[data-split]', root)
      const doSplit = () => {
        splits.forEach((el) => {
          const instant = el.hasAttribute('data-split-now')
          SplitText.create(el, {
            type: 'lines',
            mask: 'lines',
            linesClass: 'split-line',
            autoSplit: true,
            onSplit: (self) => {
              gsap.set(el, { visibility: 'visible' })
              return gsap.from(self.lines, {
                yPercent: 112,
                duration: 0.95,
                ease: 'expo.out',
                stagger: 0.09,
                delay: instant ? 0.15 : 0,
                scrollTrigger: instant ? undefined : { trigger: el, start: 'top 88%', once: true },
              })
            },
          })
        })
      }
      if (document.fonts && document.fonts.status !== 'loaded') document.fonts.ready.then(() => ctx.add(doSplit))
      else doSplit()

      // Blocs: apparition groupée dans l'ordre de lecture
      ScrollTrigger.batch($$('[data-reveal]', root), {
        start: 'top 92%',
        once: true,
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.07, overwrite: true }),
      })

      // Tracés SVG qui se dessinent
      $$<SVGGeometryElement>('[data-draw]', root).forEach((p) => {
        if (p.closest('[data-draw-manual]')) return
        if (p.getAttribute('stroke-dasharray') || p.classList.contains('leader')) {
          gsap.from(p, { opacity: 0, duration: 0.8, delay: 0.6 })
          return
        }
        p.setAttribute('pathLength', '1')
        const scrub = p.closest('[data-draw-scrub]')
        if (scrub) return // géré par la vue
        gsap.fromTo(
          p,
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut', scrollTrigger: { trigger: p.ownerSVGElement ?? p, start: 'top 90%', once: true } },
        )
      })

      // Compteurs
      $$('[data-count]', root).forEach((el) => {
        const to = Number(el.dataset.count)
        const dec = Number(el.dataset.decimals ?? 0)
        const suffix = el.dataset.suffix ?? ''
        const grouping = el.dataset.group !== 'false'
        const o = { v: 0 }
        const fmt = (v: number) => (grouping ? fr(v, dec) : v.toFixed(dec).replace('.', ',')) + suffix
        el.textContent = fmt(0)
        gsap.to(o, {
          v: to,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate: () => (el.textContent = fmt(o.v)),
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        })
      })

      // Parallaxe douce
      $$('[data-parallax]', root).forEach((el) => {
        const amt = Number(el.dataset.parallax || 8)
        gsap.fromTo(el, { yPercent: -amt }, { yPercent: amt, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } })
      })
    }
  }, root)
  if (extra) ctx.add(() => extra(ctx))
  requestAnimationFrame(() => ScrollTrigger.refresh())
  return () => ctx.revert()
}
