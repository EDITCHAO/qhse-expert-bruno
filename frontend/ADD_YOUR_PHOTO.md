# 📸 Comment ajouter votre photo de profil

## 🎯 Objectif

Remplacer le placeholder par votre vraie photo de profil.

## 📋 Options disponibles

### Option 1: Fichier local (Recommandé)

#### Étape 1: Préparer votre image
- Dimensions recommandées: 400x500px (ratio 4:5)
- Format: JPG, PNG ou WebP
- Taille: < 500KB

#### Étape 2: Placer l'image
Créez le dossier `frontend/public/images/` s'il n'existe pas, puis placez votre image:

```
frontend/
└── public/
    └── images/
        └── profile.jpg
```

#### Étape 3: Modifier About.js
Ouvrez `frontend/src/components/About.js` et remplacez:

```javascript
<div className="profile-placeholder">
  <i className="fas fa-user-circle"></i>
  <p>Ajouter votre photo</p>
</div>
```

Par:

```javascript
<img 
  src="/images/profile.jpg" 
  alt="Etey BRUNO"
/>
```

### Option 2: URL externe

#### Étape 1: Uploader votre image
Utilisez un service comme:
- Imgur: https://imgur.com
- Cloudinary: https://cloudinary.com
- Imgbb: https://imgbb.com

#### Étape 2: Copier l'URL
Récupérez l'URL de votre image (ex: `https://imgur.com/abc123.jpg`)

#### Étape 3: Modifier About.js
Remplacez le placeholder par:

```javascript
<img 
  src="https://votre-url-image.com/photo.jpg" 
  alt="Etey BRUNO"
/>
```

### Option 3: Import comme module

#### Étape 1: Créer le dossier
```
frontend/src/assets/images/
```

#### Étape 2: Placer l'image
```
frontend/src/assets/images/profile.jpg
```

#### Étape 3: Modifier About.js
Ajoutez l'import en haut du fichier:

```javascript
import profileImage from '../assets/images/profile.jpg';
```

Puis remplacez le placeholder par:

```javascript
<img 
  src={profileImage} 
  alt="Etey BRUNO"
/>
```

## 🎨 Dimensions recommandées

| Aspect | Valeur |
|--------|--------|
| Largeur | 400px minimum |
| Hauteur | 500px minimum |
| Ratio | 4:5 (portrait) |
| Format | JPG, PNG, WebP |
| Taille | < 500KB |

## 🔧 Optimisation d'image

### Avec ImageMagick
```bash
convert profile.jpg -resize 400x500 -quality 85 profile-optimized.jpg
```

### Avec ffmpeg
```bash
ffmpeg -i profile.jpg -vf scale=400:500 profile-optimized.jpg
```

### En ligne
- TinyPNG: https://tinypng.com
- Compressor.io: https://compressor.io
- ImageOptim: https://imageoptim.com

## 📝 Exemple complet (Option 1)

### Fichier: `frontend/src/components/About.js`

```javascript
import './About.css';

const About = () => {
  // ... code ...

  return (
    <section id="about" className="about">
      {/* ... */}
      <div className="about-visual">
        <div className="profile-card">
          <div className="profile-image">
            <img 
              src="/images/profile.jpg"  {/* ← VOTRE IMAGE ICI */}
              alt="Etey BRUNO"
            />
          </div>
          <div className="profile-info">
            <h3>Etey BRUNO</h3>
            <p>Responsable QHSE</p>
          </div>
        </div>
      </div>
      {/* ... */}
    </section>
  );
};

export default About;
```

## ✅ Checklist

- [ ] Image préparée (400x500px, < 500KB)
- [ ] Image placée au bon endroit
- [ ] About.js modifié
- [ ] Serveur redémarré (`npm start`)
- [ ] Photo affichée correctement
- [ ] Pas d'erreurs dans la console

## 🚀 Redémarrer le serveur

Après modification, redémarrez le serveur:

```bash
npm start
```

## 🎉 Résultat

Votre photo de profil s'affichera à la place du placeholder!

---

**Besoin d'aide?** Consultez les options ci-dessus ou utilisez l'Option 1 (fichier local) qui est la plus simple.
