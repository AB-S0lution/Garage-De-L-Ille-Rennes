export const BASE: string = import.meta.env.BASE_URL // se termine par "/"
const NBSP = ' '
const NNBSP = ' '

/** Typographie française sur du HTML: espaces insécables avant ? ! ; : et dans « ». Ne touche pas aux balises. */
export function typo(html: string): string {
  return html
    .split(/(<[^>]*>)/g)
    .map((part) => {
      if (part.startsWith('<')) return part
      return part
        .replace(/([^\s?!])[ \u00A0]*([?!]+)/g, `$1${NNBSP}$2`)
        .replace(/[ \u00A0]+;/g, `${NNBSP};`)
        .replace(/[ \u00A0]*:(?=\s|$)/g, `${NBSP}:`)
        .replace(/«\s+/g, `«${NBSP}`)
        .replace(/\s+»/g, `${NBSP}»`)
        .replace(/(\d) (€|km|h|m|%)(?![\p{L}])/gu, `$1${NBSP}$2`)
        .replace(/(\d) (\d{3})(?!\d)/g, `$1${NNBSP}$2`)
    })
    .join('')
}

/** Échappe du texte brut pour l'insérer dans du HTML. */
export function esc(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string)
}

/** URL interne avec base: u('/atelier') -> '/Garage-De-L-Ille-Rennes/atelier/' */
export function u(path: string): string {
  if (path === '/' || path === '') return BASE
  const [p, hash] = path.split('#')
  const clean = p.replace(/^\/+|\/+$/g, '')
  return `${BASE}${clean}/${hash ? '#' + hash : ''}`
}

/** Chemin applicatif (sans base, sans slash final) à partir d'un pathname. */
export function appPath(pathname: string): string {
  let p = pathname.startsWith(BASE) ? pathname.slice(BASE.length - 1) : pathname
  p = p.replace(/\/index\.html$/, '')
  if (p.length > 1) p = p.replace(/\/+$/, '')
  return p || '/'
}

export const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel)
export const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel))

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const eur = (n: number) => `${n.toLocaleString('fr-FR')} €`

export const frDate = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
