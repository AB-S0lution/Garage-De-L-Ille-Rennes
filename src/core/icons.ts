// Icônes à trait (1.6), jeu unique. Dessinées pour ce site, décoratives (aria-hidden).
const svg = (d: string, size = 20) =>
  `<svg class="ico" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${d}</svg>`

export const ico = {
  phone: (s?: number) => svg('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>', s),
  pin: (s?: number) => svg('<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>', s),
  arrow: (s?: number) => svg('<path d="M5 12h14M13 6l6 6-6 6"/>', s),
  arrowLeft: (s?: number) => svg('<path d="M19 12H5M11 6l-6 6 6 6"/>', s),
  menu: (s?: number) => svg('<path d="M4 7h16M4 12h16M4 17h16"/>', s),
  close: (s?: number) => svg('<path d="M6 6l12 12M18 6 6 18"/>', s),
  plus: (s?: number) => svg('<path d="M12 5v14M5 12h14"/>', s),
  search: (s?: number) => svg('<circle cx="11" cy="11" r="6"/><path d="m20 20-4.2-4.2"/>', s),
  check: (s?: number) => svg('<path d="m5 12.5 4.5 4.5L19 7.5"/>', s),
  clock: (s?: number) => svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>', s),
  mail: (s?: number) => svg('<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="m4 7 8 6 8-6"/>', s),
  car: (s?: number) => svg('<path d="M4 16V12l2-5h12l2 5v4M4 16h16M4 16v2h3v-2M17 16v2h3v-2"/><circle cx="8" cy="13" r=".6"/><circle cx="16" cy="13" r=".6"/>', s),
  wrench: (s?: number) => svg('<path d="M14.5 6.5a4 4 0 0 0 4.9 4.9L10 20.8a2 2 0 0 1-2.8-2.8l9.4-9.4"/><path d="M14.5 6.5 17 4l3 3-2.5 2.5"/>', s),
  star: (s?: number) => svg('<path d="m12 4 2.4 5 5.4.7-4 3.8 1 5.4L12 16.2 7.2 18.9l1-5.4-4-3.8 5.4-.7L12 4Z"/>', s),
  external: (s?: number) => svg('<path d="M14 5h5v5M19 5l-8 8M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4"/>', s),
  leaf: (s?: number) => svg('<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19 13 11"/>', s),
  metro: (s?: number) => svg('<rect x="5" y="3.5" width="14" height="14" rx="3"/><path d="M5 11.5h14M9 20.5l1.5-3M15 20.5l-1.5-3"/><circle cx="9" cy="14.5" r=".6"/><circle cx="15" cy="14.5" r=".6"/>', s),
}
