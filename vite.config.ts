import { defineConfig, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'
import { allMeta, notFoundMeta, type PageMeta } from './src/routeMeta'

const BASE = '/Garage-De-L-Ille-Rennes/'
const ORIGIN = 'https://ab-s0lution.github.io'

const attr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;')

function personalize(tpl: string, m: PageMeta, isFallback = false): string {
  const url = `${ORIGIN}${BASE}${m.path === '/' ? '' : m.path.slice(1) + '/'}`
  let html = tpl
    .replace(/<title>[^<]*<\/title>/, `<title>${m.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${attr(m.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${attr(m.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${attr(m.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${isFallback ? ORIGIN + BASE : url}$2`)
  if (m.noindex) html = html.replace(/(<meta name="robots" content=")[^"]*(")/, '$1noindex$2')
  return html
}

/** Génère un HTML par route (titres, descriptions, canonical) + 404.html, tous basés sur le même shell. */
function routeHtml(): Plugin {
  let outDir = 'dist'
  return {
    name: 'route-html',
    apply: 'build',
    configResolved(c) {
      outDir = path.resolve(c.root, c.build.outDir)
    },
    closeBundle() {
      const tpl = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      for (const m of allMeta()) {
        if (m.path === '/') {
          fs.writeFileSync(path.join(outDir, 'index.html'), personalize(tpl, m))
          continue
        }
        const dir = path.join(outDir, m.path.slice(1))
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), personalize(tpl, m))
      }
      fs.writeFileSync(path.join(outDir, '404.html'), personalize(tpl, notFoundMeta, true))
    },
  }
}

// GitHub Pages project site: https://ab-s0lution.github.io/Garage-De-L-Ille-Rennes/
export default defineConfig({
  base: BASE,
  plugins: [tailwindcss(), routeHtml()],
  build: { chunkSizeWarningLimit: 700 },
})
