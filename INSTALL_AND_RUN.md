# 🚀 Installation et Démarrage - Next.js + Node.js

## 📋 Prérequis

- ✅ Node.js 14+ installé
- ✅ npm ou yarn installé
- ✅ Git installé

## 🔧 Installation

### Étape 1 : Backend

```bash
# Aller à la racine du projet
cd D:\PROJET\bruno-hse

# Installer les dépendances
npm install

# Vérifier l'installation
npm run build
```

### Étape 2 : Frontend

```bash
# Aller au dossier frontend
cd frontend-nextjs

# Installer les dépendances
npm install

# Vérifier l'installation
npm run build
```

## 🚀 Démarrage

### Option 1 : Démarrage Manuel (Recommandé)

**Terminal 1 - Backend:**
```bash
cd D:\PROJET\bruno-hse
npm run dev
# http://localhost:8000
```

**Terminal 2 - Frontend:**
```bash
cd D:\PROJET\bruno-hse\frontend-nextjs
npm run dev
# http://localhost:3000
```

### Option 2 : Démarrage Automatique (Windows)

**Créer un fichier `start-all.bat`:**
```batch
@echo off
start cmd /k "npm run dev"
start cmd /k "cd frontend-nextjs && npm run dev"
pause
```

Puis double-cliquez sur le fichier.

## ✅ Vérification

### Backend

```bash
# Tester la connexion
curl http://localhost:8000/health

# Réponse attendue:
# {"status":"ok"}
```

### Frontend

1. Ouvrez http://localhost:3000 dans votre navigateur
2. Vous devriez voir la page d'accueil

## 🧪 Tests

### Tester le Formulaire de Contact

1. Allez sur http://localhost:3000
2. Remplissez le formulaire
3. Cliquez sur "Envoyer"
4. Vous devriez voir un message de succès

### Tester l'Admin

1. Allez sur http://localhost:3000/admin/login
2. Entrez :
   - Username: `admin`
   - Password: `password123`
3. Vous devriez être redirigé vers le dashboard

## 📱 Accès Réseau

### Depuis le Téléphone (Même Wi-Fi)

```
Frontend: http://192.168.1.66:3000
Backend: http://192.168.1.66:8000
```

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

## 🆘 Dépannage

### Le frontend ne démarre pas

```bash
cd frontend-nextjs

# Supprimer les fichiers de cache
rm -rf .next node_modules package-lock.json

# Réinstaller
npm install

# Redémarrer
npm run dev
```

### Le backend ne démarre pas

```bash
# Supprimer les fichiers de cache
rm -rf node_modules package-lock.json

# Réinstaller
npm install

# Redémarrer
npm run dev
```

### Port déjà utilisé

```bash
# Trouver le processus
netstat -ano | findstr :3000
netstat -ano | findstr :8000

# Tuer le processus
taskkill /PID <PID> /F
```

### Le frontend ne peut pas atteindre le backend

1. Vérifiez que le backend est en ligne
2. Vérifiez l'URL dans `.env.local`
3. Vérifiez les CORS du backend
4. Ouvrez les DevTools (F12) et consultez la console

## 📊 Commandes Utiles

### Backend

```bash
npm run dev       # Démarrer en développement
npm start         # Démarrer en production
npm run build     # Build
npm run lint      # Linting
```

### Frontend

```bash
npm run dev       # Démarrer en développement
npm start         # Démarrer en production
npm run build     # Build
npm run lint      # Linting
npm run export    # Exporter en HTML statique
```

## 📚 Documentation

- [QUICK_START_NEXTJS.md](./QUICK_START_NEXTJS.md) - Démarrage rapide
- [NEXTJS_COMMANDS.md](./NEXTJS_COMMANDS.md) - Commandes essentielles
- [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) - Guide de migration
- [NEXTJS_NODEJS_DEPLOYMENT_GUIDE.md](./NEXTJS_NODEJS_DEPLOYMENT_GUIDE.md) - Guide complet

## 🎯 Prochaines Étapes

1. ✅ Installer les dépendances
2. ✅ Démarrer les serveurs
3. ✅ Tester localement
4. ⏳ Créer les repositories GitHub
5. ⏳ Déployer sur Vercel & Render

## 💡 Conseils

- Utilisez deux terminaux séparés pour le backend et le frontend
- Vérifiez les logs en cas de problème
- Testez toujours localement avant de déployer
- Gardez les variables d'environnement à jour

## 🎉 Vous Êtes Prêt !

Votre application est maintenant prête à être utilisée et déployée.

---

**Status:** ✅ Prêt à l'emploi  
**Version:** 1.0.0  
**Date:** 2024
