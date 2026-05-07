# 🚀 Configuration Vercel - Frontend React

## 📋 Fichiers de Configuration

### vercel.json

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app",
  "env": {
    "REACT_APP_API_URL": "@react_app_api_url"
  }
}
```

### .env.production

```env
REACT_APP_API_URL=https://your-backend.onrender.com
```

### .vercelignore

```
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.DS_Store
coverage
build
dist
```

## 🔧 Configuration Vercel

### Build Settings

- **Framework Preset:** Create React App
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm install`

### Environment Variables

| Name | Value |
|------|-------|
| REACT_APP_API_URL | https://your-backend.onrender.com |

### Domains

- Primary Domain: `your-project.vercel.app`
- Custom Domain: (optionnel)

## 📝 Commandes

```bash
# Build
npm run build

# Start
npm start

# Test
npm test
```

## 🎯 Prochaines Étapes

1. Créer un repository GitHub
2. Pousser le code
3. Créer un project Vercel
4. Configurer les variables d'environnement
5. Déployer

---

**Status:** ✅ Prêt pour Vercel
