# Guide de Design QHSEPRO

## 📋 Vue d'ensemble

Ce guide décrit la structure et les composants du site QHSEPRO, reproduisant exactement le design fourni.

## 🎨 Palette de couleurs

- **Primaire (Orange)**: `#ff6b35`
- **Sombre (Bleu-gris)**: `#1a2332`
- **Clair (Gris)**: `#f5f5f5`
- **Texte**: `#555555`
- **Texte clair**: `#95a5a6`

## 📱 Composants

### 1. Header
**Fichier**: `src/components/Header.js`

Affiche:
- Logo "QHSEPRO" avec "PRO" en orange
- Bouton "Admin" orange

```javascript
import Header from '../components/Header';
<Header />
```

### 2. Hero Section
**Fichier**: `src/components/Hero.js`

Affiche:
- Badge "NEBOSH IGC"
- Bouton "ME CONTACTER" (orange)
- Bouton "VOIR MES PROJETS" (blanc avec bordure)
- Indicateur "DÉCOUVRIR" avec animation

```javascript
import Hero from '../components/Hero';
<Hero />
```

### 3. Statistics
**Fichier**: `src/components/Statistics.js`

Affiche 3 statistiques:
- 45+ Projets réalisés
- 3 000+ Ouvriers formés
- 0 Accidents mortels

```javascript
import Statistics from '../components/Statistics';
<Statistics />
```

### 4. Certifications
**Fichier**: `src/components/Certifications.js`

Affiche la liste des certifications:
- Bureau Veritas, SGS, TÜV Rheinland, etc.

```javascript
import Certifications from '../components/Certifications';
<Certifications />
```

### 5. About
**Fichier**: `src/components/About.js`

Affiche:
- Photo de profil
- Nom et titre
- Description
- Certifications ISO

```javascript
import About from '../components/About';
<About />
```

### 6. Profiles
**Fichier**: `src/components/Profiles.js`

Affiche les cartes de profil avec:
- Image
- Nom
- Titre
- Description
- Certifications

```javascript
import Profiles from '../components/Profiles';
<Profiles />
```

### 7. Footer
**Fichier**: `src/components/Footer.js`

Affiche:
- Informations de l'entreprise
- Navigation
- Contact
- Copyright

```javascript
import Footer from '../components/Footer';
<Footer />
```

## 🔧 Configuration

### Fichier de configuration
**Fichier**: `src/config/siteConfig.js`

Centralisez toutes les données du site:

```javascript
import siteConfig from '../config/siteConfig';

// Accédez aux données
siteConfig.profile.name // "Etey BRUNO"
siteConfig.statistics // Array de statistiques
siteConfig.certifications // Array de certifications
```

## 📸 Ajouter votre photo de profil

Voir `SETUP_PROFILE_IMAGE.md` pour les instructions détaillées.

### Emplacements où modifier l'image:

1. **About.js** (ligne ~15)
2. **Profiles.js** (ligne ~12)

## 🎯 Personnalisation

### Modifier les statistiques
Éditez `src/config/siteConfig.js`:
```javascript
statistics: [
  {
    id: 1,
    number: 'VOTRE_NOMBRE',
    label: 'VOTRE_LABEL',
    icon: '🎯'
  }
]
```

### Modifier les certifications
Éditez `src/config/siteConfig.js`:
```javascript
certifications: [
  'CERTIFICATION 1',
  'CERTIFICATION 2'
]
```

### Modifier le profil
Éditez `src/config/siteConfig.js`:
```javascript
profile: {
  name: 'VOTRE NOM',
  title: 'VOTRE TITRE',
  description: 'VOTRE DESCRIPTION',
  image: 'VOTRE_IMAGE_URL',
  certifications: ['Cert 1', 'Cert 2']
}
```

## 📐 Responsive Design

Tous les composants sont optimisés pour:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🚀 Déploiement

1. Assurez-vous que toutes les images sont correctement configurées
2. Testez sur mobile et desktop
3. Vérifiez les liens de contact
4. Déployez avec `npm run build`

## 📝 Notes

- Les images utilisent des placeholders par défaut
- Remplacez les URLs par vos propres images
- Tous les textes sont en français
- Les couleurs suivent le design QHSEPRO

## 🔗 Fichiers importants

```
frontend/src/
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── Statistics.js
│   ├── Certifications.js
│   ├── About.js
│   ├── Profiles.js
│   └── Footer.js
├── pages/
│   └── HomePage.js
├── config/
│   └── siteConfig.js
└── App.js
```

## 💡 Conseils

- Utilisez `siteConfig.js` pour centraliser les données
- Maintenez la cohérence des couleurs
- Testez la responsivité régulièrement
- Optimisez les images pour le web
