# 🚀 Démarrage Rapide - Next.js + Node.js

## 📦 Installation

### 1. Backend (Node.js)

```bash
# Le backend est déjà configuré
npm install
npm run dev
# http://localhost:8000
```

### 2. Frontend (Next.js)

```bash
cd frontend-nextjs
npm install
npm run dev
# http://localhost:3000
```

## ✅ Vérification

### Backend

```bash
curl http://localhost:8000/health
# Réponse: {"status":"ok"}
```

### Frontend

Ouvrez http://localhost:3000 dans votre navigateur.

## 🧪 Tests

### Tester le formulaire de contact

1. Allez sur http://localhost:3000
2. Remplissez le formulaire
3. Cliquez sur "Envoyer"
4. Vous devriez voir un message de succès

### Tester l'admin

1. Allez sur http://localhost:3000/admin/login
2. Entrez :
   - Username: `admin`
   - Password: `password123`
3. Vous devriez être redirigé vers le dashboard

## 📱 Accès depuis le téléphone

**Adresse IP:** 192.168.1.66

- Frontend: http://192.168.1.66:3000
- Backend: http://192.168.1.66:8000

## 🔧 Configuration

### Variables d'Environnement

**Frontend (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**Backend (.env):**
```env
NODE_ENV=development
PORT=8000
ADMIN_USERNAME=admin
ADMIN_PASSWORD=password123
```

## 📁 Structure

```
.
├── backend-server.js          # Backend Node.js
├── package.json               # Backend dependencies
├── frontend-nextjs/           # Frontend Next.js
│   ├── pages/
│   ├── components/
│   ├── styles/
│   ├── public/
│   └── package.json
└── NEXTJS_NODEJS_DEPLOYMENT_GUIDE.md
```

## 🚀 Déploiement

### Frontend sur Vercel

```bash
cd frontend-nextjs
git push origin main
# Vercel redéploiera automatiquement
```

### Backend sur Render

```bash
git push origin main
# Render redéploiera automatiquement
```

## 📚 Documentation

- [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) - Guide de migration React → Next.js
- [NEXTJS_NODEJS_DEPLOYMENT_GUIDE.md](./NEXTJS_NODEJS_DEPLOYMENT_GUIDE.md) - Guide complet de déploiement
- [frontend-nextjs/README.md](./frontend-nextjs/README.md) - Documentation du frontend
- [frontend-nextjs/DEPLOYMENT_GUIDE.md](./frontend-nextjs/DEPLOYMENT_GUIDE.md) - Guide de déploiement Vercel

## 🎯 Prochaines Étapes

1. ✅ Tester localement
2. ⏳ Créer les repositories GitHub
3. ⏳ Déployer le backend sur Render
4. ⏳ Déployer le frontend sur Vercel
5. ⏳ Configurer le domaine personnalisé

## 💡 Conseils

- Utilisez `npm run dev` pour le développement
- Utilisez `npm run build` avant de déployer
- Vérifiez les logs en cas de problème
- Testez toujours localement avant de déployer

## 🆘 Aide

Si vous rencontrez des problèmes :

1. Vérifiez les logs
2. Consultez la documentation
3. Vérifiez les variables d'environnement
4. Redémarrez les serveurs

---

**Status:** ✅ Prêt à démarrer  
**Version:** 1.0.0  
**Date:** 2024
