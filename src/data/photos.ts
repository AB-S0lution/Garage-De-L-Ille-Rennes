// Photos d'illustration Unsplash (licence Unsplash), pas des photos du commerce.
// Sample data: à remplacer par de vraies photos du garage (avec accord) quand elles existeront.

export type PhotoTag = 'atelier' | 'moteur' | 'freinage' | 'pneus' | 'entretien' | 'outils' | 'pièces' | 'diagnostic'

export interface Photo {
  slug: string
  src: string
  alt: string
  credit: string
  url: string
  width: number
  height: number
  tag: PhotoTag
}

const base = import.meta.env.BASE_URL
const p = (slug: string, id: string, alt: string, credit: string, tag: PhotoTag, width: number, height: number): Photo => ({
  slug,
  src: `${base}photos/${slug}.jpg`,
  alt,
  credit,
  url: `https://unsplash.com/photos/${id}`,
  width,
  height,
  tag,
})

export const photos: Photo[] = [
  p('moteur-atelier', 'UZUzvJEvKnI', 'Mécanicien penché sur un compartiment moteur ouvert', 'Sten Rademaker', 'atelier', 1200, 1800),
  p('controle-moteur', 'bEGTsOCnHro', 'Contrôle du compartiment moteur, capot levé', 'Kate Ibragimova', 'atelier', 1200, 675),
  p('pneu-atelier', '9uHal2Dd9aE', 'Démontage d’une roue dans un atelier', 'Jimmy Nilsson Masth', 'pneus', 1200, 800),
  p('bloc-moteur', 'xe-e69j6-Ds', 'Bloc moteur vu de près, durites et carters', 'Chad Kirchoff', 'moteur', 1200, 675),
  p('appoint-huile', 'uhuTo7u8VXk', 'Vidange : filtre à huile usagé déposé sous le véhicule, main gantée', 'Jimmy Nilsson Masth', 'entretien', 1200, 800),
  p('cle-mains', 'Fd6osyVbtG4', 'Mains tachées de graisse, une clé plate sur le moteur', 'Christian Buehner', 'atelier', 1200, 900),
  p('caisse-outils', 'OegFhZfw6Ok', 'Caisse à outils remplie de clés', 'Isabela Kronemberger', 'outils', 1000, 1500),
  p('capot-ouvert', 's4d_ESS0ylA', 'Contrôle de la boîte à fusibles sous le capot ouvert', 'Maxim Hopman', 'moteur', 1200, 800),
  p('suv-atelier', 'iFQpqbLMOFU', 'Mécanicien sous le capot levé d’un 4x4, dans la baie de l’atelier', 'Kate Ibragimova', 'atelier', 1200, 1200),
  p('voiture-atelier', 'PwI7BA_J06k', 'Berline grise levée sur un pont, capot ouvert', 'SL Autowerkes', 'atelier', 1200, 800),
  p('compte-tours', 'HUJDz6CJEaM', 'Compte-tours à aiguille, gros plan', 'Chris Liverani', 'diagnostic', 1200, 873),
  p('frein-gros-plan', 'ii4XEyJEm_I', 'Étrier et disque de frein derrière la jante', 'Toby Hall', 'freinage', 1200, 798),
  p('roue-detail', '_ssyufaEVQc', 'Moyeu et disque de frein, en noir et blanc', 'Karan Suthar', 'pneus', 1200, 1200),
  p('systeme-freinage', 'EpT-ZetoKm8', 'Disque ventilé et étrier de frein', 'Erik Mclean', 'freinage', 1200, 802),
  p('disque-metal', 'fwnTOncjeB0', 'Disque et étrier de frein, roue déposée', 'The DK Photography', 'pièces', 1200, 1600),
  p('mecanicien-moteur', 'XP8o9_Arwqg', 'Mécanicien au travail sur un moteur à l’atelier', 'Dextar Studio', 'moteur', 1200, 800),
  p('voiture-pont', 'Hv_gKPOXmwE', 'Voiture levée sur un pont élévateur', 'KC Shum', 'atelier', 1000, 1351),
  p('pieces-etagere', 'wbTSsGuz2Q8', 'Pièces moteur rangées sur une étagère', 'Tahamie Farooqui', 'pièces', 1200, 800),
  p('piece-etabli', 'WFo6cCRHLx8', 'Pièces mécaniques posées sur l’établi', 'Tahamie Farooqui', 'pièces', 1200, 800),
  p('sous-vehicule', 'K5624F8cipE', 'Intervention sous un véhicule', 'Tahamie Farooqui', 'atelier', 1200, 800),
  p('pieces-vrac', '4PBdZDGrpSQ', 'Pièces métalliques déposées, en attente de tri', 'Tahamie Farooqui', 'pièces', 1200, 1800),
  p('reserve-pieces', 'QSpMo5wfipY', 'Réserve de pièces et d’outillage', 'Tahamie Farooqui', 'outils', 1000, 1500),
  p('travail-atelier', 'KhF58h0hTbc', 'Travail à la machine dans un garage', 'Kato Blackmore', 'atelier', 1200, 800),
  p('piles-pneus', 'WHPOFFzY9gU', 'Piles de pneus en stock', 'Robert Laursoo', 'pneus', 1200, 800),
  p('jante-pneu', '9e_ssIz4jB4', 'Jante et pneu, vue de profil', 'Mason Jones', 'pneus', 1200, 800),
  p('stock-pneus', 'vVLrfAzmWYw', 'Pneus empilés dans une réserve', 'Imthaz Ahamed', 'pneus', 1200, 675),
  p('sculpture-pneu', 'tLEUi4OaQmQ', 'Sculpture d’un pneu en gros plan', 'Yvette S', 'pneus', 1200, 800),
  p('rangee-pneus', 'ud0twV98uvg', 'Rangées de pneus neufs', 'Goh Rhy Yan', 'pneus', 1200, 900),
  p('pneu-voiture', 'NtIiXdqkMyE', 'Pneu monté sur une voiture, gros plan', 'Philip Blank', 'pneus', 1200, 800),
  p('tableau-bord', 'MbiSXN8u8q4', 'Combiné d’instruments numérique derrière le volant', 'Dennis Eusebio', 'diagnostic', 1200, 801),
  p('pieces-moteur', 'KxeFuXta4SE', 'Mécanicien au travail sur un moteur déposé, à l’atelier', 'Aaron Huber', 'pièces', 1200, 900),
]

export const photoBySlug = (slug: string): Photo => photos.find((x) => x.slug === slug) ?? photos[0]
export const PHOTO_NOTE = 'Photo d’illustration'

/** Deux photos d'illustration par famille de travaux (cartes de prestations, pages famille). */
export const familyPhotos: Record<string, [string, string]> = {
  entretien: ['appoint-huile', 'caisse-outils'],
  freinage: ['frein-gros-plan', 'systeme-freinage'],
  'moteur-distribution': ['bloc-moteur', 'mecanicien-moteur'],
  'embrayage-boite': ['voiture-pont', 'piece-etabli'],
  'echappement-fap': ['sous-vehicule', 'pieces-vrac'],
  'pneus-suspension': ['jante-pneu', 'piles-pneus'],
  'hybride-gpl': ['capot-ouvert', 'tableau-bord'],
}
export const familyPhoto = (family: string, i = 0): Photo => photoBySlug((familyPhotos[family] ?? ['moteur-atelier', 'cle-mains'])[i % 2])
