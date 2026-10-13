// DONNÉES D'EXEMPLE: à remplacer par les données réelles du garage

export interface Voyant {
  id: string
  name: string
  code: string
  color: 'rouge' | 'orange' | 'vert' | 'bleu'
  meaning: string
  action: string
}

export const voyants: Voyant[] = [
  {
    id: 'pression-huile',
    name: 'Pression d’huile',
    code: 'OIL',
    color: 'rouge',
    meaning: 'L’huile ne circule plus assez dans le moteur, ou son niveau est trop bas.',
    action: 'Arrêtez-vous dès que c’est possible et coupez le moteur. Ne repartez pas avant d’avoir vérifié le niveau, puis appelez-nous.',
  },
  {
    id: 'temperature-moteur',
    name: 'Température du moteur',
    code: 'TEMP',
    color: 'rouge',
    meaning: 'Le moteur chauffe trop. Cela peut venir d’un manque de liquide, d’un ventilateur ou d’une fuite.',
    action: 'Arrêtez-vous, coupez le moteur et laissez refroidir. N’ouvrez pas le bouchon à chaud. Appelez-nous avant de repartir.',
  },
  {
    id: 'batterie',
    name: 'Batterie et charge',
    code: 'BAT',
    color: 'rouge',
    meaning: 'La batterie ne se recharge plus correctement, souvent à cause de l’alternateur ou d’une courroie.',
    action: 'Éteignez ce qui n’est pas utile (chauffage, radio) et rejoignez un garage tant que la batterie tient. Appelez-nous si vous en avez besoin.',
  },
  {
    id: 'freins',
    name: 'Freins',
    code: 'BRK',
    color: 'rouge',
    meaning: 'Le frein à main est serré, ou bien le niveau de liquide de frein est trop bas, ou le circuit a un problème.',
    action: 'Vérifiez d’abord que le frein à main est desserré. Si le voyant reste allumé, ne roulez pas longtemps et appelez-nous.',
  },
  {
    id: 'airbag',
    name: 'Airbag',
    code: 'AIR',
    color: 'rouge',
    meaning: 'Le système de sécurité des airbags a détecté un défaut, ce qui peut empêcher leur déclenchement.',
    action: 'La voiture roule, mais la protection peut être réduite. Prenez rendez-vous rapidement pour faire lire le défaut.',
  },
  {
    id: 'abs',
    name: 'ABS',
    code: 'ABS',
    color: 'orange',
    meaning: 'Le système qui évite le blocage des roues au freinage ne fonctionne plus, souvent à cause d’un capteur.',
    action: 'Le freinage normal reste là, mais les roues peuvent se bloquer plus facilement. Roulez prudemment et appelez-nous.',
  },
  {
    id: 'esp',
    name: 'ESP (contrôle de trajectoire)',
    code: 'ESP',
    color: 'orange',
    meaning: 'Clignotant, il vous signale qu’il intervient. Fixe, il peut indiquer un défaut du système.',
    action: 'S’il clignote, levez le pied : la route est peut-être glissante. S’il reste fixe, appelez-nous pour le faire contrôler.',
  },
  {
    id: 'moteur-injection',
    name: 'Voyant moteur (injection)',
    code: 'ENG',
    color: 'orange',
    meaning: 'L’électronique a repéré une anomalie dans l’allumage, l’injection ou la dépollution.',
    action: 'Fixe, vous pouvez rouler doucement jusqu’au garage. Clignotant, ralentissez et appelez-nous : il vaut mieux ne pas insister.',
  },
  {
    id: 'fap',
    name: 'Filtre à particules (FAP)',
    code: 'FAP',
    color: 'orange',
    meaning: 'Le filtre à particules se remplit trop de suies et ne se nettoie plus assez bien.',
    action: 'Roulez 20 à 30 minutes sur route dégagée à vitesse stable. Si le voyant reste allumé, appelez-nous sans trop attendre.',
  },
  {
    id: 'prechauffage',
    name: 'Préchauffage diesel',
    code: 'PRE',
    color: 'orange',
    meaning: 'Allumé au démarrage, c’est normal : il chauffe le moteur. Allumé en roulant, il signale un défaut.',
    action: 'Attendez qu’il s’éteigne avant de démarrer. S’il reste allumé en roulant, appelez-nous, il y a peut-être un défaut sur les bougies.',
  },
  {
    id: 'pression-pneus',
    name: 'Pression des pneus',
    code: 'TPMS',
    color: 'orange',
    meaning: 'Un ou plusieurs pneus ont perdu de la pression, ou le capteur de pression ne répond plus.',
    action: 'Arrêtez-vous dès que possible et regardez vos pneus. Gonflez-les, ou passez nous voir pour une réparation de crevaison.',
  },
  {
    id: 'liquide-refroidissement',
    name: 'Niveau de liquide de refroidissement',
    code: 'COOL',
    color: 'orange',
    meaning: 'Le niveau de liquide du circuit de refroidissement est trop bas.',
    action: 'Le moteur étant froid, regardez le niveau dans le vase d’expansion. Si vous devez en remettre souvent, appelez-nous : il y a peut-être une fuite.',
  },
  {
    id: 'ceinture',
    name: 'Ceinture de sécurité',
    code: 'BELT',
    color: 'rouge',
    meaning: 'Une ceinture n’est pas bouclée, ou un siège est occupé sans ceinture attachée.',
    action: 'Bouclez toutes les ceintures. S’il reste allumé alors que tout le monde est attaché, un capteur est peut-être à vérifier.',
  },
  {
    id: 'feux-de-route',
    name: 'Feux de route',
    code: 'BEAM',
    color: 'bleu',
    meaning: 'Vos feux de route sont allumés.',
    action: 'Repassez en feux de croisement quand vous croisez quelqu’un ou que vous suivez un autre véhicule.',
  },
]
