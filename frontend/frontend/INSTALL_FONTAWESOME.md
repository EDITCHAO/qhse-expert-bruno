# 📦 Installation Font Awesome

## Étape 1: Installer les dépendances

Exécutez cette commande dans le dossier `frontend`:

```bash
npm install @fortawesome/fontawesome-free @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
```

## Étape 2: Importer Font Awesome dans index.js

Ajoutez cette ligne au début de `frontend/src/index.js`:

```javascript
import '@fortawesome/fontawesome-free/css/all.min.css';
```

## Étape 3: Utiliser les icônes

### Avec React FontAwesome:

```javascript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon={faShield} />
<FontAwesomeIcon icon={faPhone} />
<FontAwesomeIcon icon={faEnvelope} />
```

### Avec HTML:

```html
<i className="fas fa-shield"></i>
<i className="fas fa-phone"></i>
<i className="fas fa-envelope"></i>
```

## Icônes disponibles

### Solides (fas)
- `fa-shield` - Bouclier
- `fa-phone` - Téléphone
- `fa-envelope` - Email
- `fa-user` - Utilisateur
- `fa-chart-bar` - Graphique
- `fa-users` - Utilisateurs
- `fa-check` - Vérification
- `fa-star` - Étoile
- `fa-award` - Récompense
- `fa-briefcase` - Mallette
- `fa-cog` - Engrenage
- `fa-lock` - Cadenas
- `fa-search` - Recherche
- `fa-menu` - Menu
- `fa-times` - Fermer
- `fa-arrow-right` - Flèche droite
- `fa-download` - Télécharger
- `fa-external-link` - Lien externe

### Marques (fab)
- `fa-linkedin` - LinkedIn
- `fa-twitter` - Twitter
- `fa-facebook` - Facebook
- `fa-github` - GitHub
- `fa-instagram` - Instagram

## Vérification

Après installation, redémarrez le serveur:

```bash
npm start
```

Les icônes Font Awesome devraient maintenant s'afficher correctement!

---

**Note**: Font Awesome Free inclut plus de 1500 icônes solides et de marques.
