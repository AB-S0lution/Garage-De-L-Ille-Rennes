// Petits jeux de données réels ou d'exemple regroupés: process, histoire, accès, stats, équipe, réseau, quartier, marques, marques de voitures.
// DONNÉES D'EXEMPLE: à remplacer par les données réelles du garage (sauf mention "réel").

export interface ProcessStep {
  id: string
  title: string
  text: string
}

export const process: ProcessStep[] = [
  { id: 'appel', title: 'Vous appelez', text: 'Vous décrivez le problème, en vos mots. Nous notons, nous posons deux ou trois questions et nous proposons un rendez-vous.' },
  { id: 'diagnostic', title: 'Diagnostic', text: 'Nous cherchons la cause, pas seulement le symptôme: valise électronique, essai, contrôle visuel pièce par pièce.' },
  { id: 'explication', title: 'On vous explique, pièce à l’appui', text: 'La pièce abîmée est posée devant vous, à côté d’une neuve. Vous voyez ce que nous voyons.' },
  { id: 'devis', title: 'Devis, vous décidez', text: 'Un devis clair, gratuit, avec ce qui est urgent et ce qui peut attendre. Rien n’est fait sans votre accord.' },
  { id: 'reparation', title: 'Réparation', text: 'Nous réparons quand c’est raisonnable, nous remplaçons quand il le faut, avec des pièces de marques reconnues.' },
  { id: 'retour', title: 'On vous rend la voiture', text: 'Et la vieille pièce, si vous la voulez. Un point rapide sur ce qui a été fait et sur la suite.' },
]

export interface HistoryEvent {
  date: string
  place: string
  title: string
  text: string
  source: string
}

/** Réel: faits issus des registres officiels (PLAN.md §2). */
export const history: HistoryEvent[] = [
  { date: '6 février 2012', place: 'Chantepie', title: 'Création de la société', text: 'La SARL Garage de l’Ille est créée et immatriculée à Chantepie, au 20 avenue de la Grotte.', source: 'Registre des entreprises' },
  { date: '1er mars 2012', place: 'Chantepie', title: 'Début de l’activité', text: 'Le garage reprend le fonds d’un garage de la commune et commence à travailler.', source: 'BODACC' },
  { date: '2012 à 2023', place: 'Chantepie', title: 'Onze ans à Chantepie', text: 'Le garage se construit une réputation de proximité. Les premiers avis en ligne datent de 2017.', source: 'BODACC, avis Google' },
  { date: '3 avril 2023', place: 'Rennes', title: 'Installation à Rennes', text: 'Le garage reprend l’atelier du 2 rue de Jinan, à deux pas du métro B Les Gayeulles.', source: 'BODACC' },
  { date: 'Depuis avril 2023', place: 'Rennes', title: 'Au cœur des Gayeulles', text: 'Même équipe, même façon de travailler: expliquer, montrer la pièce, réparer plutôt que remplacer.', source: 'Avis clients' },
]

export interface AccessItem {
  mode: string
  detail: string
  distance: string
}

/** Réel (PLAN.md §1, distances approximatives OSM). */
export const access: AccessItem[] = [
  { mode: 'Métro B', detail: 'Station Les Gayeulles', distance: 'environ 220 m' },
  { mode: 'Bus', detail: 'Lignes 51, 70, 71, 14 et 83', distance: 'de 200 à 250 m' },
  { mode: 'Vélo', detail: 'Station Les Gayeulles, puis Joliot-Curie - Chateaubriand', distance: 'environ 220 à 500 m' },
  { mode: 'Voiture', detail: 'Rue de Fougères à environ 300 m, puis l’avenue de Rochester', distance: 'accès direct' },
  { mode: 'Accessibilité', detail: 'Stationnement adapté et entrée de plain-pied', distance: 'sur place' },
]

export interface Stat {
  id: string
  value: string
  label: string
  count?: { to: number; decimals?: number; prefix?: string; suffix?: string }
}

/** Réel uniquement (PLAN.md §11). */
export const stats: Stat[] = [
  { id: 'note', value: '4,9/5', label: 'sur Google, plus de 150 avis', count: { to: 4.9, decimals: 1 } },
  { id: 'depuis', value: '2012', label: 'garage créé à Chantepie, installé à Rennes depuis 2023', count: { to: 2012, decimals: 0 } },
  { id: 'metro', value: '220 m', label: 'du métro B Les Gayeulles', count: { to: 220, decimals: 0, suffix: ' m' } },
  { id: 'energies', value: '3', label: 'énergies suivies: thermique, hybride, GPL', count: { to: 3, decimals: 0 } },
]

