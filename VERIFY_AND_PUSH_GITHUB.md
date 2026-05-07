# ✅ Vérifier et Pousser sur GitHub

## 🎯 Objectif

Vérifier que Git est correctement configuré et pousser le code sur GitHub.

## ✅ Vérification

### 1. Vérifier le Remote GitHub

```bash
cd frontend
git remote -v
```

Vous devriez voir :
```
origin  https://github.com/EDITCHAO/qhse-expert-bruno.git (fetch)
origin  https://github.com/EDITCHAO/qhse-expert-bruno.git (push)
```

### 2. Vérifier le Statut Git

```bash
git status
```

Vous devriez voir les fichiers modifiés.

### 3. Vérifier les Commits

```bash
git log
```

Vous devriez voir au moins un commit.

## 🚀 Pousser le Code

### Option 1 : Commandes Manuelles

```bash
cd frontend
git add .
git commit -m "Update frontend - Add Vercel configuration"
git push -u origin main
```

### Option 2 : Script Automatisé

Double-cliquez sur `push-to-github.bat`

## ✅ Vérification Post-Push

### 1. Vérifier sur GitHub

Allez sur: https://github.com/EDITCHAO/qhse-expert-bruno

Vous devriez voir :
- ✅ Tous les fichiers du frontend
- ✅ Le dossier `src/`
- ✅ Le dossier `public/`
- ✅ `vercel.json`
- ✅ `.env.production`
- ✅ `package.json`

### 2. Vérifier les Commits

Cliquez sur "Commits" et vérifiez que votre commit est présent.

### 3. Vérifier les Branches

Vérifiez que vous êtes sur la branche `main`.

## 📊 Résultat Attendu

```
Repository: EDITCHAO/qhse-expert-bruno
Branch: main
Files: 50+
Status: ✅ Prêt pour Vercel
```

## 🆘 Dépannage

### Erreur: "fatal: 'origin' does not appear to be a 'git' repository"

```bash
git remote add origin https://github.com/EDITCHAO/qhse-expert-bruno.git
```

### Erreur: "fatal: remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/EDITCHAO/qhse-expert-bruno.git
```

### Erreur: "Permission denied (publickey)"

Utilisez HTTPS au lieu de SSH :
```bash
git remote set-url origin https://github.com/EDITCHAO/qhse-expert-bruno.git
```

### Erreur: "fatal: The current branch main has no upstream branch"

```bash
git push -u origin main
```

## 📝 Checklist

- [ ] Remote GitHub configuré
- [ ] Fichiers ajoutés
- [ ] Commit créé
- [ ] Code poussé
- [ ] Fichiers visibles sur GitHub
- [ ] Commits visibles sur GitHub

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
**Prochaine Étape:** Déployer sur Vercel
