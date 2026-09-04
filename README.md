# Portfolio — RAKOTO Noël Pricio

Portfolio personnel dynamique et responsive, construit avec **React + Vite**.

## Sections

- **Accueil** — présentation avec effet d'écriture animée
- **À propos** — bio, métriques, diplômes & certifications
- **Compétences** — langages, mobile/web, outils
- **Projets** — cartes cliquables avec modal de détails (SIOTUM, RESA, MITANEKO, etc.)
- **Expérience** — timeline (Virtual Assistant)
- **Contact** — WhatsApp, email, téléphone, téléchargement du CV

## Fonctionnalités

- Thème sombre / clair (bouton dans la navbar, préférence sauvegardée)
- Navigation fluide one-page avec menu mobile
- Bouton **Télécharger mon CV** (téléchargement direct du PDF, présent à plusieurs endroits)
- Liens WhatsApp / email / téléphone cliquables
- Animations d'apparition au scroll, effet de rotation des rôles, design responsive

## Lancer en local

```bash
npm install
npm run dev      # serveur de développement (http://localhost:5173)
```

## Build de production

```bash
npm run build    # génère le dossier dist/
npm run preview  # prévisualiser le build
npm run lint     # lint (oxlint)
```

## Structure

```
public/
  CV_Pricio_L3SIO_GL2_SE20240356.pdf   # CV téléchargeable
src/
  data/portfolio.js                    # toutes les données personnelles
  components/                          # Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer, Reveal, icons
  App.jsx
  index.css
```

## Personnaliser

Toutes les informations (nom, projets, compétences, contacts, CV) sont centralisées dans `src/data/portfolio.js`. Remplacer le fichier `public/*.pdf` par un nouveau CV suffit pour mettre à jour le téléchargement (ajuster alors le nom dans `personal.cvFile` / `personal.cvDownloadName`).