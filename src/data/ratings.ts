// Relevés de notes par plateforme (PLAN.md §4), tous relevés le 2026-10-13. À revérifier sur Google Maps avant lancement.
export interface RatingSnapshot {
  platform: string
  via: string
  rating: number
  count: string
  seenOn: string
  note: string
}

export const ratings: RatingSnapshot[] = [
  { platform: 'Google', via: 'annuaire Bottin', rating: 4.9, count: 'plus de 150 avis', seenOn: '2026-10-13', note: '93 % de 5 étoiles' },
  { platform: 'Google', via: 'annuaire garagefr', rating: 4.9, count: '133 avis', seenOn: '2026-10-13', note: 'relevé plus ancien' },
  { platform: 'Google', via: 'synchronisation autour-de-moi', rating: 4.8, count: '99 avis', seenOn: '2024-03-25', note: 'dernière synchronisation de mars 2024' },
  { platform: 'Google', via: 'annuaire viedauto', rating: 4.8, count: '91 avis', seenOn: '2026-10-13', note: 'relevé plus ancien' },
]

export const headlineRating = { value: '4,9', outOf: '5', label: '4,9/5 sur Google, plus de 150 avis', seen: 'relevé en octobre 2026' }
