// DONNÉES D'EXEMPLE: à remplacer par les données réelles du garage

import type { FamilySlug } from './services'

export interface CaseNote {
  id: string
  title: string
  family: FamilySlug
  car: string
  symptom: string
  found: string
  shown: string
  done: string
  notDone?: string
  mock: boolean
  realStory?: boolean
}

export const cases: CaseNote[] = [
  {
    id: 'filtre-a-particules-sauve',
    title: 'Un filtre à particules sauvé',
    family: 'echappement-fap',
    car: 'Une compacte diesel de la fin des années 2000',
    symptom: 'Le voyant du filtre à particules était allumé en permanence et la voiture manquait de puissance.',
    found: 'Le filtre était colmaté par les suies, mais il n’était pas détruit. Un concessionnaire avait annoncé un remplacement autour de 1 600 euros.',
    shown: 'Le filtre démonté, avec ses canaux noirs de suie, et le même filtre après traitement.',
    done: 'En 2017, un client de notre garage de Chantepie est venu avec cette compacte diesel. Nous avons traité le filtre au lieu de le remplacer, pour 285 euros. La voiture a retrouvé sa puissance et le voyant s’est éteint. Cas ancien, ce n’est pas un tarif actuel.',
    notDone: 'Nous n’avons pas remplacé le filtre à particules.',
    mock: false,
    realStory: true,
  },
  {
    id: 'plaquettes-glacees-disques-gardes',
    title: 'Des plaquettes changées, des disques gardés',
    family: 'freinage',
    car: 'Une citadine essence',
    symptom: 'Un grincement aigu à chaque freinage, surtout à basse vitesse.',
    found: 'Les plaquettes avant étaient usées jusqu’au témoin et leur surface était durcie. Les disques étaient encore dans la limite d’épaisseur.',
    shown: 'Une plaquette glacée côte à côte avec une plaquette neuve, et la mesure d’épaisseur du disque.',
    done: 'Nous avons remplacé les plaquettes avant, nettoyé et graissé les coulisses de l’étrier, puis contrôlé le liquide de frein.',
    notDone: 'Nous n’avons pas changé les disques, qui restaient bons.',
    mock: true,
  },
  {
    id: 'galet-tendeur-bruyant',
    title: 'Un bruit de moteur qui venait d’un galet',
    family: 'moteur-distribution',
    car: 'Une berline diesel',
    symptom: 'Un grincement régulier au démarrage, qui s’atténue quand le moteur chauffe.',
    found: 'Le roulement du galet tendeur de la courroie d’accessoires avait du jeu. La courroie, elle, était encore souple et sans fissure.',
    shown: 'Le galet qui tourne en accrochant, et la courroie intacte.',
    done: 'Nous avons remplacé le galet seul, puis réglé la tension de la courroie et vérifié que le bruit avait disparu à froid.',
    notDone: 'Nous n’avons pas changé l’alternateur, que le client craignait d’avoir à payer.',
    mock: true,
  },
  {
    id: 'embrayage-qui-patine',
    title: 'Un embrayage qui patine en côte',
    family: 'embrayage-boite',
    car: 'Une compacte GPL',
    symptom: 'Le moteur montait dans les tours sans que la voiture suive, surtout en côte et en charge.',
    found: 'La garniture du disque d’embrayage était très amincie. Le volant moteur était sain, sans trace de chauffe excessive.',
    shown: 'Le disque usé à côté d’un disque neuf, pour comparer l’épaisseur.',
    done: 'Nous avons remplacé le kit d’embrayage complet (disque, mécanisme et butée), puis vérifié la commande et le réglage de la pédale.',
    notDone: 'Nous avons gardé le volant moteur, qui n’avait pas besoin d’être changé.',
    mock: true,
  },
  {
    id: 'vanne-egr-nettoyee',
    title: 'Une vanne EGR nettoyée plutôt que remplacée',
    family: 'echappement-fap',
    car: 'Un SUV diesel',
    symptom: 'Le voyant moteur orange était allumé et la voiture avait des trous à basse vitesse.',
    found: 'Le clapet de la vanne EGR était bloqué par une croûte de suie. La vanne, elle, bougeait librement une fois nettoyée.',
    shown: 'La vanne démontée avec la suie, puis nettoyée.',
    done: 'Nous avons nettoyé la vanne et le conduit, effacé le défaut et fait un essai sur route pour vérifier que le voyant ne revenait pas.',
    notDone: 'Nous n’avons pas remplacé la vanne, qui fonctionnait encore.',
    mock: true,
  },
  {
    id: 'pneus-uses-en-bordure',
    title: 'Des pneus usés d’un seul côté',
    family: 'pneus-suspension',
    car: 'Une berline essence',
    symptom: 'La voiture tirait légèrement à droite et le volant n’était pas droit en ligne droite.',
    found: 'Les deux pneus avant étaient lisses sur le bord extérieur, et une rotule présentait du jeu.',
    shown: 'Le pneu usé sur l’épaule, et la rotule qui bougeait à la main.',
    done: 'Nous avons remplacé la rotule et les deux pneus avant, puis réglé le parallélisme.',
    notDone: 'Nous n’avons pas changé les pneus arrière, encore en bon état.',
    mock: true,
  },
  {
    id: 'gpl-qui-ne-bascule-pas',
    title: 'Un GPL qui ne basculait plus',
    family: 'hybride-gpl',
    car: 'Une citadine GPL',
    symptom: 'La voiture restait à l’essence et ne passait plus au gaz, même moteur chaud.',
    found: 'Le filtre GPL était encrassé et laissait mal passer le gaz. Le détendeur était propre à l’intérieur.',
    shown: 'Le filtre GPL sali, à côté d’un neuf.',
    done: 'Nous avons remplacé le filtre GPL, contrôlé les raccords au détecteur de fuite et vérifié le basculement sur route.',
    notDone: 'Nous n’avons pas remplacé le détendeur, qui n’était pas en cause.',
    mock: true,
  },
  {
    id: 'freins-hybride-qui-grincent',
    title: 'Des freins d’hybride qui grincent',
    family: 'hybride-gpl',
    car: 'Une berline hybride',
    symptom: 'Un grincement léger aux premiers freinages de la journée, et une sensation de frein un peu rugueuse.',
    found: 'Les plaquettes étaient encore épaisses, mais elles avaient peu servi et leur surface était rouillée. Les coulisses d’étrier étaient sèches.',
    shown: 'Le disque avec une couche de rouille de surface, et la coulisse sèche avant nettoyage.',
    done: 'Nous avons nettoyé les disques, graissé les coulisses d’étrier et remplacé le liquide de frein qui avait vieilli.',
    notDone: 'Nous n’avons pas changé les plaquettes ni les disques, encore en bon état.',
    mock: true,
  },
  {
    id: 'durite-poreuse-fuite',
    title: 'Un niveau de liquide qui baissait',
    family: 'entretien',
    car: 'Une citadine essence',
    symptom: 'Une odeur sucrée après l’arrêt et un niveau de liquide de refroidissement qui baissait chaque semaine.',
    found: 'Une durite de chauffage suintait par de petites fissures. Le reste du circuit était étanche.',
    shown: 'La durite poreuse, gonflée et fissurée, et son emplacement sur le moteur.',
    done: 'Nous avons remplacé la durite, purgé le circuit et vérifié la pression. Nous avons montré les autres durites au client pour qu’il voie lesquelles pouvaient attendre.',
    notDone: 'Nous n’avons pas changé la pompe à eau, qui ne fuyait pas.',
    mock: true,
  },
]
