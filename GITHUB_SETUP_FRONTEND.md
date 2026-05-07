# 📤 Configuration GitHub - Frontend

## 🎯 Objectif

Créer un repository GitHub pour le frontend et le pousser.

## 📋 Prérequis

- ✅ Compte GitHub créé
- ✅ Git installé
- ✅ Code du frontend prêt

## 🔧 Étapes

### 1. Initialiser Git Localement

```bash
cd frontend

# Initialiser le repository
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Portfolio QHSE Frontend"
```

### 2. Créer un Repository sur GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur le "+" en haut à droite
3. Sélectionnez "New repository"
4. Configurez :
   - **Repository name:** `portfolio-qhse-frontend`
   - **Description:** Portfolio QHSE - Frontend React
   - **Public:** Oui (pour Vercel)
   - **Initialize with README:** Non (vous en avez déjà un)
5. Cliquez sur "Create repository"

### 3. Connecter le Repository Local à GitHub

```bash
# Ajouter le remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio-qhse-frontend.git

# Renommer la branche en main
git branch -M main

# Pousser le code
git push -u origin main
```

### 4. Vérifier sur GitHub

1. Allez sur votre repository GitHub
2. Vérifiez que tous les fichiers sont présents
3. Vérifiez que le README s'affiche

## 📝 Fichiers Importants

```
frontend/
├── public/
│   └── images/
│       └── BRUNO.jpeg
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
├── package.json
├── .env.production
├── vercel.json
├── .vercelignore
└── README.md
```

## 🔄 Commandes Git Utiles

```bash
# Voir le statut
git status

# Ajouter les fichiers
git add .

# Créer un commit
git commit -m "Your message"

# Pousser le code
git push origin main

# Voir l'historique
git log

# Créer une branche
git checkout -b feature/your-feature
git push origin feature/your-feature
```

## 🎯 Prochaines Étapes

1. ✅ Repository GitHub créé
2. ⏳ Connecter à Vercel
3. ⏳ Déployer

---

**Status:** ✅ Prêt pour Vercel
