// Avis réels (PLAN.md §4). Aucun nom de client. Attribution à la plateforme et à l’année uniquement.
// Les avis d’avant avril 2023 concernent le garage de Chantepie (era: 'chantepie').
// Sources: autour-de-moi.com / autour-de-moi.pro (synchronisation Google), Fixter (non revérifié).
export type ReviewTheme = 'honnêteté' | 'explications' | 'prix' | 'accueil' | 'contrôle technique' | 'confiance'

export interface Review {
  id: number
  quote: string
  date: string // JJ/MM/AAAA tel que relevé
  year: number
  era: 'chantepie' | 'rennes'
  themes: ReviewTheme[]
  /** cite un prénom du personnel: masqué tant que le consentement manque */
  namesStaff: boolean
  /** false = non revérifié (avis relevés via Fixter) */
  verified: boolean
}

export const reviews: Review[] = [
  { id: 1, quote: 'ENFIN!!!!!! Enfin un garage ou l’on peut déposer sa voiture en toute confiance.', date: '01/12/2023', year: 2023, era: 'rennes', themes: ['confiance'], namesStaff: false, verified: true },
  { id: 2, quote: 'Sympathiques et clairement pas là pour se faire de l’argent sur le dos des clients', date: '16/05/2017', year: 2017, era: 'chantepie', themes: ['honnêteté'], namesStaff: false, verified: true },
  { id: 3, quote: 'Ils ne cherchent pas à gonfler la facture mais vous donnent de bon conseils. Allez-y les yeux fermés.', date: '26/01/2023', year: 2023, era: 'chantepie', themes: ['honnêteté', 'confiance'], namesStaff: false, verified: true },
  { id: 4, quote: 'Un garagiste qui préférera réparer plutôt que de changer très bien placé au niveau du tarif', date: '19/05/2019', year: 2019, era: 'chantepie', themes: ['prix', 'honnêteté'], namesStaff: false, verified: true },
  { id: 5, quote: 'le garagiste garde la pièce défectueuse afin de vous expliquer ce qui n’allait pas', date: '21/01/2022', year: 2022, era: 'chantepie', themes: ['explications'], namesStaff: false, verified: true },
  { id: 6, quote: 'Prix très corrects et couple très sympathique! Il est presque agréable de tomber en panne :-)', date: '14/11/2019', year: 2019, era: 'chantepie', themes: ['prix', 'accueil'], namesStaff: false, verified: true },
  { id: 7, quote: 'Béatrice vous accueille avec bonne humeur, qui vous fait oublier les tracas avec votre voiture.', date: '04/06/2023', year: 2023, era: 'rennes', themes: ['accueil'], namesStaff: true, verified: true },
  { id: 8, quote: 'Prestation au top que ce soit Etienne à l’atelier ou Béatrice à l’accueil.', date: '18/04/2023', year: 2023, era: 'rennes', themes: ['accueil'], namesStaff: true, verified: true },
  { id: 9, quote: 'Garagiste carré, ils ont fait le maximum pour que ma voiture passe le CT sans faire de grosses réparations.', date: '16/10/2023', year: 2023, era: 'rennes', themes: ['contrôle technique', 'prix'], namesStaff: false, verified: true },
  { id: 10, quote: 'Ils ont vraiment cherché à trouver l’origine de la panne avant d’effectuer la réparation. Compétent et persévérant.', date: '12/03/2023', year: 2023, era: 'chantepie', themes: ['explications', 'honnêteté'], namesStaff: false, verified: true },
  { id: 11, quote: 'Un gros 5 étoiles par ce que je ne peux pas en mettre 6 !', date: '22/08/2023', year: 2023, era: 'rennes', themes: ['confiance'], namesStaff: false, verified: true },
  { id: 12, quote: 'Ne vous poussent pas à la dépense, et vous montrent même les produits changés et défectueux.', date: 'non daté (2024 ou après)', year: 2024, era: 'rennes', themes: ['honnêteté', 'explications'], namesStaff: false, verified: false },
  { id: 13, quote: 'C’était notre premier véhicule et aucune connaissance en mécanique, ils ont pris le temps de tout nous expliquer.', date: 'non daté', year: 2024, era: 'rennes', themes: ['explications'], namesStaff: false, verified: false },
  { id: 14, quote: 'Ma voiture est restée quasiment un mois et ils ne m’ont même pas pris un seul centime.', date: 'non daté', year: 2024, era: 'rennes', themes: ['honnêteté', 'prix'], namesStaff: false, verified: false },
  { id: 15, quote: 'Remarquable. Très humain et très honnête.', date: '27/02/2024', year: 2024, era: 'rennes', themes: ['honnêteté', 'accueil'], namesStaff: false, verified: true },
  { id: 16, quote: 'Si vous cherchez un garage accueillant et extrêmement compétent, n’hésitez pas!', date: '15/03/2024', year: 2024, era: 'rennes', themes: ['accueil', 'confiance'], namesStaff: false, verified: true },
  { id: 17, quote: 'Je recommande ce garage à quiconque apprécie sa voiture et souhaite faire confiance.', date: '15/03/2024', year: 2024, era: 'rennes', themes: ['confiance'], namesStaff: false, verified: true },
  { id: 18, quote: 'Je connais ce garage depuis longtemps, ils sont très compétents, très honnêtes.', date: '04/03/2024', year: 2024, era: 'rennes', themes: ['honnêteté', 'confiance'], namesStaff: false, verified: true },
]

export const themeList: ReviewTheme[] = ['honnêteté', 'explications', 'prix', 'accueil', 'contrôle technique', 'confiance']

export const attribution = (r: Review) =>
  r.era === 'chantepie' ? `Avis Google, ${r.year}, garage de Chantepie` : `Avis Google, ${r.year}`
