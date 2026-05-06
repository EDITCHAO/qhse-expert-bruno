# 🚀 Démarrage rapide QHSEPRO

## ⚡ 5 minutes pour démarrer

### 1. Installation (1 min)
```bash
cd frontend
npm install
```

### 2. Démarrage (30 sec)
```bash
npm start
```
Le site s'ouvre automatiquement sur `http://localhost:3000`

### 3. Ajouter votre photo (2 min)
Voir `PHOTO_INTEGRATION.md` pour les instructions.

### 4. Personnaliser les données (1 min)
Éditez `src/config/siteConfig.js`:
```javascript
profile: {
  name: 'VOTRE NOM',
  title: 'VOTRE TITRE',
  description: 'VOTRE DESCRIPTION',
  image: 'VOTRE_IMAGE_URL'
}
```

### 5. Tester (30 sec)
Vérifiez que tout s'affiche correctement dans le navigateur.

## 📋 Fichiers à modifier

### 1. Photo de profil
- `src/components/About.js` (ligne ~15)
- `src/components/Profiles.js` (ligne ~12)

### 2. Données personnelles
- `src/config/siteConfig.js`

### 3. Couleurs (optionnel)
- `src/styles/variables.css`

## 🎯 Prochaines étapes

### Avant de déployer
1. ✅ Photo de profil ajoutée
2. ✅ Données personnalisées
3. ✅ Testé sur mobile
4. ✅ Testé sur desktop

### Build pour production
```bash
npm run build
```

### Déployer
- Vercel: `vercel`
- Netlify: `netlify deploy --prod --dir=build`
- Serveur: Uploadez le contenu du dossier `build/`

## 📚 Documentation

- **README_QHSEPRO.md**: Guide complet
- **QHSEPRO_DESIGN_GUIDE.md**: Design et composants
- **PHOTO_INTEGRATION.md**: Ajouter la photo
- **COMMANDS.md**: Commandes utiles
- **CHECKLIST_FINAL.md**: Avant de déployer

## 🎨 Structure du site

```
Header
  ↓
Hero (avec boutons d'action)
  ↓
Statistics (45+, 3000+, 0)
  ↓
Certifications (8 certifications)
  ↓
About (photo + infos)
  ↓
Profiles (cartes de profil)
  ↓
Footer
```

## 🔧 Configuration rapide

### Modifier le nom
```javascript
// src/config/siteConfig.js
profile: {
  name: 'VOTRE NOM'
}
```

### Modifier les statistiques
```javascript
// src/config/siteConfig.js
statistics: [
  {
    number: 'VOTRE_NOMBRE',
    label: 'VOTRE_LABEL'
  }
]
```

### Modifier les certifications
```javascript
// src/config/siteConfig.js
certifications: [
  'CERTIFICATION 1',
  'CERTIFICATION 2'
]
```

## 🎨 Couleurs principales

- **Orange**: `#ff6b35` (boutons, accents)
- **Bleu-gris**: `#1a2332` (fond, texte)
- **Gris clair**: `#f5f5f5` (sections)

## 📱 Responsive

Fonctionne sur:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (< 768px)

## 🐛 Problèmes courants

### L'image ne s'affiche pas
→ Vérifiez le chemin dans `About.js` et `Profiles.js`

### Le site est lent
→ Optimisez votre image (< 500KB)

### Les styles ne s'appliquent pas
→ Videz le cache du navigateur (Ctrl+Shift+Delete)

## 💡 Conseils

1. Utilisez `siteConfig.js` pour centraliser les données
2. Testez sur mobile régulièrement
3. Optimisez les images pour le web
4. Gardez la documentation à jour

## 🚀 Commandes essentielles

```bash
# Démarrer
npm start

# Build
npm run build

# Tests
npm test

# Linting
npm run lint
```

## 📞 Besoin d'aide?

1. Consultez `README_QHSEPRO.md`
2. Vérifiez `QHSEPRO_DESIGN_GUIDE.md`
3. Lisez `PHOTO_INTEGRATION.md`

## ✅ Checklist rapide

- [ ] `npm install` exécuté
- [ ] `npm start` fonctionne
- [ ] Photo de profil ajoutée
- [ ] Données personnalisées
- [ ] Testé sur mobile
- [ ] Testé sur desktop
- [ ] Prêt à déployer

---

**Créé le**: 4 mai 2026
**Version**: 1.0.0
**Status**: ✅ Prêt à l'emploi
