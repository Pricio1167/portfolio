export const personal = {
  firstName: 'Noël',
  fullName: 'RAKOTO Noël Pricio',
  initials: 'NP',
  status: 'Étudiant en L3 Génie Logiciel',
  school: 'ESMIA Innovation',
  location: 'Antananarivo, Madagascar',
  profile: [
    'Étudiant en L3 Génie Logiciel à ESMIA Innovation, je suis motivé, dynamique, honnête et travailleur.',
    'Passionné par le développement web et mobile, je conçois des solutions concrètes et utiles : applications métiers, projets d\'IA et systèmes d\'information.',
    'Je recherche activement des opportunités (stage, alternance, freelance) pour mettre mes compétences au service de projets ambitieux.',
  ],
  phones: [
    { label: '034 68 546 22', tel: 'tel:+261346854622' },
    { label: '032 87 127 46', tel: 'tel:+261328712746' },
  ],
  whatsapp: 'https://wa.me/261346854622',
  whatsappLabel: '034 68 546 22',
  email: 'noelpriciorakoto@gmail.com',
  cvFile: 'CV_Pricio_L3SIO_GL2_SE20240356.pdf',
  cvDownloadName: 'CV_RAKOTO_Noel_Pricio.pdf',
  roles: [
    'Développeur Web',
    'Développeur Mobile',
    'Étudiant en Génie Logiciel',
    'Virtual Assistant',
    'Apprenti Ingénieur Logiciel',
  ],
}

export const aboutMetrics = [
  { value: '6+', label: 'Projets réalisés' },
  { value: '4', label: 'Diplômes & certificats' },
  { value: '30+', label: 'Compétences & technologies' },
  { value: '3', label: 'Langues parlées' },
]

export const aboutInfo = [
  { label: 'Nom complet', value: 'RAKOTO Noël Pricio' },
  { label: 'Alias', value: 'Noël' },
  { label: 'Statut', value: 'Étudiant L3 Génie Logiciel' },
  { label: 'École', value: 'ESMIA Innovation' },
  { label: 'Localisation', value: 'Antananarivo, Madagascar' },
  { label: 'Email', value: 'noelpriciorakoto@gmail.com' },
]

export const qualities = [
  'Motivé',
  'Dynamique',
  'Honnête',
  'Travailleur',
  'Curieux',
  'Rigoureux',
]

export const interests = [
  'Nouvelles technologies',
  'Intelligence artificielle',
  'Développement d\'applications',
  'Sports',
  'Musique',
  'Découvertes & voyages',
]

export const diplomas = [
  { title: 'Baccalauréat', detail: 'Série OSE', year: '2024' },
  {
    title: 'Attestation de réussite B2',
    detail: 'Alliance Française',
    year: 'Nov. 2024',
  },
  {
    title: 'Certificat C1 anglais',
    detail: 'ITTI',
    year: 'Avr. 2025',
  },
  {
    title: 'Certificat de diagnostic',
    detail: 'Formation professionnelle',
    year: 'Mai 2026',
  },
]

export const skillGroups = [
  {
    title: 'Langages',
    icon: 'code',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'Python',
      'Java (POO avancée)',
      'PHP',
      'C',
      'HTML5',
      'CSS3',
      'SQL',
    ],
  },
  {
    title: 'Mobile / Web',
    icon: 'devices',
    skills: [
      'React',
      'React Native',
      'Node.js',
      'Express.js',
      'Flask',
      'Vite',
      'REST API',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Base de données',
    icon: 'database',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'Outils & DevOps',
    icon: 'wrench',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Postman',
      'VS Code',
      'Linux (Ubuntu)',
      'Figma',
    ],
  },
  {
    title: 'Méthodes & qualité',
    icon: 'users',
    skills: [
      'Méthodologie Agile',
      'Travail d\'équipe',
      'Autonomie',
      'Esprit d\'analyse',
      'Gestion du temps',
      'Apprentissage rapide',
    ],
  },
  {
    title: 'Informatique & fondations',
    icon: 'cpu',
    skills: [
      'Algorithmique & complexité',
      'Structures de données',
      'Programmation orientée objet',
      'UML & conception logicielle',
      'Réseaux informatiques',
      'Systèmes d\'exploitation',
      'Modélisation & bases de données',
      'Intelligence artificielle',
      'Sécurité informatique',
    ],
  },
  {
    title: 'Langues',
    icon: 'globe',
    skills: [
      'Malgache (langue maternelle)',
      'Français (B2)',
      'Anglais (C1)',
    ],
  },
]

