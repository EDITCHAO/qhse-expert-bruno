# ⚙️ Commandes Vercel - Configuration Simple

## 📋 Les 4 Commandes à Mettre dans Vercel

### 1️⃣ **INSTALL COMMAND** (Commande d'Installation)
```
npm install
```
**Qu'est-ce que c'est?** Installe toutes les dépendances du projet

---

### 2️⃣ **BUILD COMMAND** (Commande de Build)
```
npm run build
```
**Qu'est-ce que c'est?** Crée la version optimisée pour production

---

### 3️⃣ **OUTPUT DIRECTORY** (Dossier de Sortie)
```
build
```
**Qu'est-ce que c'est?** Le dossier où Vercel trouvera les fichiers à déployer

---

### 4️⃣ **DEVELOPMENT COMMAND** (Commande de Développement)
```
npm run dev
```
**Qu'est-ce que c'est?** Lance le serveur de développement local

---

## 🎯 Résumé Visuel

```
┌─────────────────────────────────────────┐
│         CONFIGURATION VERCEL            │
├─────────────────────────────────────────┤
│ Framework Preset:    React              │
│ Root Directory:      frontend (ou .)    │
│ Install Command:     npm install        │
│ Build Command:       npm run build      │
│ Output Directory:    build              │
│ Development Command: npm run dev        │
└─────────────────────────────────────────┘
```

---

## 📝 Étapes pour Configurer sur Vercel

### Étape 1: Créer le Projet
1. Va sur https://vercel.com/dashboard
2. Clique "New Project"
3. Sélectionne ton repository `QHSE-EXPERT-bruno-`

### Étape 2: Configurer les Commandes
Vercel va te demander:

**Framework Preset:** 
- Sélectionne **React**

**Root Directory:**
- Laisse vide (ou mets `frontend` si le repo contient plusieurs dossiers)

**Install Command:**
```
npm install
```

**Build Command:**
```
npm run build
```

**Output Directory:**
```
build
```

### Étape 3: Ajouter les Variables d'Environnement
1. Clique "Environment Variables"
2. Ajoute:
   - `REACT_APP_API_URL` = `https://api.qhsepro.com`
   - `REACT_APP_ENV` = `production`

### Étape 4: Déployer
1. Clique "Deploy"
2. Attends que le déploiement se termine
3. Ton site est en ligne! 🎉

---

## 🔍 Explication des Commandes

### `npm install`
```bash
# Installe toutes les dépendances listées dans package.json
# Crée le dossier node_modules
# Génère package-lock.json
```

### `npm run build`
```bash
# Compile le code React
# Optimise les fichiers
# Crée le dossier build/ avec les fichiers prêts pour production
# Minifie le CSS et JavaScript
```

### `build` (Output Directory)
```bash
# C'est le dossier créé par "npm run build"
# Contient:
#   - index.html (page principale)
#   - static/js/ (fichiers JavaScript)
#   - static/css/ (fichiers CSS)
#   - static/media/ (images et assets)
```

### `npm run dev`
```bash
# Lance le serveur de développement local
# Accessible à http://localhost:3000
# Recharge automatiquement quand tu modifies le code
```

---

## ✅ Checklist Vercel

- [ ] Repository GitHub créé et poussé
- [ ] Compte Vercel créé
- [ ] Projet importé depuis GitHub
- [ ] Install Command: `npm install`
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `build`
- [ ] Development Command: `npm run dev`
- [ ] Variables d'environnement ajoutées
- [ ] Projet déployé
- [ ] Site accessible en ligne

---

## 🚀 Après le Déploiement

### Pour mettre à jour le site:
```bash
# 1. Modifie le code localement
# 2. Pousse sur GitHub
git add .
git commit -m "Description des changements"
git push origin main

# 3. Vercel redéploie automatiquement!
```

### Pour voir les logs:
1. Va sur https://vercel.com/dashboard
2. Sélectionne ton projet
3. Clique "Deployments"
4. Clique sur un déploiement pour voir les logs

---

## 🆘 Troubleshooting

### Le build échoue
- Vérifie que `npm run build` fonctionne localement
- Regarde les logs dans Vercel
- Assure-toi que toutes les dépendances sont dans package.json

### Le site ne s'affiche pas
- Vérifie que Output Directory est `build`
- Vérifie que le build a réussi
- Vide le cache du navigateur

### Les variables d'environnement ne se chargent pas
- Redéploie après avoir ajouté les variables
- Vérifie que les noms commencent par `REACT_APP_`
- Attends que le redéploiement soit terminé

---

## 📚 Fichiers Importants

```
frontend/
├── package.json          ← Contient les scripts (install, build, dev)
├── vercel.json          ← Configuration Vercel
├── .env.production      ← Variables d'environnement production
├── .vercelignore        ← Fichiers à ignorer
├── public/              ← Fichiers statiques
├── src/                 ← Code source React
└── build/               ← Créé par "npm run build" (à déployer)
```

---

## 💡 Conseils

1. **Teste localement d'abord:**
   ```bash
   npm run build
   npm run serve
   ```

2. **Vérifie le build:**
   ```bash
   npm run build
   # Regarde le dossier build/ créé
   ```

3. **Utilise les logs Vercel:**
   - Ils te montrent exactement ce qui s'est passé
   - Très utiles pour déboguer

4. **Redéploie si tu changes les variables:**
   - Les variables ne sont chargées qu'au build
   - Redéploie pour appliquer les changements

---

## 🎯 Résumé Final

| Commande | Valeur | Explication |
|----------|--------|-------------|
| Install | `npm install` | Installe les dépendances |
| Build | `npm run build` | Crée le dossier build/ |
| Output | `build` | Dossier à déployer |
| Dev | `npm run dev` | Serveur local |

**C'est tout ce que tu dois savoir!** 🚀
