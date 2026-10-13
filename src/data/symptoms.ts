// DONNÉES D'EXEMPLE: à remplacer par les données réelles du garage

import type { FamilySlug } from './services'

export interface Symptom {
  id: string
  label: string
  family: FamilySlug
  causes: string[]
  urgency: 'surveiller' | 'bientôt' | 'rapidement'
  advice: string
}

export const symptoms: Symptom[] = [
  {
    id: 'grincement-freinage',
    label: 'Ça grince quand je freine',
    family: 'freinage',
    causes: [
      'Des plaquettes usées ou durcies',
      'Un disque rayé ou un peu rouillé après un long arrêt',
      'Un étrier qui ne glisse plus bien',
    ],
    urgency: 'bientôt',
    advice: 'Ne laissez pas traîner : un bruit de frein est un premier avertissement. Appelez-nous ou décrivez-nous le bruit, nous regarderons les freins rapidement.',
  },
  {
    id: 'pedale-molle',
    label: 'La pédale de frein est molle',
    family: 'freinage',
    causes: [
      'De l’air ou de l’humidité dans le liquide de frein',
      'Une fuite sur un flexible ou un étrier',
      'Un maître-cylindre fatigué',
    ],
    urgency: 'rapidement',
    advice: 'Roulez doucement, gardez de la distance et n’attendez pas : appelez-nous dès que possible pour nous décrire la pédale, nous vous dirons si elle peut attendre jusqu’au garage.',
  },
  {
    id: 'voyant-moteur-orange',
    label: 'Le voyant moteur orange est allumé',
    family: 'moteur-distribution',
    causes: [
      'Un capteur qui donne une mesure incorrecte',
      'Un allumage ou une injection qui a des ratés',
      'Un système de dépollution à vérifier',
    ],
    urgency: 'bientôt',
    advice: 'S’il reste fixe et que la voiture roule normalement, vous pouvez rouler prudemment jusqu’au garage. S’il clignote, ralentissez. Appelez-nous pour nous décrire ce que vous constatez.',
  },
  {
    id: 'voyant-fap',
    label: 'Le voyant du filtre à particules s’allume',
    family: 'echappement-fap',
    causes: [
      'Un filtre qui se remplit de suies après des trajets courts',
      'Un capteur de pression qui renvoie un mauvais signal',
      'Un additif ou une régénération qui ne se termine plus',
    ],
    urgency: 'bientôt',
    advice: 'Un trajet de 20 à 30 minutes sur route dégagée aide parfois le filtre à se nettoyer. Si le voyant revient, appelez-nous : traiter un filtre tôt coûte souvent moins cher que de le remplacer.',
  },
  {
    id: 'fumee-noire',
    label: 'Je vois de la fumée noire à l’échappement',
    family: 'echappement-fap',
    causes: [
      'Un mélange qui contient trop de carburant',
      'Un filtre à air saturé',
      'Un injecteur qui goutte ou une vanne qui s’encrasse',
    ],
    urgency: 'bientôt',
    advice: 'Un passage rapide au garage évite que le moteur consomme trop et que le filtre se bouche. Appelez-nous ou décrivez-nous quand la fumée apparaît (à froid, à l’accélération, en côte).',
  },
  {
    id: 'fumee-blanche',
    label: 'Il sort de la fumée blanche à l’échappement',
    family: 'moteur-distribution',
    causes: [
      'De la simple vapeur d’eau par temps froid, qui disparaît en quelques minutes',
      'Du liquide de refroidissement qui brûle dans le moteur',
      'Un niveau de liquide qui baisse sans fuite visible',
    ],
    urgency: 'rapidement',
    advice: 'Si la fumée reste épaisse une fois le moteur chaud, arrêtez-vous, regardez le niveau de liquide et appelez-nous avant de repartir. Décrivez-nous l’odeur et le moment où ça arrive.',
  },
  {
    id: 'fumee-bleue',
    label: 'Je vois de la fumée bleue',
    family: 'moteur-distribution',
    causes: [
      'De l’huile qui passe dans la chambre de combustion',
      'Des joints de soupapes fatigués',
      'Un moteur qui consomme de l’huile à cause de l’usure',
    ],
    urgency: 'bientôt',
    advice: 'Vérifiez le niveau d’huile et complétez si besoin. Appelez-nous pour en parler : nous verrons quoi contrôler en premier avant de vous parler de gros travaux.',
  },
  {
    id: 'a-coups-acceleration',
    label: 'Ça fait des à-coups quand j’accélère',
    family: 'moteur-distribution',
    causes: [
      'Une bougie ou une bobine fatiguée',
      'Un injecteur encrassé',
      'Un filtre à carburant ou à air encrassé',
    ],
    urgency: 'bientôt',
    advice: 'Notez si cela arrive à froid, à chaud ou en côte : ces détails nous font gagner du temps. Appelez-nous ou décrivez-nous la situation, nous verrons à quelle date nous pouvons regarder.',
  },
  {
    id: 'embrayage-patine',
    label: 'L’embrayage patine',
    family: 'embrayage-boite',
    causes: [
      'Un disque d’embrayage usé',
      'Un mécanisme qui ne serre plus assez',
      'De l’huile qui a taché la garniture',
    ],
    urgency: 'bientôt',
    advice: 'Évitez les fortes accélérations et les côtes avec une remorque. Appelez-nous : nous vous dirons ce que nous pouvons contrôler avant de parler de remplacement.',
  },
  {
    id: 'vitesses-craquent',
    label: 'Les vitesses craquent ou accrochent',
    family: 'embrayage-boite',
    causes: [
      'Une commande d’embrayage qui ne débraye plus à fond',
      'Une huile de boîte fatiguée',
      'Un synchroniseur usé',
    ],
    urgency: 'bientôt',
    advice: 'Dites-nous quelle vitesse pose problème et si c’est à froid ou à chaud. Appelez-nous ou décrivez-nous le problème, nous vous donnerons un premier avis avant toute réparation.',
  },
  {
    id: 'claquement-braquage',
    label: 'Ça claque quand je braque',
    family: 'embrayage-boite',
    causes: [
      'Un cardan fatigué ou un soufflet déchiré',
      'Une rotule ou un roulement qui a du jeu',
      'Une fixation de roue mal serrée',
    ],
    urgency: 'bientôt',
    advice: 'Si le bruit s’aggrave ou si le volant devient flou, évitez de rouler longtemps. Appelez-nous : un soufflet change souvent seul si on réagit tôt.',
  },
  {
    id: 'vibration-volant',
    label: 'Le volant vibre',
    family: 'pneus-suspension',
    causes: [
      'Des roues mal équilibrées',
      'Un pneu déformé ou usé de travers',
      'Un disque de frein voilé, si cela arrive en freinant',
    ],
    urgency: 'surveiller',
    advice: 'Notez la vitesse à laquelle ça vibre et si cela change en freinant. Appelez-nous ou décrivez-nous vos observations, nous vous dirons ce que nous contrôlerons en premier.',
  },
  {
    id: 'vibration-110',
    label: 'Ça vibre vers 110 km/h',
    family: 'pneus-suspension',
    causes: [
      'Un équilibrage à refaire',
      'Une roue ou un pneu abîmé après un choc',
      'Une rotule ou un cardan fatigué',
    ],
    urgency: 'surveiller',
    advice: 'Ce n’est pas une urgence, mais cela use les pneus et la direction. Appelez-nous ou décrivez-nous ce que vous sentez : nous commencerons par les roues.',
  },
  {
    id: 'odeur-brule',
    label: 'Ça sent le brûlé',
    family: 'moteur-distribution',
    causes: [
      'De l’huile qui coule sur un élément chaud',
      'Un embrayage qui chauffe ou des freins qui frottent',
      'Un petit problème électrique',
    ],
    urgency: 'rapidement',
    advice: 'Si l’odeur est forte ou s’il y a de la fumée, arrêtez-vous dans un endroit sûr et coupez le moteur. Appelez-nous ensuite pour nous dire d’où vient l’odeur, nous vous conseillerons sur la suite.',
  },
  {
    id: 'sifflement-moteur',
    label: 'J’entends un sifflement du moteur',
    family: 'moteur-distribution',
    causes: [
      'Une courroie d’accessoires qui glisse',
      'Un tuyau d’air percé ou mal serré',
      'Un turbo qui commence à fatiguer',
    ],
    urgency: 'bientôt',
    advice: 'Dites-nous si le bruit change avec le régime ou apparaît seulement à froid. Appelez-nous ou décrivez-nous le sifflement : nous vous dirons ce que nous regarderons en premier.',
  },
  {
    id: 'surchauffe',
    label: 'Le moteur chauffe',
    family: 'moteur-distribution',
    causes: [
      'Un niveau de liquide de refroidissement trop bas',
      'Un ventilateur ou un thermostat qui ne fonctionne plus',
      'Une fuite sur une durite ou sur la pompe à eau',
    ],
    urgency: 'rapidement',
    advice: 'Arrêtez-vous dès que possible et coupez le moteur. N’ouvrez pas le bouchon à chaud. Appelez-nous : nous verrons comment vous aider à rejoindre le garage sans abîmer le moteur.',
  },
  {
    id: 'demarrage-froid',
    label: 'Elle démarre mal à froid',
    family: 'entretien',
    causes: [
      'Une batterie qui faiblit',
      'Des bougies de préchauffage fatiguées (diesel)',
      'Un filtre à carburant encrassé',
    ],
    urgency: 'bientôt',
    advice: 'Avant le plein hiver, c’est le bon moment pour regarder la batterie et les bougies. Appelez-nous ou décrivez-nous les démarrages difficiles et nous réserverons un créneau.',
  },
  {
    id: 'consommation-huile',
    label: 'Je dois remettre de l’huile souvent',
    family: 'moteur-distribution',
    causes: [
      'Des segments ou des joints de soupapes usés',
      'Une fuite d’huile externe (joint, carter)',
      'Un intervalle de vidange dépassé',
    ],
    urgency: 'bientôt',
    advice: 'Vérifiez le niveau toutes les deux ou trois semaines pour ne jamais rouler à sec. Appelez-nous : nous regarderons s’il y a une fuite visible avant de chercher plus loin.',
  },
  {
    id: 'voiture-tire',
    label: 'La voiture tire d’un côté',
    family: 'pneus-suspension',
    causes: [
      'Une pression différente d’un pneu à l’autre',
      'Un parallélisme déréglé',
      'Un frein qui accroche d’un côté',
    ],
    urgency: 'bientôt',
    advice: 'Contrôlez d’abord la pression de vos pneus. Si elle est bonne, appelez-nous ou décrivez-nous le problème : un réglage peut suffire, mais il faut regarder l’état des pneus.',
  },
  {
    id: 'bruit-roulement',
    label: 'Ça ronronne ou ça siffle quand je roule',
    family: 'pneus-suspension',
    causes: [
      'Un roulement de roue fatigué',
      'Un pneu usé de façon irrégulière',
      'Un frottement de frein léger',
    ],
    urgency: 'bientôt',
    advice: 'Si le bruit change quand vous prenez un virage, dites-le-nous : c’est un indice utile. Appelez-nous ou décrivez-nous le bruit, nous verrons quand regarder la roue concernée.',
  },
  {
    id: 'fuite-sous-voiture',
    label: 'Il y a une tache sous la voiture',
    family: 'entretien',
    causes: [
      'Du liquide de refroidissement (rose, vert ou orange)',
      'De l’huile moteur (brun ou noir)',
      'De l’eau de climatisation, tout à fait normale en été',
    ],
    urgency: 'bientôt',
    advice: 'Notez la couleur, l’odeur et l’endroit de la tache, et vérifiez les niveaux. Appelez-nous ou envoyez-nous une description : nous vous dirons si vous pouvez rouler sans risque.',
  },
  {
    id: 'batterie-faiblit',
    label: 'La batterie faiblit',
    family: 'entretien',
    causes: [
      'Une batterie en fin de vie',
      'Un alternateur qui recharge mal',
      'Un appareil qui reste allumé quand le moteur est coupé',
    ],
    urgency: 'bientôt',
    advice: 'Évitez d’attendre la panne : les premiers froids sont souvent fatals pour une batterie fatiguée. Appelez-nous, nous la testerons et nous vous dirons si elle peut encore tenir.',
  },
  {
    id: 'clim-sans-froid',
    label: 'La clim ne refroidit plus',
    family: 'entretien',
    causes: [
      'Un circuit qui a perdu du gaz par une petite fuite',
      'Un compresseur ou un ventilateur à contrôler',
      'Un filtre d’habitacle très encrassé',
    ],
    urgency: 'surveiller',
    advice: 'Ce n’est pas un souci de sécurité, mais mieux vaut chercher une fuite avant de recharger. Appelez-nous ou décrivez-nous le problème, nous vous proposerons un créneau.',
  },
  {
    id: 'pedale-embrayage-dure',
    label: 'La pédale d’embrayage est dure',
    family: 'embrayage-boite',
    causes: [
      'Un câble ou un récepteur d’embrayage fatigué',
      'Un mécanisme d’embrayage usé',
      'Un manque de graissage de la commande',
    ],
    urgency: 'bientôt',
    advice: 'Si la pédale reste au plancher ou se bloque, arrêtez-vous et appelez-nous. Sinon, décrivez-nous l’effort demandé : cela nous aide à préparer le rendez-vous.',
  },
  {
    id: 'perte-puissance',
    label: 'La voiture manque de puissance',
    family: 'moteur-distribution',
    causes: [
      'Un filtre à air ou à carburant encrassé',
      'Un turbo ou un capteur à vérifier',
      'Un échappement partiellement bouché',
    ],
    urgency: 'bientôt',
    advice: 'Évitez de forcer sur les routes de montagne ou en charge. Appelez-nous ou décrivez-nous quand la perte de puissance apparaît, nous verrons ce qui est le plus probable.',
  },
  {
    id: 'hybride-vibre-thermique',
    label: 'Mon hybride vibre quand le moteur thermique démarre',
    family: 'hybride-gpl',
    causes: [
      'Des supports moteur fatigués',
      'Une bougie ou un injecteur qui rate à froid',
      'Une huile moteur qui n’a pas été renouvelée à temps',
    ],
    urgency: 'surveiller',
    advice: 'Le moteur thermique d’une hybride démarre souvent : c’est normal, mais une vibration forte ne l’est pas. Appelez-nous ou décrivez-nous quand cela arrive.',
  },
  {
    id: 'gpl-ne-bascule-pas',
    label: 'Le GPL ne bascule pas',
    family: 'hybride-gpl',
    causes: [
      'Un filtre GPL encrassé',
      'Un détendeur qui ne chauffe pas assez',
      'Un réservoir presque vide ou une électrovanne à contrôler',
    ],
    urgency: 'surveiller',
    advice: 'La voiture roule à l’essence en attendant, ce qui laisse un peu de temps. Appelez-nous ou décrivez-nous le comportement, nous vous dirons quoi contrôler en premier.',
  },
  {
    id: 'odeur-gaz',
    label: 'Je sens une odeur de gaz',
    family: 'hybride-gpl',
    causes: [
      'Un raccord de l’installation GPL qui fuit',
      'Un joint ou un tuyau à contrôler',
      'Un remplissage qui a débordé',
    ],
    urgency: 'rapidement',
    advice: 'Arrêtez-vous en sécurité, coupez le moteur, aérez en ouvrant les portes et ne fumez pas. Éloignez-vous de la voiture, puis appelez-nous pour décrire ce que vous sentez. Si l’odeur est forte, appelez les secours.',
  },
]
