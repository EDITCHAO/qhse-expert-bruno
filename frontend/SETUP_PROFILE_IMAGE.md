# Configuration de la Photo de Profil

## Instructions pour ajouter votre photo de profil

### Option 1: Utiliser une URL externe
1. Uploadez votre photo sur un service d'hébergement d'images (Imgur, Cloudinary, etc.)
2. Copiez l'URL de l'image
3. Modifiez les fichiers suivants et remplacez l'URL placeholder:

**Dans `src/components/About.js` (ligne ~15):**
```javascript
<img 
  src="VOTRE_URL_ICI" 
  alt="Profile" 
  className="profile-img"
/>
```

**Dans `src/components/Profiles.js` (ligne ~12):**
```javascript
image: 'VOTRE_URL_ICI',
```

### Option 2: Utiliser un fichier local
1. Placez votre image dans `frontend/public/images/profile.jpg`
2. Modifiez les fichiers et utilisez le chemin relatif:

```javascript
<img 
  src="/images/profile.jpg" 
  alt="Profile" 
  className="profile-img"
/>
```

### Option 3: Importer comme module
1. Placez votre image dans `frontend/src/assets/images/profile.jpg`
2. Importez-la en haut du fichier:

```javascript
import profileImage from '../assets/images/profile.jpg';
```

3. Utilisez-la:
```javascript
<img 
  src={profileImage} 
  alt="Profile" 
  className="profile-img"
/>
```

## Dimensions recommandées
- Largeur: 400px minimum
- Hauteur: 500px minimum
- Format: JPG, PNG ou WebP
- Taille: < 500KB pour une meilleure performance

## Personnalisation supplémentaire

### Modifier le nom et la description
Éditez `src/components/Profiles.js`:
```javascript
const profiles = [
  {
    id: 1,
    name: 'VOTRE NOM',
    title: 'VOTRE TITRE',
    description: 'VOTRE DESCRIPTION',
    image: 'VOTRE_IMAGE_URL',
    certifications: ['Certification 1', 'Certification 2']
  }
];
```

### Modifier les statistiques
Éditez `src/components/Statistics.js`:
```javascript
const stats = [
  {
    id: 1,
    number: 'VOTRE_NOMBRE',
    label: 'VOTRE_LABEL',
    icon: '🎯'
  },
  // ...
];
```

### Modifier les certifications
Éditez `src/components/Certifications.js`:
```javascript
const certifications = [
  'CERTIFICATION 1',
  'CERTIFICATION 2',
  // ...
];
```
