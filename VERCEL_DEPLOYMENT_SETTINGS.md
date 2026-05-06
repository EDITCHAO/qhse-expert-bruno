# 🚀 Vercel Deployment Settings - Guide Complet

## 📋 TABLE DES MATIÈRES
1. [Build & Output Settings](#build--output-settings)
2. [Environment Variables](#environment-variables)
3. [Configuration Détaillée](#configuration-détaillée)
4. [Vérification](#vérification)

---

## 🔨 BUILD & OUTPUT SETTINGS

### Accès aux Settings

1. Va sur https://vercel.com/dashboard
2. Sélectionne ton projet `qhse-expert-bruno`
3. Clique sur **Settings**
4. Va à **Build & Development Settings**

### Configuration à Appliquer

| Setting | Valeur |
|---------|--------|
| **Framework Preset** | `Create React App` |
| **Build Command** | `cd frontend && npm run build` |
| **Output Directory** | `frontend/build` |
| **Install Command** | `npm install` |
| **Development Command** | `npm run dev` |
| **Node.js Version** | `18.x` (par défaut) |

### Screenshot des Settings

```
┌─────────────────────────────────────────┐
│ Build & Development Settings            │
├─────────────────────────────────────────┤
│ Framework Preset: Create React App      │
│ Build Command: cd frontend && npm run build
│ Output Directory: frontend/build        │
│ Install Command: npm install            │
│ Development Command: npm run dev        │
│ Node.js Version: 18.x                   │
└─────────────────────────────────────────┘
```

---

## 🌍 ENVIRONMENT VARIABLES

### Accès aux Variables d'Environnement

1. Va sur https://vercel.com/dashboard
2. Sélectionne ton projet `qhse-expert-bruno`
3. Clique sur **Settings**
4. Va à **Environment Variables**

### Variables à Ajouter

Ajoute ces variables exactement comme indiqué :

```
REACT_APP_API_URL = https://portfolio-qhse-api.onrender.com/api
REACT_APP_ENV = production
REACT_APP_SITE_NAME = QHSEPRO
REACT_APP_SITE_TITLE = QHSEPRO - Expert QHSE
REACT_APP_PRIMARY_COLOR = #ff6b35
REACT_APP_DARK_COLOR = #1a2332
REACT_APP_PROFILE_IMAGE_URL = https://via.placeholder.com/400x500/ff6b35/ffffff?text=Profile+Photo
REACT_APP_GOOGLE_ANALYTICS_ID = 
REACT_APP_DEBUG = false
CI = false
```

### Détail de Chaque Variable

| Variable | Valeur | Description |
|----------|--------|-------------|
| `REACT_APP_API_URL` | `https://portfolio-qhse-api.onrender.com/api` | URL de l'API backend |
| `REACT_APP_ENV` | `production` | Environnement (production) |
| `REACT_APP_SITE_NAME` | `QHSEPRO` | Nom du site |
| `REACT_APP_SITE_TITLE` | `QHSEPRO - Expert QHSE` | Titre du site |
| `REACT_APP_PRIMARY_COLOR` | `#ff6b35` | Couleur primaire (orange) |
| `REACT_APP_DARK_COLOR` | `#1a2332` | Couleur sombre (bleu foncé) |
| `REACT_APP_PROFILE_IMAGE_URL` | `https://via.placeholder.com/...` | Image de profil |
| `REACT_APP_GOOGLE_ANALYTICS_ID` | `` | ID Google Analytics (vide si non utilisé) |
| `REACT_APP_DEBUG` | `false` | Mode debug désactivé |
| `CI` | `false` | Désactive les erreurs ESLint strictes |

---

## 🔧 CONFIGURATION DÉTAILLÉE

### 1️⃣ Build Command Expliqué

```bash
cd frontend && npm run build
```

**Qu'est-ce que ça fait :**
- `cd frontend` - Va dans le dossier frontend
- `npm run build` - Lance le build React (crée le dossier `build/`)

### 2️⃣ Output Directory Expliqué

```
frontend/build
```

**Qu'est-ce que c'est :**
- Dossier contenant les fichiers statiques optimisés
- Vercel servira ces fichiers au public
- Contient : HTML, CSS, JS minifiés

### 3️⃣ Install Command Expliqué

```bash
npm install
```

**Qu'est-ce que ça fait :**
- Installe toutes les dépendances du projet
- Lit `package.json` et `package-lock.json`
- Crée le dossier `node_modules/`

### 4️⃣ Framework Preset Expliqué

```
Create React App
```

**Qu'est-ce que c'est :**
- Vercel détecte automatiquement que c'est une app React
- Applique les optimisations React
- Configure les routes SPA correctement

---

## ✅ VÉRIFICATION

### Après avoir configuré les Settings

1. **Vérifie les Build & Output Settings :**
   - Framework Preset : `Create React App` ✅
   - Build Command : `cd frontend && npm run build` ✅
   - Output Directory : `frontend/build` ✅

2. **Vérifie les Environment Variables :**
   - `REACT_APP_API_URL` : `https://portfolio-qhse-api.onrender.com/api` ✅
   - `REACT_APP_ENV` : `production` ✅
   - `CI` : `false` ✅

3. **Redéploie :**
   - Va à **Deployments**
   - Clique sur **Redeploy**
   - Attends que le build se termine

4. **Vérifie le site :**
   - Visite ton URL Vercel
   - Vérifie que tout s'affiche correctement
   - Ouvre la console (F12) pour voir les erreurs

---

## 🎯 CHECKLIST COMPLÈTE

### Build & Output Settings
- [ ] Framework Preset = `Create React App`
- [ ] Build Command = `cd frontend && npm run build`
- [ ] Output Directory = `frontend/build`
- [ ] Install Command = `npm install`
- [ ] Development Command = `npm run dev`
- [ ] Node.js Version = `18.x`

### Environment Variables
- [ ] `REACT_APP_API_URL` = `https://portfolio-qhse-api.onrender.com/api`
- [ ] `REACT_APP_ENV` = `production`
- [ ] `REACT_APP_SITE_NAME` = `QHSEPRO`
- [ ] `REACT_APP_SITE_TITLE` = `QHSEPRO - Expert QHSE`
- [ ] `REACT_APP_PRIMARY_COLOR` = `#ff6b35`
- [ ] `REACT_APP_DARK_COLOR` = `#1a2332`
- [ ] `REACT_APP_PROFILE_IMAGE_URL` = `https://via.placeholder.com/400x500/ff6b35/ffffff?text=Profile+Photo`
- [ ] `REACT_APP_GOOGLE_ANALYTICS_ID` = `` (vide)
- [ ] `REACT_APP_DEBUG` = `false`
- [ ] `CI` = `false`

### Après Configuration
- [ ] Redéployer le projet
- [ ] Vérifier que le build réussit
- [ ] Vérifier que le site s'affiche correctement
- [ ] Vérifier que l'API est connectée

---

## 🔗 FICHIERS DE CONFIGURATION

### vercel.json (Root)

```json
{
  "version": 2,
  "buildCommand": "cd frontend && npm install && npm run build",
  "outputDirectory": "frontend/build"
}
```

### .vercelignore

```
.git
.gitignore
.env
.env.local
.env.*.local
node_modules
npm-debug.log
yarn-error.log
.DS_Store
.vscode
.idea
*.swp
*.swo
*~
.claude
backend
app
bootstrap
config
database
storage
tests
docker-compose.yml
Dockerfile
*.md
ACCES_TELEPHONE.txt
```

### frontend/.env.production

```env
REACT_APP_API_URL=https://portfolio-qhse-api.onrender.com/api
REACT_APP_ENV=production
REACT_APP_SITE_NAME=QHSEPRO
REACT_APP_SITE_TITLE=QHSEPRO - Expert QHSE
REACT_APP_PRIMARY_COLOR=#ff6b35
REACT_APP_DARK_COLOR=#1a2332
REACT_APP_PROFILE_IMAGE_URL=https://via.placeholder.com/400x500/ff6b35/ffffff?text=Profile+Photo
REACT_APP_GOOGLE_ANALYTICS_ID=
REACT_APP_DEBUG=false
```

### frontend/.eslintrc.json

```json
{
  "extends": ["react-app"],
  "rules": {
    "no-unused-vars": "off",
    "jsx-a11y/anchor-is-valid": "off"
  }
}
```

---

## 🚀 PROCESSUS DE DÉPLOIEMENT

### Étape 1 : Configuration Vercel
1. Va à Settings → Build & Development Settings
2. Configure comme indiqué ci-dessus
3. Clique sur **Save**

### Étape 2 : Variables d'Environnement
1. Va à Settings → Environment Variables
2. Ajoute toutes les variables
3. Clique sur **Save**

### Étape 3 : Redéploiement
1. Va à Deployments
2. Clique sur **Redeploy**
3. Attends que le build se termine

### Étape 4 : Vérification
1. Visite ton URL Vercel
2. Vérifie que tout fonctionne
3. Ouvre la console (F12) pour les erreurs

---

## 📊 RÉSUMÉ

| Élément | Valeur |
|---------|--------|
| **Framework** | Create React App |
| **Build Command** | `cd frontend && npm run build` |
| **Output Directory** | `frontend/build` |
| **Node.js Version** | 18.x |
| **Environment** | Production |
| **API URL** | `https://portfolio-qhse-api.onrender.com/api` |
| **Auto-Deploy** | Activé (GitHub) |

---

## ❓ FAQ

**Q: Pourquoi `CI=false` ?**
A: Pour désactiver les erreurs ESLint strictes qui bloquent le build.

**Q: Pourquoi `cd frontend && npm run build` ?**
A: Parce que le frontend est dans un sous-dossier.

**Q: Où sont stockées les variables d'environnement ?**
A: Sur les serveurs Vercel, pas dans le code.

**Q: Comment mettre à jour les variables ?**
A: Va à Settings → Environment Variables → Modifie → Save → Redeploy

**Q: Le site ne se met pas à jour après un push ?**
A: Vercel redéploie automatiquement. Attends 1-2 minutes et rafraîchis.

