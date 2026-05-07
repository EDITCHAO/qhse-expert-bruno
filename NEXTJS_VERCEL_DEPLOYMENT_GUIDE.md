# 🚀 Guide Complet: Déployer Next.js sur Vercel

## 🎯 Objectif

Déployer votre portfolio Next.js sur Vercel en 10 minutes!

---

## ✅ État Actuel

```
✅ Next.js Frontend          - Prêt
✅ Code sur GitHub           - Prêt
✅ Configuration Vercel      - Prêt
✅ Variables d'environnement - Prêt
```

---

## 🚀 Déploiement en 4 Étapes (10 minutes)

### Étape 1: Pousser sur GitHub (2 minutes)

```bash
# Ajouter les fichiers Next.js
git add frontend-nextjs/

# Committer
git commit -m "Préparer Next.js pour Vercel"

# Pousser
git push origin main
```

**Vérification:**
- ✅ Fichiers poussés sur GitHub
- ✅ Repository à jour

---

### Étape 2: Créer Projet Vercel (3 minutes)

#### 2.1 Allez sur Vercel
```
URL: https://vercel.com/new
```

#### 2.2 Sélectionnez le Repository
```
Repository: EDITCHAO/qhse-expert-bruno
Cliquez: Continue
```

#### 2.3 Configurez le Projet
```
Project Name: qhse-expert-bruno
Framework: Next.js (détecté automatiquement)
Root Directory: frontend-nextjs
```

#### 2.4 Ajoutez les Variables d'Environnement
```
Cliquez: Environment Variables

Variable 1:
Name: NEXT_PUBLIC_API_URL
Value: http://localhost:8000

Cliquez: Add
```

#### 2.5 Déployez
```
Cliquez: Deploy
```

**Vérification:**
- ✅ Projet créé
- ✅ Variables configurées
- ✅ Déploiement lancé

---

### Étape 3: Attendre le Déploiement (3 minutes)

```
Vercel construit votre site
    ↓
Vercel optimise les images
    ↓
Vercel déploie sur CDN global
    ↓
Vous recevez une URL
```

**Vérification:**
- ✅ Build réussi
- ✅ Déploiement réussi
- ✅ URL reçue

---

### Étape 4: Tester (2 minutes)

#### 4.1 Allez sur votre URL
```
https://qhse-expert-bruno.vercel.app
```

#### 4.2 Vérifiez les Éléments Clés
```
✅ Page s'affiche
✅ Navigation fonctionne
✅ Images se chargent
✅ Responsive design OK
✅ Formulaire visible
```

#### 4.3 Testez sur Mobile
```
Ouvrez l'URL sur votre téléphone
Vérifiez que tout s'affiche correctement
```

---

## 🎉 Résultat

**Votre site est en ligne!**

```
https://qhse-expert-bruno.vercel.app
```

**Vous pouvez:**
- ✅ Partager l'URL avec votre client
- ✅ Montrer le portfolio en direct
- ✅ Tester sur tous les appareils
- ✅ Recevoir des retours

---

## 🔄 Mises à Jour Automatiques

Chaque fois que vous poussez du code:

```bash
# Modifiez votre code
# Poussez sur GitHub
git push origin main

# Vercel détecte automatiquement
# Vercel redéploie automatiquement
# Votre site est mis à jour!
```

---

## 📊 Avantages Next.js sur Vercel

### Performance
- ✅ Image Optimization automatique
- ✅ Code Splitting automatique
- ✅ Lazy Loading automatique
- ✅ Caching intelligent

### Développement
- ✅ Hot Reload
- ✅ Fast Refresh
- ✅ API Routes intégrées
- ✅ Middleware support

### Déploiement
- ✅ Déploiement en 1 clic
- ✅ Rollback automatique
- ✅ Preview URLs
- ✅ Analytics intégrées

---

## 🐛 Dépannage

### Problème: "Build Failed"

**Vérifiez:**
1. Les logs de déploiement
2. Que `npm run build` fonctionne localement
3. Que toutes les dépendances sont installées

**Solution:**
```bash
cd frontend-nextjs
npm install
npm run build
```

### Problème: "Page Not Found"

**Vérifiez:**
1. Que le Root Directory est "frontend-nextjs"
2. Que le fichier `pages/index.js` existe
3. Que le fichier `package.json` existe

**Solution:**
```
Redéployez depuis le dashboard Vercel
```

### Problème: "Formulaire ne fonctionne pas"

**Vérifiez:**
1. Que le backend est en cours d'exécution
2. Que la variable `NEXT_PUBLIC_API_URL` est correcte
3. Les logs du navigateur (F12 → Console)

**Solution:**
```
Attendez que le backend soit déployé sur Render
Puis mettez à jour NEXT_PUBLIC_API_URL
```

---

## 📞 Support

### Besoin d'Aide?

- **Documentation Vercel:** https://vercel.com/docs
- **Documentation Next.js:** https://nextjs.org/docs
- **Support Vercel:** https://vercel.com/support

---

## ✨ Résumé

**Vous avez réussi!** 🎉

- ✅ Code poussé sur GitHub
- ✅ Projet créé sur Vercel
- ✅ Site déployé
- ✅ URL en ligne: https://qhse-expert-bruno.vercel.app

**Prochaine étape:** Déployer le backend sur Render

---

**Créé le:** 7 mai 2026
**Dernière mise à jour:** 7 mai 2026
**Statut:** ✅ Guide Complet
