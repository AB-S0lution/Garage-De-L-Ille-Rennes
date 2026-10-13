// DONNÉES D'EXEMPLE: à remplacer par les données réelles du garage

import type { FamilySlug } from './services'

export type PartShape =
  | 'disc'
  | 'pad'
  | 'belt'
  | 'pulley'
  | 'clutch'
  | 'plug'
  | 'filter'
  | 'tyre'
  | 'shock'
  | 'hose'

export interface Part {
  id: string
  name: string
  family: FamilySlug
  shape: PartShape
  failed: string
  sign: string
  done: string
  wornNote: string
}

export const parts: Part[] = [
  {
    id: 'plaquette-glacee',
    name: 'Plaquette glacée',
    family: 'freinage',
    shape: 'pad',
    failed: 'La garniture a durci et brillé à force de chauffer, elle n’accroche plus le disque comme avant.',
    sign: 'Ça grince au freinage et la voiture met plus de distance à s’arrêter.',
    done: 'Nous avons remplacé les plaquettes de l’essieu concerné et vérifié l’état des disques. Nous avons gardé les disques quand ils étaient encore dans la limite d’usure.',
    wornNote: 'bord usé et glacé',
  },
  {
    id: 'disque-voile',
    name: 'Disque de frein voilé',
    family: 'freinage',
    shape: 'disc',
    failed: 'Le disque s’est légèrement déformé sous la chaleur, sa surface n’est plus bien plate.',
    sign: 'Le volant ou la pédale vibre quand vous freinez à vitesse élevée.',
    done: 'Nous avons mesuré la déformation et l’épaisseur restante. Quand elle dépassait la limite, nous avons changé les deux disques du même essieu avec des plaquettes neuves.',
    wornNote: 'surface rayée et déformée',
  },
  {
    id: 'courroie-craquelee',
    name: 'Courroie craquelée',
    family: 'moteur-distribution',
    shape: 'belt',
    failed: 'Le caoutchouc a séché avec les années et les kilomètres, des fissures sont apparues sur les dents.',
    sign: 'Un sifflement au démarrage ou un bruit de frottement qui revient par temps humide.',
    done: 'Nous avons remplacé la courroie avec ses galets, au kilométrage conseillé par le carnet d’entretien. Nous avons montré les fissures avant de ranger la pièce.',
    wornNote: 'dents fissurées et sèches',
  },
  {
    id: 'galet-tendeur-bruyant',
    name: 'Galet tendeur bruyant',
    family: 'moteur-distribution',
    shape: 'pulley',
    failed: 'Le roulement à l’intérieur du galet s’est usé, il tourne avec du jeu et il fait du bruit.',
    sign: 'Un grincement ou un cliquetis régulier qui suit le régime du moteur.',
    done: 'Nous avons changé le galet seul quand la courroie était encore en bon état. Si la courroie était abîmée, nous avons remplacé l’ensemble.',
    wornNote: 'roulement qui accroche',
  },
  {
    id: 'pompe-eau-fuit',
    name: 'Pompe à eau qui fuit',
    family: 'moteur-distribution',
    shape: 'pulley',
    failed: 'Le joint de la pompe ne tient plus, le liquide de refroidissement suinte par l’axe.',
    sign: 'Des traces de liquide sous la voiture et un niveau qui baisse sans raison.',
    done: 'Nous avons remplacé la pompe, rempli et purgé le circuit. Quand la pompe est entraînée par la distribution, nous l’avons changée en même temps que la courroie.',
    wornNote: 'axe humide et corrodé',
  },
  {
    id: 'disque-embrayage-use',
    name: 'Disque d’embrayage usé',
    family: 'embrayage-boite',
    shape: 'clutch',
    failed: 'La garniture du disque s’est amincie jusqu’à ne plus pincer assez fort le volant moteur.',
    sign: 'Le moteur monte dans les tours sans que la voiture avance autant.',
    done: 'Nous avons remplacé le kit d’embrayage complet. Nous avons montré l’épaisseur restante de la garniture à côté d’un disque neuf.',
    wornNote: 'garniture lisse et amincie',
  },
  {
    id: 'butee-embrayage',
    name: 'Butée d’embrayage',
    family: 'embrayage-boite',
    shape: 'clutch',
    failed: 'Le petit roulement qui appuie sur l’embrayage est fatigué, il frotte et il chauffe.',
    sign: 'Un bruit de roulement qui disparaît quand vous appuyez sur la pédale.',
    done: 'Nous avons remplacé la butée avec le reste du kit, pour ne pas démonter la boîte deux fois.',
    wornNote: 'roulement bleui et bruyant',
  },
  {
    id: 'volant-bimasse',
    name: 'Volant moteur bi-masse',
    family: 'embrayage-boite',
    shape: 'disc',
    failed: 'Les ressorts à l’intérieur du volant ont pris du jeu, il n’amortit plus bien les secousses du moteur.',
    sign: 'Des claquements au ralenti ou des vibrations au démarrage et à l’arrêt du moteur.',
    done: 'Nous avons mesuré le jeu du volant au moment du changement d’embrayage. Nous ne l’avons remplacé que lorsque le jeu dépassait la limite.',
    wornNote: 'jeu et traces de chauffe',
  },
  {
    id: 'bougie-encrassee',
    name: 'Bougie encrassée',
    family: 'entretien',
    shape: 'plug',
    failed: 'Des dépôts noirs ont recouvert l’électrode, l’étincelle est devenue faible.',
    sign: 'Le moteur tousse au ralenti, démarre mal ou consomme plus.',
    done: 'Nous avons remplacé le jeu de bougies et regardé l’aspect de chacune, car il renseigne sur l’état du moteur.',
    wornNote: 'électrode noire et grasse',
  },
  {
    id: 'injecteur-fuyard',
    name: 'Injecteur fuyard',
    family: 'moteur-distribution',
    shape: 'plug',
    failed: 'L’injecteur n’envoie plus le carburant en fine pluie mais en jet, ou il goutte.',
    sign: 'Des à-coups, de la fumée et une odeur de carburant mal brûlé.',
    done: 'Nous avons testé les injecteurs un par un et remplacé seulement celui qui était défaillant. Les autres ont été nettoyés puis remontés.',
    wornNote: 'pointe encrassée et mouillée',
  },
  {
    id: 'fap-colmate',
    name: 'Filtre à particules colmaté',
    family: 'echappement-fap',
    shape: 'filter',
    failed: 'Les suies se sont accumulées plus vite qu’elles ne brûlent, le filtre ne laisse plus passer les gaz.',
    sign: 'Un voyant allumé, un manque de puissance et parfois une odeur de brûlé.',
    done: 'Nous avons d’abord essayé un traitement du filtre avant d’envisager un remplacement. Le remplacement n’a eu lieu que si le filtre était trop abîmé.',
    wornNote: 'canaux bouchés de suie',
  },
  {
    id: 'vanne-egr-encrassee',
    name: 'Vanne EGR encrassée',
    family: 'echappement-fap',
    shape: 'hose',
    failed: 'Une croûte de suie bloque la petite vanne qui renvoie une partie des gaz dans le moteur.',
    sign: 'Un voyant orange, un moteur qui manque de souffle ou des à-coups à basse vitesse.',
    done: 'Nous avons démonté la vanne, nettoyé les dépôts et vérifié qu’elle bougeait librement. Nous ne l’avons remplacée que si elle restait bloquée.',
    wornNote: 'clapet encroûté de suie',
  },
  {
    id: 'filtre-air-sature',
    name: 'Filtre à air saturé',
    family: 'entretien',
    shape: 'filter',
    failed: 'Le papier du filtre est plein de poussière, l’air passe mal vers le moteur.',
    sign: 'Une voiture moins vive à l’accélération et une consommation qui monte un peu.',
    done: 'Nous avons remplacé le filtre et nettoyé le boîtier. Nous avons montré l’ancien, qu’on voit tout de suite gris et épais.',
    wornNote: 'papier gris et poussiéreux',
  },
  {
    id: 'filtre-huile',
    name: 'Filtre à huile',
    family: 'entretien',
    shape: 'filter',
    failed: 'Le filtre est plein de particules d’usure et de boue, il a fini par laisser passer une huile sale.',
    sign: 'Aucun bruit : c’est justement un élément qu’on ne remarque pas sans le changer à temps.',
    done: 'Nous l’avons remplacé à chaque vidange, avec une huile adaptée à votre moteur.',
    wornNote: 'cartouche noire et lourde',
  },
  {
    id: 'pneu-use-bordure',
    name: 'Pneu usé en bordure',
    family: 'pneus-suspension',
    shape: 'tyre',
    failed: 'L’extérieur de la bande de roulement est lisse alors que le centre est encore sculpté.',
    sign: 'La voiture tire d’un côté ou le volant n’est plus tout à fait droit.',
    done: 'Nous avons contrôlé la géométrie et l’état des rotules avant de changer les pneus. Sans cela, les pneus neufs s’useraient de la même façon.',
    wornNote: 'épaule lisse et usée',
  },
  {
    id: 'amortisseur-fuyard',
    name: 'Amortisseur fuyard',
    family: 'pneus-suspension',
    shape: 'shock',
    failed: 'L’huile interne s’est échappée par le joint, l’amortisseur ne retient plus le mouvement de la roue.',
    sign: 'La voiture rebondit après une bosse et les pneus s’usent par plaques.',
    done: 'Nous avons remplacé les amortisseurs par paire, sur le même essieu, et contrôlé les coupelles et les butées.',
    wornNote: 'tige huileuse et poussiéreuse',
  },
  {
    id: 'silent-bloc-fendu',
    name: 'Silent-bloc fendu',
    family: 'pneus-suspension',
    shape: 'pad',
    failed: 'Le caoutchouc qui amortit une articulation s’est fendu, la pièce métallique bouge trop.',
    sign: 'Un bruit sourd sur les bosses et une direction un peu floue.',
    done: 'Nous avons remplacé le silent-bloc, ou le bras complet quand les deux ne se séparent pas.',
    wornNote: 'caoutchouc fendu et écrasé',
  },
  {
    id: 'rotule-jouee',
    name: 'Rotule jouée',
    family: 'pneus-suspension',
    shape: 'shock',
    failed: 'La rotule a pris du jeu, la roue ne reste plus parfaitement en place.',
    sign: 'Un claquement en roulant sur un sol irrégulier et un volant qui flotte.',
    done: 'Nous avons remplacé la rotule concernée puis contrôlé la géométrie, car elle bouge toujours un peu quand on change une pièce.',
    wornNote: 'jeu et soufflet déchiré',
  },
  {
    id: 'durite-poreuse',
    name: 'Durite poreuse',
    family: 'entretien',
    shape: 'hose',
    failed: 'Le caoutchouc a vieilli et laisse suinter le liquide de refroidissement par de petites fissures.',
    sign: 'Une odeur sucrée après l’arrêt et un niveau de liquide qui baisse.',
    done: 'Nous avons changé la durite et purgé le circuit. Nous avons regardé les autres durites au passage pour vous dire lesquelles pouvaient encore attendre.',
    wornNote: 'caoutchouc gonflé et fissuré',
  },
  {
    id: 'balai-essuie-glace',
    name: 'Balai d’essuie-glace',
    family: 'entretien',
    shape: 'belt',
    failed: 'La lame en caoutchouc a durci et ne suit plus la forme du pare-brise.',
    sign: 'Des traînées sur le pare-brise ou un bruit de frottement.',
    done: 'Nous avons changé les balais et vérifié la pression des bras. Parfois, le bras est trop faible et c’est lui qu’on remplace.',
    wornNote: 'lame dure et ondulée',
  },
  {
    id: 'soupape-detendeur-gpl',
    name: 'Soupape de détendeur GPL',
    family: 'hybride-gpl',
    shape: 'hose',
    failed: 'Une petite pièce du détendeur s’est encrassée et ne règle plus correctement l’arrivée du gaz.',
    sign: 'La voiture broute au gaz ou refuse de basculer sur le GPL.',
    done: 'Nous avons nettoyé le détendeur et remplacé le filtre avant d’envisager un remplacement complet.',
    wornNote: 'dépôts gras et collés',
  },
  {
    id: 'batterie-faible',
    name: 'Batterie fatiguée',
    family: 'entretien',
    shape: 'plug',
    failed: 'Elle ne garde plus sa charge, ses plaques intérieures sont usées.',
    sign: 'Le démarrage est lent, surtout le matin par temps froid.',
    done: 'Nous avons testé la batterie et la charge de l’alternateur. Nous avons nettoyé les cosses avant de proposer un remplacement.',
    wornNote: 'bornes ternes et oxydées',
  },
]
