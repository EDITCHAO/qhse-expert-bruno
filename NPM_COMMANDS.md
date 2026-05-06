# 📦 Commandes NPM - Portfolio QHSE

## 🎯 Démarrage Rapide

### Démarrer les Serveurs

```bash
# Démarrer le backend
npm run dev

# Démarrer le frontend (dans un autre terminal)
cd frontend
npm start
```

## 🔧 Commandes Backend

### Développement

```bash
# Démarrer le serveur de développement
npm run dev
npm start

# Exécuter les migrations
npm run migrate

# Exécuter les tests
npm run test
```

### Production

```bash
# Compiler pour la production
npm run build
```

## 🎨 Commandes Frontend

### Développement

```bash
# Démarrer le serveur de développement
npm run dev
npm start

# Exécuter les tests
npm test

# Exécuter les tests en mode watch
npm test -- --watch
```

### Production

```bash
# Compiler pour la production
npm run build

# Exécuter les tests avec couverture
npm test -- --coverage
```

## 📋 Commandes Complètes

### Backend (Racine du Projet)

```bash
npm run dev       # php artisan serve
npm start         # php artisan serve
npm run build     # composer install --no-dev --optimize-autoloader
npm run migrate   # php artisan migrate
npm run test      # php artisan test
```

### Frontend (frontend/)

```bash
npm run dev       # react-scripts start
npm start         # react-scripts start
npm run build     # react-scripts build
npm test          # react-scripts test
npm run eject     # react-scripts eject
```

## 🚀 Démarrage Complet

### Windows

```bash
# Exécuter le script de démarrage
start-dev.bat
```

### Mac/Linux

```bash
# Rendre le script exécutable
chmod +x start-dev.sh

# Exécuter le script
./start-dev.sh
```

## 🌐 Accès

- **Frontend** : http://localhost:3000
- **Backend** : http://localhost:8000

## 📝 Notes

- Les commandes backend utilisent `php artisan`
- Les commandes frontend utilisent `react-scripts`
- Utilisez `npm run dev` pour le développement
- Utilisez `npm run build` pour la production

## 🆘 Dépannage

### Erreur : "npm: command not found"

```bash
# Installez Node.js depuis https://nodejs.org
# Puis vérifiez l'installation
npm --version
```

### Erreur : "php: command not found"

```bash
# Installez PHP depuis https://www.php.net
# Puis vérifiez l'installation
php --version
```

### Erreur : "composer: command not found"

```bash
# Installez Composer depuis https://getcomposer.org
# Puis vérifiez l'installation
composer --version
```

## 📚 Documentation

- [GETTING_STARTED.md](./GETTING_STARTED.md) - Guide de démarrage
- [README.md](./README.md) - Vue d'ensemble
- [frontend/README.md](./frontend/README.md) - Documentation frontend
- [backend/README.md](./backend/README.md) - Documentation backend
