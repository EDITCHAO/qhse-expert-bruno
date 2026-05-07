# 🚀 Déploiement Frontend sur Vercel - Guide Complet

## 📋 Prérequis

- ✅ Compte GitHub
- ✅ Compte Vercel
- ✅ Repository GitHub avec le code du frontend
- ✅ Backend déployé sur Render (optionnel pour maintenant)

## 🔧 Étape 1 : Préparer le Code

### 1.1 Vérifier la Structure

```
frontend/
├── public/
├── src/
├── package.json
├── .env.production
├── vercel.json
└── .vercelignore
```

### 1.2 Vérifier le Build Localement

```bash
cd frontend
npm run build
```

Vous devriez voir un dossier `build/` créé.

### 1.3 Vérifier que tout fonctionne

```bash
npm start
# http://localhost:3000
```

## 📤 Étape 2 : Créer un Repository GitHub

### 2.1 Initialiser Git (si pas déjà fait)

```bash
cd frontend
git init
git add .
git commit -m "Initial commit - Frontend React"
```

### 2.2 Créer un Repository sur GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur "New repository"
3. Nommez-le : `portfolio-qhse-frontend`
4. Cliquez sur "Create repository"

### 2.3 Pousser le Code

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-qhse-frontend.git
git branch -M main
git push -u origin main
```

## 🌐 Étape 3 : Déployer sur Vercel

### 3.1 Connecter Vercel à GitHub

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "Sign Up" ou "Log In"
3. Cliquez sur "Continue with GitHub"
4. Autorisez Vercel à accéder à vos repositories

### 3.2 Créer un Nouveau Projet

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Cliquez sur "New Project"
3. Sélectionnez votre repository `portfolio-qhse-frontend`
4. Cliquez sur "Import"

### 3.3 Configurer le Projet

**Build Settings:**
- **Framework Preset:** Create React App
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm install`

**Environment Variables:**
- **Name:** `REACT_APP_API_URL`
- **Value:** `https://your-backend.onrender.com` (ou `http://localhost:8000` pour dev)

### 3.4 Déployer

Cliquez sur "Deploy" et attendez la fin du déploiement.

**Votre URL:** `https://your-project.vercel.app`

## ✅ Vérification Post-Déploiement

### 4.1 Tester le Site

1. Ouvrez votre URL Vercel
2. Testez les pages :
   - Page d'accueil
   - Formulaire de contact
   - Admin login

### 4.2 Vérifier les Logs

1. Allez à "Deployments"
2. Cliquez sur le dernier déploiement
3. Consultez les logs

### 4.3 Tester le Formulaire

1. Remplissez le formulaire de contact
2. Vérifiez que le message est envoyé au backend

## 🔧 Configuration Avancée

### 5.1 Domaine Personnalisé

1. Allez à "Settings" → "Domains"
2. Cliquez sur "Add Domain"
3. Entrez votre domaine
4. Configurez les DNS records

### 5.2 Certificat SSL

Vercel fournit automatiquement un certificat SSL gratuit.

### 5.3 Redirection HTTP → HTTPS

Activé par défaut dans Vercel.

## 🚨 Dépannage

### Le site affiche une page blanche

1. Vérifiez les logs Vercel
2. Vérifiez que `REACT_APP_API_URL` est correctement configurée
3. Vérifiez que le backend est accessible

### Le formulaire de contact ne fonctionne pas

1. Vérifiez que le backend est en ligne
2. Vérifiez l'URL du backend dans les variables d'environnement
3. Vérifiez les CORS du backend

### Les images ne s'affichent pas

1. Vérifiez que les images sont dans `public/`
2. Vérifiez les chemins des images
3. Vérifiez les permissions des fichiers

## 📊 Monitoring

### Vérifier les Performances

1. Allez à "Analytics" dans le dashboard Vercel
2. Consultez les métriques :
   - Response time
   - Requests
   - Errors

### Activer les Notifications

1. Allez à "Settings" → "Notifications"
2. Configurez les alertes pour les déploiements échoués

## 🔄 Mise à Jour du Code

### Déployer une Nouvelle Version

```bash
# Faire les modifications
git add .
git commit -m "Update content"
git push origin main
```

Vercel redéploiera automatiquement.

## 📝 Checklist de Déploiement

- [ ] Code testé localement
- [ ] Build fonctionne (`npm run build`)
- [ ] Repository GitHub créé
- [ ] Code poussé sur GitHub
- [ ] Vercel project créé
- [ ] Variables d'environnement configurées
- [ ] Déploiement réussi
- [ ] Site accessible
- [ ] Formulaire fonctionne
- [ ] Admin login fonctionne

## 🎉 Déploiement Réussi !

Votre frontend est maintenant en ligne sur Vercel et prêt pour la production.

---

**URL de production:** `https://your-project.vercel.app`  
**Dashboard Vercel:** `https://vercel.com/dashboard`  
**Documentation:** `https://vercel.com/docs`
