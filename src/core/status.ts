import { hours, holidays } from '../data/hours'

export interface Status {
  open: boolean
  /** « Ouvert » ou « Fermé » */
  label: string
  /** « ferme à 18 h » etc. */
  detail: string
}

const fmtH = (min: number) => `${Math.floor(min / 60)} h${min % 60 ? String(min % 60).padStart(2, '0') : ''}`

/** Heure et date à Rennes (Europe/Paris), quel que soit le fuseau du visiteur. */
function parisNow(now: Date) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(now)
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
  const dowMap: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }
  return {
    dow: dowMap[get('weekday')] ?? 0,
    minutes: (Number(get('hour')) % 24) * 60 + Number(get('minute')),
    iso: `${get('year')}-${get('month')}-${get('day')}`,
  }
}

const daysFr = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']

export function getStatus(now = new Date()): Status {
  const p = parisNow(now)
  const isHoliday = holidays.includes(p.iso)
  const today = hours.find((h) => h.dow === p.dow)
  if (!isHoliday && today) {
    for (const [a, b] of today.slots) {
      if (p.minutes >= a && p.minutes < b) {
        const closingSoon = b - p.minutes <= 30
        return { open: true, label: 'Ouvert', detail: closingSoon ? `ferme à ${fmtH(b)}, bientôt` : `ferme à ${fmtH(b)}` }
      }
    }
    const next = today.slots.find(([a]) => a > p.minutes)
    if (next) return { open: false, label: 'Fermé', detail: `rouvre à ${fmtH(next[0])}` }
  }
  // prochain jour ouvert (jusqu'à 10 jours)
  for (let i = 1; i <= 10; i++) {
    const d = new Date(now.getTime() + i * 86400000)
    const q = parisNow(d)
    const h = hours.find((x) => x.dow === q.dow)
    if (h && h.slots.length && !holidays.includes(q.iso)) {
      const when = i === 1 ? 'demain' : daysFr[q.dow]
      return { open: false, label: 'Fermé', detail: `rouvre ${when} à ${fmtH(h.slots[0][0])}` }
    }
  }
  return { open: false, label: 'Fermé', detail: '' }
}

/** Met à jour toutes les pastilles de la page. */
export function paintStatus(root: ParentNode = document) {
  const s = getStatus()
  root.querySelectorAll<HTMLElement>('[data-status]').forEach((el) => {
    el.dataset.open = String(s.open)
    const l = el.querySelector('[data-status-label]')
    const d = el.querySelector('[data-status-detail]')
    if (l) l.textContent = s.label
    if (d) d.textContent = s.detail ? '· ' + s.detail : ''
    el.setAttribute('aria-label', `${s.label}${s.detail ? ', ' + s.detail : ''}`)
  })
}

export const statusChip = (cls = '') =>
  `<span class="status ${cls}" data-status data-open="false" role="status"><span class="dot" aria-hidden="true"></span><strong data-status-label>Horaires</strong><span data-status-detail></span></span>`
