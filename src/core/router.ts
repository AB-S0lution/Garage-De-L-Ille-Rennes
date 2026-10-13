// Petit routeur côté client (History API) + transitions de page « planche à dessin » (View Transitions).
import { BASE, appPath, reducedMotion, typo } from './dom'
import { metaFor } from '../routeMeta'
import { enhance, scrollToEl, scrollToY, ScrollTrigger } from './motion'
import { paintStatus } from './status'

export interface View {
  html: string
  /** Mouvement et comportements propres à la page. Retourne éventuellement un nettoyage. */
  init?: (root: HTMLElement) => void | (() => void)
}

type Params = Record<string, string>
interface Route {
  re: RegExp
  keys: string[]
  load: (p: Params) => View | null
}

const routes: Route[] = []

export function route(pattern: string, load: (p: Params) => View | null) {
  const keys: string[] = []
  const re = new RegExp('^' + pattern.replace(/:([a-z]+)/g, (_, k) => (keys.push(k), '([^/]+)')) + '$')
  routes.push({ re, keys, load })
}

let notFound: () => View = () => ({ html: '<p>Page introuvable</p>' })
export const setNotFound = (fn: () => View) => (notFound = fn)

function resolve(path: string): { view: View; known: boolean } {
  for (const r of routes) {
    const m = path.match(r.re)
    if (m) {
      const params: Params = {}
      r.keys.forEach((k, i) => (params[k] = decodeURIComponent(m[i + 1])))
      const v = r.load(params)
      if (v) return { view: v, known: true }
    }
  }
  return { view: notFound(), known: false }
}

let cleanup: (() => void) | null = null
let main: HTMLElement
let current = ''

function setMeta(path: string, known: boolean) {
  const m = known ? metaFor(path) : metaFor('/404')
  document.title = m.title
  const set = (sel: string, attr: string, val: string) => document.head.querySelector(sel)?.setAttribute(attr, val)
  set('meta[name="description"]', 'content', m.description)
  set('meta[property="og:title"]', 'content', m.title)
  set('meta[property="og:description"]', 'content', m.description)
  set('link[rel="canonical"]', 'href', location.origin + BASE + path.replace(/^\//, '') + (path === '/' ? '' : '/'))
  set('meta[name="robots"]', 'content', m.noindex ? 'noindex' : 'index,follow')
}

function markNav(path: string) {
  document.querySelectorAll<HTMLAnchorElement>('[data-nav]').forEach((a) => {
    const h = a.dataset.nav || ''
    const on = h === '/' ? path === '/' : path === h || path.startsWith(h + '/')
    if (on) a.setAttribute('aria-current', 'page')
    else a.removeAttribute('aria-current')
  })
}

function swap(path: string, hash: string) {
  cleanup?.()
  cleanup = null
  ScrollTrigger.getAll().forEach((t) => t.kill())
  const { view, known } = resolve(path)
  main.innerHTML = typo(view.html)
  setMeta(path, known)
  markNav(path)
  paintStatus()
  current = path
  const target = hash ? document.getElementById(hash.slice(1)) : null
  if (!target) scrollToY(0, true)
  let extraCleanup: void | (() => void)
  cleanup = enhance(main, () => {
    extraCleanup = view.init?.(main)
  })
  const prev = cleanup
  cleanup = () => {
    if (typeof extraCleanup === 'function') extraCleanup()
    prev()
  }
  main.focus({ preventScroll: true })
  if (target) requestAnimationFrame(() => scrollToEl(target))
}

type VTDoc = Document & { startViewTransition?: (cb: () => void) => { finished: Promise<void> } }

export function go(url: string, push = true) {
  const a = new URL(url, location.href)
  const path = appPath(a.pathname)
  const hash = a.hash
  const run = () => {
    if (push) history.pushState({}, '', a.pathname + a.search + a.hash)
    swap(path, hash)
  }
  const doc = document as VTDoc
  if (path !== current && doc.startViewTransition && !reducedMotion() && document.visibilityState === 'visible') {
    document.documentElement.classList.add('vt-sheet')
    const t = doc.startViewTransition(run)
    t.finished.finally(() => document.documentElement.classList.remove('vt-sheet'))
  } else run()
}

export function startRouter(el: HTMLElement) {
  main = el
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    const a = (e.target as HTMLElement).closest('a')
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return
    const href = a.getAttribute('href') || ''
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return
    const url = new URL(href, location.href)
    if (url.origin !== location.origin || !url.pathname.startsWith(BASE)) return
    e.preventDefault()
    if (appPath(url.pathname) === current && url.hash) {
      history.pushState({}, '', url.pathname + url.hash)
      const t = document.getElementById(url.hash.slice(1))
      if (t) scrollToEl(t)
      return
    }
    go(url.href)
  })
  window.addEventListener('popstate', () => go(location.href, false))
  swap(appPath(location.pathname), location.hash)
}
