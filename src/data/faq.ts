// DONNÉES D'EXEMPLE: à remplacer par les données réelles du garage

export interface FaqItem {
  id: string
  group:
    | 'Rendez-vous et délais'
    | 'Votre véhicule'
    | 'Devis et paiement'
    | 'Notre façon de travailler'
    | 'Venir au garage'
  q: string
  a: string
}

export const faq: FaqItem[] = [
  {
    id: 'rendez-vous-delais',
    group: 'Rendez-vous et délais',
    q: 'Combien de temps faut-il attendre pour avoir un rendez-vous ?',
    a: 'Les créneaux peuvent se remplir vite, surtout avant les vacances et aux premiers froids. Appelez-nous tôt, au 06 24 87 37 40, et dites-nous ce que la voiture fait : nous vous proposerons la première date possible. Pour une petite intervention, nous essayons de vous répondre rapidement.',
  },
  {
    id: 'horaires-samedi',
    group: 'Rendez-vous et délais',
    q: 'Quels sont vos horaires ? Êtes-vous ouverts le samedi ?',
    a: 'Nous sommes ouverts du lundi au vendredi, de 8 h à 12 h et de 13 h à 18 h. Le garage est fermé entre 12 h et 13 h, le samedi, le dimanche et les jours fériés. Si vous nous appelez pendant la pause, laissez un message et nous vous rappelons.',
  },
  {
    id: 'vehicule-remplacement',
    group: 'Rendez-vous et délais',
    q: 'Puis-je avoir un véhicule de remplacement ?',
    a: 'Nous disposons d’un véhicule de remplacement, selon disponibilité. Il est à demander lors de la prise de rendez-vous, pour que nous puissions le réserver avec vous.',
  },
  {
    id: 'panne-urgence',
    group: 'Rendez-vous et délais',
    q: 'Ma voiture est en panne : que faire ?',
    a: 'Mettez-vous en sécurité avant tout : feux de détresse, gilet, triangle. Puis appelez-nous pour nous décrire ce qui s’est passé, nous vous dirons ce qui est possible. Si la voiture ne peut pas rouler, nous pouvons vous conseiller sur la suite, y compris pour le remorquage.',
  },
  {
    id: 'hybrides-gpl',
    group: 'Votre véhicule',
    q: 'Travaillez-vous sur les hybrides et les voitures au GPL ?',
    a: 'Oui, nous entretenons les voitures thermiques, hybrides et GPL. Pour une hybride, nous faisons l’entretien courant, les freins et les diagnostics. Pour le GPL, nous contrôlons l’installation, le filtre et les réglages.',
  },
  {
    id: 'toutes-marques',
    group: 'Votre véhicule',
    q: 'Réparez-vous toutes les marques ? Et si vous n’avez pas l’outil ?',
    a: 'Oui, nous sommes un garage indépendant et nous travaillons sur toutes les marques. De temps en temps, un outil propre à une marque nous manque pour une opération précise. Dans ce cas, nous vous le disons honnêtement et nous vous orientons vers un confrère.',
  },
  {
    id: 'garantie-constructeur',
    group: 'Votre véhicule',
    q: 'Faire entretenir ma voiture chez vous a-t-il un effet sur la garantie du constructeur ?',
    a: 'En règle générale, l’entretien d’une voiture peut être fait hors du réseau de la marque, à condition de suivre le carnet d’entretien et d’en conserver les preuves. Les conditions dépendent toutefois de votre contrat : relisez-le ou posez la question à votre constructeur. Nous détaillons chaque intervention sur la facture pour que vous puissiez la présenter.',
  },
  {
    id: 'controle-technique',
    group: 'Votre véhicule',
    q: 'Passez-vous le contrôle technique au garage ?',
    a: 'Non, nous ne réalisons pas le contrôle technique sur place. Nous préparons votre voiture pour qu’elle soit prête avant votre rendez-vous dans un centre de contrôle. Si une contre-visite est demandée, nous corrigeons ce qui a été relevé.',
  },
  {
    id: 'sinistre-assurance',
    group: 'Votre véhicule',
    q: 'Ma voiture a eu un sinistre : pouvez-vous m’aider ?',
    a: 'Nous pouvons vous conseiller sur les réparations mécaniques et vous expliquer les devis que vous recevez. Pour les démarches avec votre assurance, n’hésitez pas à nous appeler et nous vous dirons ce qui relève de notre métier. Nous ne faisons ni carrosserie ni peinture.',
  },
  {
    id: 'devis-gratuit',
    group: 'Devis et paiement',
    q: 'Le devis est-il gratuit ?',
    a: 'Oui, le devis est gratuit. Nous vous expliquons chaque ligne en mots simples et vous décidez ensuite. Si nous trouvons autre chose en cours de route, nous vous appelons avant d’ajouter quoi que ce soit.',
  },
  {
    id: 'paiement',
    group: 'Devis et paiement',
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: 'Vous pouvez payer par carte bancaire (Visa, Mastercard), en espèces ou par chèque. Le règlement se fait en fin d’intervention, quand vous récupérez votre voiture.',
  },
  {
    id: 'devis-change',
    group: 'Devis et paiement',
    q: 'Le prix peut-il changer par rapport au devis ?',
    a: 'Le devis est fait sur ce que nous voyons au moment où nous le rédigeons. Si une pièce supplémentaire apparaît en cours de réparation, nous vous appelons pour vous l’expliquer et attendre votre accord. Vous ne payez rien que vous n’ayez accepté.',
  },
  {
    id: 'pieces-usees',
    group: 'Notre façon de travailler',
    q: 'Puis-je récupérer mes pièces usées ?',
    a: 'Oui. Nous gardons la pièce remplacée et nous vous la montrons : vous voyez l’usure vous-même. Vous pouvez l’emporter si vous le souhaitez. C’est notre façon de vous prouver que le changement était utile.',
  },
  {
    id: 'garage-vert',
    group: 'Notre façon de travailler',
    q: 'Que devient l’huile usagée et les pièces que vous remplacez ?',
    a: 'Nous travaillons avec des filières de traitement des déchets conformes : huiles, filtres, batteries et pièces usées ne partent pas à la poubelle. Cette démarche s’inscrit dans l’esprit de Garage Propre / Garage Vert.',
  },
  {
    id: 'marques-pieces',
    group: 'Notre façon de travailler',
    q: 'Quelles pièces utilisez-vous ?',
    a: 'Nous choisissons des pièces de marques connues, comme SKF, Valeo, Bosch, Purflux, Moog ou Gates, selon ce qui convient à votre voiture. Nous vous disons quelle pièce nous posons. Si vous avez une préférence, dites-le-nous avant le devis.',
  },
  {
    id: 'acces-metro',
    group: 'Venir au garage',
    q: 'Comment venir en transports ?',
    a: 'Le garage se trouve au 2 rue de Jinan, à Rennes, près de la station Les Gayeulles de la ligne B du métro. Vous pouvez y déposer votre voiture puis repartir en métro. N’hésitez pas à nous appeler pour qu’on vous guide.',
  },
  {
    id: 'acces-pmr',
    group: 'Venir au garage',
    q: 'Le garage est-il accessible aux personnes à mobilité réduite ?',
    a: 'Oui, nous disposons d’un stationnement adapté et d’une entrée de plain-pied. Si vous avez des besoins particuliers, dites-le-nous en prenant rendez-vous et nous nous organisons.',
  },
  {
    id: 'laisser-voiture-metro',
    group: 'Venir au garage',
    q: 'Puis-je laisser ma voiture et prendre le métro ?',
    a: 'Oui, c’est même pratique : vous déposez la voiture le matin, vous partez en métro ligne B depuis Les Gayeulles, et nous vous appelons quand elle est prête. Pensez à venir avant 18 h pour récupérer vos clés, car nous fermons le soir et le week-end.',
  },
]
