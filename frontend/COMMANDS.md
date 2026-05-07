<<<<<<< HEAD
# 🔧 Commandes utiles QHSEPRO

## 📦 Installation et démarrage

### Installation des dépendances
```bash
npm install
```

### Démarrage du serveur de développement
```bash
npm start
```
Ouvre le site sur `http://localhost:3000`

### Build pour production
```bash
npm run build
```
Crée un dossier `build/` optimisé

### Lancer les tests
```bash
npm test
```

### Éjecter la configuration (⚠️ irréversible)
```bash
npm run eject
```

## 🧹 Nettoyage et maintenance

### Supprimer les dépendances
```bash
rm -rf node_modules
```

### Réinstaller les dépendances
```bash
npm install
```

### Vider le cache npm
```bash
npm cache clean --force
```

### Vérifier les dépendances obsolètes
```bash
npm outdated
```

### Mettre à jour les dépendances
```bash
npm update
```

## 🔍 Vérification et linting

### Vérifier les erreurs
```bash
npm run lint
```

### Corriger les erreurs de linting
```bash
npm run lint -- --fix
```

### Vérifier les types TypeScript (si configuré)
```bash
npm run type-check
```

## 📊 Analyse et optimisation

### Analyser la taille du bundle
```bash
npm run analyze
```

### Vérifier les performances
```bash
npm run lighthouse
```

### Générer un rapport de couverture de tests
```bash
npm test -- --coverage
```

## 🚀 Déploiement

### Déployer sur Vercel
```bash
npm install -g vercel
vercel
```

### Déployer sur Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Déployer sur GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## 🐛 Dépannage

### Réinitialiser le projet
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Vider le cache du navigateur
```bash
# Chrome: Ctrl+Shift+Delete
# Firefox: Ctrl+Shift+Delete
# Safari: Cmd+Option+E
```

### Vérifier les ports utilisés
```bash
# Windows
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :3000
```

### Tuer le processus sur le port 3000
```bash
# Windows
taskkill /PID <PID> /F

# Mac/Linux
kill -9 <PID>
```

## 📁 Gestion des fichiers

### Créer un dossier
```bash
mkdir frontend/src/assets/images
```

### Copier un fichier
```bash
cp source.js destination.js
```

### Déplacer un fichier
```bash
mv source.js destination.js
```

### Supprimer un fichier
```bash
rm filename.js
```

### Supprimer un dossier
```bash
rm -rf foldername
=======
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
>>>>>>> 19a2af9b54dcbf61d70ba8d8a5a8dcdd27c81a25
```

## 🔐 Sécurité

<<<<<<< HEAD
### Vérifier les vulnérabilités
```bash
npm audit
```

### Corriger les vulnérabilités
```bash
npm audit fix
```

### Corriger les vulnérabilités forcément
```bash
npm audit fix --force
```

## 📝 Git (si utilisé)

### Initialiser un repo Git
```bash
git init
```

### Ajouter les fichiers
```bash
git add .
```

### Commiter les changements
```bash
git commit -m "Message du commit"
```

### Pousser vers le serveur
```bash
git push origin main
```

### Voir l'historique
```bash
git log
```

## 🎯 Commandes personnalisées

### Ajouter une commande personnalisée
Éditez `package.json`:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "custom": "echo 'Commande personnalisée'"
}
```

Puis exécutez:
```bash
npm run custom
```

## 📚 Ressources utiles

### Documentation React
```
https://react.dev
```

### Documentation npm
```
https://docs.npmjs.com
```

### Create React App
```
https://create-react-app.dev
```

## 🔗 Commandes rapides

### Démarrer et tester
```bash
npm install && npm start
```

### Build et déployer
```bash
npm run build && npm run deploy
```

### Nettoyer et réinstaller
```bash
rm -rf node_modules package-lock.json && npm install
```

## 💡 Conseils

1. **Utilisez `npm ci`** au lieu de `npm install` en production
2. **Utilisez `npm audit`** régulièrement
3. **Gardez les dépendances à jour**
4. **Testez avant de déployer**
5. **Utilisez `.gitignore`** pour exclure les fichiers

## 📞 Aide

### Obtenir de l'aide sur une commande
```bash
npm help <command>
```

### Voir la version de npm
```bash
npm -v
```

### Voir la version de Node
```bash
node -v
```

### Voir la configuration npm
```bash
npm config list
```

---

**Créé le**: 4 mai 2026
**Version**: 1.0.0
=======
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
>>>>>>> 19a2af9b54dcbf61d70ba8d8a5a8dcdd27c81a25
