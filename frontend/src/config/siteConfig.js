// Configuration du site QHSEPRO - Design moderne
import brunoImage from '../assets/images/BRUNO.jpeg';

export const siteConfig = {
  // Informations générales
  site: {
    name: 'QHSEPRO',
    title: 'Expert QHSE - Qualité, Hygiène, Sécurité, Environnement',
    description: 'Accompagnement complet en QHSE pour l\'excellence opérationnelle'
  },

  // Profil
  profile: {
    name: 'Ateyi BRUNO',
    title: 'Responsable QHSE',
    subtitle: 'Spécialisé en génie civil',
    description: 'Avec plus de 12 ans d\'expérience dans le domaine de la Qualité, Hygiène, Sécurité et Environnement, je mets à disposition mes compétences pour accompagner les organisations vers l\'excellence opérationnelle.',
    image: brunoImage,
    certifications: [
      { name: 'ISO 45001', desc: 'Santé et Sécurité' },
      { name: 'ISO 14001', desc: 'Environnement' },
      { name: 'NEBOSH IGC', desc: 'Certification' }
    ]
  },

  // Statistiques
  statistics: [
    { number: '45+', label: 'Projets réalisés', icon: '📊' },
    { number: '3K+', label: 'Ouvriers formés', icon: '👥' },
    { number: '12+', label: 'Années d\'expérience', icon: '⏱️' },
    { number: '0', label: 'Accidents mortels', icon: '🛡️' }
  ],

  // Services
  services: [
    {
      icon: '🔍',
      title: 'Audit QHSE',
      description: 'Diagnostic complet de vos processus QHSE pour identifier les points d\'amélioration.',
      features: ['Analyse détaillée', 'Recommandations', 'Plan d\'action']
    },
    {
      icon: '📋',
      title: 'Conformité Réglementaire',
      description: 'Assurer la conformité totale de votre entreprise avec les normes en vigueur.',
      features: ['Normes ISO', 'Réglementations', 'Documentation']
    },
    {
      icon: '👥',
      title: 'Formation & Sensibilisation',
      description: 'Formation du personnel aux normes et bonnes pratiques QHSE.',
      features: ['Ateliers', 'Certification', 'Suivi']
    },
    {
      icon: '🏆',
      title: 'Certification ISO',
      description: 'Accompagnement complet vers l\'obtention des certifications ISO.',
      features: ['ISO 45001', 'ISO 14001', 'Audit']
    },
    {
      icon: '⚠️',
      title: 'Gestion des Risques',
      description: 'Identification et mitigation des risques pour une sécurité optimale.',
      features: ['Analyse', 'Prévention', 'Monitoring']
    },
    {
      icon: '📊',
      title: 'Reporting & Suivi',
      description: 'Suivi continu et reporting détaillé de vos indicateurs QHSE.',
      features: ['Tableaux de bord', 'KPIs', 'Rapports']
    }
  ],

  // Couleurs
  colors: {
    primary: '#ff6b35',
    primaryLight: '#ff8c42',
    dark: '#0f172a',
    darkLight: '#1e293b',
    text: '#cbd5e1',
    textLight: '#94a3b8',
    white: '#ffffff'
  },

  // Contact
  contact: {
    email: 'contact@qhsepro.com',
    phone: '+228 92465477',
    location: 'Lomé, Togo'
  }
};

export default siteConfig;
