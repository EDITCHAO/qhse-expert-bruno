# 📸 Vercel - Guide Étape par Étape avec Détails

## 🎯 Objectif Final

Votre portfolio sera accessible sur: **https://qhse-expert-bruno.vercel.app**

---

## 📋 Étape 1: Créer un Compte Vercel

### 1.1 Allez sur Vercel
```
URL: https://vercel.com
```

### 1.2 Cliquez sur "Sign Up"
```
Bouton en haut à droite
```

### 1.3 Connectez-vous avec GitHub
```
Cliquez: "Continue with GitHub"
```

### 1.4 Autorisez Vercel
```
Cliquez: "Authorize Vercel"
Confirmez votre mot de passe GitHub
```

### 1.5 Confirmez votre Email
```
Vercel vous envoie un email
Cliquez sur le lien de confirmation
```

**✅ Compte Vercel créé!**

---

## 📋 Étape 2: Importer votre Repository

### 2.1 Allez sur le Dashboard Vercel
```
URL: https://vercel.com/dashboard
```

### 2.2 Cliquez sur "Add New..."
```
Bouton en haut à gauche
```

### 2.3 Sélectionnez "Project"
```
Menu déroulant
```

### 2.4 Cliquez sur "Import Git Repository"
```
Première option
```

### 2.5 Entrez l'URL du Repository
```
URL: https://github.com/EDITCHAO/qhse-expert-bruno.git

OU

Sélectionnez dans la liste si le repository est visible
```

### 2.6 Cliquez "Continue"
```
Bouton en bas
```

**✅ Repository importé!**

---

## 📋 Étape 3: Configurer le Projet

### 3.1 Configurez le Nom du Projet
```
Project Name: qhse-expert-bruno
(ou votre choix)
```

### 3.2 Sélectionnez le Framework
```
Framework Preset: Create React App
```

### 3.3 Sélectionnez le Root Directory
```
Root Directory: frontend

⚠️ IMPORTANT: Sélectionnez "frontend" et non la racine!
```

### 3.4 Ajoutez les Variables d'Environnement

Cliquez sur "Environment Variables" et ajoutez:

**Variable 1:**
```
Name: CI
Value: false
```

**Variable 2:**
```
Name: REACT_APP_API_URL
Value: http://localhost:8000
```

(Nous changerons cette URL plus tard quand le backend sera déployé)

### 3.5 Cliquez "Deploy"
```
Bouton en bas à droite
```

**✅ Configuration terminée!**

---

## 📋 Étape 4: Attendre le Déploiement

### 4.1 Vercel Construit votre Site
```
Vous verrez une barre de progression
Cela prend 2-5 minutes
```

### 4.2 Vercel Déploie
```
Une fois la construction terminée
Vercel déploie automatiquement
```

### 4.3 Succès!
```
Vous verrez: "Congratulations! Your site is live"
```

**✅ Déploiement terminé!**

---

## 🎉 Votre Site est En Ligne!

### URL de Votre Site
```
https://qhse-expert-bruno.vercel.app
```

### Partagez avec Votre Client
```
Envoyez l'URL à votre client
Il peut voir le site en direct!
```

---

## 🧪 Tester votre Déploiement

### 1. Allez sur votre URL
```
https://qhse-expert-bruno.vercel.app
```

### 2. Vérifiez les Éléments Clés
- [ ] Page d'accueil s'affiche
- [ ] Navigation fonctionne
- [ ] Images se chargent
- [ ] Responsive design OK (testez sur mobile)
- [ ] Formulaire de contact visible
- [ ] Tous les liens fonctionnent

### 3. Testez sur Mobile
```
Ouvrez l'URL sur votre téléphone
Vérifiez que tout s'affiche correctement
```

---

## 🔄 Mises à Jour Futures

### Comment Mettre à Jour votre Site?

**Méthode 1: Via GitHub (Automatique)**
```
1. Modifiez votre code localement
2. Poussez sur GitHub: git push
3. Vercel détecte automatiquement
4. Vercel redéploie automatiquement
5. Votre site est mis à jour!
```

**Méthode 2: Via Vercel Dashboard (Manuel)**
```
1. Allez sur: https://vercel.com/dashboard
2. Sélectionnez votre projet
3. Cliquez: "Redeploy"
4. Attendez la fin du déploiement
```

---

## 📊 Voir les Logs de Déploiement

### 1. Allez sur Vercel Dashboard
```
https://vercel.com/dashboard
```

### 2. Sélectionnez votre Projet
```
Cliquez sur: qhse-expert-bruno
```

### 3. Cliquez sur "Deployments"
```
Onglet en haut
```

### 4. Sélectionnez un Déploiement
```
Cliquez sur le déploiement pour voir les détails
```

### 5. Voir les Logs
```
Cliquez sur "Logs" pour voir les détails de la construction
```

---

## 🐛 Dépannage

### Problème: "Build Failed"

**Vérifiez:**
1. Les logs de déploiement (voir section ci-dessus)
2. Que `npm run build` fonctionne localement
3. Que toutes les dépendances sont installées

**Solution:**
```bash
# Localement
cd frontend
npm install
npm run build

# Si ça fonctionne localement, ça devrait fonctionner sur Vercel
```

### Problème: "Page Not Found"

**Vérifiez:**
1. Que le Root Directory est "frontend"
2. Que le fichier `frontend/public/index.html` existe
3. Que le fichier `frontend/package.json` existe

**Solution:**
```
Redéployez depuis le dashboard Vercel
```

### Problème: "Formulaire ne fonctionne pas"

**Vérifiez:**
1. Que le backend est en cours d'exécution
2. Que la variable `REACT_APP_API_URL` est correcte
3. Les logs du navigateur (F12 → Console)

**Solution:**
```
Attendez que le backend soit déployé sur Render
Puis mettez à jour REACT_APP_API_URL
```

---

## 🔗 Domaine Personnalisé (Optionnel)

Si vous avez un domaine personnalisé (ex: www.qhse-expert-bruno.com):

### 1. Allez sur Vercel Dashboard
```
https://vercel.com/dashboard
```

### 2. Sélectionnez votre Projet
```
Cliquez sur: qhse-expert-bruno
```

### 3. Allez dans Settings
```
Cliquez sur: Settings
```

### 4. Cliquez sur "Domains"
```
Menu à gauche
```

### 5. Ajoutez votre Domaine
```
Entrez: www.qhse-expert-bruno.com
Cliquez: Add
```

### 6. Configurez les DNS
```
Vercel vous donnera les enregistrements DNS
Allez chez votre registraire de domaine
Ajoutez les enregistrements DNS
Attendez la propagation (24-48h)
```

---

## 📞 Support

### Besoin d'Aide?

- **Documentation Vercel:** https://vercel.com/docs
- **Support Vercel:** https://vercel.com/support
- **Community:** https://github.com/vercel/vercel/discussions

---

## ✨ Résumé

**Vous avez réussi!** 🎉

- ✅ Compte Vercel créé
- ✅ Repository importé
- ✅ Projet configuré
- ✅ Site déployé
- ✅ URL en ligne: https://qhse-expert-bruno.vercel.app

**Prochaine étape:** Déployer le backend sur Render

---

**Créé le:** 7 mai 2026
**Dernière mise à jour:** 7 mai 2026
**Statut:** ✅ Guide Complet
