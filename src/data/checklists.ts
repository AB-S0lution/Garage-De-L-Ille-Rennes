// DONNÉES D'EXEMPLE: à remplacer par les données réelles du garage

export interface ChecklistItem {
  label: string
  detail: string
}

export interface Checklist {
  id: 'hiver' | 'vacances' | 'controle-technique'
  title: string
  intro: string
  items: ChecklistItem[]
}

export const checklists: Checklist[] = [
  {
    id: 'hiver',
    title: 'Préparer sa voiture pour l’hiver',
    intro: 'Dix points à regarder avant les premiers froids. Vous pouvez en faire plusieurs vous-même en dix minutes, et nous nous occupons des autres.',
    items: [
      {
        label: 'Batterie',
        detail: 'Le froid révèle les batteries fatiguées. Si le démarrage devient lent, faites-la tester avant la panne.',
      },
      {
        label: 'Liquide de refroidissement',
        detail: 'Contrôlez le niveau et la protection contre le gel. Un liquide trop ancien protège moins bien.',
      },
      {
        label: 'Pneus',
        detail: 'Regardez la profondeur des sculptures et la pression. Un pneu usé adhère moins sur sol mouillé.',
      },
      {
        label: 'Essuie-glaces et lave-glace',
        detail: 'Changez les balais durcis et ajoutez un lave-glace adapté au froid.',
      },
      {
        label: 'Éclairage',
        detail: 'Demandez à quelqu’un de vérifier feux de croisement, feux de brouillard, stops et clignotants.',
      },
      {
        label: 'Freins',
        detail: 'Un bruit ou une pédale molle se règle mieux avant l’hiver que sur une route glissante.',
      },
      {
        label: 'Désembuage et chauffage',
        detail: 'Testez la soufflerie et le dégivrage de la lunette arrière. Un filtre d’habitacle encrassé aggrave la buée.',
      },
      {
        label: 'Bougies de préchauffage (diesel)',
        detail: 'Si le diesel démarre difficilement à froid, c’est souvent la première chose à contrôler.',
      },
      {
        label: 'Niveau d’huile',
        detail: 'Vérifiez-le moteur froid et à plat. Une huile propre démarre mieux quand il fait froid.',
      },
      {
        label: 'Équipement dans le coffre',
        detail: 'Gilet, triangle, grattoir, chiffon propre et couverture : cela ne prend pas de place et dépanne.',
      },
    ],
  },
  {
    id: 'vacances',
    title: 'Partir en vacances l’esprit tranquille',
    intro: 'Dix vérifications avant un long trajet. Si un point vous inquiète, appelez-nous quelques jours avant le départ pour réserver un créneau.',
    items: [
      {
        label: 'Niveaux',
        detail: 'Huile, liquide de refroidissement, lave-glace et liquide de frein : vérifiez qu’ils sont au bon niveau.',
      },
      {
        label: 'Pneus, roue de secours ou kit',
        detail: 'Contrôlez la pression à froid, la charge conseillée pour le voyage et l’état du kit anti-crevaison.',
      },
      {
        label: 'Freins',
        detail: 'Avec la voiture chargée, un frein fatigué se sent davantage. Faites-le contrôler avant de partir.',
      },
      {
        label: 'Batterie',
        detail: 'Une batterie fragile ne se manifeste pas toujours avant un long arrêt. Demandez-nous un test rapide.',
      },
      {
        label: 'Éclairage et signalisation',
        detail: 'Vérifiez tous les feux, les clignotants, les stops et la plaque éclairée.',
      },
      {
        label: 'Climatisation',
        detail: 'Si l’air est moins frais, mieux vaut le voir avant la chaleur et le trajet.',
      },
      {
        label: 'Essuie-glaces',
        detail: 'Une averse en route révèle vite un balai usé. Changez-les avant de partir.',
      },
      {
        label: 'Courroies et durites',
        detail: 'Un coup d’œil à l’état visible suffit souvent à repérer une fissure ou un suintement.',
      },
      {
        label: 'Papiers et trousse',
        detail: 'Carte grise, assurance, constat amiable, gilet, triangle et trousse de premiers secours.',
      },
      {
        label: 'Contrôle technique',
        detail: 'Vérifiez sa date de validité. Si elle approche, mieux vaut l’avoir passé avant de partir.',
      },
    ],
  },
  {
    id: 'controle-technique',
    title: 'Préparer son contrôle technique',
    intro: 'Le garage ne réalise pas le contrôle technique. Voici dix points que vous pouvez vérifier vous-même, et ce que nous pouvons regarder avant votre rendez-vous dans un centre de contrôle.',
    items: [
      {
        label: 'Feux et clignotants (vous)',
        detail: 'Faites le tour de la voiture avec quelqu’un : veilleuses, croisement, route, stops, recul, clignotants et feux de plaque.',
      },
      {
        label: 'Plaques et pare-brise (vous)',
        detail: 'Les plaques doivent être lisibles et bien fixées. Un impact dans le champ de vision peut poser problème.',
      },
      {
        label: 'Essuie-glaces et lave-glace (vous)',
        detail: 'Les balais doivent essuyer sans laisser de traînées et le lave-glace doit fonctionner.',
      },
      {
        label: 'Pneus (vous)',
        detail: 'Vérifiez qu’il reste de la sculpture sur toute la largeur et qu’aucune hernie ou fissure n’est visible.',
      },
      {
        label: 'Ceintures et klaxon (vous)',
        detail: 'Toutes les ceintures doivent se boucler et se rétracter. Le klaxon doit fonctionner.',
      },
      {
        label: 'Freins (avec le garage)',
        detail: 'Nous contrôlons l’épaisseur des plaquettes, l’état des disques et des flexibles, et le frein à main.',
      },
      {
        label: 'Train roulant (avec le garage)',
        detail: 'Rotules, silent-blocs, amortisseurs, soufflets et cardans : nous cherchons le jeu et les fuites.',
      },
      {
        label: 'Échappement et émissions (avec le garage)',
        detail: 'Nous regardons les fuites, la fixation du pot et, si besoin, l’état du filtre à particules.',
      },
      {
        label: 'Fuites sous la voiture (avec le garage)',
        detail: 'Une fuite d’huile ou de liquide peut être relevée au contrôle : nous la repérons avant.',
      },
      {
        label: 'Contre-visite',
        detail: 'Si un défaut est relevé, nous le corrigeons, puis vous repassez la contre-visite dans votre centre de contrôle.',
      },
    ],
  },
]
