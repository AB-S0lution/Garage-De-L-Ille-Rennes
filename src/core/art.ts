// Tout le dessin du site est du SVG original (aucune photo, aucun logo de marque).
import type { PartShape } from '../data/parts'
import type { ZoneId } from '../data/families'
import type { Landmark } from '../data/misc'

type GState = 'worn' | 'new'

const ring = (n: number, r: number, f: (x: number, y: number, a: number) => string, offset = 0) =>
  Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2 + offset
    return f(50 + Math.cos(a) * r, 50 + Math.sin(a) * r, a)
  }).join('')

/** Pièces dessinées dans une boîte 100 x 100. `worn` ajoute l'usure, `new` reste propre. */
const shapes: Record<PartShape, (s: GState) => string> = {
  disc: (s) =>
    `<circle cx="50" cy="50" r="42"/><circle cx="50" cy="50" r="17"/><circle cx="50" cy="50" r="6"/>` +
    ring(6, 29, (x, y) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3"/>`) +
    (s === 'worn'
      ? `<circle cx="50" cy="50" r="37" stroke-dasharray="3 3"/><circle cx="50" cy="50" r="34" stroke-dasharray="1 4"/><path d="M88 36 l-9 7 l6 6 l-8 6"/><path d="M12 62 l6 -3"/>`
      : `<circle cx="50" cy="50" r="38" stroke-opacity=".35"/>`),
  pad: (s) =>
    `<path d="M8 58 Q50 26 92 58 L92 67 Q50 35 8 67 Z"/>` +
    (s === 'worn'
      ? `<path d="M8 70 Q50 38 92 70 L92 76 Q50 44 8 76 Z"/><path d="M22 66 l8 -6 M38 61 l8 -5 M54 58 l8 -3 M70 58 l8 3"/>`
      : `<path d="M8 70 Q50 38 92 70 L92 90 Q50 58 8 90 Z"/><path d="M34 74 Q50 66 66 74" stroke-opacity=".4"/>`) +
    `<path d="M45 28 v8 M55 28 v8"/>`,
  belt: (s) =>
    `<rect x="8" y="28" width="84" height="44" rx="22"/><rect x="16" y="36" width="68" height="28" rx="14"/>` +
    ring(0, 0, () => '') +
    Array.from({ length: 11 }, (_, i) => `<path d="M${24 + i * 5.2} 28 v${s === 'worn' && i % 3 === 1 ? 4 : 8} M${24 + i * 5.2} 72 v-${s === 'worn' && i % 3 === 0 ? 4 : 8}"/>`).join('') +
    (s === 'worn' ? `<path d="M30 28 l3 5 l-3 4 M62 72 l-3 -5 l3 -4 M80 44 l-4 3 l3 3"/>` : ''),
  pulley: (s) =>
    `<circle cx="50" cy="50" r="38"/><circle cx="50" cy="50" r="28"/><circle cx="50" cy="50" r="9"/>` +
    ring(5, 19, (x, y) => `<path d="M50 50 L${x.toFixed(1)} ${y.toFixed(1)}"/>`) +
    (s === 'worn' ? `<circle cx="53" cy="48" r="38" stroke-dasharray="2 4"/><path d="M82 28 l-5 5 l4 4"/>` : `<circle cx="50" cy="50" r="33" stroke-opacity=".35"/>`),
  clutch: (s) =>
    `<circle cx="50" cy="50" r="43"/><circle cx="50" cy="50" r="31"/><circle cx="50" cy="50" r="10"/>` +
    ring(8, 37, (x, y) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.8"/>`) +
    ring(4, 21, (x, y, a) => `<rect x="${(x - 4).toFixed(1)}" y="${(y - 2.5).toFixed(1)}" width="8" height="5" transform="rotate(${((a * 180) / Math.PI).toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`) +
    (s === 'worn' ? `<path d="M50 7 A43 43 0 0 1 93 50" stroke-dasharray="2 3"/><path d="M14 30 l6 3 l-2 6 M70 84 l-4 -7"/>` : ''),
  plug: (s) =>
    `<rect x="42" y="6" width="16" height="28"/><path d="M38 34 h24 v14 h-24 Z"/><rect x="44" y="48" width="12" height="26"/><path d="M50 74 v12 h9 v-6"/>` +
    `<path d="M44 54 h12 M44 60 h12 M44 66 h12" stroke-opacity=".5"/>` +
    (s === 'worn'
      ? `<circle cx="46" cy="82" r="1.6"/><circle cx="53" cy="88" r="1.6"/><circle cx="43" cy="90" r="1.2"/><circle cx="62" cy="86" r="1.4"/><path d="M59 80 l5 -3"/>`
      : ''),
  filter: (s) =>
    `<rect x="22" y="12" width="56" height="76" rx="6"/><path d="M22 24 h56 M22 76 h56"/>` +
    Array.from({ length: 7 }, (_, i) => `<path d="M${30 + i * 6.7} 28 v44"/>`).join('') +
    (s === 'worn' ? `<path d="M28 34 l16 16 M44 30 l22 22 M54 50 l16 16 M30 56 l14 14" stroke-opacity=".8"/><circle cx="36" cy="64" r="1.5"/><circle cx="62" cy="38" r="1.5"/>` : ''),
  tyre: (s) =>
    `<circle cx="50" cy="50" r="43"/><circle cx="50" cy="50" r="27"/><circle cx="50" cy="50" r="7"/>` +
    ring(16, 38, (x, y, a) => {
      const x2 = 50 + Math.cos(a) * 43, y2 = 50 + Math.sin(a) * 43
      return `<path d="M${x.toFixed(1)} ${y.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}"/>`
    }) +
    (s === 'worn' ? `<path d="M22 20 A40 40 0 0 0 14 52" stroke-width="3.4"/><path d="M50 7 v6"/>` : ''),
  shock: (s) =>
    `<path d="M50 4 v36"/><rect x="40" y="40" width="20" height="48" rx="3"/>` +
    `<path d="M28 30 l44 6 l-44 6 l44 6 l-44 6 l44 6 l-44 6" stroke-opacity=".6"/>` +
    (s === 'worn' ? `<path d="M47 90 q-3 4 0 6 q3 -2 0 -6 M55 88 q-3 4 0 6 q3 -2 0 -6" /><path d="M44 52 l12 0" />` : ''),
  hose: (s) =>
    `<path d="M10 76 C10 40 30 28 50 28 S90 40 90 24"/><path d="M18 84 C18 50 34 38 50 38 S80 48 80 24" transform="translate(0 2)"/>` +
    `<rect x="26" y="40" width="6" height="22" transform="rotate(-24 29 51)"/><rect x="62" y="30" width="6" height="22" transform="rotate(-14 65 41)"/>` +
    (s === 'worn' ? `<path d="M42 32 l4 6 M54 36 l-3 7 M72 36 l4 5 M20 56 l7 -2"/>` : ''),
}

/** Une pièce, dans un <g>. */
export function glyph(shape: PartShape, state: GState, x = 0, y = 0, size = 100): string {
  const k = size / 100
  return `<g class="glyph ${state}" transform="translate(${x - size / 2} ${y - size / 2}) scale(${k})" fill="none" stroke="currentColor" stroke-width="${(1.6 / k).toFixed(2)}" stroke-linecap="round" stroke-linejoin="round">${shapes[shape](state)}</g>`
}

/** Étiquette jaune « usé » */
export function wearTag(x: number, y: number, text = 'USÉ'): string {
  return `<g class="tag" transform="translate(${x} ${y})"><path d="M0 0 h46 v16 h-46 Z"/><circle cx="6" cy="8" r="2"/><text x="14" y="11.5">${text}</text></g>`
}

/** Pièce seule dans son SVG (cartes du catalogue, établi). */
export function partSVG(shape: PartShape, state: GState, label: string): string {
  return `<svg viewBox="0 0 100 100" role="img" aria-label="${label}" class="part-svg ${state}">${glyph(shape, state, 50, 50, 92)}</svg>`
}

/* ------------------------------------------------------------------ */
/* Voiture générique (compacte), vue de côté, 960 x 450                */
/* ------------------------------------------------------------------ */

export interface ZoneMeta {
  id: ZoneId
  /** point d'ancrage pour la ligne de renvoi vers l'établi */
  ax: number
  ay: number
}

export const zoneMeta: ZoneMeta[] = [
  { id: 'freinage', ax: 290, ay: 300 },
  { id: 'moteur-distribution', ax: 145, ay: 288 },
  { id: 'embrayage-boite', ax: 427, ay: 290 },
  { id: 'echappement-fap', ax: 520, ay: 312 },
  { id: 'pneus-suspension', ax: 750, ay: 358 },
  { id: 'entretien', ax: 67, ay: 290 },
]

const wheel = (cx: number, brake: boolean) =>
  `<circle cx="${cx}" cy="300" r="58"/><circle cx="${cx}" cy="300" r="49" stroke-opacity=".5"/><circle cx="${cx}" cy="300" r="36"/>` +
  `<circle cx="${cx}" cy="300" r="9"/>` +
  ring(5, 1, () => '') +
  Array.from({ length: 5 }, (_, i) => {
    const a = (i / 5) * Math.PI * 2 - Math.PI / 2
    return `<path d="M${cx + Math.cos(a) * 9} ${300 + Math.sin(a) * 9} L${cx + Math.cos(a) * 36} ${300 + Math.sin(a) * 36}"/>`
  }).join('') +
  (brake ? `<circle cx="${cx}" cy="300" r="27" stroke-dasharray="4 3"/>` : '')

export interface CarOptions {
  /** groupes cliquables (établi) */
  interactive?: boolean
  /** freins éclatés au-dessus de la roue avant (héros) */
  exploded?: boolean
  label?: string
}

export function carSVG(opts: CarOptions = {}): string {
  const { interactive = false, exploded = false, label = 'Dessin technique d’une voiture compacte vue de côté' } = opts
  const zone = (id: ZoneId, inner: string, hit: string) =>
    `<g class="zone zone-${id}" data-zone="${id}" ${interactive ? '' : 'aria-hidden="true"'}>${inner}${interactive ? `<rect class="hit" ${hit} />` : ''}</g>`
  return `
<svg class="car-svg" viewBox="0 -70 960 450" role="img" aria-label="${label}" preserveAspectRatio="xMidYMid meet">
  <g class="paper-ground"><path d="M20 358 H940" class="ground"/></g>
  <g class="car-lines" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path data-draw d="M50 292 V258 Q50 244 68 240 L300 212 L420 140 Q426 134 436 134 L700 134 Q714 134 722 142 L880 240 Q900 254 900 272 V292 L820 292 A70 70 0 0 0 680 292 L360 292 A70 70 0 0 0 220 292 Z"/>
    <path data-draw d="M312 208 L424 146 L530 146 L530 208 Z"/>
    <path data-draw d="M544 146 L698 146 Q706 146 712 152 L826 208 L544 208 Z"/>
    <path data-draw d="M538 146 V288 M500 226 H524 M542 288 H650" stroke-opacity=".7"/>
    <path data-draw d="M54 252 L94 244 V258 L54 262 Z M884 252 L898 262 V272 L884 270 Z" stroke-opacity=".8"/>
    <path data-draw d="M58 276 H220 M360 276 H680 M820 276 H896" stroke-opacity=".35" stroke-dasharray="2 5"/>
  </g>
  ${zone('pneus-suspension', `<g class="zl" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${wheel(290, false)}${wheel(750, false)}<path d="M340 214 V246 M334 232 h12 M334 224 h12" stroke-opacity=".8"/></g>`, `x="680" y="236" width="140" height="130"`)}
  ${zone('freinage', `<g class="zl" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="290" cy="300" r="27" stroke-dasharray="4 3"/><circle cx="290" cy="300" r="13"/><rect x="298" y="268" width="26" height="20" rx="4" transform="rotate(18 311 278)"/></g>`, `x="232" y="242" width="116" height="116"`)}
  ${zone('moteur-distribution', `<g class="zl" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="84" y="246" width="124" height="42" rx="3"/><circle cx="106" cy="267" r="10"/><circle cx="146" cy="263" r="8"/><circle cx="186" cy="268" r="11"/><path d="M106 257 L146 255 L186 257 A11 11 0 0 1 186 279 L146 271 L106 277 A10 10 0 0 1 106 257 Z" stroke-opacity=".6" stroke-dasharray="3 3"/></g>`, `x="76" y="236" width="140" height="58"`)}
  ${zone('embrayage-boite', `<g class="zl" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="376" y="250" width="112" height="40" rx="3"/><circle cx="406" cy="270" r="15"/><circle cx="406" cy="270" r="5"/><path d="M421 270 H470 M436 256 V284 M452 256 V284" stroke-opacity=".7"/></g>`, `x="368" y="242" width="128" height="56"`)}
  ${zone('echappement-fap', `<g class="zl" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M410 312 H888" stroke-dasharray="7 4"/><rect x="474" y="300" width="96" height="24" rx="10"/><path d="M490 304 v16 M502 304 v16 M514 304 v16 M526 304 v16 M538 304 v16 M550 304 v16" stroke-opacity=".6"/><rect x="838" y="300" width="56" height="24" rx="10"/></g>`, `x="404" y="296" width="496" height="34"`)}
  ${zone('entretien', `<g class="zl" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="54" y="248" width="22" height="42" rx="2"/><path d="M58 256 h14 M58 264 h14 M58 272 h14 M58 280 h14" stroke-opacity=".7"/><path d="M65 248 C65 236 84 238 92 246" stroke-opacity=".8"/></g>`, `x="48" y="240" width="34" height="56"`)}
  ${
    exploded
      ? `<g class="exploded" fill="none" stroke="currentColor" stroke-width="2">
    <path class="leader" data-draw d="M290 250 V70" stroke-dasharray="5 5" stroke-opacity=".6"/>
    <path class="leader" data-draw d="M290 250 L170 70 M290 250 L410 70" stroke-dasharray="5 5" stroke-opacity=".6"/>
    <g class="ex-part ex-disc">${glyph('disc', 'new', 290, 8, 112)}<text x="290" y="-62" text-anchor="middle" class="callout">DISQUE</text></g>
    <g class="ex-part ex-worn">${glyph('pad', 'worn', 160, 24, 96)}${wearTag(120, 56)}<text x="160" y="-34" text-anchor="middle" class="callout">PLAQUETTE USÉE</text></g>
    <g class="ex-part ex-new">${glyph('pad', 'new', 420, 24, 96)}<text x="420" y="-34" text-anchor="middle" class="callout new">PLAQUETTE NEUVE</text></g>
  </g>`
      : ''
  }
</svg>`
}

/* ------------------------------------------------------------------ */
/* Façade (dessin original, d'après l'allure publique du bâtiment)     */
/* ------------------------------------------------------------------ */
export function shopfrontSVG(): string {
  const ribs = Array.from({ length: 34 }, (_, i) => `<path d="M${150 + i * 10} 96 V176" />`).join('')
  const pickets = Array.from({ length: 16 }, (_, i) => `<path d="M${8 + i * 9} 190 V212 M${8 + i * 9 - 3} 190 L${8 + i * 9} 186 L${8 + i * 9 + 3} 190"/>`).join('')
  return `<svg class="shopfront" viewBox="0 0 640 230" role="img" aria-label="Dessin de la façade: un atelier bas, bardage noir, bandeau d’enseigne, écran rouille, clôture en bois">
  <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M0 214 H640" />
    <path d="M140 176 V92 H520 V176 Z" />
    ${ribs}
    <path d="M160 126 H500 V150 H160 Z" class="band"/>
    <path d="M140 92 V74 H520 V92" />
    <rect x="140" y="52" width="260" height="30" class="sign" stroke="none"/>
    <path d="M520 176 V214 M520 176 H610 V214" />
    <g class="corten" stroke-width="1.4">
      <rect x="524" y="100" width="92" height="114" />
      ${Array.from({ length: 10 }, (_, i) => `<path d="M${530 + i * 9} 104 V210"/>`).join('')}
    </g>
    ${pickets}
    <path d="M8 202 H140"/>
    <circle cx="116" cy="198" r="9"/><circle cx="126" cy="203" r="7"/>
  </g>
  <path d="M152 59 l14 8 l-14 8 Z" class="sign-arrow"/>
  <text x="176" y="74" class="sign-text-1">GARAGE</text>
  <text x="258" y="74" class="sign-text-2">DE L’ILLE</text>
</svg>`
}

/* ------------------------------------------------------------------ */
/* Plan du quartier (schématique)                                      */
/* ------------------------------------------------------------------ */
export function quartierSVG(points: Landmark[]): string {
  const dots = points
    .filter((p) => p.id !== 'metro' && p.id !== 'ateliers')
    .map(
      (p) =>
        `<g class="lm"><circle cx="${p.x}" cy="${p.y}" r="1.6"/><text x="${p.x + 3}" y="${p.y + 1}" class="lm-t">${p.name.length > 22 ? p.name.slice(0, 20) + '...' : p.name}</text></g>`,
    )
    .join('')
  return `<svg class="quartier-svg" viewBox="0 0 100 100" role="img" aria-label="Plan schématique: le garage rue de Jinan et la station de métro Les Gayeulles à environ 220 mètres à pied">
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <path d="M0 94 H100" stroke-width=".9" stroke-opacity=".5"/>
    <path d="M8 72 C30 66 52 70 100 58" stroke-width=".8" stroke-opacity=".5"/>
    <path d="M34 0 C36 30 44 52 40 62 S36 80 38 100" stroke-width=".8" stroke-opacity=".4"/>
    <path d="M60 100 C62 74 70 50 78 28 S96 10 100 6" stroke-width=".8" stroke-opacity=".4"/>
    <path id="walk-line" data-draw-walk d="M40 62 C48 60 56 56 62 50 S72 38 74 30" stroke="var(--enseigne)" stroke-width="1.6" stroke-dasharray="3 2"/>
  </g>
  <text x="2" y="92" class="rd">rue de Fougères</text>
  <text x="44" y="68" class="rd">rue de Jinan</text>
  ${dots}
  <g class="g-garage"><path d="M37.2 58.4 l6 3.6 l-6 3.6 Z" class="arrow"/><text x="30" y="72" class="lm-t strong">Garage de l’Ille</text></g>
  <g class="g-metro"><circle cx="74" cy="30" r="3.6" class="metro-c"/><text x="74" y="31.2" text-anchor="middle" class="metro-b">B</text><text x="79" y="25" class="lm-t strong">Les Gayeulles</text></g>
</svg>`
}

/** Voyant: pastille dessinée */
export function voyantBadge(code: string, color: string): string {
  return `<span class="voyant v-${color}" aria-hidden="true">${code}</span>`
}

export const logoArrow = `<svg class="arrow-mark" viewBox="0 0 12 14" aria-hidden="true" focusable="false"><path d="M0 0 12 7 0 14Z"/></svg>`
