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
- **Photo de profil fixe** (toujours la tienne, impossible à modifier par les visiteurs)
- Bouton **Télécharger mon CV** (téléchargement direct du PDF, présent à plusieurs endroits)
- **Formulaire de contact** : quiconque peut t'envoyer un e-mail direct vers ton adresse (le visiteur doit saisir son e-mail)
- Liens WhatsApp / email / téléphone cliquables
- Animations d'apparition au scroll, effet de rotation des rôles, design responsive

## Formulaire e-mail (EmailJS)

Le formulaire envoie les messages directement dans ta boîte **noelpriciorakoto@gmail.com**
via le service gratuit [EmailJS](https://www.emailjs.com) (aucun serveur nécessaire).

### Configuration

1. Crée un compte gratuit sur <https://www.emailjs.com>.
2. Dans **Email Services**, clique sur **Add New Service** et connects-y ton compte
   Gmail (noelpriciorakoto@gmail.com) via OAuth.
3. Dans **Email Templates**, crée un template avec :
   - Sujet type : `Nouveau message de {{from_name}} — {{subject}}`
   - Contenu : `De : {{from_name}} ({{reply_to}})\n\n{{message}}`
   - Dans les réglages, mets la **Reply-To** à `{{reply_to}}` pour pouvoir répondre
     directement à l'expéditeur.
4. Copie le **Service ID**, le **Template ID** et la **Public Key** (Account > General).

### En local

```bash
cp .env.example .env   # puis remplir les 3 valeurs
npm run dev
```

### En production (Vercel)

Dans les réglages du projet Vercel, ajoute ces variables d'environnement :

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

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
  profile.jpg                          # photo de profil affichée dans l'accueil
src/
  data/portfolio.js                    # toutes les données personnelles
  components/                          # Navbar, Hero, About, Skills, Projects, Experience, Contact, ContactForm, Footer, Reveal, icons
  App.jsx
  index.css
```

## Personnaliser

Toutes les informations (nom, projets, compétences, contacts, CV) sont centralisées dans `src/data/portfolio.js`. Remplacer le fichier `public/*.pdf` par un nouveau CV suffit pour mettre à jour le téléchargement (ajuster alors le nom dans `personal.cvFile` / `personal.cvDownloadName`).

Pour changer la photo de profil : remplace simplement `public/profile.jpg`.