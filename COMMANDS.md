# 📝 Commandes Utiles - Portfolio QHSE

## 🚀 Démarrage

### Démarrage Automatique

```bash
# Windows
start-dev.bat

# Mac/Linux
chmod +x start-dev.sh
./start-dev.sh
```

### Démarrage Manuel

**Terminal 1 - Backend** :
```bash
npm run dev
```

**Terminal 2 - Frontend** :
```bash
cd frontend
npm start
```

## 🔧 Installation

### Première Installation

```bash
# Backend
composer install

# Frontend
cd frontend
npm install
cd ..

# Configuration
cp .env.example .env
php artisan key:generate
```

### Réinstallation Complète

```bash
# Backend
rm -rf vendor composer.lock
composer install

# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
cd ..
```

## 📦 Commandes NPM

### Backend

```bash
npm run dev       # Démarrer le serveur
npm start         # Alias pour npm run dev
npm run build     # Compiler pour la production
npm run migrate   # Exécuter les migrations
npm run test      # Exécuter les tests
```

### Frontend

```bash
cd frontend
npm run dev       # Démarrer le serveur
npm start         # Alias pour npm run dev
npm run build     # Compiler pour la production
npm test          # Exécuter les tests
```

## 🗄️ Base de Données

### Migrations

```bash
# Exécuter les migrations
php artisan migrate

# Annuler la dernière migration
php artisan migrate:rollback

# Réinitialiser la base de données
php artisan migrate:reset

# Réinitialiser et relancer
php artisan migrate:refresh
```

### Seeders

```bash
# Remplir la base de données
php artisan db:seed

# Réinitialiser et remplir
php artisan migrate:refresh --seed
```

## 🧪 Tests

### Backend

```bash
# Exécuter tous les tests
php artisan test

# Exécuter un fichier de test
php artisan test tests/Feature/ContactApiTest.php

# Exécuter avec couverture
php artisan test --coverage
```

### Frontend

```bash
cd frontend

# Exécuter les tests
npm test

# Exécuter les tests en mode watch
npm test -- --watch

# Exécuter avec couverture
npm test -- --coverage
```

## 🔍 Débogage

### Backend

```bash
# Accéder à la console Tinker
php artisan tinker

# Exemples dans Tinker
> DB::table('contacts')->get()
> Contact::all()
> env('APP_NAME')
```

### Frontend

```bash
# Ouvrir les DevTools
F12 ou Ctrl+Shift+I

# Voir les logs
console.log()

# Voir les requêtes API
Network tab
```

## 🧹 Nettoyage

### Cache

```bash
# Vider le cache
php artisan cache:clear

# Vider le cache de configuration
php artisan config:clear

# Vider le cache des vues
php artisan view:clear

# Vider tous les caches
php artisan cache:clear && php artisan config:clear && php artisan view:clear
```

### Fichiers Temporaires

```bash
# Supprimer les fichiers de session
rm -rf storage/framework/sessions/*

# Supprimer les fichiers de cache
rm -rf storage/framework/cache/*

# Supprimer les fichiers de vues compilées
rm -rf storage/framework/views/*
```

## 📊 Monitoring

### Logs

```bash
# Voir les logs en temps réel
tail -f storage/logs/laravel.log

# Voir les dernières lignes
tail -n 100 storage/logs/laravel.log

# Voir les logs avec grep
grep "error" storage/logs/laravel.log
```

### Routes

```bash
# Lister toutes les routes
php artisan route:list

# Lister les routes API
php artisan route:list | grep api
```

## 🚀 Déploiement

### Build pour la Production

```bash
# Backend
npm run build

# Frontend
cd frontend
npm run build
```

### Vérifier la Production

```bash
# Backend
php -S 0.0.0.0:8000 -t public

# Frontend
# Servir le dossier build/ avec un serveur web
```

## 🔐 Sécurité

### Générer une Nouvelle Clé

```bash
php artisan key:generate
```

### Vérifier les Dépendances

```bash
# Backend
composer audit

# Frontend
npm audit
```

### Corriger les Vulnérabilités

```bash
# Backend
composer update

# Frontend
npm audit fix
```

## 📝 Commandes Utiles

### Git

```bash
# Voir le statut
git status

# Ajouter les fichiers
git add .

# Créer un commit
git commit -m "Message"

# Pousser le code
git push origin main

# Voir l'historique
git log
```

### Système

```bash
# Voir les processus
ps aux | grep php
ps aux | grep node

# Tuer un processus
kill -9 <PID>

# Voir les ports utilisés
netstat -ano | findstr :8000
netstat -ano | findstr :3000
```

## 🆘 Dépannage Rapide

```bash
# Réinstaller tout
rm -rf vendor node_modules composer.lock package-lock.json
composer install
cd frontend && npm install && cd ..

# Régénérer la clé
php artisan key:generate

# Vider tous les caches
php artisan cache:clear && php artisan config:clear && php artisan view:clear

# Vérifier la connexion à la base de données
php artisan tinker
> DB::connection()->getPdo()
```

## 📚 Documentation

- [GETTING_STARTED.md](./GETTING_STARTED.md) - Guide de démarrage
- [NPM_COMMANDS.md](./NPM_COMMANDS.md) - Commandes NPM
- [README.md](./README.md) - Vue d'ensemble
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Dépannage
