// Métadonnées par route: partagées entre l'application et le plugin Vite qui génère un HTML par route (SEO).
// Ce fichier n'importe aucune API du navigateur.
import { families } from './data/families'
import { posts } from './data/posts'

export interface PageMeta {
  path: string
  title: string
  description: string
  noindex?: boolean
}

const N = 'Garage de l’Ille, Rennes'

export const staticMeta: PageMeta[] = [
  { path: '/', title: `${N}, garage indépendant toutes marques aux Gayeulles`, description: 'Garage indépendant toutes marques au 2 rue de Jinan à Rennes, à 220 m du métro B Les Gayeulles. Entretien, freins, distribution, embrayage, FAP. Thermique, hybride et GPL. 4,9/5 sur Google.' },
  { path: '/atelier', title: `Nos prestations, ${N}`, description: 'Entretien, freinage, moteur, embrayage, échappement, pneus, hybride et GPL: toutes les prestations du garage, avec devis gratuit et tarifs indicatifs.' },
  { path: '/diagnostic', title: `Ça fait quel bruit ? Diagnostic, ${N}`, description: 'Choisissez un symptôme, repérez la zone sur la voiture et les pistes probables. Voyants du tableau de bord, préparer son contrôle technique.' },
  { path: '/notre-facon', title: `Pièce à l’appui, notre façon de travailler, ${N}`, description: 'Expliquer, montrer la vieille pièce, réparer plutôt que remplacer, vous laisser décider. Garage Propre, pièces de marques reconnues, véhicule de remplacement.' },
  { path: '/histoire', title: `De Chantepie aux Gayeulles, histoire du garage, ${N}`, description: 'Créé en 2012 à Chantepie, installé à Rennes rue de Jinan depuis avril 2023. L’histoire du garage et du quartier Maurepas - Les Gayeulles.' },
  { path: '/avis', title: `Avis clients, ${N}`, description: '4,9/5 sur Google, plus de 150 avis. Les mots des clients: honnêteté, explications, prix corrects, accueil.' },
  { path: '/galerie', title: `Galerie, ${N}`, description: 'L’atelier en images: freinage, moteur, pneus, outillage. Photos d’illustration (Unsplash), en attendant les photos du garage.' },
  { path: '/conseils', title: `Conseils d’entretien auto, ${N}`, description: 'Courroie de distribution, FAP, plaquettes, pneus, hybride, GPL, contrôle technique: des conseils simples par l’équipe du garage.' },
  { path: '/faq', title: `Questions fréquentes, ${N}`, description: 'Rendez-vous, véhicule de remplacement, hybrides et GPL, devis, paiement, horaires: les réponses aux questions les plus posées.' },
  { path: '/infos-pratiques', title: `Infos pratiques, horaires et accès, ${N}`, description: 'Du lundi au vendredi, de 8 h à 12 h et de 13 h à 18 h. 2 rue de Jinan, 35700 Rennes. Métro B Les Gayeulles à environ 220 m. Accès PMR.' },
  { path: '/devis', title: `Demander un devis gratuit, ${N}`, description: 'Décrivez votre problème: marque, modèle, énergie, symptôme. Le garage vous recontacte pour un devis gratuit.' },
  { path: '/mentions-legales', title: `Mentions légales, ${N}`, description: 'Mentions légales du site de démonstration du Garage de l’Ille, Rennes.' },
  { path: '/confidentialite', title: `Confidentialité, ${N}`, description: 'Politique de confidentialité: ce site ne collecte aucune donnée.' },
]

export function allMeta(): PageMeta[] {
  const fam = families.map<PageMeta>((f) => ({
    path: `/atelier/${f.slug}`,
    title: `${f.name}, ${N}`,
    description: `${f.intro} Devis gratuit, garage indépendant toutes marques à Rennes.`.slice(0, 300),
  }))
  const pst = posts.map<PageMeta>((p) => ({ path: `/conseils/${p.slug}`, title: `${p.title}, ${N}`, description: p.excerpt }))
  return [...staticMeta, ...fam, ...pst]
}

export const notFoundMeta: PageMeta = { path: '/404', title: `Page introuvable, ${N}`, description: 'Cette page est au garage.', noindex: true }

export function metaFor(path: string): PageMeta {
  return allMeta().find((m) => m.path === path) ?? notFoundMeta
}
