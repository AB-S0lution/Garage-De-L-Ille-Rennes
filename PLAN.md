# Garage de l'Ille — Research & Plan

> **Garage de l'Ille** is a small, owner-run, **independent all-makes car repair garage** ("garage toutes marques") at **2 rue de Jinan, 35700 Rennes**. *(Critic pass, see §15: it is **not** network-free. The shopfront carries the orange **Staff Auto** roundel, the small-garage network run by Autodistribution, and Autodistribution's repairer locator lists it. Staff Auto members stay legally independent.)* It sits in Le Gast, in the Maurepas – Patton quarter of north-east Rennes, about 220 m from the **Les Gayeulles** station on metro line B. The company (SARL, SIREN 539 728 154) was created in **2012 in Chantepie**, where it took over the old GARAGE LAMANDE at 20 avenue de la Grotte. On **3 April 2023** it moved to Rennes, buying the workshop of the former "Garage du Gast" at rue de Jinan. It services and repairs petrol, diesel, **hybrid and LPG (GPL)** cars, offers a **courtesy car**, and says it follows the "Garage Propre / Garage Vert" waste-handling approach. It has no website: only a Facebook page whose tagline is « Votre partenaire automobile, au cœur des Gayeulles ». Its reputation is unusually strong: **4.9/5 on Google from 150+ reviews** (snapshot 2026-10-13, history carried over from Chantepie). Customers repeat the same story: honest, never inflates the bill, **takes the time to explain and keeps the old part to show you**, looks for the real cause and repairs rather than replaces, prices well below dealers. They describe a husband-and-wife team, "Étienne à l'atelier, Béatrice à l'accueil". The phrase that recurs most is « vous pouvez y aller **les yeux fermés** ».

---

## 0. Status & confidence

