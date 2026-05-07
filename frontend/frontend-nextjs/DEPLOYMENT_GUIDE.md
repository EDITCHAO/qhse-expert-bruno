# 🚀 Guide de Déploiement - Next.js sur Vercel

## 📋 Prérequis

- ✅ Compte GitHub
- ✅ Compte Vercel
- ✅ Backend déployé sur Render
- ✅ Repository GitHub avec le code

## 🔄 Étape 1 : Préparer le Code

### 1.1 Vérifier la configuration

```bash
# Vérifier que tout fonctionne localement
npm run build
npm start
```

### 1.2 Mettre à jour les variables d'environnement

Fichier `.env.production` :

```env
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

### 1.3 Committer et pousser

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## 🌐 Étape 2 : Déployer sur Vercel

### 2.1 Créer un nouveau projet

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Cliquez sur "New Project"
3. Sélectionnez votre repository GitHub
4. Cliquez sur "Import"

### 2.2 Configurer le projet

**Build Settings :**
- Framework: Next.js (auto-détecté)
- Build Command: `next build`
- Output Directory: `.next`
- Install Command: `npm install`

### 2.3 Ajouter les variables d'environnement

1. Allez à "Environment Variables"
2. Ajoutez :
   - **Name:** `NEXT_PUBLIC_API_URL`
   - **Value:** `https://your-backend.onrender.com`

### 2.4 Déployer

Cliquez sur "Deploy" et attendez la fin du déploiement.

## ✅ Étape 3 : Vérifier le Déploiement

### 3.1 Tester le site

1. Allez sur votre URL Vercel (ex: `https://your-project.vercel.app`)
2. Testez les pages :
   - Page d'accueil
   - Formulaire de contact
   - Admin login

### 3.2 Tester l'API

```bash
# Tester la connexion au backend
curl https://your-backend.onrender.com/health
```

### 3.3 Vérifier les logs

Dans le dashboard Vercel :
- Allez à "Deployments"
- Cliquez sur le dernier déploiement
- Consultez les logs

## 🔧 Étape 4 : Configuration Avancée

### 4.1 Domaine personnalisé

1. Allez à "Settings" → "Domains"
2. Ajoutez votre domaine
3. Configurez les DNS records

### 4.2 Certificat SSL

Vercel fournit automatiquement un certificat SSL gratuit.

### 4.3 Redirection HTTP → HTTPS

Activé par défaut dans Vercel.

## 🚨 Dépannage

### Le site affiche une page blanche

1. Vérifiez les logs Vercel
2. Vérifiez que `NEXT_PUBLIC_API_URL` est correctement configurée
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

### Vérifier les performances

1. Allez à "Analytics" dans le dashboard Vercel
2. Consultez les métriques :
   - Response time
   - Requests
   - Errors

### Activer les notifications

1. Allez à "Settings" → "Notifications"
2. Configurez les alertes pour les déploiements échoués

## 🔄 Mise à Jour du Code

### Déployer une nouvelle version

```bash
# Faire les modifications
git add .
git commit -m "Update content"
git push origin main
```

Vercel redéploiera automatiquement.

## 📝 Checklist de Déploiement

- [ ] Code testé localement
- [ ] Variables d'environnement configurées
- [ ] Backend déployé sur Render
- [ ] Repository GitHub à jour
- [ ] Vercel project créé
- [ ] Domaine configuré (optionnel)
- [ ] SSL activé
- [ ] Tests en production effectués
- [ ] Monitoring activé

## 🎉 Déploiement Réussi !

Votre site est maintenant en ligne sur Vercel et prêt pour la production.

---

**URL de production:** `https://your-project.vercel.app`  
**Dashboard Vercel:** `https://vercel.com/dashboard`  
**Documentation:** `https://vercel.com/docs`
