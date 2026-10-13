// Faits réels vérifiés (voir PLAN.md §1). Seuls les champs marqués "à confirmer" dépendent du propriétaire.
export const SITE = {
  name: 'Garage de l’Ille',
  legalName: 'GARAGE DE L ILLE',
  tagline: 'Votre partenaire automobile, au cœur des Gayeulles',
  phone: '06 24 87 37 40',
  phoneTel: '+33624873740',
  street: '2 rue de Jinan',
  zip: '35700',
  city: 'Rennes',
  quartier: 'Le Gast, Maurepas - Patton',
  lat: 48.12795,
  lng: -1.65555,
  siren: '539 728 154',
  siret: '539 728 154 00029',
  legalForm: 'SARL',
  naf: '45.20A',
  facebook: 'https://www.facebook.com/GarageDeLIlle/',
  osm: 'https://www.openstreetmap.org/way/558810805',
  gmaps:
    'https://www.google.com/maps/search/?api=1&query=Garage+de+l%27Ille+2+rue+de+Jinan+35700+Rennes',
  /** À confirmer avec le garage avant tout mailto (PLAN.md §13, point 3). */
  email: 'garage.de.l.ille@gmail.com',
  CONFIRMED_EMAIL: false,
  /** À confirmer: afficher les prénoms de l’équipe (PLAN.md §13, point 2). */
  CONFIRMED_TEAM_NAMES: false,
  /** À afficher uniquement après relecture des avis Fixter (PLAN.md §13, point 15). */
  SHOW_UNVERIFIED_REVIEWS: false,
  foundedYear: 2012,
  movedToRennes: 'avril 2023',
} as const

export const phoneHref = `tel:${SITE.phoneTel}`
