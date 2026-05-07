# 🎯 QHSEPRO - Site Web Professionnel

## 📌 Vue d'ensemble

Site web professionnel pour QHSEPRO, reproduisant exactement le design fourni avec:
- Header avec logo et bouton Admin
- Section Hero avec appels à l'action
- Statistiques (45+ projets, 3000+ ouvriers, 0 accidents)
- Certifications (8 certifications affichées)
- Section "À propos" avec photo de profil
- Cartes de profil
- Footer complet

## 🚀 Démarrage rapide

### 1. Installation
```bash
cd frontend
npm install
```

### 2. Démarrage du serveur de développement
```bash
npm start
```

Le site s'ouvrira sur `http://localhost:3000`

### 3. Ajouter votre photo de profil
Voir `PHOTO_INTEGRATION.md` pour les instructions détaillées.

### 4. Personnaliser les données
Éditez `src/config/siteConfig.js`:
```javascript
export const siteConfig = {
  profile: {
    name: 'VOTRE NOM',
    title: 'VOTRE TITRE',
    description: 'VOTRE DESCRIPTION',
    image: 'VOTRE_IMAGE_URL',
    certifications: ['Cert 1', 'Cert 2']
  },
  // ...
};
```

## 📁 Structure du projet

```
frontend/
├── src/
│   ├── components/          # Composants React
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Statistics.js
│   │   ├── Certifications.js
│   │   ├── About.js
│   │   ├── Profiles.js
│   │   ├── Footer.js
│   │   └── *.css           # Styles pour chaque composant
│   ├── pages/
│   │   ├── HomePage.js     # Page d'accueil principale
│   │   └── HomePage.css
│   ├── config/
│   │   └── siteConfig.js   # Configuration centralisée
│   ├── styles/
│   │   ├── variables.css   # Variables CSS globales
│   │   └── animations.css  # Animations réutilisables
│   ├── App.js
│   └── index.js
├── public/
│   └── images/             # Dossier pour les images
├── QHSEPRO_DESIGN_GUIDE.md
├── SETUP_PROFILE_IMAGE.md
├── PHOTO_INTEGRATION.md
├── IMPLEMENTATION_SUMMARY.md
└── README_QHSEPRO.md       # Ce fichier
```

## 🎨 Composants disponibles

### Header
- Logo "QHSEPRO" avec "PRO" en orange
- Bouton Admin
- Responsive

### Hero
- Section d'accueil avec fond dégradé
- Badge "NEBOSH IGC"
- Boutons d'action
- Indicateur "DÉCOUVRIR"

### Statistics
- 3 statistiques principales
- Icônes animées
- Responsive

### Certifications
- Grille de 8 certifications
- Hover effects
- Responsive

### About
- Photo de profil
- Informations personnelles
- Certifications ISO
- Responsive

### Profiles
- Cartes de profil
- Image, nom, titre, description
- Certifications
- Animations

### Footer
- Informations de l'entreprise
- Navigation
- Contact
- Copyright

## 🎨 Palette de couleurs

| Couleur | Code | Utilisation |
|---------|------|-------------|
| Orange | `#ff6b35` | Primaire, boutons |
| Bleu-gris | `#1a2332` | Fond, texte sombre |
| Gris clair | `#f5f5f5` | Fond sections |
| Texte | `#555555` | Texte principal |
| Texte clair | `#95a5a6` | Texte secondaire |

## 📱 Responsive Design

Optimisé pour:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🔧 Configuration

### Modifier les statistiques
```javascript
// src/config/siteConfig.js
statistics: [
  {
    id: 1,
    number: '45+',
    label: 'Projets réalisés',
    icon: '💼'
  }
]
```

### Modifier les certifications
```javascript
// src/config/siteConfig.js
certifications: [
  'BUREAU VERITAS',
  'SGS',
  // ...
]
```

### Modifier le profil
```javascript
// src/config/siteConfig.js
profile: {
  name: 'Etey BRUNO',
  title: 'Responsable QHSE...',
  description: '...',
  image: 'URL_IMAGE',
  certifications: ['ISO 45001', 'ISO 14001']
}
```

## 🎯 Personnalisation

### 1. Photo de profil
Voir `PHOTO_INTEGRATION.md`

### 2. Textes et données
Éditez `src/config/siteConfig.js`

### 3. Couleurs
Modifiez `src/styles/variables.css`

### 4. Animations
Éditez `src/styles/animations.css`

## 🧪 Tests

### Vérifier la compilation
```bash
npm run build
```

### Vérifier les erreurs
```bash
npm run lint
```

### Tester sur mobile
1. Ouvrir DevTools (F12)
2. Activer le mode mobile
3. Tester tous les composants

## 📦 Build pour production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `build/`

## 🚀 Déploiement

### Sur Vercel
```bash
npm install -g vercel
vercel
```

### Sur Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Sur un serveur classique
1. Exécutez `npm run build`
2. Uploadez le contenu du dossier `build/` sur votre serveur
3. Configurez votre serveur pour servir `index.html` pour toutes les routes

## 📚 Documentation

- **QHSEPRO_DESIGN_GUIDE.md**: Guide complet du design
- **SETUP_PROFILE_IMAGE.md**: Instructions pour ajouter la photo
- **PHOTO_INTEGRATION.md**: Détails d'intégration de l'image
- **IMPLEMENTATION_SUMMARY.md**: Résumé de l'implémentation

## 🔗 Fichiers importants

- `src/config/siteConfig.js`: Configuration centralisée
- `src/styles/variables.css`: Variables CSS globales
- `src/styles/animations.css`: Animations réutilisables
- `src/pages/HomePage.js`: Page d'accueil principale

## 💡 Conseils

1. **Utilisez `siteConfig.js`** pour centraliser les données
2. **Maintenez la cohérence** des couleurs et espacements
3. **Testez régulièrement** la responsivité
4. **Optimisez les images** pour le web
5. **Utilisez les variables CSS** pour les modifications globales

## 🐛 Dépannage

### L'image ne s'affiche pas
- Vérifier le chemin du fichier
- Vérifier que le fichier existe
- Vérifier la console pour les erreurs

### Le site est lent
- Optimiser les images
- Vérifier la taille des fichiers
- Utiliser un CDN pour les images

### Les styles ne s'appliquent pas
- Vérifier les chemins des fichiers CSS
- Vérifier la syntaxe CSS
- Vider le cache du navigateur

## 📞 Support

Pour toute question:
1. Consultez la documentation
2. Vérifiez les fichiers de configuration
3. Testez sur différents navigateurs

## 📝 Changelog

### Version 1.0.0 (4 mai 2026)
- ✅ Création de tous les composants
- ✅ Design responsive
- ✅ Configuration centralisée
- ✅ Documentation complète
- ✅ Prêt pour la production

## 📄 Licence

Tous droits réservés © 2026 QHSEPRO

---

**Créé le**: 4 mai 2026
**Version**: 1.0.0
**Status**: ✅ Production Ready
