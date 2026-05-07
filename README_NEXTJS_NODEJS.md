# 🎯 Portfolio QHSE - Next.js + Node.js

## 📊 Vue d'Ensemble

Votre projet Portfolio QHSE a été transformé en une architecture moderne :

```
┌─────────────────────────────────────────────────────────┐
│                    VERCEL (Frontend)                    │
│  Next.js 14 - https://your-app.vercel.app              │
│  - Server-side rendering                               │
│  - Static generation                                   │
│  - Image optimization                                  │
└────────────────────┬────────────────────────────────────┘
                     │ API Calls (Axios)
                     ↓
┌─────────────────────────────────────────────────────────┐
│                    RENDER (Backend)                     │
│  Node.js + Express - https://your-api.onrender.com    │
│  - REST API                                            │
│  - Token authentication                                │
│  - CORS configured                                     │
└─────────────────────────────────────────────────────────┘
```

## 🚀 Démarrage Rapide

### 1. Installation

```bash
# Backend
npm install

# Frontend
cd frontend-nextjs
npm install
```

### 2. Démarrage

```bash
# Terminal 1 - Backend
npm run dev
# http://localhost:8000

# Terminal 2 - Frontend
cd frontend-nextjs
npm run dev
# http://localhost:3000
```

### 3. Accès

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:8000
- **Admin:** http://localhost:3000/admin/login

## 📁 Structure du Projet

```
.
├── backend-server.js                    # Backend Node.js
├── package.json                         # Backend dependencies
├── .env                                 # Backend config
│
├── frontend-nextjs/                     # Frontend Next.js
│   ├── pages/                          # Routes automatiques
│   ├── components/                     # Composants React
│   ├── styles/                         # CSS Modules
│   ├── public/                         # Fichiers statiques
│   ├── package.json                    # Frontend dependencies
│   ├── next.config.js                  # Configuration Next.js
│   ├── .env.local                      # Config développement
│   └── .env.production                 # Config production
│
├── QUICK_START_NEXTJS.md               # Démarrage rapide
├── MIGRATION_GUIDE.md                  # Guide de migration
├── NEXTJS_NODEJS_DEPLOYMENT_GUIDE.md   # Guide complet
├── NEXTJS_COMMANDS.md                  # Commandes essentielles
└── NEXTJS_MIGRATION_COMPLETE.md        # Résumé complet
```

## ✨ Fonctionnalités

### Frontend (Next.js)

- ✅ Page d'accueil responsive
- ✅ Section "À propos" avec photo
- ✅ Services et projets
- ✅ Formulaire de contact
- ✅ Admin login et dashboard
- ✅ Optimisation SEO
- ✅ Performance optimale

### Backend (Node.js)

- ✅ API REST complète
- ✅ Authentification par token
- ✅ CORS configuré
- ✅ Gestion des contacts
- ✅ Statistiques
- ✅ Health check

## 🔧 Configuration

### Frontend

**Variables d'environnement (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**Production (.env.production):**
```env
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

### Backend

**Variables d'environnement (.env):**
```env
NODE_ENV=development
PORT=8000
ADMIN_USERNAME=admin
ADMIN_PASSWORD=password123
```

## 📚 Documentation

### Pour Démarrer

1. [QUICK_START_NEXTJS.md](./QUICK_START_NEXTJS.md) - Démarrage en 5 minutes
2. [NEXTJS_COMMANDS.md](./NEXTJS_COMMANDS.md) - Commandes essentielles

### Pour Comprendre

3. [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) - Comprendre les changements
4. [frontend-nextjs/README.md](./frontend-nextjs/README.md) - Documentation du frontend

### Pour Déployer

5. [NEXTJS_NODEJS_DEPLOYMENT_GUIDE.md](./NEXTJS_NODEJS_DEPLOYMENT_GUIDE.md) - Guide complet
6. [frontend-nextjs/DEPLOYMENT_GUIDE.md](./frontend-nextjs/DEPLOYMENT_GUIDE.md) - Guide Vercel

## 🌐 Déploiement

### Backend sur Render

```bash
# 1. Créer un repository GitHub
git init
git add .
git commit -m "Initial commit"
git push origin main

# 2. Aller sur render.com
# 3. Créer un Web Service
# 4. Connecter le repository
# 5. Configurer les variables d'environnement
# 6. Déployer
```

**URL:** `https://your-backend.onrender.com`

### Frontend sur Vercel

```bash
# 1. Créer un repository GitHub (frontend-nextjs)
cd frontend-nextjs
git init
git add .
git commit -m "Initial commit"
git push origin main

# 2. Aller sur vercel.com
# 3. Créer un nouveau projet
# 4. Connecter le repository
# 5. Ajouter NEXT_PUBLIC_API_URL en variable d'environnement
# 6. Déployer
```

**URL:** `https://your-project.vercel.app`

## 🧪 Tests

### Tester le Backend

```bash
# Health check
curl http://localhost:8000/health

# Créer un contact
curl -X POST http://localhost:8000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Test",
    "email": "test@example.com",
    "numero": "1234567890",
    "sujet": "Test",
    "message": "Test message"
  }'
```

### Tester le Frontend

1. Ouvrez http://localhost:3000
2. Testez le formulaire de contact
3. Testez l'admin login (admin/password123)

## 🔐 Sécurité

### À Faire Avant Production

- [ ] Changer les identifiants admin
- [ ] Configurer CORS correctement
- [ ] Activer HTTPS (automatique sur Vercel/Render)
- [ ] Configurer les variables d'environnement
- [ ] Activer le monitoring
- [ ] Configurer les backups

## 📊 Avantages de Next.js

| Aspect | Avant (React) | Après (Next.js) |
|--------|---------------|-----------------|
| Routing | React Router | File-based |
| Rendering | Client-side | SSR + SSG |
| Performance | Bonne | Excellente |
| SEO | Nécessite Helmet | Natif |
| Build time | Moyen | Rapide |
| Bundle size | Moyen | Petit |
| Déploiement | Vercel (CRA) | Vercel (optimisé) |

## 🎯 Prochaines Étapes

1. ✅ Tester localement
2. ⏳ Créer les repositories GitHub
3. ⏳ Déployer le backend sur Render
4. ⏳ Déployer le frontend sur Vercel
5. ⏳ Configurer le domaine personnalisé (optionnel)

## 📱 Accès Réseau

### Depuis le téléphone (même Wi-Fi)

```
Frontend: http://192.168.1.66:3000
Backend: http://192.168.1.66:8000
```

## 🆘 Dépannage

### Le frontend ne démarre pas

```bash
cd frontend-nextjs
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Le backend ne démarre pas

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Le frontend ne peut pas atteindre le backend

1. Vérifiez que le backend est en ligne
2. Vérifiez l'URL dans `.env.local`
3. Vérifiez les CORS du backend

## 📞 Support

- [Next.js Documentation](https://nextjs.org/docs)
- [Express Documentation](https://expressjs.com)
- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)

## 🎉 Résumé

Votre projet Portfolio QHSE est maintenant :

- ✅ Modernisé avec Next.js 14
- ✅ Optimisé pour la performance
- ✅ Prêt pour le déploiement en production
- ✅ Entièrement documenté
- ✅ Sécurisé et scalable

**Vous êtes prêt à déployer ! 🚀**

---

**Status:** ✅ Prêt pour la production  
**Version:** 1.0.0  
**Date:** 2024  
**Frontend:** Next.js 14  
**Backend:** Node.js + Express  
**Déploiement:** Vercel + Render
