# Garage de l'Ille, Rennes (site de démonstration)

Site vitrine de démonstration pour le Garage de l'Ille, garage indépendant toutes marques au 2 rue de Jinan, 35000 Rennes.
Concept : **« Pièce à l'appui »**. On montre la pièce usée à côté de la pièce neuve avant de réparer.

Ce dépôt est une maquette. Toutes les données de `src/data/*.ts` sont des **données d'exemple** : prix, durées, cas clients, articles, symptômes. Seuls l'adresse, les horaires, les modes de paiement et les citations d'avis (sans nom de client) viennent de sources publiques relevées dans `PLAN.md`.

## Pages (14 routes + 404)

| Route | Contenu |
| --- | --- |
| `/` | Héros pièces éclatées, repères, **établi** interactif, parcours épinglé (6 étapes), familles, marques, cas en défilement horizontal, mur d'avis, quartier et horaires en direct |
| `/atelier` | 50 prestations avec recherche et filtres (famille, énergie, durée) |
| `/atelier/:famille` | 7 familles : pneus et suspension, freinage, moteur et distribution, embrayage et boîte, échappement et FAP, entretien, hybride et GPL |
| `/diagnostic` | « Ça fait quel bruit ? » (28 symptômes), 14 voyants, 3 listes de contrôle |
| `/notre-facon` | Principes, déroulé en 6 étapes, pièces, véhicule de courtoisie |
| `/histoire` | Ligne du temps (Chantepie vers Rennes), scroll scrub |
| `/avis` | Mur d'avis filtrable par thème, notes relevées |
| `/conseils`, `/conseils/:slug` | 11 articles |
| `/faq` | 18 questions, recherche |
| `/infos-pratiques` | Accès, métro, horaires, paiement |
| `/devis` | Formulaire qui compose un message (aucun envoi) |
| `/mentions-legales`, `/confidentialite` | Pages légales |

## Pile technique

- Vite 8, TypeScript 6 strict, Tailwind CSS v4 (surtout du CSS maison dans `src/style.css`).
- **GSAP** (ScrollTrigger, SplitText) pour le mouvement et **Lenis** pour le défilement doux. Pas de framework : un routeur History API maison (`src/core/router.ts`).
- Transition de page : View Transitions (planche qui se pose), repli instantané.
- Polices auto-hébergées : Archivo variable (largeur 100 à 125 %) et IBM Plex Mono.
- Tout l'art est du SVG original (`src/core/art.ts`). Aucune photo, aucun logo.
- Mouvement : `transform` et `opacity` seulement. Le mouvement lourd (épinglage, défilement horizontal) est limité aux écrans de 900 px et plus avec `prefers-reduced-motion: no-preference`. Sinon, contenu statique complet.

## Palette (révision critique, ancrée sur l'enseigne réelle)

Bardage `#1E1F1E`, granit `#ECEDEA`, ardoise `#23272B`, enseigne `#E8792B` (seul accent, texte noir dessus), étiquette `#E0B341` (pièce usée seulement), Ille `#2B6E60` (pièce neuve, sémantique). Mode sombre prévu.

## Données d'exemple (`src/data`)

services 50, parts 22, symptoms 28, voyants 14, checklists 3 x 10, faq 18, cases 9, posts 11, families 7, reviews 18 (13 affichables), ratings 4, process 6, history 5, access 5, stats 4, team 2 rôles, quartier 8, brands 7, makes 28.

## Interdits de publication (PLAN.md) et interrupteurs

Dans `src/data/site.ts` et `src/data/misc.ts` :

- `CONFIRMED_EMAIL` (faux) : pas d'e-mail affiché ni de `mailto:`.
- `CONFIRMED_TEAM_NAMES` (faux) : pas de prénoms ; les avis qui nomment le personnel sont masqués.
- `network.confirmedByOwner` (faux) : « Staff Auto » n'est pas affiché, jamais de logo.
- `SHOW_UNVERIFIED_REVIEWS` (faux) : les avis Fixter non revérifiés sont masqués.
- Jamais « depuis 2017 » ; prix toujours présentés comme indicatifs d'exemple.

## Commandes

```bash
npm install
npm run dev          # développement
npm run typecheck    # tsc --noEmit
npm run build        # typecheck + build + HTML par route + 404.html
npm run preview -- --port 4177
```

Base : `/Garage-De-L-Ille-Rennes/` (GitHub Pages). Le plugin `closeBundle` de `vite.config.ts` écrit un `index.html` par route (titre, description, canonical) et `404.html`.

## À valider avec le propriétaire

E-mail, prénoms de l'équipe, appartenance au réseau Staff Auto, label Garage Propre, vrais tarifs, conditions du véhicule de courtoisie, photos et enseigne réelle (emplacements prévus), note Google à revérifier avant mise en ligne.
