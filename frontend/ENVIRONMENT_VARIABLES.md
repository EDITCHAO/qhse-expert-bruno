# 🔧 Variables d'Environnement - QHSEPRO Frontend

## 📋 Vue d'ensemble

Les variables d'environnement permettent de configurer différents paramètres selon l'environnement (développement, production, etc.).

---

## 🏠 Environnement Local (Développement)

### Fichier: `.env.development`

```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_ENV=development
REACT_APP_DEBUG=true
```

**Utilisation:**
```bash
npm run dev
```

---

## 🌐 Environnement Production (Vercel)

### Fichier: `.env.production`

```env
REACT_APP_API_URL=https://api.qhsepro.com
REACT_APP_ENV=production
REACT_APP_DEBUG=false
```

---

## 📝 Variables Disponibles

| Variable | Type | Exemple | Description |
|----------|------|---------|-------------|
| `REACT_APP_API_URL` | String | `https://api.qhsepro.com` | URL de l'API backend |
| `REACT_APP_ENV` | String | `production` | Environnement actuel |
| `REACT_APP_DEBUG` | Boolean | `false` | Mode debug activé/désactivé |

---

## 🚀 Configuration sur Vercel

### Étape 1: Accéder aux paramètres
1. Va sur https://vercel.com/dashboard
2. Sélectionne ton projet `QHSE-EXPERT-bruno-`
3. Clique sur **Settings**

### Étape 2: Ajouter les variables
1. Va dans **Environment Variables**
2. Clique sur **Add New**
3. Ajoute chaque variable:

#### Variable 1: API URL
```
Name: REACT_APP_API_URL
Value: https://api.qhsepro.com
Environments: Production
```

#### Variable 2: Environment
```
Name: REACT_APP_ENV
Value: production
Environments: Production
```

#### Variable 3: Debug
```
Name: REACT_APP_DEBUG
Value: false
Environments: Production
```

### Étape 3: Redéployer
1. Va dans **Deployments**
2. Clique sur le dernier déploiement
3. Clique **Redeploy**

---

## 💻 Utilisation dans le Code

### Accéder aux variables

```javascript
// Dans n'importe quel composant React
const apiUrl = process.env.REACT_APP_API_URL;
const env = process.env.REACT_APP_ENV;
const debug = process.env.REACT_APP_DEBUG === 'true';

console.log(`API URL: ${apiUrl}`);
console.log(`Environment: ${env}`);
console.log(`Debug mode: ${debug}`);
```

### Exemple avec Axios

```javascript
// src/api/client.js
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const client = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default client;
```

### Exemple avec conditions

```javascript
// Afficher les logs seulement en développement
if (process.env.REACT_APP_ENV === 'development') {
  console.log('Mode développement activé');
}

// Utiliser une URL différente selon l'environnement
const apiUrl = process.env.REACT_APP_ENV === 'production'
  ? 'https://api.qhsepro.com'
  : 'http://localhost:8000';
```

---

## ⚠️ Règles Importantes

### 1. Préfixe REACT_APP_
- **Toutes les variables doivent commencer par `REACT_APP_`**
- Les variables sans ce préfixe ne seront pas accessibles côté client
- Exemple: ✅ `REACT_APP_API_URL` | ❌ `API_URL`

### 2. Pas de Secrets
- **Ne mets JAMAIS de secrets (tokens, clés API) dans les variables côté client**
- Les variables sont visibles dans le code source
- Utilise un backend pour les secrets

### 3. Redéploiement
- **Les variables ne sont chargées qu'au moment du build**
- Après avoir modifié les variables, **redéploie le projet**
- Les changements ne sont pas appliqués automatiquement

### 4. Fichiers .env
- **Ne commite JAMAIS les fichiers `.env` sur GitHub**
- Ils sont déjà dans `.gitignore`
- Configure les variables directement dans Vercel

---

## 🔄 Workflow Complet

### Développement Local
```bash
# 1. Créer/modifier .env.development
REACT_APP_API_URL=http://localhost:8000
REACT_APP_ENV=development

# 2. Lancer le serveur de développement
npm run dev

# 3. Les variables sont automatiquement chargées
```

### Production (Vercel)
```bash
# 1. Configurer les variables dans Vercel Dashboard
# Settings → Environment Variables

# 2. Pousser le code sur GitHub
git push origin main

# 3. Vercel redéploie automatiquement
# Les variables sont chargées au moment du build
```

---

## 🧪 Vérifier les Variables

### Dans le navigateur
```javascript
// Ouvre la console du navigateur (F12)
console.log(process.env.REACT_APP_API_URL);
console.log(process.env.REACT_APP_ENV);
```

### Dans le build
```bash
# Voir toutes les variables disponibles
npm run build

# Vérifier le fichier build/index.html
# Les variables sont injectées dans le HTML
```

---

## 📚 Ressources

- [Create React App - Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [Vercel - Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [React - process.env](https://react.dev/reference/react/use)

---

## ✅ Checklist

- [ ] Fichier `.env.development` créé localement
- [ ] Fichier `.env.production` créé localement
- [ ] Variables configurées dans Vercel Dashboard
- [ ] Projet redéployé après ajout des variables
- [ ] Variables testées dans le navigateur
- [ ] Pas de secrets dans les variables
- [ ] Fichiers `.env` dans `.gitignore`

---

## 🆘 Troubleshooting

### Les variables ne se chargent pas
- Vérifie que le nom commence par `REACT_APP_`
- Redéploie le projet après modification
- Vide le cache du navigateur (Ctrl+Shift+Delete)

### Les variables sont undefined
- Assure-toi que les variables sont configurées dans Vercel
- Vérifie l'orthographe exacte
- Redéploie le projet

### Les variables ne changent pas après modification
- Les variables ne sont chargées qu'au build
- Redéploie le projet pour appliquer les changements
- Attends que le déploiement soit terminé

---

## 📞 Support

Pour plus d'aide:
- Documentation Vercel: https://vercel.com/docs
- Create React App: https://create-react-app.dev
- Stack Overflow: Tag `react-environment-variables`
