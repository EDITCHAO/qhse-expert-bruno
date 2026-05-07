# Portfolio QHSE - Next.js Frontend

Frontend moderne en Next.js pour le portfolio QHSE d'Etey BRUNO.

## 🚀 Démarrage Rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build pour Production

```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
frontend-nextjs/
├── pages/              # Pages Next.js
│   ├── index.js       # Page d'accueil
│   ├── admin/
│   │   ├── login.js   # Page de connexion admin
│   │   └── dashboard.js # Dashboard admin
│   ├── _app.js        # App wrapper
│   └── _document.js   # Document HTML
├── components/        # Composants React
│   ├── Header.js
│   ├── Hero.js
│   ├── About.js
│   ├── Services.js
│   ├── Projects.js
│   ├── ContactForm.js
│   └── Footer.js
├── styles/           # CSS Modules
│   ├── globals.css
│   ├── Header.module.css
│   ├── Hero.module.css
│   ├── About.module.css
│   ├── Services.module.css
│   ├── Projects.module.css
│   ├── ContactForm.module.css
│   ├── AdminLogin.module.css
│   └── AdminDashboard.module.css
├── public/           # Fichiers statiques
├── next.config.js    # Configuration Next.js
├── jsconfig.json     # Configuration JavaScript
└── package.json      # Dépendances
```

## 🔧 Configuration

### Variables d'Environnement

Créez un fichier `.env.local` :

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Pour la production (`.env.production`) :

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
```

## 📦 Dépendances

- **Next.js 14** - Framework React
- **React 18** - Bibliothèque UI
- **Axios** - Client HTTP
- **FontAwesome** - Icônes

## 🌐 Déploiement sur Vercel

### 1. Préparer le projet

```bash
git add .
git commit -m "Migrate to Next.js"
git push origin main
```

### 2. Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Sélectionnez votre repository GitHub
4. Configurez les variables d'environnement
5. Cliquez sur "Deploy"

### 3. Configurer les variables d'environnement

Dans le dashboard Vercel :
- Allez à Settings → Environment Variables
- Ajoutez `NEXT_PUBLIC_API_URL` avec l'URL de votre backend Render

## 🔐 Admin

**Identifiants par défaut :**
- Username: `admin`
- Password: `password123`

⚠️ **À changer en production !**

## 📝 Pages

- **/** - Page d'accueil
- **/admin/login** - Connexion admin
- **/admin/dashboard** - Dashboard admin (protégé)

## 🎨 Personnalisation

### Ajouter votre photo

1. Placez votre photo dans `public/images/BRUNO.jpeg`
2. Elle s'affichera automatiquement dans la section "À propos"

### Modifier les contenus

Éditez les fichiers dans `components/` pour modifier :
- Les services
- Les projets
- Les certifications
- Les statistiques

## 🚀 Scripts Disponibles

```bash
npm run dev      # Démarrer le serveur de développement
npm run build    # Compiler pour la production
npm start        # Démarrer le serveur de production
npm run lint     # Vérifier le code
npm run export   # Exporter en HTML statique
```

## 🔗 Liens Utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [React Docs](https://react.dev)

## 📞 Support

Pour toute question, consultez la documentation ou contactez le support.

---

**Status:** ✅ Prêt pour la production  
**Version:** 1.0.0  
**Date:** 2024
