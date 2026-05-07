# 📸 Intégration de votre photo de profil

## Votre photo actuelle

Vous avez fourni une photo d'un professionnel QHSE en:
- Casque orange de sécurité
- Gilet de sécurité orange et gris
- Chemise rose
- Logo "GROUPE EDAI" sur le gilet

## 🎯 Où intégrer la photo

### Option 1: Utiliser directement l'image fournie

Si vous avez sauvegardé l'image, placez-la dans:
```
frontend/public/images/profile.jpg
```

Puis modifiez:

**`src/components/About.js` (ligne ~15):**
```javascript
<img 
  src="/images/profile.jpg" 
  alt="Profile" 
  className="profile-img"
/>
```

**`src/components/Profiles.js` (ligne ~12):**
```javascript
image: '/images/profile.jpg',
```

### Option 2: Utiliser une URL externe

Si l'image est hébergée en ligne:

**`src/components/About.js`:**
```javascript
<img 
  src="https://votre-domaine.com/images/profile.jpg" 
  alt="Profile" 
  className="profile-img"
/>
```

**`src/components/Profiles.js`:**
```javascript
image: 'https://votre-domaine.com/images/profile.jpg',
```

### Option 3: Importer comme module

Créez le dossier:
```
frontend/src/assets/images/
```

Placez votre image: `profile.jpg`

**`src/components/About.js`:**
```javascript
import profileImage from '../assets/images/profile.jpg';

// ...

<img 
  src={profileImage} 
  alt="Profile" 
  className="profile-img"
/>
```

**`src/components/Profiles.js`:**
```javascript
import profileImage from '../assets/images/profile.jpg';

// ...

const profiles = [
  {
    id: 1,
    name: 'Etey BRUNO',
    title: 'Responsable QHSE spécialisé en génie civil',
    description: 'Routes, Bâtiments & Ouvrages d\'art. Plus de 12 ans d\'expérience au service de la sécurité et de l\'excellence opérationnelle.',
    image: profileImage,
    certifications: ['ISO 45001 Certifié', 'ISO 14001 Certifié']
  }
];
```

## 📋 Checklist d'intégration

- [ ] Choisir la méthode d'intégration (locale, URL, ou module)
- [ ] Placer l'image au bon endroit
- [ ] Modifier `About.js`
- [ ] Modifier `Profiles.js`
- [ ] Tester sur desktop
- [ ] Tester sur mobile
- [ ] Vérifier la qualité de l'image
- [ ] Optimiser la taille du fichier

## 🖼️ Recommandations pour l'image

### Dimensions
- **Largeur**: 400px minimum
- **Hauteur**: 500px minimum
- **Ratio**: 4:5 (portrait)

### Format
- **JPG**: Meilleure compression
- **PNG**: Meilleure qualité
- **WebP**: Meilleure performance

### Taille du fichier
- **Cible**: < 300KB
- **Maximum**: < 500KB

### Optimisation
```bash
# Avec ImageMagick
convert profile.jpg -resize 400x500 -quality 85 profile-optimized.jpg

# Avec ffmpeg
ffmpeg -i profile.jpg -vf scale=400:500 profile-optimized.jpg
```

## 🎨 Styles appliqués à l'image

L'image sera affichée avec:
- Bordure arrondie: `16px`
- Ombre: `0 10px 40px rgba(0, 0, 0, 0.15)`
- Objet-fit: `cover` (remplissage)
- Responsive: Adapté à tous les écrans

## ✅ Vérification après intégration

1. **Vérifier l'affichage**
   ```bash
   npm start
   ```

2. **Tester sur mobile**
   - Ouvrir DevTools (F12)
   - Activer le mode mobile
   - Vérifier que l'image s'affiche correctement

3. **Vérifier la performance**
   - Ouvrir DevTools
   - Onglet Network
   - Vérifier que l'image se charge rapidement

4. **Vérifier la qualité**
   - L'image doit être nette
   - Les couleurs doivent être fidèles
   - Pas de distorsion

## 🔧 Dépannage

### L'image ne s'affiche pas
- Vérifier le chemin du fichier
- Vérifier que le fichier existe
- Vérifier les permissions du fichier
- Vérifier la console pour les erreurs

### L'image est floue
- Augmenter la résolution
- Utiliser un format sans perte (PNG)
- Vérifier le ratio d'aspect

### L'image est trop lente à charger
- Réduire la taille du fichier
- Utiliser un format compressé (JPG)
- Utiliser un CDN pour l'hébergement

### L'image est mal positionnée
- Vérifier les styles CSS
- Ajuster `object-fit` si nécessaire
- Vérifier le ratio d'aspect

## 📝 Exemple complet

### Fichier: `src/components/About.js`

```javascript
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-subtitle">QUI SUIS-JE</h2>
          <h1 className="about-title">À propos</h1>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img 
              src="/images/profile.jpg"  {/* ← VOTRE IMAGE ICI */}
              alt="Profile" 
              className="profile-img"
            />
          </div>
          <div className="about-text">
            <h3 className="profile-name">Etey BRUNO</h3>
            <p className="profile-description">
              Responsable QHSE spécialisé en génie civil — Routes, Bâtiments & Ouvrages d'art. Plus de 12 ans d'expérience au service de la sécurité et de l'excellence opérationnelle.
            </p>
            <div className="certifications-badges">
              <div className="badge">
                <span className="badge-icon">🏆</span>
                <span>ISO 45001 Certifié</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🏆</span>
                <span>ISO 14001 Certifié</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
```

## 🚀 Prochaines étapes

1. Préparez votre image
2. Choisissez la méthode d'intégration
3. Modifiez les fichiers
4. Testez le site
5. Déployez en production

---

**Besoin d'aide?** Consultez `QHSEPRO_DESIGN_GUIDE.md` ou `SETUP_PROFILE_IMAGE.md`
