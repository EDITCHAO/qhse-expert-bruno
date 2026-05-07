# 🚀 Guide de Déploiement Frontend sur Vercel

## Étape 1: Préparer le projet

### 1.1 Vérifier que tout fonctionne localement
```bash
cd frontend
npm install
npm run build
npm start
```

### 1.2 Vérifier le build
```bash
npm run build
```
Assure-toi que le dossier `build/` est créé sans erreurs.

## Étape 2: Créer un compte Vercel

1. Va sur https://vercel.com
2. Clique sur "Sign Up"
3. Connecte-toi avec GitHub (recommandé)
4. Autorise Vercel à accéder à tes repositories

## Étape 3: Préparer le repository GitHub

### 3.1 Initialiser Git (si pas déjà fait)
```bash
cd frontend
git init
git add .
git commit -m "Initial commit - QHSEPRO Frontend"
```

### 3.2 Créer un repository sur GitHub
1. Va sur https://github.com/new
2. Crée un nouveau repository: `qhsepro-frontend`
3. Suis les instructions pour pousser ton code

```bash
git remote add origin https://github.com/TON_USERNAME/qhsepro-frontend.git
git branch -M main
git push -u origin main
```

## Étape 4: Déployer sur Vercel

### 4.1 Via l'interface Vercel
1. Va sur https://vercel.com/dashboard
2. Clique sur "New Project"
3. Sélectionne ton repository `qhsepro-frontend`
4. Configure les paramètres:
   - **Framework Preset**: React
   - **Root Directory**: `frontend` (si le repo contient plusieurs dossiers)
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

### 4.2 Variables d'environnement
Ajoute les variables dans Vercel:
- `REACT_APP_API_URL`: `https://api.qhsepro.com` (ou ton URL backend)
- `REACT_APP_ENV`: `production`

### 4.3 Déployer
Clique sur "Deploy" et attends que le déploiement se termine.

## Étape 5: Configurer le domaine personnalisé

### 5.1 Ajouter un domaine
1. Va dans les paramètres du projet Vercel
2. Clique sur "Domains"
3. Ajoute ton domaine (ex: `qhsepro.com`)
4. Suis les instructions pour configurer les DNS

### 5.2 Configurer les DNS
Chez ton registraire de domaine, ajoute les enregistrements DNS fournis par Vercel.

## Étape 6: Vérifier le déploiement

1. Visite ton URL Vercel (ex: `qhsepro.vercel.app`)
2. Teste toutes les pages et fonctionnalités
3. Vérifie la responsive sur mobile
4. Teste les liens de navigation

## Étape 7: Déploiements futurs

Chaque fois que tu pousses du code sur GitHub:
```bash
git add .
git commit -m "Description des changements"
git push origin main
```

Vercel redéploiera automatiquement le site! 🎉

## Troubleshooting

### Le build échoue
- Vérifie que `npm run build` fonctionne localement
- Regarde les logs de build dans Vercel
- Assure-toi que toutes les dépendances sont dans `package.json`

### Les images ne s'affichent pas
- Assure-toi que les chemins d'images sont relatifs
- Utilise `public/` pour les images statiques
- Ou importe les images dans les composants React

### Les routes ne fonctionnent pas
- Vercel redirige automatiquement vers `index.html` (déjà configuré dans `vercel.json`)
- Assure-toi que React Router est correctement configuré

### Variables d'environnement non chargées
- Ajoute les variables dans les paramètres Vercel
- Redéploie après avoir ajouté les variables
- Utilise `REACT_APP_` comme préfixe pour les variables côté client

## Commandes utiles

```bash
# Build local
npm run build

# Tester le build localement
npm install -g serve
serve -s build

# Vérifier les dépendances
npm list

# Mettre à jour les dépendances
npm update
```

## Checklist avant déploiement

- [ ] Tout fonctionne localement
- [ ] `npm run build` réussit sans erreurs
- [ ] Pas de console errors/warnings
- [ ] Images et assets chargent correctement
- [ ] Responsive design testé sur mobile
- [ ] Tous les liens fonctionnent
- [ ] Variables d'environnement configurées
- [ ] Repository GitHub créé et poussé
- [ ] Domaine personnalisé configuré (optionnel)

## Support

- Documentation Vercel: https://vercel.com/docs
- React Deployment: https://create-react-app.dev/deployment/vercel/
- GitHub Pages: https://pages.github.com/

Bon déploiement! 🚀
