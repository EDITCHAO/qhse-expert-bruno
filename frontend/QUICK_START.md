<<<<<<< HEAD
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
=======
# ⚡ Démarrage Rapide - Portfolio QHSE (React + Render + Supabase)

## 🎯 Objectif

Déployer votre portfolio avec :
- **Frontend** : React sur Vercel
- **Backend** : Laravel API sur Render
- **Database** : PostgreSQL sur Supabase

## 📋 Prérequis

- Compte GitHub
- Compte Vercel (gratuit)
- Compte Render (gratuit)
- Compte Supabase (gratuit)

## 🚀 Étapes (15 minutes)

### 1️⃣ Créer la base de données Supabase (2 min)

```bash
# Allez sur https://supabase.com
# Créez un nouveau projet
# Notez : Host, Database, User, Password, Port

# Allez dans SQL Editor et exécutez :
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  numero VARCHAR(20) NOT NULL,
  sujet VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_created_at ON contacts(created_at);
```

### 2️⃣ Préparer le code (3 min)

```bash
# Clonez votre repository
git clone <votre-repo>
cd portfolio

# Installez les dépendances backend
composer install

# Générez la clé
php artisan key:generate
# Copiez la clé affichée (commence par base64:...)

# Installez les dépendances frontend
cd frontend
npm install
cd ..
```

### 3️⃣ Déployer le backend sur Render (5 min)

1. Allez sur https://render.com
2. Connectez-vous avec GitHub
3. Cliquez sur "New +" → "Web Service"
4. Sélectionnez votre repository
5. Configurez :
   - **Name** : `portfolio-qhse-api`
   - **Runtime** : `PHP`
   - **Build Command** : `composer install --no-dev --optimize-autoloader && php artisan migrate --force`
   - **Start Command** : `php -S 0.0.0.0:$PORT public/index.php`
6. Allez à "Environment" et ajoutez :

```
APP_ENV=production
APP_DEBUG=false
APP_KEY=base64:YOUR_KEY_FROM_STEP_2
APP_URL=https://portfolio-qhse-api.onrender.com

DB_CONNECTION=pgsql
DB_HOST=your-project.supabase.co
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=your_supabase_password
DB_SSLMODE=require

ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password

CORS_ALLOWED_ORIGINS=https://portfolio-qhse.vercel.app
```

7. Cliquez sur "Create Web Service"
8. Attendez le déploiement (5-10 min)
9. **Notez l'URL** : `https://portfolio-qhse-api.onrender.com`

### 4️⃣ Déployer le frontend sur Vercel (5 min)

1. Allez sur https://vercel.com
2. Cliquez sur "Import Project"
3. Sélectionnez votre repository GitHub
4. Configurez :
   - **Framework** : Create React App
   - **Root Directory** : `frontend`
   - **Build Command** : `npm run build`
   - **Output Directory** : `build`
5. Allez à "Environment Variables" et ajoutez :

```
REACT_APP_API_URL=https://portfolio-qhse-api.onrender.com/api
REACT_APP_API_TIMEOUT=10000
```

6. Cliquez sur "Deploy"
7. Attendez le déploiement (2-5 min)
8. **Notez l'URL** : `https://portfolio-qhse.vercel.app`

## ✅ Vérifier

1. Allez sur https://portfolio-qhse.vercel.app
2. Remplissez le formulaire de contact
3. Allez sur https://portfolio-qhse.vercel.app/admin/login
4. Connectez-vous avec `admin` / `your_secure_password`
5. Vérifiez que le message apparaît

## 🎉 Terminé!

Votre portfolio est maintenant en ligne!

- **Frontend** : https://portfolio-qhse.vercel.app
- **Backend** : https://portfolio-qhse-api.onrender.com
- **Database** : Supabase

## 📞 Besoin d'aide?

Consultez `DEPLOYMENT_REACT_RENDER_SUPABASE.md` pour les instructions détaillées.
>>>>>>> 19a2af9b54dcbf61d70ba8d8a5a8dcdd27c81a25
