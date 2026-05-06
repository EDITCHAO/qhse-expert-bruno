# 🧪 Déploiement NON-Production sur Vercel

## 📌 Qu'est-ce que c'est?

Un déploiement **NON-production** (aussi appelé Preview ou Staging) permet de:
- Tester le site avant de le mettre en production
- Avoir une URL temporaire pour chaque branche
- Vérifier que tout fonctionne correctement
- Partager avec d'autres pour feedback

---

## 🎯 Types de Déploiement

### 1. **Production** (Main)
- URL: `qhse-expert-bruno.vercel.app`
- Branche: `main`
- Environnement: Production
- Variables: Production

### 2. **Preview** (Non-Production)
- URL: `qhse-expert-bruno-preview-xyz.vercel.app`
- Branche: Toute autre branche (ex: `develop`, `feature/xyz`)
- Environnement: Staging/Development
- Variables: Development

---

## 🚀 Comment Faire un Déploiement NON-Production

### Étape 1: Créer une Branche
```bash
# Depuis le dossier frontend
git checkout -b develop
# ou
git checkout -b staging
```

### Étape 2: Faire des Modifications
```bash
# Modifie le code
# Teste localement
npm run dev
```

### Étape 3: Pousser sur GitHub
```bash
git add .
git commit -m "Changements pour test"
git push origin develop
```

### Étape 4: Vercel Crée Automatiquement une Preview
- Vercel détecte la nouvelle branche
- Crée automatiquement une URL preview
- Tu reçois une notification avec l'URL

### Étape 5: Tester la Preview
- Ouvre l'URL preview
- Teste toutes les fonctionnalités
- Partage avec d'autres pour feedback

### Étape 6: Fusionner vers Main (Production)
```bash
# Quand tout est OK
git checkout main
git merge develop
git push origin main
```

---

## 📋 Configuration Vercel pour NON-Production

### Dans Vercel Dashboard:

1. **Settings** → **Git**
2. **Production Branch**: `main`
3. **Preview Branches**: `develop`, `staging`, `feature/*`

### Variables d'Environnement par Branche:

**Production (main):**
```
REACT_APP_API_URL = https://api.qhsepro.com
REACT_APP_ENV = production
```

**Preview (develop/staging):**
```
REACT_APP_API_URL = http://localhost:8000
REACT_APP_ENV = development
```

---

## 🔄 Workflow Complet

```
┌─────────────────────────────────────────────────────┐
│           WORKFLOW DE DÉVELOPPEMENT                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│  1. Créer branche develop                          │
│     git checkout -b develop                        │
│                                                     │
│  2. Faire des modifications                        │
│     npm run dev (tester localement)                │
│                                                     │
│  3. Pousser sur GitHub                             │
│     git push origin develop                        │
│                                                     │
│  4. Vercel crée Preview automatiquement            │
│     URL: qhse-expert-bruno-preview-xyz.vercel.app │
│                                                     │
│  5. Tester la Preview                              │
│     Vérifier que tout fonctionne                   │
│                                                     │
│  6. Fusionner vers main                            │
│     git merge develop                              │
│     git push origin main                           │
│                                                     │
│  7. Vercel déploie en Production                   │
│     URL: qhse-expert-bruno.vercel.app              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 💻 Commandes Git Utiles

### Créer une branche de développement
```bash
git checkout -b develop
```

### Voir toutes les branches
```bash
git branch -a
```

### Changer de branche
```bash
git checkout develop
```

### Pousser une branche
```bash
git push origin develop
```

### Fusionner une branche
```bash
git checkout main
git merge develop
git push origin main
```

### Supprimer une branche
```bash
git branch -d develop
git push origin --delete develop
```

---

## 🔗 URLs de Déploiement

### Production
```
https://qhse-expert-bruno.vercel.app
```

### Preview (Automatique)
```
https://qhse-expert-bruno-develop.vercel.app
https://qhse-expert-bruno-feature-xyz.vercel.app
```

---

## 📊 Voir les Déploiements

1. Va sur https://vercel.com/dashboard
2. Sélectionne ton projet
3. Clique "Deployments"
4. Tu vois:
   - **Production**: Déploiements de `main`
   - **Preview**: Déploiements des autres branches

---

## ✅ Checklist NON-Production

- [ ] Branche `develop` créée
- [ ] Modifications testées localement
- [ ] Code poussé sur GitHub
- [ ] Preview créée automatiquement par Vercel
- [ ] Preview testée et validée
- [ ] Fusionné vers `main`
- [ ] Production déployée

---

## 🆘 Troubleshooting

### La Preview ne se crée pas
- Vérifie que tu as poussé sur GitHub
- Attends quelques secondes
- Regarde les logs Vercel

### Les variables ne sont pas bonnes en Preview
- Configure les variables par branche dans Vercel
- Redéploie la preview

### Je veux supprimer une Preview
- Supprime la branche sur GitHub
- Vercel supprime automatiquement la preview

---

## 💡 Bonnes Pratiques

1. **Toujours tester en Preview avant Production**
   ```bash
   git checkout -b test-feature
   # Faire des changements
   git push origin test-feature
   # Tester la preview
   # Si OK, fusionner vers main
   ```

2. **Utiliser des noms de branche clairs**
   ```bash
   git checkout -b feature/new-section
   git checkout -b fix/header-bug
   git checkout -b develop
   ```

3. **Faire des commits clairs**
   ```bash
   git commit -m "Add new contact section"
   git commit -m "Fix responsive design on mobile"
   ```

4. **Tester avant de fusionner**
   - Toujours tester la preview
   - Vérifier sur mobile
   - Vérifier les performances

---

## 📚 Résumé

| Aspect | Production | Preview |
|--------|-----------|---------|
| **Branche** | `main` | `develop`, `feature/*` |
| **URL** | `qhse-expert-bruno.vercel.app` | `qhse-expert-bruno-xyz.vercel.app` |
| **Environnement** | Production | Development |
| **Variables** | Production | Development |
| **Automatique** | Oui | Oui |

---

## 🎯 Prochaines Étapes

1. Crée une branche `develop`
2. Fais des modifications
3. Pousse sur GitHub
4. Teste la preview
5. Fusionné vers `main` quand c'est OK

**C'est le workflow professionnel!** 🚀
