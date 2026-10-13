// DONNÉES D'EXEMPLE: à remplacer par les données réelles du garage
import type { FamilySlug } from './services'
import type { PartShape } from './parts'

export type ZoneId = 'entretien' | 'freinage' | 'moteur-distribution' | 'embrayage-boite' | 'echappement-fap' | 'pneus-suspension'

export interface BenchPart {
  label: string
  shape: PartShape
  wornNote: string
  /** la pièce qui porte l’étiquette jaune « usé » */
  tagged?: boolean
}

export interface Family {
  slug: FamilySlug
  name: string
  /** nom de la zone sur le dessin de la voiture */
  zoneLabel: string
  zone: ZoneId | null
  intro: string
  whatItDoes: string
  signs: string[]
  checks: string[]
  shown: string
  bench: BenchPart[]
  /** réf. aux ids de faq.ts pour l’extrait de FAQ */
  faqHint: string
}

export const families: Family[] = [
  {
    slug: 'entretien',
    name: 'Entretien',
    zoneLabel: 'Refroidissement et entretien',
    zone: 'entretien',
    intro:
      'Révision, vidange, filtres, bougies, liquides: l’entretien régulier évite la plupart des grosses factures. Nous suivons votre carnet et nous vous disons ce qui peut attendre.',
    whatItDoes:
      'L’huile lubrifie le moteur, les filtres protègent ce qu’il respire et ce qu’il boit, le liquide de refroidissement évite la surchauffe. Quand l’un d’eux est fatigué, c’est tout le reste qui s’use plus vite.',
    signs: [
      'Le voyant d’huile ou de température s’allume',
      'La consommation de carburant grimpe sans raison',
      'Le moteur chauffe plus vite que d’habitude',
      'Des démarrages plus difficiles, surtout par temps froid',
      'La dernière révision date de plus de deux ans ou de 20 000 km',
    ],
    checks: [
      'Niveau et état de l’huile, date du dernier remplacement',
      'Filtres à huile, à air, d’habitacle et à carburant',
      'Liquide de refroidissement et de frein',
      'Bougies d’allumage ou de préchauffage',
      'Balais d’essuie-glaces, éclairage, batterie',
    ],
    shown: 'Le filtre qui sort, avec celui qui entre, côte à côte, et l’huile dans un récipient transparent.',
    bench: [
      { label: 'Filtre à air saturé', shape: 'filter', wornNote: 'plis noircis', tagged: true },
      { label: 'Durite poreuse', shape: 'hose', wornNote: 'fissures fines' },
      { label: 'Bougie encrassée', shape: 'plug', wornNote: 'suie sur l’électrode' },
    ],
    faqHint: 'entretien',
  },
  {
    slug: 'freinage',
    name: 'Freinage',
    zoneLabel: 'Freins',
    zone: 'freinage',
    intro:
      'Plaquettes, disques, liquide de frein: c’est la sécurité avant tout. Nous mesurons l’usure et nous vous montrons ce qui reste de la plaquette avant de proposer quoi que ce soit.',
    whatItDoes:
      'Quand vous freinez, l’étrier serre les plaquettes contre le disque. La friction ralentit la roue. Une plaquette usée ou un disque voilé allonge la distance d’arrêt.',
    signs: [
      'Un grincement ou un sifflement au freinage',
      'La pédale est molle ou descend plus bas que d’habitude',
      'Le volant vibre quand vous freinez',
      'La voiture tire d’un côté au freinage',
      'Le voyant de frein reste allumé',
    ],
    checks: [
      'Épaisseur des plaquettes avant et arrière',
      'État des disques: rayures, voile, rebord d’usure',
      'Niveau et âge du liquide de frein',
      'Étrier, flexibles et fuites éventuelles',
      'Essai sur route pour contrôler la tenue au freinage',
    ],
    shown: 'La plaquette usée à côté d’une neuve, pour voir ce qu’il reste de garniture.',
    bench: [
      { label: 'Plaquette glacée', shape: 'pad', wornNote: 'garniture lisse et fine', tagged: true },
      { label: 'Disque voilé', shape: 'disc', wornNote: 'rebord et rainures' },
      { label: 'Flexible de frein', shape: 'hose', wornNote: 'craquelures' },
    ],
    faqHint: 'frein',
  },
  {
    slug: 'moteur-distribution',
    name: 'Moteur et distribution',
    zoneLabel: 'Moteur et distribution',
    zone: 'moteur-distribution',
    intro:
      'Courroie de distribution, injecteurs, démarreur, mise au point, décalaminage: nous cherchons la cause avant de remplacer, et nous réparons quand c’est raisonnable.',
    whatItDoes:
      'La distribution synchronise le haut et le bas du moteur. Si la courroie casse, les soupapes peuvent heurter les pistons. Les injecteurs dosent le carburant, le démarreur lance le moteur.',
    signs: [
      'Un claquement ou un sifflement près de la courroie',
      'Le moteur tourne irrégulièrement au ralenti',
      'Des à-coups ou un manque de puissance',
      'Le voyant moteur orange clignote',
      'Une fumée anormale à l’échappement',
    ],
    checks: [
      'Lecture des codes défaut avec la valise de diagnostic',
      'État et tension de la courroie, des galets et de la pompe à eau',
      'Fuites d’huile ou de liquide de refroidissement',
      'Bougies, injecteurs, admission',
      'Compte-rendu écrit des constats avant le devis',
    ],
    shown: 'La courroie sortie, dépliée pour voir les craquelures, et le galet qui accroche.',
    bench: [
      { label: 'Courroie craquelée', shape: 'belt', wornNote: 'dents fissurées', tagged: true },
      { label: 'Galet tendeur bruyant', shape: 'pulley', wornNote: 'jeu et bruit' },
      { label: 'Injecteur fuyard', shape: 'plug', wornNote: 'dépôts et suintement' },
    ],
    faqHint: 'distribution',
  },
  {
    slug: 'embrayage-boite',
    name: 'Embrayage et boîte',
    zoneLabel: 'Embrayage et boîte',
    zone: 'embrayage-boite',
    intro:
      'Embrayage, boîte de vitesses, cardans, vidange de boîte automatique: nous isolons la vraie panne avant de démonter, parce que le démontage coûte cher.',
    whatItDoes:
      'L’embrayage relie le moteur à la boîte quand vous lâchez la pédale. La boîte choisit le rapport, les cardans transmettent la force aux roues.',
    signs: [
      'Le moteur monte dans les tours sans que la voiture accélère',
      'La pédale est dure ou remonte lentement',
      'Les vitesses craquent ou refusent de passer',
      'Un claquement en braquant à bas régime',
      'Une odeur de brûlé après une côte ou un démarrage en pente',
    ],
    checks: [
      'Course et garde de la pédale d’embrayage',
      'Niveau et état de l’huile de boîte',
      'Cardans, soufflets et silent-blocs de boîte',
      'Essai sur route en charge',
      'Poursuite du diagnostic si un outil spécifique à la marque manque',
    ],
    shown: 'Le disque d’embrayage usé: la garniture, le rivet, la tranche.',
    bench: [
      { label: 'Disque d’embrayage usé', shape: 'clutch', wornNote: 'garniture brûlée', tagged: true },
      { label: 'Butée d’embrayage', shape: 'pulley', wornNote: 'roulement bruyant' },
      { label: 'Volant moteur', shape: 'disc', wornNote: 'surface marquée' },
    ],
    faqHint: 'embrayage',
  },
  {
    slug: 'echappement-fap',
    name: 'Échappement et FAP',
    zoneLabel: 'Échappement et FAP',
    zone: 'echappement-fap',
    intro:
      'Silencieux, ligne d’échappement, filtre à particules, vanne EGR: nous traitons le filtre quand c’est possible et nous ne le remplaçons qu’en dernier recours.',
    whatItDoes:
      'La ligne d’échappement évacue et filtre les gaz. Le FAP retient les particules des diesels, la vanne EGR en recycle une part. Les trajets courts les encrassent.',
    signs: [
      'Le voyant FAP ou moteur s’allume',
      'Une perte de puissance, le moteur passe en mode dégradé',
      'Une fumée noire, blanche ou bleue',
      'Un bruit d’échappement qui a changé',
      'Une consommation d’huile ou de carburant en hausse',
    ],
    checks: [
      'Lecture des paramètres du FAP et de la vanne EGR',
      'Pression différentielle et état des capteurs',
      'Fixations, silencieux, joints de la ligne',
      'Possibilité de nettoyage ou de régénération avant remplacement',
      'Essai sur route après intervention',
    ],
    shown: 'Le FAP colmaté, coupé en deux sur l’établi quand c’est possible, ou la suie recueillie.',
    bench: [
      { label: 'FAP colmaté', shape: 'filter', wornNote: 'canaux bouchés', tagged: true },
      { label: 'Vanne EGR encrassée', shape: 'hose', wornNote: 'dépôts noirs' },
      { label: 'Sonde de température', shape: 'plug', wornNote: 'encrassée' },
    ],
    faqHint: 'fap',
  },
  {
    slug: 'pneus-suspension',
    name: 'Pneus et suspension',
    zoneLabel: 'Pneus et suspension',
    zone: 'pneus-suspension',
    intro:
      'Pneus, crevaison, amortisseurs, silent-blocs, géométrie: ce qui touche la route. Nous lisons l’usure du pneu pour comprendre le problème de suspension.',
    whatItDoes:
      'Les pneus transmettent tout ce que fait la voiture au sol. Les amortisseurs maintiennent le contact, les silent-blocs absorbent les chocs et les vibrations.',
    signs: [
      'Un pneu qui s’use d’un seul côté',
      'La voiture tire ou le volant n’est plus droit',
      'Des rebonds après un dos-d’âne',
      'Un claquement sourd sur les bosses',
      'Une fuite d’huile sur la tige d’amortisseur',
    ],
    checks: [
      'Profondeur des sculptures et pression',
      'Amortisseurs: fuite, rebond, bruit',
      'Silent-blocs, rotules, biellettes',
      'Parallélisme et équilibrage des roues',
      'Réparation de crevaison quand elle est possible et sûre',
    ],
    shown: 'Le pneu usé en bordure et l’amortisseur qui suinte, avec la trace d’huile.',
    bench: [
      { label: 'Pneu usé en bordure', shape: 'tyre', wornNote: 'épaule lisse', tagged: true },
      { label: 'Amortisseur fuyard', shape: 'shock', wornNote: 'trace d’huile' },
      { label: 'Silent-bloc fendu', shape: 'pulley', wornNote: 'caoutchouc fendu' },
    ],
    faqHint: 'pneu',
  },
  {
    slug: 'hybride-gpl',
    name: 'Hybride et GPL',
    zoneLabel: 'Hybride et GPL',
    zone: null,
    intro:
      'Votre voiture est hybride ou roule au GPL? Elle a un suivi complet chez nous: entretien du moteur thermique, freinage adapté, circuit de gaz, diagnostic.',
    whatItDoes:
      'Une hybride alterne moteur thermique et électrique; le freinage récupère de l’énergie. Une voiture GPL ajoute un réservoir, un détendeur et des injecteurs de gaz à contrôler.',
    signs: [
      'Le moteur thermique démarre plus souvent ou vibre',
      'Le basculement essence vers GPL ne se fait plus',
      'Une odeur de gaz (arrêtez-vous, aérez, puis appelez)',
      'Un voyant d’alerte hybride ou moteur',
      'Des freins qui grincent sans freiner souvent',
    ],
    checks: [
      'Entretien du moteur thermique et des filtres',
      'Filtre GPL, flexibles, étanchéité du circuit',
      'Réglage du détendeur et du basculement',
      'Freinage: usure et corrosion liées à la récupération',
      'Diagnostic électronique, avec renvoi vers un confrère si l’outil de la marque manque',
    ],
    shown: 'Le filtre GPL encrassé et le flexible fatigué, avec leur remplaçant.',
    bench: [
      { label: 'Filtre GPL saturé', shape: 'filter', wornNote: 'résidus', tagged: true },
      { label: 'Flexible fatigué', shape: 'hose', wornNote: 'raideur et fissures' },
      { label: 'Bougie usée', shape: 'plug', wornNote: 'électrode érodée' },
    ],
    faqHint: 'hybride',
  },
]

export const familyBySlug = (slug: string) => families.find((f) => f.slug === slug)
export const familyByZone = (zone: ZoneId) => families.find((f) => f.zone === zone)
