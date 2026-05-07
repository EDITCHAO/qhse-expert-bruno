# 🚀 Déployer le Frontend sur Vercel - Guide Complet

## 📊 Vue d'Ensemble

Nous allons déployer votre portfolio QHSE sur Vercel en 10 minutes!

**Résultat:** Votre site sera accessible publiquement sur une URL Vercel

---

## ✅ Prérequis

- ✅ Repository GitHub: https://github.com/EDITCHAO/qhse-expert-bruno
- ✅ Code frontend prêt
- ✅ Compte Vercel (gratuit)

---

## 🎯 Étapes de Déploiement

### Étape 1: Créer un Compte Vercel (2 minutes)

1. **Allez sur:** https://vercel.com
2. **Cliquez:** "Sign Up"
3. **Connectez-vous avec GitHub:**
   - Cliquez: "Continue with GitHub"
   - Autorisez Vercel à accéder à vos repositories
4. **Confirmez votre email**

---

### Étape 2: Importer le Repository (3 minutes)

1. **Allez sur:** https://vercel.com/new
2. **Sélectionnez:** "Import Git Repository"
3. **Entrez l'URL du repository:**
   ```
   https://github.com/EDITCHAO/qhse-expert-bruno.git
   ```
4. **Cliquez:** "Continue"

---

### Étape 3: Configurer le Projet (3 minutes)

#### Configuration du Projet:

1. **Project Name:** `qhse-expert-bruno` (ou votre choix)
2. **Framework Preset:** Sélectionnez **"Create React App"**
3. **Root Directory:** Sélectionnez **"frontend"**

#### Variables d'Environnement:

Cliquez sur "Environment Variables" et ajoutez:

```
CI = false
REACT_APP_API_URL = http://localhost:8000
```

(Nous changerons l'URL du backend plus tard)

---

### Étape 4: Déployer (2 minutes)

1. **Cliquez:** "Deploy"
2. **Attendez** que Vercel construise et déploie votre site
3. **Vous verrez:** "Congratulations! Your site is live"

---

## 🎉 Résultat

Après le déploiement, vous recevrez:

- ✅ **URL Vercel:** `https://qhse-expert-bruno.vercel.app`
- ✅ **Domaine personnalisé:** (optionnel)
- ✅ **Certificat SSL:** Automatique
- ✅ **CDN Global:** Automatique

---

## 📱 Tester le Déploiement

1. **Allez sur:** https://qhse-expert-bruno.vercel.app
2. **Vérifiez:**
   - ✅ Page d'accueil s'affiche
   - ✅ Navigation fonctionne
   - ✅ Responsive design OK
   - ✅ Formulaire de contact visible

---

## 🔗 Domaine Personnalisé (Optionnel)

Si vous avez un domaine personnalisé:

1. **Allez sur:** Vercel Dashboard → Votre Projet → Settings
2. **Cliquez:** "Domains"
3. **Ajoutez votre domaine:** `www.qhse-expert-bruno.com`
4. **Configurez les DNS** selon les instructions Vercel

---

## 🔄 Mises à Jour Futures

Chaque fois que vous poussez du code sur GitHub:

1. **Vercel détecte** automatiquement les changements
2. **Vercel reconstruit** votre site
3. **Vercel redéploie** automatiquement

**Aucune action manuelle requise!** 🎉

---

## 📊 Monitoring et Logs

### Voir les Logs de Déploiement:

1. **Allez sur:** Vercel Dashboard
2. **Sélectionnez:** Votre projet
3. **Cliquez:** "Deployments"
4. **Cliquez:** Sur le déploiement pour voir les logs

### Voir les Erreurs:

1. **Allez sur:** Vercel Dashboard
2. **Cliquez:** "Functions" ou "Logs"
3. **Vérifiez** les erreurs en temps réel

---

## ⚙️ Configuration Avancée

### Ajouter des Variables d'Environnement:

1. **Allez sur:** Settings → Environment Variables
2. **Ajoutez:** Clé et Valeur
3. **Cliquez:** "Save"
4. **Redéployez** pour appliquer

### Configurer les Redirects:

Créez un fichier `vercel.json` à la racine:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app",
  "env": {
    "CI": "false"
  },
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🐛 Dépannage

### Problème: "Build Failed"

**Solution:**
1. Vérifiez les logs de déploiement
2. Vérifiez que `npm run build` fonctionne localement
3. Vérifiez les variables d'environnement

### Problème: "Page Not Found"

**Solution:**
1. Vérifiez que le Root Directory est "frontend"
2. Vérifiez que le fichier `public/index.html` existe
3. Redéployez

### Problème: "Formulaire ne fonctionne pas"

**Solution:**
1. Vérifiez que le backend est en cours d'exécution
2. Vérifiez la variable `REACT_APP_API_URL`
3. Vérifiez les logs du navigateur (F12)

---

## 📞 Support Vercel

- **Documentation:** https://vercel.com/docs
- **Support:** https://vercel.com/support
- **Community:** https://github.com/vercel/vercel/discussions

---

## ✨ Résumé

**Temps total:** ~10 minutes

**Étapes:**
1. ✅ Créer compte Vercel (2 min)
2. ✅ Importer repository (3 min)
3. ✅ Configurer projet (3 min)
4. ✅ Déployer (2 min)

**Résultat:** Site en ligne sur Vercel! 🎉

---

**Créé le:** 7 mai 2026
**Dernière mise à jour:** 7 mai 2026
**Statut:** ✅ Guide Complet
