# 🔧 Instructions pour Corriger la Structure

## 🎯 Objectif

Avoir **UN SEUL FRONTEND** (Next.js) et **UN SEUL BACKEND** (Node.js)

---

## 📋 Problème Actuel

```
frontend/                    ← Ancien React (à supprimer)
  └── frontend-nextjs/       ← Next.js (à extraire)
frontend-nextjs/             ← Next.js (à supprimer après extraction)
backend/                     ← Vide (à supprimer)
backend-server.js            ← Node.js (à garder)
```

---

## ✅ Solution

### Étape 1: Supprimer les Dossiers Inutiles

```bash
# Supprimer le frontend React
git rm -r frontend

# Supprimer le dossier backend vide
git rm -r backend

# Supprimer le dossier frontend-nextjs (on va le renommer)
git rm -r frontend-nextjs

# Committer
git commit -m "Nettoyer: supprimer frontends et backends inutiles"
git push origin main
```

---

### Étape 2: Ajouter le Frontend Next.js Propre

Créer un nouveau dossier `frontend` avec la structure Next.js:

```bash
# Créer le dossier frontend
mkdir frontend

# Copier les fichiers Next.js
# (À faire manuellement ou via script)

# Ajouter à git
git add frontend/
git commit -m "Ajouter frontend Next.js propre"
git push origin main
```

---

## 📁 Structure Finale

```
bruno-hse/
├── frontend/                    ← Next.js (SEUL)
│   ├── pages/
│   ├── components/
│   ├── styles/
│   ├── public/
│   ├── package.json
│   ├── next.config.js
│   ├── vercel.json
│   └── .env.local
│
├── backend-server.js            ← Node.js (SEUL)
├── package.json
├── .env
└── Documentation/
```

---

## 🚀 Après le Nettoyage

### Déployer sur Vercel
```
1. Allez sur: https://vercel.com/new
2. Sélectionnez: EDITCHAO/qhse-expert-bruno
3. Framework: Next.js
4. Root Directory: frontend
5. Deploy
```

### Déployer sur Render
```
1. Allez sur: https://render.com
2. Sélectionnez: EDITCHAO/qhse-expert-bruno
3. Main File: backend-server.js
4. Deploy
```

---

## ✨ Résumé

**Avant:** 2 frontends + 2 backends + fichiers inutiles
**Après:** 1 frontend + 1 backend + code propre

---

**Créé le:** 7 mai 2026
**Statut:** ✅ INSTRUCTIONS PRÊTES
