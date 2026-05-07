# ⚡ Déploiement Vercel - Démarrage Rapide

## 🎯 Objectif

Déployer le frontend React sur Vercel en 10 minutes.

## 📋 Checklist Rapide

- [ ] Code testé localement
- [ ] Repository GitHub créé
- [ ] Code poussé sur GitHub
- [ ] Vercel project créé
- [ ] Variables d'environnement configurées
- [ ] Déploiement réussi

## 🚀 Étapes Rapides

### 1. Tester Localement (2 minutes)

```bash
cd frontend
npm run build
npm start
# http://localhost:3000
```

### 2. Créer Repository GitHub (3 minutes)

```bash
cd frontend
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio-qhse-frontend.git
git branch -M main
git push -u origin main
```

### 3. Déployer sur Vercel (5 minutes)

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Sélectionnez votre repository
4. Configurez :
   - **Framework:** Create React App
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
5. Ajoutez la variable d'environnement :
   - **REACT_APP_API_URL:** `https://your-backend.onrender.com`
6. Cliquez sur "Deploy"

## ✅ Vérification

1. Ouvrez votre URL Vercel
2. Testez le formulaire de contact
3. Testez l'admin login

## 📊 Résultat

- ✅ Frontend en ligne sur Vercel
- ✅ URL: `https://your-project.vercel.app`
- ✅ Prêt pour la production

## 🔗 Liens Utiles

- [Vercel Dashboard](https://vercel.com/dashboard)
- [GitHub](https://github.com)
- [Documentation Vercel](https://vercel.com/docs)

---

**Temps total:** ~10 minutes  
**Status:** ✅ Prêt à déployer