export interface TeamRole {
  id: string
  role: string
  text: string
  firstName: string
}

/** Prénoms volontairement vides tant que le garage n’a pas donné son accord (PLAN.md §13, point 2). */
export const team: TeamRole[] = [
  { id: 'atelier', role: 'À l’atelier', text: 'Celui qui diagnostique, répare, et qui garde la pièce pour vous la montrer.', firstName: '' },
  { id: 'accueil', role: 'À l’accueil', text: 'Celle qui prend votre appel, note le problème, organise le planning et vous rend les clés.', firstName: '' },
]

/** Réel mais à confirmer par le propriétaire avant affichage (PLAN.md §0, §12). */
export const network = {
  name: 'Staff Auto',
  group: 'Autodistribution',
  since: null as string | null,
  showLogo: false,
  confirmedByOwner: false,
}
export const networkLine = () => (network.confirmedByOwner ? `Garage indépendant toutes marques, membre du réseau ${network.name}` : 'Garage indépendant toutes marques')

export interface Landmark {
  id: string
  name: string
  distance: string
  meters: number
  text: string
  source: string
  /** position sur le plan dessiné (0..100) */
  x: number
  y: number
}

/** Réel (PLAN.md §6). Positions du plan: schématiques, pas géographiques. */
export const quartier: Landmark[] = [
  { id: 'metro', name: 'Métro B, Les Gayeulles', distance: 'environ 220 m', meters: 220, text: 'La ligne B a ouvert en septembre 2022: le centre-ville est à une dizaine de minutes.', source: 'OSM, LesGarages', x: 74, y: 30 },
  { id: 'ateliers', name: 'Les Ateliers de Maurepas', distance: 'sur place', meters: 0, text: 'Des ateliers d’artisans créés avec le renouvellement du quartier. Le garage en fait partie.', source: 'rennes-maurepas.fr', x: 40, y: 62 },
  { id: 'jinan', name: 'Jardin de Jinan', distance: 'environ 560 m', meters: 560, text: 'Un jardin chinois de 3 600 m², ouvert en mai 2024, avec une cascade et un pavillon de thé.', source: 'unidivers.fr', x: 20, y: 24 },
  { id: 'gayeulles', name: 'Parc des Gayeulles', distance: 'environ 1 km', meters: 1000, text: 'Piscine, patinoire, parcours dans les arbres et ferme pédagogique.', source: 'OSM', x: 86, y: 78 },
  { id: 'marche', name: 'Marché du mardi', distance: 'à quelques centaines de mètres', meters: 500, text: 'Une quarantaine d’étals place Lucie-et-Raymond-Aubrac.', source: 'ville de Rennes', x: 58, y: 84 },
  { id: 'musee', name: 'Annexe du musée des Beaux-Arts', distance: 'dans le quartier', meters: 700, text: 'Au pied de La Banane, ouverte le 1er février 2025.', source: 'unidivers.fr', x: 12, y: 60 },
  { id: 'fougeres', name: 'Rue de Fougères', distance: 'environ 300 m', meters: 300, text: 'La grande artère au sud du garage.', source: 'OSM', x: 50, y: 96 },
  { id: 'gros-chene', name: 'Centre commercial du Gros-Chêne', distance: 'environ 800 m', meters: 800, text: 'Commerces et métro Gros-Chêne.', source: 'OSM', x: 28, y: 90 },
]

/** Réel: marques de pièces citées par le garage (PLAN.md §3). Texte seul, sans logo. */
export const brands: string[] = ['SKF', 'Valeo', 'Bosch', 'Purflux', 'Moog', 'Gates', 'Motrio']

/** Exemple: marques de voitures courantes en France, texte seul, sans logo. */
export const makes: string[] = [
  'Renault', 'Peugeot', 'Citroën', 'Dacia', 'DS', 'Volkswagen', 'Toyota', 'Ford', 'Opel', 'Fiat',
  'Nissan', 'Mercedes-Benz', 'BMW', 'Audi', 'Mini', 'Skoda', 'Seat', 'Kia', 'Hyundai', 'Suzuki',
  'Volvo', 'Mazda', 'Honda', 'Mitsubishi', 'Lancia', 'Alfa Romeo', 'Smart', 'Jeep',
]
