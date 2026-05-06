# 🚀 Démarrage Rapide - Portfolio QHSE

## 📋 Prérequis

- PHP 8.1+
- Node.js 16+
- Composer
- npm

## 🎯 Démarrage en 3 Étapes

### 1️⃣ Installation des Dépendances

```bash
# Backend
composer install

# Frontend
cd frontend
npm install
cd ..
```

### 2️⃣ Configuration

```bash
# Copier le fichier .env
cp .env.example .env

# Générer la clé APP_KEY
php artisan key:generate
```

### 3️⃣ Démarrer les Serveurs

#### Option 1 : Scripts Automatiques (Recommandé)

**Windows** :
```bash
start-dev.bat
```

**Mac/Linux** :
```bash
chmod +x start-dev.sh
./start-dev.sh
```

#### Option 2 : Manuellement

**Terminal 1 - Backend** :
```bash
npm run dev
# ou
php artisan serve
```

**Terminal 2 - Frontend** :
```bash
cd frontend
npm start
# ou
npm run dev
```

## 🌐 Accès

- **Frontend** : http://localhost:3000
- **Backend** : http://localhost:8000

## 📝 Commandes Disponibles

### Backend

```bash
npm run dev       # Démarrer le serveur de développement
npm start         # Alias pour npm run dev
npm run build     # Compiler pour la production
npm run migrate   # Exécuter les migrations
npm run test      # Exécuter les tests
```

### Frontend

```bash
npm run dev       # Démarrer le serveur de développement
npm start         # Alias pour npm run dev
npm run build     # Compiler pour la production
npm test          # Exécuter les tests
```

## 🧪 Tester l'Application

1. Allez sur http://localhost:3000
2. Remplissez le formulaire de contact
3. Cliquez sur "Envoyer"
4. Allez sur http://localhost:3000/admin/login
5. Connectez-vous avec :
   - Username: `admin`
   - Password: `password123`
6. Vérifiez que le message apparaît dans le tableau de bord

## 🔧 Dépannage

### Erreur : "Port 3000 already in use"

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### Erreur : "Port 8000 already in use"

```bash
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :8000
kill -9 <PID>
```

### Erreur : "Cannot find module"

```bash
# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
cd ..

# Backend
rm -rf vendor composer.lock
composer install
```

## 📚 Documentation

- [START_HERE.md](./START_HERE.md) - Guide de démarrage
- [README.md](./README.md) - Vue d'ensemble
- [QUICK_START.md](./QUICK_START.md) - Démarrage rapide
- [frontend/README.md](./frontend/README.md) - Documentation frontend
- [backend/README.md](./backend/README.md) - Documentation backend

## 🎉 Prêt!

Vous pouvez maintenant développer votre portfolio localement!

Pour le déploiement, consultez [DEPLOYMENT_REACT_RENDER_SUPABASE.md](./DEPLOYMENT_REACT_RENDER_SUPABASE.md)