export const projects = [
  {
    id: 'siotum',
    title: 'SIOTUM',
    badge: 'Phare',
    tagline:
      'Système Intelligent d\'Optimisation des Transports Urbains d\'Antananarivo',
    description:
      'Web app full-stack pour optimiser les trajets de transport en commun dans la capitale.',
    stack: ['Flask', 'React + Vite', 'PostgreSQL', 'Dijkstra', 'Yen\'s K-SP', 'Leaflet'],
    details: [
      'Algorithme de Dijkstra et Yen\'s K-shortest paths pour le calcul d\'itinéraires',
      'Carte interactive avec Leaflet pour visualiser les trajets',
      'Dashboard d\'administration complet pour la gestion des données',
    ],
    year: '2025 – 2026',
    supervisor: 'M. RAZAFINDRAIBE Fabrice',
    featured: true,
  },
  {
    id: 'tantsaha-connect',
    title: 'Tantsaha Connect',
    badge: null,
    tagline: 'Plateforme de mise en relation du monde agricole',
    description:
      'Application visant à connecter les acteurs du secteur agricole à Madagascar.',
    stack: ['React', 'Node.js', 'MongoDB'],
    details: [
      'Mise en relation des producteurs et des acheteurs',
      'Interface simple et adaptée au contexte local',
    ],
    year: '2025',
  },
  {
    id: 'resa',
    title: 'RESA',
    badge: null,
    tagline: 'Système de réservation et de création pour un hôtel',
    description:
      'Application de gestion des réservations et de création (chambres, services, tarifs) pour un hôtel.',
    stack: ['React', 'Node.js', 'SQL'],
    details: [
      'Gestion des réservations clients',
      'Création et administration des chambres, services et tarifs',
    ],
    year: '2025',
  },
  {
    id: 'ia-agriculture',
    title: 'IA Agriculture',
    badge: null,
    tagline: 'Projet d\'IA agricole pour Madagascar',
    description:
      'Projet d\'intelligence artificielle appliquée à l\'agriculture, avec interface en malgache.',
    stack: ['Python', 'Machine Learning', 'Malgache UI'],
    details: [
      'Application de l\'IA aux problématiques agricoles locales',
      'Interface entièrement en langue malgache',
    ],
    year: '2025',
  },
  {
    id: 'gestion-depenses',
    title: 'Gestion de Dépenses & d\'Épargne',
    badge: null,
    tagline: 'Application de suivi financier personnel',
    description:
      'Application pour suivre ses dépenses, son budget et son épargne au quotidien.',
    stack: ['React Native', 'Node.js'],
    details: [
      'Suivi des dépenses par catégorie',
      'Gestion d\'objectifs d\'épargne',
    ],
    year: '2025',
  },
  {
    id: 'mitaneko',
    title: 'MITANEKO',
    badge: 'En cours',
    tagline: 'Solution portée par une commune pour la sécurité des habitants',
    description:
      'Projet d\'équipe : une solution au service d\'une commune pour la sécurité et la qualité de vie des habitants sur un territoire.',
    stack: ['Travail d\'équipe', 'Agile', 'Conception'],
    details: [
      'Travail en équipe sur un projet à destination d\'une commune',
      'Démarche centrée sur la sécurité et la vie quotidienne des habitants',
    ],
    year: '2026',
    ongoing: true,
  },
]

export const contactItems = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: personal.whatsappLabel,
    href: personal.whatsapp,
    hint: 'Réponse rapide',
  },
  {
    id: 'email',
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    hint: 'Disponible au quotidien',
  },
  {
    id: 'phone-1',
    label: 'Téléphone',
    value: '034 68 546 22',
    href: 'tel:+261346854622',
    hint: 'Appel / SMS',
  },
  {
    id: 'phone-2',
    label: 'Téléphone 2',
    value: '032 87 127 46',
    href: 'tel:+261328712746',
    hint: 'Appel / SMS',
  },
]

export const navLinks = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]