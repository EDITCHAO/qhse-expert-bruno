# 🚀 Prochaines Étapes - Portfolio QHSE

## ✅ Configuration Terminée!

Votre portfolio est maintenant configuré pour utiliser `npm run dev` et `npm start`.

## 🎯 Démarrage Immédiat

### Étape 1 : Installer les Dépendances

```bash
# Backend
composer install

# Frontend
cd frontend
npm install
cd ..
```

### Étape 2 : Configurer l'Environnement

```bash
# Copier le fichier .env
cp .env.example .env

# Générer la clé APP_KEY
php artisan key:generate
```

### Étape 3 : Démarrer les Serveurs

**Windows** :
```bash
start-dev.bat
```

**Mac/Linux** :
```bash
chmod +x start-dev.sh
./start-dev.sh
```

**Ou manuellement** :

Terminal 1 :
```bash
npm run dev
```

Terminal 2 :
```bash
cd frontend
npm start
```

## 🌐 Accès

- **Frontend** : http://localhost:3000
- **Backend** : http://localhost:8000

## 🧪 Tester

1. Allez sur http://localhost:3000
2. Remplissez le formulaire de contact
3. Cliquez sur "Envoyer"
4. Allez sur http://localhost:3000/admin/login
5. Connectez-vous avec `admin` / `password123`
6. Vérifiez que le message apparaît

## 📚 Documentation

### Pour Démarrer
- [GETTING_STARTED.md](./GETTING_STARTED.md) - Guide de démarrage
- [SETUP_COMPLETE.md](./SETUP_COMPLETE.md) - Configuration complète

### Pour Développer
- [COMMANDS.md](./COMMANDS.md) - Commandes utiles
- [NPM_COMMANDS.md](./NPM_COMMANDS.md) - Commandes NPM
- [README.md](./README.md) - Vue d'ensemble

### Pour Déployer
- [DEPLOYMENT_REACT_RENDER_SUPABASE.md](./DEPLOYMENT_REACT_RENDER_SUPABASE.md) - Guide de déploiement
- [DEPLOYMENT_COMMANDS.md](./DEPLOYMENT_COMMANDS.md) - Commandes de déploiement

### Pour Dépanner
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Dépannage
- [ENV_SETUP.md](./ENV_SETUP.md) - Configuration des variables

## 🔧 Commandes Rapides

```bash
# Démarrer le backend
npm run dev

# Démarrer le frontend
cd frontend && npm start

# Exécuter les migrations
php artisan migrate

# Exécuter les tests
php artisan test

# Vider les caches
php artisan cache:clear && php artisan config:clear
```

## 📝 Fichiers Importants

- `package.json` - Scripts NPM pour le backend
- `frontend/package.json` - Scripts NPM pour le frontend
- `start-dev.bat` - Script de démarrage Windows
- `start-dev.sh` - Script de démarrage Mac/Linux
- `.env.example` - Template des variables d'environnement

## 🎉 Résumé

Vous pouvez maintenant :

✅ Démarrer le backend avec `npm run dev`
✅ Démarrer le frontend avec `npm start`
✅ Utiliser les scripts de démarrage automatiques
✅ Développer localement facilement
✅ Tester l'application complète

## 🚀 Commencez!

```bash
# Windows
start-dev.bat

# Mac/Linux
chmod +x start-dev.sh
./start-dev.sh
```

Puis allez sur http://localhost:3000

Bonne chance! 🎉