| Item | Value |
|---|---|
| **Identity verdict** | **CONFIRMED, one candidate.** GARAGE DE L'ILLE (legal name "GARAGE DE L ILLE", enseigne and trading name "GARAGE DE L'ILLE"), SARL, SIREN 539 728 154, NAF 45.20A, head-office SIRET 539 728 154 00029 at 2 rue de Jinan, 35700 Rennes, active. The registry search for département 35 returns no other active "Garage de l'Ille". |
| **Network affiliation** | **CORRECTED BY CRITIC PASS: Staff Auto (Autodistribution group). High confidence.** Evidence: (1) the garage's own Facebook profile photo shows the black workshop with two orange **STAFF AUTO** roundels next to the "GARAGE DE L'ILLE" sign (https://www.facebook.com/GarageDeLIlle/, og:image); (2) Autodistribution's repairer locator lists "GARAGE DE L'ILLE, 2 RUE DE JINAN, 35700 RENNES", tel. 06 24 87 37 40, Mon–Fri 08:00–12:00 / 13:00–18:00 (point of sale id 10352) (https://pro.autodistribution.fr/reparateurs-auto/ille-et-vilaine/rennes); (3) the roundel matches Autodistribution's own Staff Auto network image (https://pro.autodistribution.fr/mecanique-auto/staff-auto). Staff Auto = « réseau régional de proximité, composé de plus de 600 garages indépendants qui vous assurent l'entretien de votre véhicule, quelle que soit sa marque »; « les enseignes Staff Auto sont des professionnels de l'automobile indépendants et sans lien capitalistique avec la société Autodistribution » (same page). Created 2002, 339 members on 1 June 2023, many in Brittany and Pays de la Loire (https://www.bruz-auto.fr/nos-actualites/les-reparateurs-du-reseau-staff-auto.html). The garage is still **independent and all-makes**. Motrio appears only in the parts-brands list and in the predecessor's alias "MOTRIO Garage du Gast". Do **not** show Motrio, AD, Eurorepar, Point S, Renault or Peugeot logos. Staff Auto: mention as text (« membre du réseau Staff Auto ») once the owner confirms; its logo only with permission. |
| **Not to confuse with** | Garage de l'Île, Noirmoutier (Peugeot); Garage de l'Île, Mamoudzou (Mayotte); Garage de l'Île Saint-Louis, Paris; Garage de l'Ill, Colmar; Garage Papeil (Montreuil-sur-Ille); a ceased SCI in Saint-Germain-sur-Ille. **"Garage du Gast" / "MOTRIO Garage du Gast"** at the same address (phone 02 99 36 19 17, 4.6/5 from 100+ votes, closed) is the **predecessor business**, not this garage and not a second candidate. |
| **Category** | Light-vehicle maintenance and mechanical repair (NAF 45.20A). Bodywork/paint, contrôle technique (MOT) and used-car sales are **not confirmed** (see §3). |
| **Research date** | 2026-10-13 |
| **Tools used** | Official company register API (recherche-entreprises.api.gouv.fr), BODACC open-data API, OpenStreetMap Nominatim, WebSearch / WebFetch on directories (PagesJaunes, 118712, Mappy, Allogarage, LesGarages, Vroomly, garagefr, autour-de-moi, viedauto, Bottin, idGarages), search-engine snippets for Facebook. DNS lookups for candidate domains (garagedelille.fr / .com / -rennes.fr: nothing). Design-database search (ui-ux-pro-max) and design-taste-frontend skill for §9. |
| **Unavailable / blocked** | Google Maps, Waze, Apple Plans, Bing Places, Yelp (not directly readable; Google data seen only through aggregators). Facebook page content (login wall; only title and search snippets). Fixter page (content did not load for the fact-checker; one researcher read reviews from it). Pappers, citoofrance, Michelin dealer pages (HTTP 403). annuaire-entreprises pages rendered empty (API used instead). Motrio.fr empty. Overpass timed out. gayeulles.rennes-maurepas.fr unreachable (search snippet only). Apify and the google-maps-scraper skill were not used. |
| **Critic-pass tools** | Facebook Open Graph meta via curl (followers, tagline, profile image), Autodistribution repairer locator (raw HTML), rennes-maurepas.fr (Ville de Rennes quartier site), OSM API way 558810805, register API (headcount band), PagesJaunes 53779522 (full self-description), autour-de-moi.pro (2024 reviews), Bottin and garagefr attributes. **Blocked:** Fixter (AWS WAF challenge, empty body), citoofrance / verif.com / auto-infos / apa-carmoine (403), StarOfService (empty). The local google-maps-scraper API was **not available** (port 8080 answers 404 for every route; it was not started, since restarting services needs the user's approval). |
| **Overall confidence** | **High:** identity, legal data, address, phone, hours, history (2012 Chantepie → 2023 Rennes, both from BODACC), independence, review themes. **Medium:** services detail, payment, labels, parts brands (all from one Solocal data feed), Facebook tagline and email (search snippet only), ratings (aggregator snapshots). **Low:** bodywork/paint, NFC payment, Béatrice's exact role, the 2017 premises story of the building. |

---

## 1. Verified facts

Status key: **verified** = 2+ independent agreeing sources or the official register; **single-source** = one source or one shared data feed; **conflicting** = sources disagree; **unverified / refuted** as stated. Where the fact-check and a raw report disagree, the fact-check value is used.

| Field | Value | Status | Sources |
|---|---|---|---|
| Trading name / spelling | **Garage de l'Ille** (two L's, the river Ille / Ille-et-Vilaine). Enseigne and nom commercial "GARAGE DE L'ILLE". "Garage de l'Ile" (118000.fr) and "garage l'île" (a review) are misspellings. | verified | https://recherche-entreprises.api.gouv.fr/search?q=539728154 · https://www.pagesjaunes.fr/pros/03153733 · https://www.allogarage.fr/garages/details-garage-Garage-de-l-ille-19507.html · https://nominatim.openstreetmap.org/search?q=Garage+de+l%27Ille+Rennes&format=json&extratags=1&addressdetails=1 |
| Legal name | GARAGE DE L ILLE | verified | https://recherche-entreprises.api.gouv.fr/search?q=539728154 · https://www.societe.com/societe/garage-de-l-ille-539728154.html |
| Legal form / capital | SARL (registry code 5499); share capital **€10,000** | SARL verified; capital single-source (societe.com) | https://www.societe.com/societe/garage-de-l-ille-539728154.html · https://recherche-entreprises.api.gouv.fr/search?q=539728154 |
| SIREN / SIRET | SIREN **539 728 154**. Head office SIRET **539 728 154 00029** (Rennes, opened 2023-04-03, active). Former SIRET 539 728 154 00011 (20 av. de la Grotte, 35135 Chantepie, closed 2023-04-03). 2 establishments in total, 1 open. | verified | https://recherche-entreprises.api.gouv.fr/search?q=539728154 · https://recherche-entreprises.api.gouv.fr/search?q=garage%20de%20l%20ille&departement=35 · https://www.societe.com/societe/garage-de-l-ille-539728154.html · https://www.118712.fr/professionnels/X0FQW1RSHgI · https://annuaire-entreprises.data.gouv.fr/etablissement/53972815400029 |
| TVA | FR43539728154 (matches the SIREN formula) | single-source | https://www.societe.com/societe/garage-de-l-ille-539728154.html |
| NAF / APE | 45.20A, "Entretien et réparation de véhicules automobiles légers" | verified | https://recherche-entreprises.api.gouv.fr/search?q=539728154 · https://www.societe.com/societe/garage-de-l-ille-539728154.html |
| Collective agreement | IDCC 1090 (services de l'automobile) | single-source (register API) | https://recherche-entreprises.api.gouv.fr/search?q=539728154 |
| Status | **Active** (état administratif A). Latest accounts filed for the year ending 28 Feb 2025 (BODACC, 3 Aug 2025). Financial figures: none published recently (societe.com shows 2015 as latest, NC for 2024–2025). | verified | https://recherche-entreprises.api.gouv.fr/search?q=539728154 · https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22539728154%22&limit=20 · https://www.bottin.fr/fiche-locale/cgbfdajhgbgabdibiji--garage-de-l-ille--rennes.htm |
| Founded | Company created **6 Feb 2012** (INSEE), registered RCS Rennes 7 Feb 2012, trading from **1 Mar 2012** after buying the GARAGE LAMANDE business at 20 av. de la Grotte, Chantepie, for €80,000. On the site say **« depuis 2012 »**. | verified | https://recherche-entreprises.api.gouv.fr/search?q=539728154 · https://www.societe.com/societe/garage-de-l-ille-539728154.html · https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22539728154%22&limit=20 |
| Move to Rennes | **3 Apr 2023:** bought the "Garage du Gast" repair-workshop business at 2 rue de Jinan from Mickael Trovalet and Nadia Lancelot for €150,000 (BODACC 19 Apr 2023). Head office moved from Chantepie the same day. | verified | https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22539728154%22&limit=20 · https://recherche-entreprises.api.gouv.fr/search?q=2%20rue%20de%20jinan%20rennes · https://recherche-entreprises.api.gouv.fr/search?q=482007879 |
| Address | **2 rue de Jinan, 35700 Rennes.** Use 35700 (register, PJ, OSM, 118712). Mappy, garagefr, autour-de-moi wrongly print 35000. | verified | https://recherche-entreprises.api.gouv.fr/search?q=539728154 · https://www.pagesjaunes.fr/pros/03153733 · https://www.allogarage.fr/garages/details-garage-Garage-de-l-ille-19507.html · https://www.bottin.fr/fiche-locale/cgbfdajhgbgabdibiji--garage-de-l-ille--rennes.htm · https://nominatim.openstreetmap.org/search?q=Garage+de+l%27Ille+Rennes&format=json&extratags=1&addressdetails=1 |
| Quartier | **Le Gast, Maurepas – Patton, Quartiers Nord-Est, Rennes.** The Facebook tagline says « au cœur des Gayeulles ». | verified | https://nominatim.openstreetmap.org/search?q=Garage+de+l%27Ille+Rennes&format=json&extratags=1&addressdetails=1 · https://recherche-entreprises.api.gouv.fr/search?q=539728154 |
| GPS | About **48.12795, -1.65555** (register / OSM way 558810805). LesGarages 48.127931, -1.655564; Allogarage 48.12780, -1.65577. | verified | https://nominatim.openstreetmap.org/search?q=Garage+de+l%27Ille+Rennes&format=json&extratags=1&addressdetails=1 · https://lesgarages.fr/35/rennes/garage-de-l-ille-2uln |
| Phone | **06 24 87 37 40** (`tel:+33624873740`). A mobile, but it is the published business line everywhere and in the OSM tags. **Never use** 02 99 41 52 50 (old Chantepie) or 02 99 36 19 17 (Garage du Gast, closed predecessor). | verified | https://www.pagesjaunes.fr/pros/03153733 · https://www.allogarage.fr/garages/details-garage-Garage-de-l-ille-19507.html · https://www.bottin.fr/fiche-locale/cgbfdajhgbgabdibiji--garage-de-l-ille--rennes.htm · https://garagefr.com/p/garage-de-lille-21027 · https://www.vroomly.com/garages/garage-de-lille-35135-grotte/ · https://nominatim.openstreetmap.org/search?q=Garage+de+l%27Ille+Rennes&format=json&extratags=1&addressdetails=1 |
| Email | garage.de.l.ille@gmail.com | single-source (Facebook search snippet). **Confirm with owner before publishing a `mailto:`.** | https://www.facebook.com/474418339260144 |
| Website | **None.** The new site would be the garage's first. No palette or CSS to carry over. | verified | https://nominatim.openstreetmap.org/search?q=Garage+de+l%27Ille+Rennes&format=json&extratags=1&addressdetails=1 · https://www.118712.fr/professionnels/X0FQW1RSHgI · https://lesgarages.fr/35/rennes/garage-de-l-ille-2uln |
| Facebook | Page **"Garage de l'Ille \| Rennes"**, https://www.facebook.com/GarageDeLIlle/ (ID 474418339260144). The page's own Open Graph meta (read 2026-10-13) says: « Garage de l'Ille, Rennes. **223 followers** · 7 personnes étaient ici. **Votre partenaire automobile, au cœur des Gayeulles** ». The profile picture is a **photo of the shopfront** (black clad workshop, "GARAGE DE L'ILLE" sign, Staff Auto roundels; see §5). 100% recommend / 13 reviews still not checked. | title, followers, tagline **verified** (page's own meta + search snippets) | https://www.facebook.com/GarageDeLIlle/ · https://www.facebook.com/474418339260144 · https://www.pagesjaunes.fr/pros/03153733 |
| Instagram / TikTok / LinkedIn | None found | not found | — |
| Online booking | A Fixter page exists; Fixter labels it "non certifié", booking apparently not possible through Fixter. No own booking system. Vroomly: "Indépendant", "Non certifié", no bookable services. | single-source | https://www.fixter.fr/garage/garage-de-lille · https://www.vroomly.com/garages/garage-de-lille-35135-grotte/ |
| Hours | See table below. **Mon–Fri 08:00–12:00 and 13:00–18:00. Closed Sat, Sun and public holidays.** | verified (public holidays from OSM only) | https://www.pagesjaunes.fr/pros/03153733 · https://www.allogarage.fr/garages/details-garage-Garage-de-l-ille-19507.html · https://www.bottin.fr/fiche-locale/cgbfdajhgbgabdibiji--garage-de-l-ille--rennes.htm · https://garagefr.com/p/garage-de-lille-21027 · https://lesgarages.fr/35/rennes/garage-de-l-ille-2uln · https://nominatim.openstreetmap.org/search?q=Garage+de+l%27Ille+Rennes&format=json&extratags=1&addressdetails=1 |
| Services | Servicing and repair of petrol/diesel ("thermique"), **hybrid** and **LPG (GPL)** cars: engine, brakes, gearbox/clutch, tyres, oil change, timing belt, diagnostics, exhaust / particulate filter, filters, coolant; **courtesy car**. Full list in §3. Reviews independently confirm general mechanics and FAP work. | single-source (Solocal feed: PJ, mirrored by 118712 and Mappy) | https://www.pagesjaunes.fr/pros/03153733 · https://www.118712.fr/professionnels/X0FQW1RSHgI · https://fr.mappy.com/poi/4d6c1dd4fc6925073c140dd7 · https://atelier-de-reparation-automobile.autour-de-moi.com/garage-de-l-ille-2727711.html |
| Network | **Staff Auto member (Autodistribution), still independent and all makes** (critic pass; see §0). Earlier "no network" reading came from directories that do not show networks (Vroomly, Mappy, LesGarages, Allogarage, Bottin all show no network field). idGarages lists 0 Motrio garages in Rennes. | **corrected**: Staff Auto high (own shopfront photo + Autodistribution locator) | https://www.facebook.com/GarageDeLIlle/ · https://pro.autodistribution.fr/reparateurs-auto/ille-et-vilaine/rennes · https://pro.autodistribution.fr/mecanique-auto/staff-auto · earlier sources: https://www.vroomly.com/garages/garage-de-lille-35135-grotte/ · https://fr.mappy.com/poi/4d6c1dd4fc6925073c140dd7 · https://lesgarages.fr/35/rennes/garage-de-l-ille-2uln · https://www.pagesjaunes.fr/pros/53779522 · https://www.idgarages.com/fr-fr/ville/garage-35000-rennes/enseigne-motrio |
| Parts brands | SKF, Valeo, Bosch, Purflux, Moog, Gates, Motrio | single-source (PJ + 118712 share one feed) | https://www.pagesjaunes.fr/pros/03153733 · https://www.118712.fr/professionnels/X0FQW1RSHgI |
| Labels | "Garage Propre" / "Garage Vert" (used oil, coolant, batteries, filters, tyres sent through compliant channels). **Self-declared on PJ only; not checked on the CMA register. Do not show an official label logo.** | single-source | https://www.pagesjaunes.fr/pros/53779522 · https://www.pagesjaunes.fr/pros/03153733 |
| Payment | CB, Visa, Mastercard, cash (espèces), cheque. Contactless / NFC payment is listed by Bottin ("paiement sans contact") and garagefr ("NFC mobile payment"), both copied from Google attributes, so it is still one underlying source: **medium-low, ask owner**. garagefr also lists "toilettes" and "mécanicien sur place" (Google attributes; https://garagefr.com/p/garage-de-lille-21027). | single-source (Solocal feed); NFC from Google attributes via https://www.bottin.fr/fiche-locale/cgbfdajhgbgabdibiji--garage-de-l-ille--rennes.htm | https://www.pagesjaunes.fr/pros/03153733 · https://fr.mappy.com/poi/4d6c1dd4fc6925073c140dd7 |
| Accessibility | PMR: adapted parking and step-free entrance. (autour-de-moi also relays a Google "LGBTQ+ friendly" attribute; low confidence, do not feature.) No acceslibre record found. | verified | https://lesgarages.fr/35/rennes/garage-de-l-ille-2uln · https://atelier-de-reparation-automobile.autour-de-moi.com/garage-de-l-ille-2727711.html |
| Access / transport | **Metro line B, Les Gayeulles** station, about 221 m (OSM calc. about 180 m). Buses: 51 (~199 m), 70 and 71 (~212 m), 14 and 83 (~243 m). Bike stations: Les Gayeulles (~224 m), Joliot-Curie–Chateaubriand (~501 m), Painlevé (~587 m), Gros-Chêne (~743 m). Gros-Chêne metro ~700–900 m. Rue de Fougères ~250–300 m south. Customer parking: only "accessible parking" known. | single-source (LesGarages) + OSM | https://lesgarages.fr/35/rennes/garage-de-l-ille-2uln · https://nominatim.openstreetmap.org/search?q=Garage+de+l%27Ille+Rennes&format=json&extratags=1&addressdetails=1 |
| Price range | **No price list published anywhere.** Reviews: "prix doux", "prix très corrects", cheaper than dealers. One 2017 data point (Chantepie): Mégane 2 FAP fixed for €285 vs €1,600 Renault dealer quote. | not found (prices); review-based (level) | https://atelier-de-reparation-automobile.autour-de-moi.com/garage-de-l-ille-2727711.html |
| Owner / gérant (public registry) | **Jean Takitso Étienne Raoelison**, gérant since 10 Feb 2012. Customers call him "Étienne". | verified | https://recherche-entreprises.api.gouv.fr/search?q=539728154 · https://www.societe.com/societe/garage-de-l-ille-539728154.html |
| Team named in reviews | **Étienne** (atelier / mechanic) and **Béatrice** (accueil / reception), described as a couple, named in reviews 2019–2023. **Get owner consent before naming them on the site, especially Béatrice.** Fixter's "Sous la direction de Béatrice" looks platform-generated; ignore. | single-source | https://atelier-de-reparation-automobile.autour-de-moi.com/garage-de-l-ille-2727711.html · https://autour-de-moi.pro/fiche/garage-de-lille/ |
| Headcount | **Resolved by critic pass:** the register API returns `tranche_effectif_salarie: "02"`, year 2024, category PME (re-read 2026-10-13). In the INSEE nomenclature **"01" = 1 à 2 salariés, "02" = 3 à 5 salariés** (https://copeps.fr/actualites/tranche-effectif-insee/). So the official 2024 band is **3–5 salaried employees**; societe.com, PJ and 118712 show an older "1–2" band. Still say "une petite équipe" on the site, never a number. | register verified; directories stale | https://recherche-entreprises.api.gouv.fr/search?q=539728154 · https://www.societe.com/societe/garage-de-l-ille-539728154.html · https://www.118712.fr/professionnels/X0FQW1RSHgI |
| Google rating | **4.9/5, "+ de 150 votes"** (Bottin, seen 2026-10-13; 93% five-star, 4% four-star, 1% each three/two/one). Older snapshots: 4.9/133 (garagefr, Fixter), 4.8/99 (autour-de-moi, last sync 25/03/2024), 4.8/91 (viedauto). Use « 4,9/5 sur Google, plus de 150 avis » and re-check on Google Maps before launch. History includes the Chantepie years. | conflicting (snapshots), consistent 4.8–4.9 | https://www.bottin.fr/fiche-locale/cgbfdajhgbgabdibiji--garage-de-l-ille--rennes.htm · https://garagefr.com/p/garage-de-lille-21027 · https://atelier-de-reparation-automobile.autour-de-moi.com/garage-de-l-ille-2727711.html |
| Awards / press | **None found** (Ouest-France, Chantepie magazine, Rennes quarter sites, forums searched). | not found | — |

### Opening hours (per day)

| Day | Morning | Afternoon |
|---|---|---|
| Lundi | 08:00–12:00 | 13:00–18:00 |
| Mardi | 08:00–12:00 | 13:00–18:00 |
| Mercredi | 08:00–12:00 | 13:00–18:00 |
| Jeudi | 08:00–12:00 | 13:00–18:00 |
| Vendredi | 08:00–12:00 | 13:00–18:00 |
| Samedi | Fermé | Fermé |
| Dimanche | Fermé | Fermé |
| Jours fériés | Fermé (OSM `PH off`) | |

Stale conflicting hours (do not use): Fixter "08h30–12h00" (probably an error); old Chantepie listings 08:00–12:00 / 13:30–18:30; old Motrio Garage du Gast listings Mon 9:00–12:30 / 14:00–18:30, Tue–Fri 8:30–12:30 / 14:00–18:30. No holiday/summer closure dates found.

---

## 2. Story & history

All dates are from the official registers (register API + BODACC) unless marked.

| Date | Event | Source |
|---|---|---|
| 1 Oct 2005 | GARAGE LAMANDE created at 20 avenue de la Grotte, 35135 Chantepie (NAF 45.11Z). The predecessor at the first site. | https://recherche-entreprises.api.gouv.fr/search?q=487494973 |
| 6–7 Feb 2012 | SARL GARAGE DE L'ILLE created and registered at 20 av. de la Grotte, Chantepie. | https://www.societe.com/societe/garage-de-l-ille-539728154.html · https://recherche-entreprises.api.gouv.fr/search?q=539728154 |
| 10 Feb 2012 | The gérant takes office (still in post). | https://www.societe.com/societe/garage-de-l-ille-539728154.html |
| 1 Mar 2012 | Trading starts. Garage de l'Ille buys the GARAGE LAMANDE business for **€80,000**, described as "garage, mécanique, tôlerie, négociant automobiles" (BODACC 27 Mar 2012). | https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22539728154%22&limit=20 |
| Sep–Oct 2012 | GARAGE LAMANDE wound up and struck off. | https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22487494973%22&limit=20 |
| 2012–2023 | About 11 years in Chantepie; accounts filed every year 2013–2022. Online reviews from 2017 onward (one 2017 reviewer says they live in Chantepie). | BODACC (above) · https://atelier-de-reparation-automobile.autour-de-moi.com/garage-de-l-ille-2727711.html |
| 27 Mar 2017 | (Predecessor, different business) "Garage du Gast" moves from 1 rue Henry Dunant, Centre Commercial du Gast, into **2 rue de Jinan** and trades as "Motrio – Garage du Gast". | https://recherche-entreprises.api.gouv.fr/search?q=482007879 · https://www.societe.com/societe/garage-du-gast-482007879.html · https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22482007879%22&limit=30 |
| April 2017 | The Maurepas-Gayeulles urban-renewal project opens 600 m² of craft workshops along avenue de Rochester, built on the old Gast shopping-centre car park: about 300 m² for the Gast garage's mechanics, plus ADAPT association workshops (search snippet). **Now confirmed on the City of Rennes' quartier site (critic pass):** the programme is called **« Les Ateliers de Maurepas »**, and the page names our garage: « C'est aussi le cas du **Garage de l'Ille**, un atelier de réparation automobile, installé depuis 2017 le long de l'Avenue Rochester. » A second set of craft workshops is planned near the west wing of the Les Gayeulles metro station (« une quinzaine de cellules » for artisans). Note: "depuis 2017" is the workshop's date (the predecessor moved in in 2017); Garage de l'Ille itself arrived in April 2023. Do not write "depuis 2017" on the site. | https://www.rennes-maurepas.fr/un-nouveau-visage-en-2020/de-nouvelles-activites-commerces-services-au-coeur-du-quartier · http://gayeulles.rennes-maurepas.fr/un-nouveau-visage-en-2020/de-nouvelles-activites-au-coeur-du-quartier · https://www.territoires-rennes.fr/les-projets/maurepas-gayeulles |
| 3 Apr 2023 | **Move to Rennes.** Garage de l'Ille buys the Garage du Gast workshop business at 2 rue de Jinan for **€150,000** (notarial deed 3 Apr 2023; BODACC 19 Apr 2023). Chantepie site closes the same day. | https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22539728154%22&limit=20 |
| 31 Dec 2025 | The predecessor sole trader (Garage du Gast, SIREN 482 007 879, moved to Bourg-des-Comptes in 2023) ceases entirely. | https://recherche-entreprises.api.gouv.fr/search?q=482007879 · https://www.societe.com/societe/garage-du-gast-482007879.html |

**What the history means for the site**
- The same gérant has run the business continuously since February 2012, so the reputation (reviews 2017 onward) is the garage's own, carried from Chantepie to Rennes. Loyal customers followed it (reviews mention Chantepie, Saint-Jacques and even a customer who drives in from Paris).
- **Refuted claim:** "Google reviews at rue de Jinan date back to 2017". The 2017–early-2023 reviews were written about the Chantepie garage. Never present them as rue-de-Jinan history.
- The name very probably refers to the river Ille (which meets the Vilaine in Rennes), but **no source states the origin**. Do not claim it; ask the owner.
- Suggested storyline (owner must confirm wording): « Né à Chantepie en 2012 en reprenant un garage du coin. Depuis avril 2023 à Rennes, rue de Jinan, au cœur des Gayeulles, à deux pas du métro B. »
- No founder story, press, awards, apprenticeships or sponsorships were found. **The one third-party mention:** the City of Rennes' quartier site cites Garage de l'Ille as an example of "activités productives au cœur de la ville" in « Les Ateliers de Maurepas » (§2, 2017 row). Usable on /histoire as « Le garage fait partie des Ateliers de Maurepas, des ateliers d'artisans créés avec le renouvellement du quartier », with the city page as source.
- **Network chapter:** at some point the garage joined **Staff Auto** (date unknown; the Chantepie garage's network status is unknown). Ask the owner when and why; it is a credible "toutes marques, mais pas seul" message (parts and training through Autodistribution).

---

## 3. Offer

**No prices are published anywhere.** Every price on the site is mock and must be labelled "Tarif indicatif, exemple" with "Devis gratuit" (see §11 and §12). Source for every line below unless noted: PagesJaunes "prestations" (https://www.pagesjaunes.fr/pros/03153733, https://www.pagesjaunes.fr/pros/53779522), mirrored by 118712 (https://www.118712.fr/professionnels/X0FQW1RSHgI) and Mappy (https://fr.mappy.com/poi/4d6c1dd4fc6925073c140dd7). Single data feed, medium confidence.

### Real services found (French names to keep)

| Group | Services (as listed) |
|---|---|
| **Entretien** | Entretien / révision; vidange et filtres (huile, air, habitacle, carburant); entretien diesel; bougies (allumage / préchauffage); purge du liquide de refroidissement; purge liquide de frein; vidange boîte automatique; réparation essuie-glaces |
| **Moteur** | Entretien et réparation moteur; mise au point / réglage moteur; **décalaminage**; nettoyage moteur; réparation injecteurs; démarreur; distribution (**courroie de distribution**) |
| **Transmission** | Réparation boîte de vitesses (incl. échange standard); **embrayage**; cardans / transmissions |
| **Freinage** | Plaquettes, disques, purge liquide de frein |
| **Pneus** | Changement / montage, gonflage, réparation de crevaison, recyclage des pneus |
| **Suspension & échappement** | Suspension; échappement; **filtre à particules (FAP)** remplacement / traitement |
| **Diagnostic** | Diagnostic électronique |
| **Énergies** | Véhicules **thermiques** (essence, diesel), **hybrides**, **GPL** |
| **Toutes marques** | Réparation toutes marques |
| **Services** | **Véhicule de remplacement** (« prêt de voiture si possible et besoin », reviews); démarche **Garage Propre / Garage Vert** |

Confirmed independently by reviews (https://atelier-de-reparation-automobile.autour-de-moi.com/garage-de-l-ille-2727711.html): general mechanics, FAP repair (Mégane 2), EGR valve diagnosis (Mercedes Classe A), preparing cars for the contrôle technique and handling the « contre-visite », free advice for an insurance claim, referring customers to a « confrère » when brand-specific tools are needed.

**Not confirmed, do not list as services:** carrosserie / peinture (only viedauto's generic template, https://www.viedauto.com/pro/garage-de-lille/; the 2012 Chantepie purchase mentioned "tôlerie", but the 2023 Rennes deed says only "atelier de réparation automobiles"); contrôle technique on site (no; only the predecessor's listing mentioned CT); vente de véhicules d'occasion (no current evidence). A "Préparer son contrôle technique" service (pre-CT check) is supported by reviews and can be offered.

### Parts brands used
SKF · Valeo · Bosch · Purflux · Moog · Gates · Motrio (as a parts brand only). Text mention only; brand logos only with permission.

### Self-description (verbatim, PagesJaunes, written by the pro)
> « Au Garage de l'Ille, votre véhicule bénéficie d'un suivi complet, qu'il soit thermique, hybride ou GPL … découvrez un accueil chaleureux, un service de qualité et une expertise adaptée à vos besoins. » (https://www.pagesjaunes.fr/pros/03153733)

Full second version of the pro's own text (critic pass, verbatim, original grammar kept), PagesJaunes listing 53779522:
> « Au Garage de l'Ille, votre véhicule bénéficie d'un suivi complet, qu'il soit thermique, hybride ou GPL. Nous prenons soin de chaque détail : entretien, réparations moteur, freins, boîte de vitesse ou pneus, avec des pièces de grandes marques reconnues. Soucieux de l'environnement, notre Garage Vert agit pour un service respectueux et durable. Pour que vous roulez en toute sérénité, nous proposons aussi des véhicules de remplacement. » (https://www.pagesjaunes.fr/pros/53779522)

This is the garage's own voice: « nous prenons soin de chaque détail », « pièces de grandes marques reconnues », « en toute sérénité ». Reuse these phrases (grammar corrected to « rouliez ») in the hero subtext and /notre-facon.

> « Etre Garage Propre signifie que l'intégralité de ces déchets est traitée via des filières conformes à la règlementation » (https://www.pagesjaunes.fr/pros/53779522)

### Signature "items" (what this garage is known for)
1. **Le diagnostic honnête:** finding the real cause before repairing (« cherchent les causes des problèmes en profondeur »).
2. **La pièce montrée:** the old part kept and shown to the customer.
3. **Réparer plutôt que changer:** the cheapest workable fix first.
4. **FAP / dépollution** (the famous €285 vs €1,600 Mégane story, Chantepie 2017).
5. **Hybride & GPL** servicing (a differentiator vs Garage Patton).
6. **Véhicule de remplacement** + metro B drop-off.
7. **Préparation au contrôle technique** and contre-visite handling.

---

## 4. Customer voice

### Ratings per platform (all seen 2026-10-13)

| Platform | Rating | Count | Notes / URL |
|---|---|---|---|
| **Google** (via Bottin) | **4.9/5** | "+ de 150 votes" | 93% ★5, 4% ★4, 1% each ★3/★2/★1. https://www.bottin.fr/fiche-locale/cgbfdajhgbgabdibiji--garage-de-l-ille--rennes.htm |
| Google (via garagefr / Fixter) | 4.9/5 | 133 | https://garagefr.com/p/garage-de-lille-21027 · https://www.fixter.fr/garage/garage-de-lille |
| Google (synced on autour-de-moi, last sync 25/03/2024) | 4.8/5 | 99 | Full texts 2017–Mar 2024. https://atelier-de-reparation-automobile.autour-de-moi.com/garage-de-l-ille-2727711.html · https://autour-de-moi.pro/fiche/garage-de-lille/ |
| Google (older, via viedauto) | 4.8/5 | 91 | https://www.viedauto.com/pro/garage-de-lille/ |
| PagesJaunes | 5.0/5 | 1 (07/10/2017) | Listing carries Garage du Gast aliases; **do not quote this review.** https://www.pagesjaunes.fr/pros/03153733 |
| Facebook | 100% recommend (unchecked) | 13 (unchecked) | https://www.facebook.com/GarageDeLIlle/ |
| Allogarage | none | 0 | https://www.allogarage.fr/garages/details-garage-Garage-de-l-ille-19507.html |
| LesGarages.fr | — | 1 recommendation | https://lesgarages.fr/35/rennes/garage-de-l-ille-2uln |
| Vroomly | "Non certifié", no rating | — | https://www.vroomly.com/garage-rennes?page=2 |
| idGarages, TripAdvisor, Yelp, Petit Futé, Reddit | not found | — | — |

Trend: 91 → 99 (Mar 2024) → 133 → 150+, average 4.8 → 4.9. Google is the only platform with volume. Owner replies to reviews: none found.

### Praise themes (by frequency)
1. **Honesty, no overcharging** (main theme): « pas là pour se faire de l'argent sur le dos des clients », « ne cherchent pas à gonfler la facture », « ne vous poussent pas à la dépense », « pas des pigeons ». Many came after being overcharged elsewhere (Renault dealer, « un premier garagiste très très douteux », « concessions qui vous plument »).
2. **Explaining and teaching:** « prend le temps d'expliquer »; **keeps the defective part to show you**; beginners feel safe.
3. **Real cause, repair rather than replace:** « préférera réparer plutôt que de changer », « persévérant ».
4. **Fair, low prices vs dealers/chains:** « prix doux », « prix très corrects », « moins élevés que… mon garage Peugeot », « tarif vraiment abordable »; €285 vs €1,600; another review cites a €1,315 saving vs a dealer.
5. **Warm welcome from the couple:** « le couple est complémentaire », « ils font une belle équipe », « même la patronne connais la mécanique », « Toujours avec le sourire, même tôt le matin ».
6. **Generosity:** no fee for insurance-claim advice (2019); car kept nearly a month « sans prendre un seul centime »; referral to a « confrère » when needed.
7. **Contrôle technique help:** advice before the CT, handling the contre-visite.
8. **Practical extras:** loan car, quick appointments, times kept, fast repairs.

### Complaints (very few)
- One 2/5 Google review (22/10/2017, Chantepie era): car returned "all fine", another garage did the repair. « Décevant. »
- Lukewarm 4/5: « Sa passe », « Sympa » (2019).
- **Capacity:** slots can be hard to get (« A recommander (enfin pas trop car ça pourrait allonger les délais 🤣) », « j'ai fini par avoir une place »). Weekdays only, closed at lunch.
- Brand-specific tools sometimes missing (job referred elsewhere).

### Emotional vocabulary
confiance · en toute confiance · **les yeux fermés** (~8 times) · rare · comme il en existe peu · comme il ne s'en fait plus · ENFIN · honnête / honnêteté sans pareille · sincères · bienveillant · humain · chaleureux · drôle · souriant · carré · persévérant · ravi · très reconnaissante · « Il est presque agréable de tomber en panne ».

### Who the customers are
- Local, loyal, everyday drivers from Rennes north-east and nearby towns (Chantepie, Saint-Jacques mentioned); families and couples bringing both cars; long-standing clients. Some travel (Paris, a Mercedes CLA owner; "Annie de Toulouse").
- Mechanical beginners and first-time owners; women who mention feeling safe from being overcharged.
- Cars: modest and older everyday cars (Peugeot 207, Renault Mégane 2, « véhicule de 20 ans ») plus some premium (Mercedes Classe A, CLA); a Mini and a Nissan Patrol.
- Found via word of mouth (« sur les conseils de 2 amis ») and Google reviews.
- Working adults and families; not students, not tourists. Metro-B commuters are a natural fit (drop the car, take the metro).

### Verbatim quotes
All: **real quote, may be used with attribution to platform only** (e.g. « Avis Google, 2023 »). Never attach reviewer names. Quotes dated before 3 Apr 2023 were written about the **Chantepie** garage; label with the year only, never imply rue de Jinan. Original spelling kept.

| # | Quote | Platform, date | Source |
|---|---|---|---|
| 1 | « ENFIN!!!!!! Enfin un garage ou l'on peut déposer sa voiture en toute confiance. » | Google, 01/12/2023 | autour-de-moi |
| 2 | « Sympathiques et clairement pas là pour se faire de l'argent sur le dos des clients » | Google, 16/05/2017 (Chantepie) | autour-de-moi |
| 3 | « ils ne cherchent pas à gonfler la facture mais vous donnent de bon conseils. Allez-y les yeux fermés. » | Google, 26/01/2023 (Chantepie) | autour-de-moi |
| 4 | « Un garagiste qui préférera réparer plutôt que de changer très bien placé au niveau du tarif » | Google, 19/05/2019 (Chantepie) | autour-de-moi |
| 5 | « le garagiste garde la pièce défectueuse afin de vous expliquer ce qui n'allait pas » | Google, 21/01/2022 (Chantepie) | autour-de-moi |
| 6 | « Prix très corrects et couple très sympathique! Il est presque agréable de tomber en panne :-) » | Google, 14/11/2019 (Chantepie) | autour-de-moi |
| 7 | « Béatrice vous accueille avec bonne humeur, qui vous fait oublier les tracas avec votre voiture. » | Google, 04/06/2023 | autour-de-moi (**names Béatrice: needs consent**) |
| 8 | « prestation au top que ce soit Etienne à l'atelier ou Béatrice a l'accueil. » | Google, 18/04/2023 | autour-de-moi (**names both: needs consent**) |
| 9 | « Garagiste carré, ils ont fait le maximum pour que ma voiture passe le CT sans faire de grosses réparations » | Google, 16/10/2023 | autour-de-moi |
| 10 | « Ils ont vraiment cherché à trouver l'origine de la panne avant d'effectuer la réparation. Compétent et persévérant. » | Google, 12/03/2023 (Chantepie) | autour-de-moi |
| 11 | « Un gros 5 étoiles par ce que je ne peux pas en mettre 6 ! » | Google, 22/08/2023 | autour-de-moi |
| 12 | « ne vous poussent pas à la dépense, et vous montrent même les produits changés et défectueux » | Google via Fixter, undated (2024+) | Fixter (not re-verified) |
| 13 | « c'était notre premier véhicule et aucune connaissance en mécanique, ils ont pris le temps de tout nous expliquer. » | Google via Fixter, undated | Fixter (not re-verified) |
| 14 | « Ma voiture est restée quasiment 1 mois et ils ne m'ont même pas pris un seul centime.. » | Google via Fixter, undated | Fixter (not re-verified) |
| 15 | « Remarquable. Très humain et très honnête » | Google, 27/02/2024 | autour-de-moi |
| 16 | « Si vous cherchez un garage accueillant et extrêmement compétent, n'hésitez pas ! » | Google, 15/03/2024 | autour-de-moi.pro (critic pass; source spelling "nhésitez", fixed apostrophe only) |
| 17 | « Je recommande ce garage à quiconque apprecie sa voiture et souhaite faire confiance » | Google, 15/03/2024 | autour-de-moi.pro (critic pass) |
| 18 | « Je connais ce garage depuis longtemps, ils sont très compétents, très honnêtes » | Google, 04/03/2024 | autour-de-moi.pro (critic pass; loyal customer since the Chantepie years) |

Critic pass: quotes 16–18 come from https://autour-de-moi.pro/fiche/garage-de-lille/ (Google sync, 99 reviews, newest 17/03/2024, which only says « Béatrice est au top 👌 Super garage »: names staff, needs consent). **No 2025–2026 review text was readable anywhere** (Google Maps not reachable; Fixter WAF-blocked; Bottin and garagefr show only totals). Quotes 12–14 (Fixter) are **still not re-verified**.

Source URLs: autour-de-moi = https://atelier-de-reparation-automobile.autour-de-moi.com/garage-de-l-ille-2727711.html (also https://autour-de-moi.pro/fiche/garage-de-lille/); Fixter = https://www.fixter.fr/garage/garage-de-lille.

**Price proof (paraphrase only):** Google, 01/04/2017, 5/5, Chantepie era: a Renault dealer quoted €1,600 for a particulate-filter problem on a Mégane 2; the garage fixed it for €285. Present as a past customer story ("En 2017, un client…"), never as a current price.

**Do not use:** the PagesJaunes 2017 review (« Un garagiste comme il ne s'en fait plus… ») per the fact-check (listing shares the predecessor's aliases); the 2/5 review (internal reference only).

---

## 5. Brand identity cues

| Cue | Finding |
|---|---|
| Shopfront (**NEW, critic pass**) | The Facebook page's profile picture (its own photo, og:image of https://www.facebook.com/GarageDeLIlle/, viewed for reference only) shows the rue de Jinan workshop: a **low, flat-roofed industrial shed clad in black/anthracite vertical ribbed steel**, a long horizontal translucent window band, a **rust-red Corten steel screen/fence** at one end, a timber picket fence and red-leaved shrubs in front, bare trees and blue sky (winter or early spring). Two façades carry the sign. This matches the 2017 "Ateliers de Maurepas" craft-workshop building (§2). Confidence that it is the Rennes site: high (only Rennes has this building; the photo carries the post-2023 signage). |
| Logo / sign | No standalone logo file found. The **real sign** is a long black band with a **white right-pointing triangle ▶**, then **"GARAGE"** in **orange** and **"DE L'ILLE"** in **white**, all caps in a **bold, condensed, straight-sided sans** (the "D" looks split orange/white). Beside it, the **Staff Auto roundel** (orange oval, white "STAFF AUTO"). The sign is probably the Staff Auto network's standard signage kit (the same oval appears on Autodistribution's Staff Auto image), so treat ▶ + orange/white as **network-derived but on their building**. Ask for the vector file. |
| Colours | **Now grounded in the shopfront** (photo-sampled, sunlit, so only approximate): cladding anthracite **≈ #272726**; sign orange **≈ #C8784B–#CD8948** in the photo (the real sign is probably a brighter, more saturated orange); white lettering; Corten rust **≈ #AE4C20**. This contradicts the §9 rule "no orange"; see the critic revision in §9. |
| Fonts | None known. The sign lettering is a condensed bold grotesque (not identified); Archivo at narrow width or Barlow Condensed would echo it. |
| Photo style | Only the one shopfront photo exists publicly (Facebook). **Do not reuse it or other photos from Facebook, Google or directories**; ask the owner for originals (the façade shot is clearly theirs and would be the ideal hero photo with permission). |
| Tagline (own) | **« Votre partenaire automobile, au cœur des Gayeulles »** (Facebook snippet; the only self-written slogan). |
| Customer-born phrase | « Vous pouvez y aller les yeux fermés » / « en toute confiance ». Use as proof copy attributed to reviews, or as a headline only if the owner approves. |
| Tone of voice | Warm, reassuring, plain-spoken neighbourhood garage. Never salesy. Explains instead of selling. Vouvoiement. Short, concrete sentences; mechanics explained without jargon. |
| Recurring words (own) | suivi complet · accueil chaleureux · service de qualité · expertise · partenaire automobile · thermique / hybride / GPL · marques reconnues · Garage Vert · Garage Propre · respect de l'environnement |
| Recurring words (customers) | honnête · confiance · les yeux fermés · expliquer · pièce · réparer plutôt que changer · prix corrects · couple · accueil · carré |
| Values / labels | Honesty, transparency (the part shown), repair-first, warmth, eco-responsibility ("Garage Propre" self-declared). Independent, all makes, Staff Auto network member. |
| Own-voice phrases (critic pass) | « nous prenons soin de chaque détail » · « pièces de grandes marques reconnues » · « pour que vous rouliez en toute sérénité » · « Soucieux de l'environnement » (PJ 53779522, §3) |

---

## 6. Place & context

- **Quartier:** Le Gast, in **Maurepas – Patton** (Quartiers Nord-Est). A 1950s–60s ZUP by architect **Jean-Gérard Carré**: towers, raised shopping platforms. Priority-policy area since the 1980s; now under a **€76m ANRU renewal (2020–2028), 25 ha**, 1,600 homes refurbished, 500 new; ZAC Le Gast restructuring the Gast shopping centre; "active ground floors"; Toni-Morrison school complex (2023). Multicultural, family-oriented, young, one of the greenest areas of Rennes. (https://www.rennesimmo9.com/actualites/urbanisme-architecture/renouveau-quartier-maurepas-rennes · https://edito.seloger.com/tendances/vivre/decouverte-quartier-maurepas-rennes-article-21349.html · https://www.territoires-rennes.fr/les-projets/maurepas-gayeulles)
- **The workshop building** belongs to the renewal: craft workshops opened April 2017 on the old Gast car park along avenue de Rochester, programme named **« Les Ateliers de Maurepas »**; the City of Rennes' quartier site names Garage de l'Ille as one of its occupants (**high confidence now**, §2: https://www.rennes-maurepas.fr/un-nouveau-visage-en-2020/de-nouvelles-activites-commerces-services-au-coeur-du-quartier). Building look (own Facebook photo): black ribbed steel, horizontal window band, Corten screen, picket fence, planted verge. The same city page frames the quartier as « le maintien d'activités productives au cœur de la ville », a ready-made line for the /histoire page.
- **Rue de Jinan** is named after Jinan, Rennes' Chinese twin city since 2002 (naming from a 2015 council decision: snippet only, low confidence).
- **Landmarks (approx. OSM distances):**
  - **Metro B Les Gayeulles** ~180–221 m (line B opened Sept 2022; city centre ~10 min).
  - **Jardin de Jinan** in Parc de Maurepas, ~550–575 m: Chinese garden of 3,600 m² opened 20 May 2024, 5 m waterfall, tea pavilion, **built with Breton granite and local timber** (https://unidivers.fr/rennes-jardin-chinois-cascade-parc-maurepas/ · https://sdxw.iqilu.com/share/YS0yMS0xNTYzMTk2NA==.html).
  - **Parc des Gayeulles** ~1 km: pool (~830 m), ice rink, treetop course, educational farm.
  - **Musée des Beaux-Arts annex** at the foot of "La Banane" (1960s building), 2 allée Georges de la Tour, opened 1 Feb 2025 (https://unidivers.fr/rennes-musee-beaux-arts-maurepas/).
  - Tuesday market, place Lucie-et-Raymond-Aubrac (~40 stalls); Gros-Chêne and Gast shopping centres; Pôle associatif de la Marbaudais (~530 m).
  - **Rue de Fougères** arterial ~250–300 m south; Mon Contrôle Technique Rennes, 233 rue de Fougères, ~340 m.
- **Catchment:** residents of Maurepas, Patton, Jeanne d'Arc, Longs-Champs, plus metro-B commuters. City centre (2.6 km) is not the catchment. **"Déposez la voiture, prenez le métro B"** is a real selling point (inference from facts).
- **Rennes / Breton cues, without cliché** (https://en.wikipedia.org/wiki/Ille · https://en.wikipedia.org/wiki/Ille-et-Vilaine · https://www.pariszigzag.fr/rennes-actu/rennes-medieval/ · patrimoine.bzh · https://en.wikipedia.org/wiki/Stellantis_Rennes_Plant):
  - The **Ille** joins the Vilaine in Rennes; Gallic *Condate* = "confluence"; the Canal d'Ille-et-Rance. A flowing line or a confluence "Y".
  - **Schiste pourpre** (Rennes' medieval walls: brick and purple schist), **slate** roofs, warm **granite**.
  - **Colombages** (half-timbering, ~10 km uncovered) as a structural grid idea.
  - **Citroën La Janais** (Chartres-de-Bretagne, opened 1961): Ami 6, Dyane, GS; today Peugeot 5008 and C5 Aircross, ~30% plug-in hybrids. Supports a 1960s technical-drawing / brochure illustration language.
  - **Modernist Maurepas** (Carré's towers, La Banane) supports a mid-century / Swiss-grid look rooted in the quarter, not the old town.
  - **Avoid:** triskell, Gwenn-ha-du stripes, ermines, crêpes, lighthouses, sea imagery (Rennes is inland), "Breizh" puns.

---

## 7. Competitors and positioning

| # | Competitor | Address / distance | Type | Rating found | How Garage de l'Ille differs |
|---|---|---|---|---|---|
| 1 | **Garage Patton** (SARL, 2015, 1–2 staff) | 157 av. du Général George S. Patton, ~860 m | Independent, all makes | 4.7/5 from 84 (https://garagefr.com/p/garage-patton-20937; https://www.pagesjaunes.fr/pros/09170705) | Closest like-for-like rival. Ille has the higher rating and volume, courtesy car, Garage Propre, hybrid/LPG. Patton is open later (19:00 Mon–Thu). No website either. |
| 2 | **Garage Jeanne d'Arc**, Renault agent (SARL THOMAS-CARION, 2020) | 103 bd de Vitré, ~800 m | Brand agent: sales + after-sales | No current rating; predecessor Garage Béchu 4.6/183 (https://lesvoitures.fr/adresse/renault-sarl-thomas-carion-rennes/ · https://www.michelin.fr/auto/dealer-locator/rennes/sarl-garage-bechu · https://www.societe.com/societe/garage-bechu-353676091.html) | Brand-tied and sells cars. Ille is brand-neutral, smaller, more personal. |
| 3 | **Speedy Rennes rue de Fougères** | 124 rue de Fougères, ~850 m | Fast-fit chain | none reliable (https://www.au-magasin.fr/35000-rennes/speedy-24944.html · https://www.idgarages.com/fr-fr/garage/rennes/GB28437_speedy-rennes-rue-de-fougeres) | Speedy opens Saturday 8–17 and weekdays to 19:00. Ille wins on in-depth diagnosis and trust. |
| 4 | **Renault Rennes / Renault Minute / Dacia** (Car Lovers) | 300 rue de Fougères, ~1.4 km | Main dealer + quick bay + bodywork | 4.1/5 from ~4,142 (https://fr.mappy.com/poi/57724d290351d12f9551142a) | Large, impersonal; the €1,600 vs €285 story is the counter-argument. "Same mechanic every time." |
| 5 | **Norauto Rennes Longs-Champs** (+ Carglass) | 9 allée Morvan Lebesque, ~1.7 km | Car-centre chain | Carglass 5/5 (2) (https://www.avis-verifies.com/avis-clients/carglass.fr/e/2937/carglass-rennes-longs-champs-35700) | Late/Saturday hours, online booking, price lists. Ille must make calling and asking for a quote effortless. |
| 6 | **Eurorepar Garage du Centre Ville – Delapierre** | 85 rue Jean Guéhenno, ~1.46 km | Stellantis multi-brand network | not rated (https://www.idgarages.com/fr-fr/garage/rennes/GB22465_eurorepar-garage-du-centre-ville-delapierre) | Network marketing and fixed packages vs local reputation and review score. |
| 7 | **Pièces et Pneus – Rennes Patton** | 177 av. du Général Patton, ~720 m | Tyres and parts | TrustScore 3.5 (https://it.trustpilot.com/review/piecesetpneus.com/location/rennes-patton) | Tyres only vs full repair. |
| 8 | *(complementary)* **Mon Contrôle Technique Rennes** | 233 rue de Fougères, ~340 m | CT centre | — (https://fr.mappy.com/activite/garage/35000-rennes) | Not a competitor. Tie-in: "On prépare votre voiture pour le contrôle technique." Do not name or imply partnership. |

| 9 | *(same network)* **Auto Chromes**, Staff Auto | 11 bis rue des Veyettes, 35000 Rennes (south-east Rennes, several km away) | Independent, Staff Auto | 4.3/5, "130+ votes" (search snippet, low) | Listed next to Garage de l'Ille in the Autodistribution locator (https://pro.autodistribution.fr/reparateurs-auto/ille-et-vilaine/rennes). Shows that Staff Auto is not a differentiator; the reputation is. |

**How it wins (all sourced):** best rating and volume in its micro-area (4.9, 150+); owner-run, the same two faces; honesty and explanation (the part shown); repair-first; hybrid + LPG; courtesy car; Garage Propre approach; OE-quality parts (Bosch, Valeo, SKF, Gates); ~3 minutes on foot from metro B.

**Weak points the site must handle:** closed Saturdays and at lunch; appointments can take time; no online booking. Answer with a clear hours block and live "open now" status, a one-tap call button, a "describe your problem" quote request (mailto), and FAQ entries on delays and the courtesy car.

**Positioning line (from customers):** « Un garage de confiance, à taille humaine. » Proof: « les yeux fermés ».

---

## 8. Inspiration

| Reference | URL | What to take |
|---|---|---|
| The Electrified Garage | https://electrifiedgarage.com (via https://www.zarla.com/inspiration/auto-repair) | **Best fit.** Exploded-diagram hero with monospace part labels; plain-English diagnostics copy; five named service groups. Ideal for "we explain things" + hybrid work. |
| Classics Garage (Awwwards HM, 3 May 2024) | https://threejs-classics-garage.vercel.app/ · https://www.awwwards.com/sites/classics-garage | In a light form: an interactive car you tap (brakes, engine, tyres) to jump to the service. No full 3D needed. |
| Singer Vehicle Design | https://singervehicledesign.com | Editorial scroll storytelling (heritage → philosophy → craft); macro close-ups of parts, scaled down to a neighbourhood workshop. |
| HB Body Automotive Refinish (Awwwards HM, 25 Sep 2024) | https://hbbody.com · https://www.awwwards.com/sites/hb-body-automotive-refinish | One confident accent colour; spec tags on product grids. (Skip numbered-section eyebrows.) |
| 363 Car & Social Club (Awwwards HM, 11 May 2026) | https://363sudbury.com · https://www.awwwards.com/sites/363-car-social-club | Calm UI, smooth GSAP route transitions, motion kept purposeful. |
| Autodeutsche (London) | https://autodeutsche.co.uk | Phone number fixed in the header; reviews as the main proof; service cards. |
| Ace Mechanics (Melbourne) | acemechanics.com.au (via Zarla) | Rating badge placed right next to the call / quote buttons. |
| Bumper Buddies | bumperbuddies.com (via https://freshysites.com/blog/top-auto-repair-websites/) | Hero shows the process; "send a photo / describe the noise" quote request. |
| Forge Automotive (UK) | https://forgeautomotive.co.uk | Sparing, confident copy; each service card with its own call to action. |

Patterns to keep: one primary action (call), trust proof up front, 4–6 service groups, motion that explains. **Avoid** the generic marketplace look (Framer "Redline Workshop", Webflow "GarageFlow"): black + red/orange, chrome, flames, stock photos of a mechanic with a wrench, carbon-fibre textures. *(Critic note: the garage's real sign IS black + orange + white, see §5. Keep those colours because they are the building's, but avoid the template tropes: no chrome, flames, glow, carbon or diagonal "speed" stripes. Flat black band, light sheet, line drawings.)*

---

## 9. Design direction

**Design read:** a complete multi-page site for a trust-first local service, for local drivers who are often non-experts, with an explanatory, technical-drawing language rooted in 1960s Maurepas modernism and Rennes stone, leaning toward vanilla TS + CSS custom properties + GSAP ScrollTrigger + Lenis, SVG line art.

**Dials:** DESIGN_VARIANCE 6 · MOTION_INTENSITY 8 (project brief demands heavy motion, but every animation must *explain* something) · VISUAL_DENSITY 4.

**Tool notes:** the ui-ux-pro-max design-system query for "auto repair garage local service trust" returned the generic pattern *Trust & Authority + Conversion* with **professional blue #1E40AF + orange CTA #EA580C** and Inter/Playfair. We keep its structure (proof up front, one clear CTA path, contact never hidden, certifications shown) and its rule "avoid hidden contact info", but **reject its palette and fonts**: blue + orange is exactly the chain-garage look (Speedy / Norauto territory) this business must stand apart from. design-taste-frontend: no beige/brass default, no AI-purple, sans display (no default serif), one accent, zero em-dashes in site copy, max one marquee.

### Concept: **« Pièce à l'appui »**

*One line:* the site works like Étienne at the counter: it takes the car apart in front of you, shows you the worn part next to the new one, explains in plain French, and lets you decide.

The French idiom *pièce à l'appui* means "with proof in hand"; here *pièce* is literally the car part. It turns the garage's most-praised habit (keeping the defective part to show the customer) into the organising idea of every page: each service is shown as an exploded technical drawing, each claim is backed by a real review, every price is honest about being an estimate.

**Personality keywords:** honnête · pédagogue · carré · chaleureux · de quartier · précis · sans esbroufe.

### Palette ("Ardoise, Schiste et Ille")

Light theme is the main expression (a workshop drawing on a light sheet); dark theme provided via tokens. Contrast ratios computed (WCAG).

| Token | Hex | Role | Grounding |
|---|---|---|---|
| `--granit` | `#ECEDEA` | Page background (cool light grey, not cream) | Breton granite, Jardin de Jinan stone |
| `--granit-2` | `#D9DBD7` | Section tint, drawing grid, dividers | Granite in shade |
| `--ardoise` | `#23272B` | Body text, line drawings (12.8:1 on granit) | Rennes slate roofs |
| `--ardoise-soft` | `#5E6670` | Secondary text, captions (4.95:1 on granit) | Weathered slate |
| `--schiste` | `#4A2F3A` | Brand dark: headings, footer, large blocks (10.2:1 on granit; light text on it 10.8:1) | **Schiste pourpre** of Rennes' medieval walls |
| `--ille` | `#2B6E60` | **The one accent**: primary CTA (call), links, active states, the river line (5.1:1 on granit; `#F4F4F1` text on it 5.4:1) | River Ille, Gayeulles greenery, "Garage Vert" |
| `--etiquette` | `#E0B341` | **Semantic only:** the tag on a *worn* part in diagrams and the "usé" label. Never on buttons or decoration. (Ardoise text on it 7.7:1) | Workshop inspection tags |
| Dark: bg | `#1B1E22` | Dark-mode background | Slate at night |
| Dark: text | `#ECEDEA` (14.2:1) / muted `#A9B0B8` (7.6:1) | Dark-mode text | |
| Dark: accent | `#5FB3A0` (6.7:1) | Ille accent in dark | |
| Dark: schiste | `#C79AA8` (6.9:1) | Headings accent in dark | |

Rules: one accent (`--ille`) across the whole site; `--etiquette` is a documented semantic exception for worn-part tags only. No pure black/white. No orange, no red (red only for form errors). No gradients except the river line's subtle two-stop stroke.

### Critic revision: anchor the palette on the real shopfront (decide before building)

The palette above was written before anyone had seen the building. The garage's own Facebook photo (§5) shows a **black ribbed-steel workshop with an orange-and-white "GARAGE DE L'ILLE" sign, a white ▶ arrow, Staff Auto orange roundels and a rust Corten screen**. A customer arriving from the metro sees **black + orange + white**. A schist-purple and river-green site would not look like the place they walk up to. The rejection of orange in "Tool notes" was a guess about chain garages, made without this evidence.

Recommended (owner to confirm against the real sign file). Contrast computed (WCAG):

| Token | Hex | Role | Grounding |
|---|---|---|---|
| `--bardage` | `#1E1F1E` | Brand dark: header band, footer, hero drawing ink, large blocks (14.1:1 with `--granit` text) | Anthracite ribbed cladding (photo ≈ #272726) |
| `--granit` | `#ECEDEA` | Page background (kept) | Light sheet / granite |
| `--enseigne` | `#E8792B` | **The one accent**: call button fill, ▶ markers, active states. Text on it is `--bardage` (5.7:1); **never white text on it** (2.9:1, fails) | Sign orange (photo ≈ #C8784B–#CD8948 in sunlight; true sign likely brighter, confirm) |
| `--enseigne-ink` | `#A8481F` | Orange **as text/links** on light backgrounds (4.95:1 on granit) | Corten rust (photo ≈ #AE4C20) |
| `--ardoise-soft` | `#5E6670` | Secondary text (kept, 4.95:1) | Slate |
| `--etiquette` | `#E0B341` | Worn-part tag only (kept) | Inspection tag |
| `--ille` | `#2B6E60` | **Demoted to a semantic colour**: "Garage Propre / Garage Vert" notes and the *new part* state in diagrams only | River Ille, Garage Vert |

Consequences: the header becomes a black band like the sign (wordmark "GARAGE" orange + "DE L'ILLE" granite, preceded by a ▶), which also gives the "Ouvert / Fermé" chip a natural home. The ▶ from the sign becomes the site's only graphic motif (list bullets, the parcours step markers, the "suivant" arrow). The "Pièce à l'appui" concept, drawings, typography and motion stay as they are. The schist-purple tokens can be dropped. If the owner's real sign file shows different values, use those; never present the Staff Auto roundel as the garage's own logo.

### Typography

- **Display: Archivo** (variable, width axis 62–125). Headlines at width ~118–125, weight 700–800, tight tracking: echoes 1960s automotive brochures and technical lettering without nostalgia kitsch. Emphasis = italic or weight of the same family, never a mixed serif.
- **Body / UI: Archivo** at normal width 100, weight 400–500, 17–18 px base, line-height 1.55, max 65ch.
- **Mono: IBM Plex Mono** for part labels in diagrams, hours, phone, prices, the "fiche atelier" details (uppercase only for short diagram callouts).
- Self-host via `@fontsource-variable/archivo` and `@fontsource/ibm-plex-mono` (no Google Fonts `<link>` in production).
- French typography: non-breaking spaces before `: ; ! ?`, « guillemets », correct accents.

### Imagery approach (no rights to their photos)

- **Original SVG technical line drawings** (project CLAUDE.md prefers own SVG/CSS art over stock): a generic hatchback in side and exploded views (no manufacturer model, no badges), and per-service exploded drawings: étrier + disque + plaquettes, kit distribution (courroie, galets, pompe à eau), embrayage (disque, mécanisme, butée), FAP cut-away, bougie, filtre, injecteur, pneu en coupe, circuit de refroidissement.
- Drawings on a faint granite "papier millimétré" grid; worn parts carry the yellow `--etiquette` tag; new parts in clean ardoise line.
- A stylised **plan du quartier**: rue de Jinan, Les Gayeulles station, walking line to the metro, Jardin de Jinan and Parc des Gayeulles as simple shapes, the river line as a decorative stroke (not a geographic claim).
- **Photo slots** clearly marked `TODO: photo fournie par le garage` (atelier, façade, équipe) with drawn placeholders. No stock mechanic photos.
- Icons: one library (Phosphor or Tabler), stroke matched to the drawings (1.5).
- Wordmark: "Garage de l'Ille" set in Archivo expanded with a thin river-line underline. Explicitly temporary until the real logo is supplied. **Critic revision:** base the temporary wordmark on the real sign instead: ▶ + « GARAGE » (orange) + « DE L'ILLE » (light), all caps, bold condensed, on a black band. Still temporary; ask for the sign artwork.
- **Shopfront drawing (critic pass):** add one SVG line drawing of the real building (low shed, vertical ribbing, window band, Corten screen, picket fence) for /infos-pratiques and the footer, so arriving customers recognise it. Drawn from the public look, not traced from the Facebook photo.

### Layout ideas

- **Header:** wordmark left; nav (Atelier, Diagnostic, Notre façon, Histoire, Avis, Infos); right: **phone as the primary button** (`06 24 87 37 40`, tel link) and a live status chip « Ouvert · ferme à 18 h » / « Fermé · rouvre lundi à 8 h » computed from the verified hours (a real semantic state, the one allowed dot). Mobile: sticky bottom bar with Appeler / Itinéraire / Devis.
- **Grid:** 12-column Swiss grid that can show its construction lines in diagram sections only (Maurepas modernism, colombage rhythm), hidden elsewhere.
- **Shape lock:** sharp corners (radius 2 px) everywhere except the status chip (pill). Fits the drawing language.
- **Home rhythm** (different layout family each section): split hero with live drawing → proof band (4.9★ + "150+ avis Google" + Garage Propre text badge + metro B) → interactive car diagram → pinned "parcours de votre voiture" → horizontal "établi" of worn parts → quote wall (real reviews, platform-only attribution) → Chantepie→Gayeulles teaser → quartier map + hours → call CTA.
- Cards only where they carry hierarchy; services grouped in 6 families, not a 40-row list.

### Signature interaction: **« L'établi » (the workbench)**

A side-view line drawing of a generic car. Hover/tap a zone (freins, moteur & distribution, embrayage & boîte, échappement & FAP, pneus & suspension, refroidissement & entretien): the zone lifts out and **explodes into its parts** on a workbench strip. Each part has a mono callout. One part carries the yellow « usé » tag; a toggle « Pièce usée / Pièce neuve » morphs it (worn edges, glazing, cracks drawn in SVG → clean part). A panel explains in three short blocks, in the garage's voice: *À quoi ça sert · Les signes qui doivent alerter · Ce qu'on vérifie et ce qu'on vous montre*, then « Appeler pour un devis ». Keyboard: each zone is a button; arrow keys move between zones; the panel is a real DOM region (no content only inside SVG/canvas).

Secondary interaction: **« Ça fait quel bruit ? »** symptom finder on the Diagnostic page: pick a symptom chip (grince au freinage, voyant moteur, fumée noire, embrayage qui patine, odeur de brûlé, vibration à 110 km/h, voyant FAP…) → it highlights the zone on the car, lists the likely causes (mock, clearly framed as « pistes, pas un diagnostic ») and invites a call.

### Motion language

Library: **GSAP + ScrollTrigger** (+ SplitText for headlines, Flip for diagram ↔ detail transitions), **Lenis** smooth scroll, **View Transitions API** for route changes where supported. Check current docs and caniuse before building (CLAUDE.md). Animate transform/opacity/stroke-dashoffset/clip-path only.

- **Hero:** the car is drawn line by line (stroke-dashoffset, ~1.4 s, staggered by part), then the brake assembly slides out and explodes slightly with mono callouts typing in. Headline (SplitText by line, rising from a mask): « On vous montre la pièce. » (owner to approve) with the real tagline « Votre partenaire automobile, au cœur des Gayeulles » as subtext; CTA « Appeler le garage ». The thin Ille-green line under the wordmark extends across the page as the first motion.
- **Scroll storytelling:**
  1. **« Le parcours de votre voiture »** (pinned, scrubbed): one car drawing travels through 6 states: Vous appelez → Diagnostic → On vous explique, pièce à l'appui → Devis, vous décidez → Réparation → On vous rend la voiture (et la vieille pièce). Each step's text replaces the previous one; the car partly disassembles and reassembles.
  2. **« L'établi »** horizontal pan (pinned, `start: "top top"`) of worn parts, each with what failed and what was done (mock case notes, generic, no customer names).
  3. **History page:** a single river line draws down the page as you scroll, connecting « Chantepie, 2012 » to « Rennes, rue de Jinan, avril 2023 » with dated register facts as stations.
  4. **Quartier:** the walking line from the garage to the Les Gayeulles station draws itself with a distance counter (« ≈ 220 m à pied »).
- **Transitions:** route change = a "drawing sheet" wipe (clip-path from the left, 450 ms, expo.inOut), the clicked service's drawing shared between list and detail via Flip / view-transition-name.
- **Micro-interactions:** buttons press 1 px down; the phone button gets a short "ring" rotation on hover; service cards reveal their exploded view on hover; status chip pulses once on load only; quote marks draw in; review stars fill once on view. **One marquee only:** the parts-brands strip (SKF, Valeo, Bosch, Purflux, Moog, Gates, Motrio as text).
- **Reduced motion fallback:** no Lenis, no pinning, no scrubbing. Drawings render fully assembled with all callouts visible; the parcours becomes a numbered vertical list; the établi becomes a static grid; route changes are an instant cross-fade (≤150 ms); the marquee becomes a static row. Same content, same order. Low-power/mobile: disable pinning under 768 px and use simple reveals.

---

## 10. Site map

All routes in French; Vite multi-page or a small client router; base `/Garage-De-L-Ille-Rennes/`. Header and footer on every page. Footer: address, phone, (email once confirmed), hours table, Facebook link, metro access, "Garage indépendant toutes marques", legal links, SIREN.

1. **`/` Accueil**
   - Hero « L'établi » drawing, headline, real tagline, call CTA
   - Proof band: 4,9/5 Google, plus de 150 avis; depuis 2012; à 220 m du métro B Les Gayeulles; Garage Propre (text, no logo)
   - Interactive car diagram (signature)
   - « Le parcours de votre voiture » (pinned story)
   - Six service families (asymmetric grid) → Atelier
   - L'établi (horizontal worn-parts pan)
   - Real review wall (6 quotes, platform-only attribution)
   - « De Chantepie aux Gayeulles » teaser → Histoire
   - Quartier map + live hours + Itinéraire
   - Final CTA: call / quote
2. **`/atelier` Nos prestations**: filterable catalogue (family, énergie: thermique/hybride/GPL, durée indicative), search box, each item with exploded mini-drawing, "Tarif indicatif (exemple)", "Devis gratuit".
3. **`/atelier/:famille`** (6 pages: entretien, freinage, moteur-distribution, embrayage-boite, echappement-fap, pneus-suspension; plus `hybride-gpl`): large exploded drawing, worn vs new toggle, what it does, warning signs, what we check, related services, FAQ excerpt, call.
4. **`/diagnostic` « Ça fait quel bruit ? »**: symptom finder, voyants du tableau de bord explainer (mock content), "préparer son contrôle technique" checklist.
5. **`/notre-facon` Pièce à l'appui**: the method (explain, show the part, repair rather than replace, you decide), Garage Propre waste channels (oil, coolant, batteries, filters, tyres), parts brands, courtesy car, independence (critic correction: **"toutes marques, indépendant, membre du réseau Staff Auto"** once the owner confirms; never "sans réseau").
6. **`/histoire`**: river-line timeline 2012 Chantepie → 2023 rue de Jinan (register facts), the quartier and the workshop building, team *roles* (« À l'atelier », « À l'accueil »; first names only with consent; photo slots TODO).
7. **`/avis`**: rating summary per platform with dates, the 15 real quotes filterable by theme (honnêteté, explications, prix, accueil, contrôle technique), link to Google listing, honest note that reviews before April 2023 concern the Chantepie garage.
8. **`/conseils`** (blog) + **`/conseils/:slug`**: 10–12 mock advice articles.
9. **`/faq`**: 15+ questions, grouped.
10. **`/infos-pratiques`**: address, map (static SVG + Google Maps / OSM link), metro/bus/bike access, parking & PMR, hours table, holidays, payment methods, courtesy car. **Critic addition:** « Comment nous reconnaître » block with the shopfront line drawing (black workshop, orange sign, along avenue de Rochester, in Les Ateliers de Maurepas) and the walking line from metro B. Map links: `https://www.openstreetmap.org/way/558810805` and a Google Maps search link `https://www.google.com/maps/search/?api=1&query=Garage+de+l%27Ille+2+rue+de+Jinan+35700+Rennes`.
11. **`/devis`**: "Décrivez votre problème" form (make, model, year, énergie, km, symptom chips, message) that composes a `mailto:` (once the email is confirmed) or shows the phone; no backend.
12. **`/mentions-legales`**, **`/confidentialite`**, **`404.html`** (a drawn car on a jack: « Cette page est au garage »).

SEO: `<title>`/description per page, Open Graph, `AutoRepair` (LocalBusiness) JSON-LD with verified data only: name, address 35700, geo, phone, openingHoursSpecification, priceRange omitted, `aggregateRating` only if re-checked at launch.

---

## 11. Mock-data plan

All in `src/data/*.ts` with exported interfaces and a header comment `// DONNÉES D'EXEMPLE: à remplacer par les données réelles du garage`. Prices are samples labelled « Tarif indicatif (exemple) · devis gratuit », shown as ranges, never as promises.

| Dataset | File | Count | Content / rules |
|---|---|---|---|
| Service families | `families.ts` | 7 | Entretien, Freinage, Moteur & distribution, Embrayage & boîte, Échappement & FAP, Pneus & suspension, Hybride & GPL. Slug, drawing id, intro, warning signs (4–6 each), what we check (4–6). |
| Services | `services.ts` | 45–55 | Real names from §3 expanded into individual jobs: vidange + filtre à huile, révision constructeur, plaquettes AV, plaquettes + disques AV, purge liquide de frein, kit distribution + pompe à eau, kit embrayage, volant moteur bi-masse, vidange boîte auto, décalaminage, nettoyage FAP, remplacement FAP, vanne EGR, injecteur, démarreur, alternateur*, batterie*, bougies d'allumage, bougies de préchauffage, liquide de refroidissement, thermostat*, géométrie*, amortisseurs, rotules*, cardan, échappement (silencieux), montage pneus, réparation crevaison, diagnostic électronique, contrôle pré-CT, contre-visite, climatisation* , entretien hybride, entretien GPL (filtre GPL, réglage), essuie-glaces, etc. (*mock extensions consistent with general mechanics; mark `confirmed: false`). Fields: family, énergie tags (thermique/hybride/GPL), durée indicative (0.5–8 h), price range sample (e.g. vidange 70–140 €, plaquettes AV 110–220 €, distribution 450–900 €, embrayage 600–1 200 €, diagnostic 40–80 €, décalaminage 90–180 €), `confirmed: boolean` (true only for §3 services). |
| Parts (établi) | `parts.ts` | 18–24 | Worn-part entries for the horizontal pan and diagrams: plaquette glacée, disque voilé, courroie craquelée, galet tendeur bruyant, disque d'embrayage usé, butée, bougie encrassée, injecteur fuyard, FAP colmaté, vanne EGR encrassée, filtre à air saturé, pneu usé en bordure, amortisseur fuyard, silent-bloc fendu, durite poreuse, balai d'essuie-glace… Fields: name, family, what failed, sign the driver noticed, what we did (generic case note), svg id. **Generic cars only**; no customer names. |
| Symptoms | `symptoms.ts` | 24–30 | Chips for « Ça fait quel bruit ? »: grincement au freinage, pédale molle, voyant moteur orange, voyant FAP, fumée noire / blanche / bleue, à-coups à l'accélération, embrayage qui patine, vitesses qui craquent, claquement en braquant, vibration au volant, odeur de brûlé, sifflement moteur, surchauffe, démarrage difficile à froid, consommation d'huile… Each → zone + likely causes (2–4) + family. Framed as « pistes, pas un diagnostic ». |
| Dashboard lights | `voyants.ts` | 12–16 | Common warning lights, colour level, what to do. Generic, not brand-specific. |
| Makes "toutes marques" | `makes.ts` | 25–30 | Makes common in France as text (no logos): Renault, Peugeot, Citroën, Dacia, DS, Volkswagen, Toyota, Ford, Opel, Fiat, Nissan, Mercedes-Benz, BMW, Audi, Mini, Skoda, Seat, Kia, Hyundai, Suzuki, Volvo, Mazda, Honda, Mitsubishi, Lancia, Alfa Romeo… Note: some brand-specific jobs may be referred to a « confrère » (real practice from reviews). |
| Parts brands | `brands.ts` | 7 (real) | SKF, Valeo, Bosch, Purflux, Moog, Gates, Motrio. Text only. |
| Reviews | `reviews.ts` | 18 (real) | Exactly the quotes in §4 (critic pass added 16–18; 12–14 flagged `verified: false`) with platform, date, theme tags, `era: 'chantepie' \| 'rennes'`, `namesStaff: boolean` (hide those until consent). **No invented reviews.** Generic testimonials, if ever needed, only as « Client·e fidèle », clearly separated. |
| Ratings | `ratings.ts` | 4–5 | Platform snapshots from §4 with `seenOn: '2026-10-13'`. |
| Process steps | `process.ts` | 6 | Vous appelez · Diagnostic · On vous explique, pièce à l'appui · Devis, vous décidez · Réparation · On vous rend la voiture et la vieille pièce. |
| Timeline | `history.ts` | 6–7 (real) | Register events from §2 only. |
| Conseils (blog) | `posts.ts` | 10–12 | e.g. « Quand changer sa courroie de distribution ? », « FAP : pourquoi les trajets courts l'encrassent », « Préparer son contrôle technique sans grosses dépenses », « Entretenir une hybride : ce qui change », « Rouler au GPL : l'entretien à prévoir », « Plaquettes ou disques : comment savoir ? », « Pneus : témoins d'usure et pression », « Préparer sa voiture pour l'hiver », « Voyant moteur : rouler ou s'arrêter ? », « Pourquoi on vous montre la vieille pièce », « Déposer sa voiture et prendre le métro B ». 400–700 words each, category + reading time + date (2024–2026), author "L'équipe du garage". |
| FAQ | `faq.ts` | 15–18 | Rendez-vous et délais; véhicule de remplacement; hybrides et GPL; toutes marques; devis gratuit; paiement (CB, Visa, Mastercard, espèces, chèque); horaires et samedi; accès métro; PMR; garantie constructeur et entretien hors réseau (general legal principle, phrase carefully); contrôle technique (préparation, pas sur place); récupérer ses pièces; Garage Propre; pièces utilisées; urgence/panne. |
| Hours | `hours.ts` | 7 days (real) | §1 table; drives the live status chip; `holidays` list for France 2026–2027 (public holidays closed). |
| Access | `access.ts` | real | Metro B Les Gayeulles ~220 m; bus 14, 51, 70, 71, 83; bike stations; GPS. |
| Stats | `stats.ts` | 4 | Real only: depuis 2012; 4,9/5 Google (150+ avis, re-check); ≈ 220 m du métro B; thermique, hybride, GPL. No invented counts (cars repaired, etc.). |
| Seasonal checks | `checklists.ts` | 3 | Hiver, départ en vacances, avant contrôle technique (8–12 items each). |
| Team roles | `team.ts` | 2 | « À l'atelier » / « À l'accueil »; `firstName` empty until consent; photo TODO. |
| Network (critic pass) | `network.ts` | 1 (real) | `{ name: 'Staff Auto', group: 'Autodistribution', since: null, showLogo: false, confirmedByOwner: false }`; text mention renders only when `confirmedByOwner`. Source URLs in a comment. |
| Quartier landmarks (critic pass) | `quartier.ts` | 8–10 (real) | Metro B Les Gayeulles, bus stops, Jardin de Jinan, Parc des Gayeulles, Tuesday market place Lucie-et-Raymond-Aubrac, Musée des Beaux-Arts annex, « Les Ateliers de Maurepas », rue de Fougères. Name, approx. distance (§6), one-line description, source URL. Drives the drawn quartier map. |
| Case notes « Pièce à l'appui » | `cases.ts` | 8–10 (mock) | Short generic stories in the format *symptôme → ce qu'on a trouvé → la pièce montrée → ce qu'on a fait / pas fait*. One may paraphrase the real 2017 Mégane FAP story (§4, dated, no price promise); all others marked `mock: true`, generic cars, no customer names. Feeds the établi pan and /notre-facon. |

---

## 12. Content rules

**Real, keep exact:**
- Name **Garage de l'Ille** (two L's, apostrophe); 2 rue de Jinan, **35700** Rennes; **06 24 87 37 40**; hours Mon–Fri 08:00–12:00 / 13:00–18:00, closed Sat, Sun, public holidays; independent all makes; thermique / hybride / GPL; courtesy car; payment CB/Visa/Mastercard/espèces/chèque; PMR access; metro B Les Gayeulles; « depuis 2012 », Chantepie until April 2023; SIREN 539 728 154 (legal page); tagline « Votre partenaire automobile, au cœur des Gayeulles »; the 15 quotes verbatim with platform + date only.
- Rating text: « 4,9/5 sur Google, plus de 150 avis » with "relevé en octobre 2026", re-checked before launch.

**May be mock (clearly labelled):** service prices and durations, blog posts, FAQ wording, symptom/cause content, worn-part case notes (generic cars, no customers), checklists, dashboard-light explanations, illustrations, the wordmark (temporary).

**Never invent or show:**
- Any network logo or membership (Motrio, AD, Eurorepar, Point S, Renault, Peugeot), any manufacturer logo, the official "Garage Propre" logo (until CMA confirmation). **Exception (critic pass): Staff Auto membership is real** (§0). Mention it as text only after owner confirmation; Staff Auto logo only with written permission; never "sans réseau".
- The shopfront photo from Facebook (reference only; ask the owner for the original file).
- "Installé depuis 2017" (the city page's wording refers to the workshop, not to this business).
- Bodywork/paint, contrôle technique on site, used-car sales.
- Awards, press, partnerships, guarantees beyond what the law gives, "agréé", "certifié", "expert hybride" certifications.
- Headcount numbers, years-of-experience numbers, "X voitures réparées" stats.
- Reviews under invented names; reviewer names on real quotes; current prices from the 2017 FAP story.
- Team names or photos: "Étienne" and "Béatrice" only after owner consent; Béatrice's role/surname never guessed. The gérant's full registered name only on the legal page (registry data), and only if the owner agrees.
- Old phones (02 99 41 52 50, 02 99 36 19 17), the Chantepie address as current, Garage du Gast reviews or rating, the Fixter 08:30 opening.
- Any claim that the name refers to the river (likely, unconfirmed).
- Photos from Facebook, Google, directories.
- The email until confirmed (use phone-first; mailto behind a `CONFIRMED_EMAIL` flag).
- Site copy style: zero em-dashes in visible French copy; « guillemets », non-breaking spaces.

---

## 13. Unknowns / TODO

| # | Unknown / conflict | How to resolve |
|---|---|---|
| 1 | **Logo, colours, shopfront, any photos** | Ask the owner for the logo file and permission to photograph the workshop; until then temporary wordmark + SVG art. |
| 2 | **Consent to name Étienne and Béatrice**, their roles, photos | Ask the owner; keep `team.ts` names empty by default. |
| 3 | **Email** garage.de.l.ille@gmail.com (snippet only) | Confirm with owner or read the Facebook "À propos" while logged in. |
| 4 | **Live Google rating and count** (150+? 162?) | Check Google Maps before launch; update `ratings.ts`. |
| 5 | ~~Headcount~~ **Resolved:** register band "02" (2024) = 3–5 salariés per INSEE codes; directories stale | Copy still says "petite équipe". |
| 6 | **Garage Propre label** official status | Check the CMA / Garage Propre register; only then use the logo. |
| 7 | **Bodywork/paint, CT, used-car sales** | Ask owner; keep off the site until confirmed. |
| 8 | **Pricing** (none published) | Ask whether to show indicative prices at all; otherwise switch to "Devis gratuit" only. |
| 9 | **NFC / contactless payment** | Ask owner. |
| 10 | **Courtesy car conditions** (free? on request?) | Ask owner; FAQ wording neutral until then. |
| 11 | **Online booking** (Fixter active?) | Fixter page did not load; ask owner whether they want a booking link. |
| 12 | **Holiday / summer closures** | Ask owner; show "fermé les jours fériés" only. |
| 13 | **Customer parking** capacity | Ask owner or check on site. |
| 14 | **Origin of the name** "de l'Ille" | Ask owner; do not claim. |
| 15 | **Fixter reviews** (quotes 12–14) not re-verified | Re-read on Fixter or Google before launch; drop if not found. |
| 16 | **Facebook content** (posts, cover, follower count, 100%/13 reviews) | Logged-in check. |
| 17 | ~~The 2017 workshop-building story~~ **Resolved:** confirmed on rennes-maurepas.fr (« Les Ateliers de Maurepas », names Garage de l'Ille) | Usable on /histoire with the city page as source. |
| 18 | Rue de Jinan naming date (2015) | Low confidence; omit or verify with Rennes street-naming records. |
| 19 | Allogarage listing created 2008 (before the 2012 SARL) | Unexplained; ignore. |
| 20 | Competitor ratings (Speedy, Norauto, Eurorepar, Jeanne d'Arc) | Not needed for the site; internal only. |
| 21 | **Staff Auto membership** details: since when (Chantepie or only Rennes?), does the owner want it shown, logo permission | Ask owner. Evidence in §0. |
| 22 | **Exact sign colours and lettering** (photo only gives approximations) | Ask for the sign / vinyl artwork or the Staff Auto signage spec; otherwise sample on site in shade. |
| 23 | **Reviews 2024-04 → 2026** (Rennes-era texts) | Google Maps not reachable from here; local google-maps-scraper API was not running. Read Google Maps reviews before launch and add 3–5 recent quotes. |
| 24 | Contactless / NFC payment, toilets | Only Google attributes via aggregators; ask owner. |

---

## 14. Sources

**Official registers**
- https://recherche-entreprises.api.gouv.fr/search?q=539728154
- https://recherche-entreprises.api.gouv.fr/search?q=garage%20de%20l%20ille&departement=35
- https://recherche-entreprises.api.gouv.fr/search?q=garage%20de%20l%27ille&departement=35
- https://recherche-entreprises.api.gouv.fr/search?q=2%20rue%20de%20jinan%20rennes
- https://recherche-entreprises.api.gouv.fr/search?q=482007879
- https://recherche-entreprises.api.gouv.fr/search?q=487494973
- https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22539728154%22&limit=20
- https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22482007879%22&limit=30
- https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22487494973%22&limit=20
- https://annuaire-entreprises.data.gouv.fr/entreprise/garage-de-l-ille-garage-de-l-ille-539728154
- https://annuaire-entreprises.data.gouv.fr/etablissement/53972815400029
- https://www.societe.com/societe/garage-de-l-ille-539728154.html
- https://www.societe.com/societe/garage-du-gast-482007879.html
- https://www.pappers.fr/entreprise/garage-de-l-ille-539728154 (403)
- https://entreprises.lagazettefrance.fr/entreprise/garage-de-l-ille-539728154

**Directories and listings**
- https://www.pagesjaunes.fr/pros/03153733
- https://www.pagesjaunes.fr/pros/53779522
- https://www.118712.fr/professionnels/X0FQW1RSHgI
- https://www.118000.fr/e_C0048205143
- https://fr.mappy.com/poi/4d6c1dd4fc6925073c140dd7
- https://www.allogarage.fr/garages/details-garage-Garage-de-l-ille-19507.html
- https://lesgarages.fr/35/rennes/garage-de-l-ille-2uln
- https://www.vroomly.com/garages/garage-de-lille-35135-grotte/
- https://www.vroomly.com/garage-rennes?page=2
- https://garagefr.com/p/garage-de-lille-21027
- https://atelier-de-reparation-automobile.autour-de-moi.com/garage-de-l-ille-2727711.html
- https://autour-de-moi.pro/fiche/garage-de-lille/
- https://www.viedauto.com/pro/garage-de-lille/
- https://www.bottin.fr/fiche-locale/cgbfdajhgbgabdibiji--garage-de-l-ille--rennes.htm
- https://www.fixter.fr/garage/garage-de-lille
- https://www.idgarages.com/fr-fr/ville/garage-35000-rennes/enseigne-motrio
- https://automobile.e-pro.fr/ille-et-vilaine/garage-de-l-ille_f3858033
- https://www.les-horaires.info/garage-de-l-ille-chantepie-185733.html
- https://www.eurekcar.fr/adresses/Garage-De-L'Ille-35-Chantepie/100731.html
- https://rennes.opendi.fr/633958.html
- https://www.cylex-locale.fr/entreprises/motrio---garage-du-gast-10798132.html
- https://www.horairesdouverture24.fr/filiale/Rennes-Motrio%2520-%2520Garage%2520Du%2520Gast-4981717U.html
- https://www.qcunbon.fr/rennes/98618627

**Social**
- https://www.facebook.com/GarageDeLIlle/
- https://www.facebook.com/474418339260144

**Maps / place**
- https://nominatim.openstreetmap.org/search?q=Garage+de+l%27Ille+Rennes&format=json&extratags=1&addressdetails=1
- https://nominatim.openstreetmap.org/
- http://gayeulles.rennes-maurepas.fr/un-nouveau-visage-en-2020/de-nouvelles-activites-au-coeur-du-quartier
- https://www.territoires-rennes.fr/les-projets/maurepas-gayeulles
- https://www.rennesimmo9.com/actualites/urbanisme-architecture/renouveau-quartier-maurepas-rennes
- https://edito.seloger.com/tendances/vivre/decouverte-quartier-maurepas-rennes-article-21349.html
- https://unidivers.fr/rennes-jardin-chinois-cascade-parc-maurepas/
- https://sdxw.iqilu.com/share/YS0yMS0xNTYzMTk2NA==.html
- https://unidivers.fr/rennes-musee-beaux-arts-maurepas/
- https://en.wikipedia.org/wiki/Ille
- https://en.wikipedia.org/wiki/Ille-et-Vilaine
- https://en.wikipedia.org/wiki/Stellantis_Rennes_Plant
- https://www.pariszigzag.fr/rennes-actu/rennes-medieval/
- patrimoine.bzh (no specific page URL recorded)

**Competitors**
- https://garagefr.com/p/garage-patton-20937
- https://www.pagesjaunes.fr/pros/09170705
- https://lesvoitures.fr/adresse/renault-sarl-thomas-carion-rennes/
- https://www.michelin.fr/auto/dealer-locator/rennes/sarl-garage-bechu
- https://www.societe.com/societe/garage-bechu-353676091.html
- https://www.au-magasin.fr/35000-rennes/speedy-24944.html
- https://www.idgarages.com/fr-fr/garage/rennes/GB28437_speedy-rennes-rue-de-fougeres
- https://fr.mappy.com/poi/57724d290351d12f9551142a
- https://www.avis-verifies.com/avis-clients/carglass.fr/e/2937/carglass-rennes-longs-champs-35700
- https://www.idgarages.com/fr-fr/garage/rennes/GB22465_eurorepar-garage-du-centre-ville-delapierre
- https://it.trustpilot.com/review/piecesetpneus.com/location/rennes-patton
- https://fr.mappy.com/activite/garage/35000-rennes

**Design inspiration**
- https://electrifiedgarage.com
- https://www.zarla.com/inspiration/auto-repair
- https://threejs-classics-garage.vercel.app/
- https://www.awwwards.com/sites/classics-garage
- https://hbbody.com
- https://www.awwwards.com/sites/hb-body-automotive-refinish
- https://363sudbury.com
- https://www.awwwards.com/sites/363-car-social-club
- https://singervehicledesign.com
- https://autodeutsche.co.uk
- https://forgeautomotive.co.uk
- acemechanics.com.au
- bumperbuddies.com
- https://freshysites.com/blog/top-auto-repair-websites/

**Added in critic pass**
- https://pro.autodistribution.fr/reparateurs-auto/ille-et-vilaine/rennes (Autodistribution repairer locator, entry "GARAGE DE L'ILLE", pdv 10352)
- https://pro.autodistribution.fr/mecanique-auto/staff-auto (Staff Auto definition, network image)
- https://www.bruz-auto.fr/nos-actualites/les-reparateurs-du-reseau-staff-auto.html (Staff Auto: 2002, 339 members on 1 June 2023)
- https://www.facebook.com/GarageDeLIlle/ (Open Graph meta: 223 followers, tagline, shopfront profile photo)
- https://www.rennes-maurepas.fr/un-nouveau-visage-en-2020/de-nouvelles-activites-commerces-services-au-coeur-du-quartier (City of Rennes quartier site: « Les Ateliers de Maurepas », names Garage de l'Ille)
- https://api.openstreetmap.org/api/0.6/way/558810805.json (OSM tags: shop=car_repair, SIRET, hours, phone)
- https://www.openstreetmap.org/way/558810805
- https://www.pagesjaunes.fr/pros/53779522 (full self-description, re-read)
- https://autour-de-moi.pro/fiche/garage-de-lille/ (March 2024 reviews)
- https://copeps.fr/actualites/tranche-effectif-insee/ (INSEE headcount band codes)
- https://www.starofservice.com/professionnel/service-de-reparation-automobile/chantepie/179480274/garage-de-l-ille (exists, Chantepie-era listing; content did not load)
- https://citoofrance.com/atelier-de-reparation-automobile/rennes/garage-de-l-ille/ (133 reviews per search snippet; 403)

---

## 15. Critic pass

*Run 2026-10-13. The plan was already strong on registry facts, hours, history, review themes, site map and mock data. The gaps below were checked against the sources listed in §14 "Added in critic pass".*

**Gaps found → what was filled**
1. **Wrong core fact: "no network".** The garage's own Facebook profile photo shows **Staff Auto** roundels on the building, and Autodistribution's repairer locator lists the garage (same address, phone, hours). Staff Auto is Autodistribution's small-garage network (created 2002; members remain independent). Corrected in the summary, §0, §1, §2, §5, §10, §12, and added `network.ts`. **Confidence: high.**
2. **Brand identity was empty (logo, colours, photo style: "unknown").** The shopfront is now described: black ribbed-steel workshop; sign = white ▶ + orange "GARAGE" + white "DE L'ILLE", bold condensed caps on a black band; Corten rust screen. Approximate colours were sampled from the photo. Filled in §5.
3. **Design direction not grounded in the real place.** §9 banned orange and used schist-purple and green, which contradicts the building customers actually see. Added a "Critic revision" palette (anthracite `#1E1F1E`, sign orange `#E8792B` with dark text, Corten `#A8481F` for orange text, Ille green demoted to semantic), with WCAG ratios, the ▶ motif, a sign-based temporary wordmark and a shopfront line drawing. §8's "avoid black + orange" is now qualified.
4. **Workshop-building story** (was low/medium, site unreachable) is now **confirmed** on the City of Rennes' quartier site, which names Garage de l'Ille in « Les Ateliers de Maurepas ». The plan notes the "depuis 2017" trap.
5. **Headcount conflict resolved:** register band "02" (2024) = 3–5 salariés (INSEE code table); directory "1–2" is stale.
6. **Facebook facts upgraded** from snippet to the page's own meta (223 followers, « 7 personnes étaient ici », tagline).
7. **Garage's own voice:** the full PagesJaunes self-description (verbatim) was added to §3, and its key phrases to §5.
8. **Customer quotes:** 3 more real Rennes-era quotes (March 2024) added (16–18), so `reviews.ts` goes from 15 to 18.
9. **Payment/amenities:** contactless (Bottin + garagefr, Google attributes) and toilets noted at medium-low.
10. **Site map / mock data:** added a « Comment nous reconnaître » block, OSM and Google Maps links, plus `quartier.ts` and `cases.ts` datasets.
11. Competitor list: added Auto Chromes (same Staff Auto network, Rennes).

**Searched, nothing new:** Instagram / TikTok / LinkedIn (none); press (Ouest-France etc., none beyond the city page); Garage Propre register (no public per-garage list found); idGarages (not listed); Allogarage (no network field); Staff Auto own site (staffauto.fr / staff-auto.fr do not resolve).

**Still unknown / blocked**
- **Reviews after March 2024** (Google Maps not reachable; Fixter blocked by WAF; Bottin/garagefr show totals only). Fixter quotes 12–14 remain unverified.
- **Live Google rating:** still "4.9, 150+" from Bottin.
- **Exact sign colours/typeface, logo file, other photos:** ask the owner.
- **Staff Auto details:** since when, whether to display it, logo rights.
- Email (snippet only), courtesy-car terms, NFC, parking capacity, holiday closures, name origin, Garage Propre official status, consent for Étienne/Béatrice: unchanged, see §13.
- The local google-maps-scraper (port 8080 returns 404 on all routes) was not started, because restarting services needs the user's go-ahead. Running it would likely fill the recent-reviews gap.
