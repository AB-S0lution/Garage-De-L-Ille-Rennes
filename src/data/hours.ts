// Horaires réels (PLAN.md §1). Pilote la pastille « Ouvert / Fermé ».
export interface DayHours {
  /** 0 = dimanche … 6 = samedi (convention Date.getDay) */
  dow: number
  label: string
  /** créneaux en minutes depuis minuit: [ouverture, fermeture] */
  slots: Array<[number, number]>
}

const m = (h: number, min = 0) => h * 60 + min
const open: Array<[number, number]> = [
  [m(8), m(12)],
  [m(13), m(18)],
]

/** Ordre d’affichage: lundi d’abord. */
export const hours: DayHours[] = [
  { dow: 1, label: 'Lundi', slots: open },
  { dow: 2, label: 'Mardi', slots: open },
  { dow: 3, label: 'Mercredi', slots: open },
  { dow: 4, label: 'Jeudi', slots: open },
  { dow: 5, label: 'Vendredi', slots: open },
  { dow: 6, label: 'Samedi', slots: [] },
  { dow: 0, label: 'Dimanche', slots: [] },
]

/** Jours fériés (garage fermé), 2026 et 2027. Format AAAA-MM-JJ. */
export const holidays: string[] = [
  '2026-01-01', '2026-04-06', '2026-05-01', '2026-05-08', '2026-05-14', '2026-05-25',
  '2026-07-14', '2026-08-15', '2026-11-01', '2026-11-11', '2026-12-25',
  '2027-01-01', '2027-03-29', '2027-05-01', '2027-05-06', '2027-05-08', '2027-05-17',
  '2027-07-14', '2027-08-15', '2027-11-01', '2027-11-11', '2027-12-25',
]

export const holidayNote = 'Fermé les samedis, dimanches et jours fériés.'
