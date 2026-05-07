# 🚀 Guide Complet : Next.js + Node.js sur Vercel & Render

## 📊 Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    VERCEL (Frontend)                    │
│  Next.js Application - https://your-app.vercel.app     │
└────────────────────┬────────────────────────────────────┘
                     │ API Calls
                     ↓
┌─────────────────────────────────────────────────────────┐
│                    RENDER (Backend)                     │
│  Node.js/Express API - https://your-api.onrender.com   │
└─────────────────────────────────────────────────────────┘
```

## 🎯 Objectifs

- ✅ Frontend: Next.js sur Vercel
- ✅ Backend: Node.js sur Render
- ✅ Base de données: Supabase (PostgreSQL)
- ✅ Domaine personnalisé (optionnel)
- ✅ SSL/HTTPS automatique

## 📋 Checklist Pré-Déploiement

### Frontend (Next.js)

- [ ] Code testé localement
- [ ] `npm run build` fonctionne
- [ ] Variables d'environnement configurées
- [ ] Images optimisées
- [ ] Pas d'erreurs de console

### Backend (Node.js)

- [ ] Code testé localement
- [ ] `npm start` fonctionne
- [ ] CORS configuré correctement
- [ ] Variables d'environnement définies
- [ ] Base de données connectée

## 🔧 Configuration Locale

### Frontend

```bash
cd frontend-nextjs
npm install
npm run dev
# http://localhost:3000
```

### Backend

```bash
npm install
npm run dev
# http://localhost:8000
```

## 🌐 Déploiement Backend sur Render

### 1. Préparer le Backend

```bash
# Vérifier que le backend fonctionne
npm run build
npm start
```

### 2. Créer un Repository GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. Déployer sur Render

1. Allez sur [render.com](https://render.com)
2. Cliquez sur "New +"
3. Sélectionnez "Web Service"
4. Connectez votre repository GitHub
5. Configurez :
   - **Name:** `qhse-backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free (ou payant)

### 4. Ajouter les Variables d'Environnement

Dans Render Dashboard :
- Allez à "Environment"
- Ajoutez :
  ```
  NODE_ENV=production
  PORT=8000
  ADMIN_USERNAME=admin
  ADMIN_PASSWORD=password123
  ```

### 5. Déployer

Cliquez sur "Create Web Service" et attendez le déploiement.

**URL du backend:** `https://qhse-backend.onrender.com`

## 🌐 Déploiement Frontend sur Vercel

### 1. Préparer le Frontend

```bash
cd frontend-nextjs
npm run build
```

### 2. Créer un Repository GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Sélectionnez votre repository
4. Configurez :
   - **Framework:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`

### 4. Ajouter les Variables d'Environnement

Dans Vercel Dashboard :
- Allez à "Settings" → "Environment Variables"
- Ajoutez :
  ```
  NEXT_PUBLIC_API_URL=https://qhse-backend.onrender.com
  ```

### 5. Déployer

Cliquez sur "Deploy" et attendez la fin.

**URL du frontend:** `https://your-project.vercel.app`

## ✅ Vérification Post-Déploiement

### 1. Tester le Backend

```bash
curl https://qhse-backend.onrender.com/health
# Réponse attendue: {"status":"ok"}
```

### 2. Tester le Frontend

1. Ouvrez `https://your-project.vercel.app`
2. Testez les pages
3. Testez le formulaire de contact
4. Testez l'admin login

### 3. Vérifier les Logs

**Backend (Render):**
- Dashboard → Logs

**Frontend (Vercel):**
- Dashboard → Deployments → Logs

## 🔐 Sécurité

### 1. Changer les Identifiants Admin

**Backend (.env):**
```
ADMIN_USERNAME=votre_username
ADMIN_PASSWORD=votre_password_fort
```

### 2. Configurer CORS

**Backend (backend-server.js):**
```javascript
app.use(cors({
  origin: 'https://your-project.vercel.app',
  credentials: true
}));
```

### 3. Utiliser HTTPS

- Vercel: Automatique
- Render: Automatique

## 📊 Monitoring

### Vercel

- Dashboard → Analytics
- Consultez les métriques de performance

### Render

- Dashboard → Logs
- Consultez les erreurs et performances

## 🚨 Dépannage

### Le frontend ne peut pas atteindre le backend

1. Vérifiez que le backend est en ligne
2. Vérifiez l'URL du backend dans les variables d'environnement
3. Vérifiez les CORS du backend
4. Vérifiez les logs Render

### Le formulaire de contact ne fonctionne pas

1. Ouvrez les DevTools (F12)
2. Allez à l'onglet "Network"
3. Soumettez le formulaire
4. Vérifiez la réponse de l'API

### Les images ne s'affichent pas

1. Vérifiez que les images sont dans `public/`
2. Vérifiez les chemins des images
3. Vérifiez les permissions

## 🔄 Mise à Jour du Code

### Frontend

```bash
cd frontend-nextjs
git add .
git commit -m "Update content"
git push origin main
# Vercel redéploiera automatiquement
```

### Backend

```bash
git add .
git commit -m "Update API"
git push origin main
# Render redéploiera automatiquement
```

## 📝 Fichiers Importants

### Frontend

- `frontend-nextjs/next.config.js` - Configuration Next.js
- `frontend-nextjs/.env.production` - Variables de production
- `frontend-nextjs/package.json` - Dépendances

### Backend

- `backend-server.js` - Serveur Express
- `.env` - Variables d'environnement
- `package.json` - Dépendances

## 🎉 Déploiement Réussi !

Votre application est maintenant en production :

- **Frontend:** https://your-project.vercel.app
- **Backend:** https://qhse-backend.onrender.com
- **Admin:** https://your-project.vercel.app/admin/login

## 📞 Support

- [Vercel Docs](https://vercel.com/docs)
- [Render Docs](https://render.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Express Docs](https://expressjs.com)

---

**Status:** ✅ Prêt pour la production  
**Date:** 2024  
**Version:** 1.0.0
