# ✅ Checklist Vercel - Déploiement Frontend

## 🎯 Objectif
Déployer le frontend sur Vercel en 10 minutes

---

## 📋 Avant de Commencer

- [ ] Vous avez un compte GitHub
- [ ] Le code est sur GitHub: https://github.com/EDITCHAO/qhse-expert-bruno
- [ ] Vous avez une connexion Internet
- [ ] Vous avez 10 minutes disponibles

---

## 🚀 Étape 1: Créer Compte Vercel (2 minutes)

### Actions:
- [ ] Ouvrez: https://vercel.com
- [ ] Cliquez: "Sign Up"
- [ ] Sélectionnez: "Continue with GitHub"
- [ ] Autorisez Vercel à accéder à GitHub
- [ ] Confirmez votre email (vérifiez votre boîte mail)

### Vérification:
- [ ] Vous êtes connecté à Vercel
- [ ] Vous voyez le dashboard

---

## 📋 Étape 2: Importer Repository (3 minutes)

### Actions:
- [ ] Allez sur: https://vercel.com/new
- [ ] Cliquez: "Import Git Repository"
- [ ] Entrez l'URL: `https://github.com/EDITCHAO/qhse-expert-bruno.git`
- [ ] Cliquez: "Continue"

### Vérification:
- [ ] Vercel a trouvé le repository
- [ ] Vous voyez la page de configuration

---

## ⚙️ Étape 3: Configurer Projet (3 minutes)

### Configuration de Base:
- [ ] Project Name: `qhse-expert-bruno`
- [ ] Framework Preset: **Create React App**
- [ ] Root Directory: **frontend** (⚠️ IMPORTANT!)

### Variables d'Environnement:
- [ ] Cliquez: "Environment Variables"
- [ ] Ajoutez Variable 1:
  - [ ] Name: `CI`
  - [ ] Value: `false`
  - [ ] Cliquez: "Add"
- [ ] Ajoutez Variable 2:
  - [ ] Name: `REACT_APP_API_URL`
  - [ ] Value: `http://localhost:8000`
  - [ ] Cliquez: "Add"

### Vérification:
- [ ] Toutes les variables sont ajoutées
- [ ] Root Directory est "frontend"
- [ ] Framework est "Create React App"

---

## 🚀 Étape 4: Déployer (2 minutes)

### Actions:
- [ ] Cliquez: "Deploy"
- [ ] Attendez la construction (2-5 minutes)
- [ ] Attendez le déploiement

### Vérification:
- [ ] Vous voyez: "Congratulations! Your site is live"
- [ ] Vous avez une URL: `https://qhse-expert-bruno.vercel.app`

---

## 🎉 Après le Déploiement

### Tester votre Site:
- [ ] Allez sur: https://qhse-expert-bruno.vercel.app
- [ ] Vérifiez que la page s'affiche
- [ ] Testez la navigation
- [ ] Testez sur mobile
- [ ] Vérifiez le formulaire de contact

### Partager avec le Client:
- [ ] Envoyez l'URL: https://qhse-expert-bruno.vercel.app
- [ ] Demandez des retours
- [ ] Notez les améliorations

---

## 📊 Voir les Logs (Si Problème)

### Actions:
- [ ] Allez sur: https://vercel.com/dashboard
- [ ] Cliquez: Votre projet
- [ ] Cliquez: "Deployments"
- [ ] Cliquez: Sur le déploiement
- [ ] Cliquez: "Logs"

### Vérification:
- [ ] Vous voyez les logs de construction
- [ ] Vous pouvez identifier les erreurs

---

## 🔄 Mises à Jour Futures

### Pour Mettre à Jour votre Site:
- [ ] Modifiez votre code localement
- [ ] Poussez sur GitHub: `git push`
- [ ] Vercel détecte automatiquement
- [ ] Vercel redéploie automatiquement
- [ ] Votre site est mis à jour!

---

## 🐛 Dépannage

### Si "Build Failed":
- [ ] Vérifiez les logs
- [ ] Testez localement: `npm run build`
- [ ] Vérifiez les variables d'environnement
- [ ] Redéployez

### Si "Page Not Found":
- [ ] Vérifiez que Root Directory est "frontend"
- [ ] Vérifiez que `public/index.html` existe
- [ ] Redéployez

### Si Formulaire ne Fonctionne:
- [ ] Vérifiez que le backend est en cours d'exécution
- [ ] Vérifiez la variable `REACT_APP_API_URL`
- [ ] Vérifiez les logs du navigateur (F12)

---

## 📞 Besoin d'Aide?

- [ ] Consultez: `VERCEL_STEP_BY_STEP.md`
- [ ] Consultez: `DEPLOY_VERCEL_FRONTEND.md`
- [ ] Allez sur: https://vercel.com/docs
- [ ] Contactez: https://vercel.com/support

---

## ✨ Résumé Final

### Vous Avez Réussi Si:
- ✅ Vous avez un compte Vercel
- ✅ Votre repository est importé
- ✅ Votre projet est configuré
- ✅ Votre site est en ligne
- ✅ L'URL fonctionne: https://qhse-expert-bruno.vercel.app

### Prochaines Étapes:
1. Tester le site en ligne
2. Partager avec le client
3. Déployer le backend sur Render

---

## 📝 Notes

```
Temps total: ~10 minutes
Coût: Gratuit (plan Vercel gratuit)
Domaine: qhse-expert-bruno.vercel.app
Mises à jour: Automatiques via GitHub
```

---

**Créé le:** 7 mai 2026
**Dernière mise à jour:** 7 mai 2026
**Statut:** ✅ Prêt pour Déploiement

---

## 🎯 Commencez Maintenant!

👉 **Allez sur:** https://vercel.com/new

Bonne chance! 🚀
