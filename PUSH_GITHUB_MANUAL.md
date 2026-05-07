# 📤 Pousser sur GitHub - Instructions Manuelles

## 🎯 Objectif

Pousser le code du frontend sur GitHub.

## 📋 Prérequis

- ✅ Git installé
- ✅ Repository GitHub créé
- ✅ Git configuré localement

## 🚀 Étapes Manuelles

### Étape 1 : Ouvrir PowerShell ou CMD

1. Appuyez sur `Win + R`
2. Tapez `powershell` ou `cmd`
3. Appuyez sur `Entrée`

### Étape 2 : Aller dans le Dossier Frontend

```bash
cd D:\PROJET\bruno-hse\frontend
```

### Étape 3 : Vérifier le Statut Git

```bash
git status
```

Vous devriez voir les fichiers modifiés.

### Étape 4 : Ajouter les Fichiers

```bash
git add .
```

### Étape 5 : Créer un Commit

```bash
git commit -m "Update frontend - Add Vercel configuration and documentation"
```

### Étape 6 : Pousser le Code

```bash
git push -u origin main
```

## ✅ Résultat Attendu

```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Delta compression using up to 8 threads
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), XXXX bytes, done.
Total XX (delta XX), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (XX/XX), done.
To https://github.com/EDITCHAO/qhse-expert-bruno.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

## 🔍 Vérification

1. Allez sur: https://github.com/EDITCHAO/qhse-expert-bruno
2. Vérifiez que tous les fichiers sont présents
3. Vérifiez que le README s'affiche

## 📊 Fichiers Poussés

```
frontend/
├── public/
├── src/
├── package.json
├── vercel.json ✅
├── .env.production ✅
├── .vercelignore ✅
├── README.md
└── [autres fichiers...]
```

## 🆘 Dépannage

### Erreur: "fatal: not a git repository"

```bash
cd D:\PROJET\bruno-hse\frontend
git init
```

### Erreur: "fatal: remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/EDITCHAO/qhse-expert-bruno.git
```

### Erreur: "Permission denied (publickey)"

Utilisez HTTPS :
```bash
git remote set-url origin https://github.com/EDITCHAO/qhse-expert-bruno.git
```

### Erreur: "The current branch main has no upstream branch"

```bash
git push -u origin main
```

## 📝 Commandes Rapides

```bash
# Copier-coller ces commandes dans PowerShell/CMD

cd D:\PROJET\bruno-hse\frontend
git add .
git commit -m "Update frontend - Add Vercel configuration and documentation"
git push -u origin main
```

## 🎉 Prochaines Étapes

Une fois le code sur GitHub :

1. Allez sur: https://vercel.com
2. Cliquez sur "New Project"
3. Sélectionnez `qhse-expert-bruno`
4. Configurez les variables d'environnement
5. Déployez

---

**Status:** ✅ Prêt à Pousser  
**Repository:** EDITCHAO/qhse-expert-bruno  
**Prochaine Étape:** Exécuter les commandes
