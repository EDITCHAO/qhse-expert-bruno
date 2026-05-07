# 📝 Commandes Essentielles - Next.js + Node.js

## 🚀 Démarrage

### Backend

```bash
# Démarrage en développement
npm run dev

# Démarrage en production
npm start

# Build
npm run build
```

### Frontend

```bash
cd frontend-nextjs

# Démarrage en développement
npm run dev

# Build
npm run build

# Démarrage en production
npm start

# Linting
npm run lint
```

## 📦 Installation

### Backend

```bash
npm install
```

### Frontend

```bash
cd frontend-nextjs
npm install
```

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

# Admin login
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"password123"}'
```

### Tester le Frontend

1. Ouvrez http://localhost:3000
2. Testez les pages
3. Testez le formulaire
4. Testez l'admin login

## 🔧 Configuration

### Variables d'Environnement

**Frontend (.env.local):**
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**Backend (.env):**
```bash
NODE_ENV=development
PORT=8000
ADMIN_USERNAME=admin
ADMIN_PASSWORD=password123
```

## 🧹 Nettoyage

### Supprimer les dépendances

```bash
# Backend
rm -rf node_modules package-lock.json

# Frontend
cd frontend-nextjs
rm -rf node_modules package-lock.json
```

### Réinstaller

```bash
# Backend
npm install

# Frontend
cd frontend-nextjs
npm install
```

## 📊 Vérification

### Vérifier la build

```bash
# Backend
npm run build

# Frontend
cd frontend-nextjs
npm run build
```

### Vérifier les dépendances

```bash
# Backend
npm audit

# Frontend
cd frontend-nextjs
npm audit
```

## 🚀 Déploiement

### Préparer pour Vercel

```bash
cd frontend-nextjs
npm run build
npm start
```

### Préparer pour Render

```bash
npm run build
npm start
```

## 📱 Accès Réseau

### Depuis le téléphone

```
Frontend: http://192.168.1.66:3000
Backend: http://192.168.1.66:8000
```

## 🔄 Git

### Committer le code

```bash
git add .
git commit -m "Your message"
git push origin main
```

### Créer une branche

```bash
git checkout -b feature/your-feature
git push origin feature/your-feature
```

## 🆘 Dépannage

### Port déjà utilisé

```bash
# Trouver le processus
netstat -ano | findstr :3000
netstat -ano | findstr :8000

# Tuer le processus
taskkill /PID <PID> /F
```

### Erreur de dépendances

```bash
# Réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Erreur de build

```bash
# Vérifier les erreurs
npm run build

# Vérifier le linting
npm run lint
```

## 📚 Documentation

- [QUICK_START_NEXTJS.md](./QUICK_START_NEXTJS.md) - Démarrage rapide
- [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) - Guide de migration
- [NEXTJS_NODEJS_DEPLOYMENT_GUIDE.md](./NEXTJS_NODEJS_DEPLOYMENT_GUIDE.md) - Guide complet
- [frontend-nextjs/README.md](./frontend-nextjs/README.md) - Documentation frontend

## 🎯 Workflow Typique

### Développement

```bash
# 1. Démarrer le backend
npm run dev

# 2. Dans un autre terminal, démarrer le frontend
cd frontend-nextjs
npm run dev

# 3. Ouvrir http://localhost:3000
# 4. Faire les modifications
# 5. Tester
```

### Avant de Déployer

```bash
# 1. Vérifier la build
npm run build
cd frontend-nextjs
npm run build

# 2. Vérifier le linting
npm run lint
cd ../frontend-nextjs
npm run lint

# 3. Committer
git add .
git commit -m "Ready for deployment"
git push origin main
```

## 📊 Ports

| Service | Port | URL |
|---------|------|-----|
| Backend | 8000 | http://localhost:8000 |
| Frontend | 3000 | http://localhost:3000 |
| Admin | 3000 | http://localhost:3000/admin/login |

## 🔐 Identifiants

**Admin (par défaut):**
- Username: `admin`
- Password: `password123`

⚠️ À changer en production !

## 📞 Support

- [Next.js Docs](https://nextjs.org/docs)
- [Express Docs](https://expressjs.com)
- [npm Docs](https://docs.npmjs.com)

---

**Version:** 1.0.0  
**Date:** 2024  
**Status:** ✅ Prêt à l'emploi
