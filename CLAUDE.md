# Garage de l'Ille (démo)

Source de vérité du contenu : `PLAN.md` (concept « Pièce à l'appui », palette §9 / §15 révisée). Brief de build : `../BUILD_BRIEF.md`.

- Vite + TS strict + Tailwind v4 ; GSAP + Lenis ; routeur maison `src/core/router.ts`. Base `/Garage-De-L-Ille-Rennes/`.
- Vérifier : `npm run typecheck && npm run build`, puis le contrôle de chemins racine de `.github/workflows/ci.yml`.
- Accent unique `--enseigne` (#E8792B), texte noir dessus, jamais blanc. Rayon 2 px, pastille seulement pour l'état ouvert/fermé.
- Interdits : « depuis 2017 », prénoms Étienne/Béatrice, logo ou nom Staff Auto, e-mail, prix présentés comme ceux du garage, tirets longs dans le texte français. Interrupteurs dans `src/data/site.ts` et `misc.ts`.
- Données d'exemple dans `src/data/*.ts` (en-tête « sample data »). Le mouvement lourd est limité à `DESKTOP_MOTION` (`src/core/motion.ts`).
- Ne pas committer ni pousser sans demande. `rg` peut corrompre le texte : utiliser `grep -rn`.
