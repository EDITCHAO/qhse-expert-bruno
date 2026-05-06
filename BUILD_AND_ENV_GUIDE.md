# 📋 Guide Complet : Build, Output et Variables d'Environnement

## 🏗️ Architecture du Projet

```
qhse-expert-bruno/
├── frontend/                 # React App (Port 3000)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env.example
├── backend-server.js         # Node.js/Express API (Port 8000)
├── package.json
└── .env.example
```

---

## 🔧 BUILD CONFIGURATION

### Frontend (React)

**Fichier:** `frontend/package.json`

```json
{
  "scripts": {
    "dev": "react-scripts start",           // Développement (Port 3000)
    "start": "react-scripts start",         // Démarrage
    "build": "react-scripts build",         // Production build
    "test": "react-scripts test",           // Tests
    "serve": "serve -s build"               // Servir le build
  }
}
```

**Commandes Frontend:**
```bash
# Développement
npm run dev              # Lance le serveur de développement

# Production
npm run build            # Crée le dossier 'build' optimisé
npm run serve            # Sert le build en production

# Tests
npm run test             # Lance les tests
```

**Output Frontend:**
- **Dossier:** `frontend/build/`
- **Fichiers générés:**
  - `index.html` - Page principale
  - `static/js/` - Fichiers JavaScript minifiés
  - `static/css/` - Fichiers CSS minifiés
  - `static/media/` - Images et assets

---

### Backend (Node.js/Express)

**Fichier:** `package.json`

```json
{
  "scripts": {
    "dev": "node backend-server.js",       // Développement
    "start": "node backend-server.js",     // Production
    "build": "echo 'No build needed'"      // Pas de build nécessaire
  }
}
```

**Commandes Backend:**
```bash
# Développement
npm run dev              # Lance le serveur Express

# Production
npm start                # Lance le serveur
```

**Output Backend:**
- Pas de dossier de build
- Serveur écoute sur le port 8000
- Logs dans la console

---

## 🌍 VARIABLES D'ENVIRONNEMENT

### Frontend - `.env.example`

```env
# API Backend
REACT_APP_API_URL=http://localhost:8000/api

# Mode environnement
REACT_APP_ENV=development

# Configuration Site
REACT_APP_SITE_NAME=QHSEPRO
REACT_APP_SITE_TITLE=QHSEPRO - Expert QHSE

# Couleurs (optionnel)
REACT_APP_PRIMARY_COLOR=#ff6b35
REACT_APP_DARK_COLOR=#1a2332

# Images
REACT_APP_PROFILE_IMAGE_URL=https://via.placeholder.com/400x500/ff6b35/ffffff?text=Profile+Photo

# Analytics (optionnel)
REACT_APP_GOOGLE_ANALYTICS_ID=

# Debug
REACT_APP_DEBUG=false
```

**Variables importantes:**
| Variable | Valeur Dev | Valeur Prod | Description |
|----------|-----------|-----------|-------------|
| `REACT_APP_API_URL` | `http://localhost:8000/api` | `https://api.qhsepro.com` | URL de l'API backend |
| `REACT_APP_ENV` | `development` | `production` | Environnement |
| `REACT_APP_SITE_NAME` | `QHSEPRO` | `QHSEPRO` | Nom du site |

---

### Backend - `.env.example` (Développement)

```env
# Application
APP_NAME="Portfolio QHSE API"
APP_ENV=local
APP_KEY=base64:YOUR_APP_KEY_HERE
APP_DEBUG=true
APP_URL=http://localhost:8000

# Base de données (MySQL - Développement)
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portfolio_dev
DB_USERNAME=root
DB_PASSWORD=

# Admin
ADMIN_USERNAME=admin
ADMIN_PASSWORD=password123

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8000

# Session
SESSION_DRIVER=cookie
SESSION_LIFETIME=120

# Cache
CACHE_DRIVER=file
```

---

### Backend - `.env.render` (Production)

```env
# Application
APP_NAME="Portfolio QHSE API"
APP_ENV=production
APP_KEY=base64:YOUR_APP_KEY_HERE
APP_DEBUG=false
APP_URL=https://portfolio-qhse-api.onrender.com

# Base de données (PostgreSQL - Supabase)
DB_CONNECTION=pgsql
DB_HOST=your-project.supabase.co
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=your_supabase_password
DB_SSLMODE=require

# Admin
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password

# CORS
CORS_ALLOWED_ORIGINS=https://portfolio-qhse.vercel.app

# Cache
CACHE_DRIVER=file
SESSION_DRIVER=cookie
```

---

## 🚀 PROCESSUS DE BUILD COMPLET

### 1️⃣ Développement Local

```bash
# Terminal 1 - Backend
cd D:\PROJET\bruno-hse
npm install
npm run dev              # Écoute sur http://localhost:8000

# Terminal 2 - Frontend
cd D:\PROJET\bruno-hse\frontend
npm install
npm run dev              # Écoute sur http://localhost:3000
```

### 2️⃣ Build pour Production

```bash
# Frontend
cd frontend
npm run build            # Crée frontend/build/

# Backend
# Pas de build nécessaire, juste déployer les fichiers
```

### 3️⃣ Déploiement

**Frontend (Vercel):**
```bash
# Vercel détecte automatiquement:
# - Build command: npm run build
# - Output directory: build
# - Install command: npm install
```

**Backend (Render):**
```bash
# Render détecte automatiquement:
# - Start command: npm start
# - Build command: npm install
```

---

## 📊 RÉSUMÉ DES PORTS

| Service | Port | URL | Environnement |
|---------|------|-----|---------------|
| Frontend React | 3000 | `http://localhost:3000` | Dev |
| Backend Express | 8000 | `http://localhost:8000` | Dev |
| Frontend Build | - | `frontend/build/` | Prod |
| Backend | - | Render/Heroku | Prod |

---

## 🔐 VARIABLES SENSIBLES À CONFIGURER

### Frontend
- `REACT_APP_API_URL` - URL de l'API (change selon l'environnement)
- `REACT_APP_GOOGLE_ANALYTICS_ID` - ID Google Analytics (optionnel)

### Backend
- `APP_KEY` - Clé d'application (générer une nouvelle clé)
- `DB_PASSWORD` - Mot de passe base de données
- `ADMIN_PASSWORD` - Mot de passe admin
- `DB_HOST` - Host de la base de données (Supabase en prod)

---

## ✅ CHECKLIST DE DÉPLOIEMENT

- [ ] Frontend `.env` configuré avec `REACT_APP_API_URL` correcte
- [ ] Backend `.env` configuré avec les credentials DB
- [ ] `npm run build` exécuté avec succès
- [ ] Dossier `frontend/build/` créé
- [ ] Variables d'environnement définies sur Vercel/Render
- [ ] CORS configuré correctement
- [ ] Base de données migrée (si nécessaire)
- [ ] Tests passés localement

---

## 📝 NOTES IMPORTANTES

1. **Ne jamais commiter les fichiers `.env`** - Utiliser `.env.example` comme template
2. **Variables REACT_APP_** - Doivent commencer par `REACT_APP_` pour être accessibles
3. **Build Frontend** - Génère des fichiers statiques optimisés
4. **Backend** - Pas de build, juste déployer les fichiers source
5. **CORS** - Doit inclure l'URL du frontend en production

