# 📊 Statut des Serveurs - Portfolio QHSE

## ✅ Backend - EN COURS D'EXÉCUTION

```
✅ Serveur API démarré sur http://localhost:8000
✅ PHP 8.4.6 Development Server
✅ Commande : npm run dev
✅ Processus : node server.js → php -S localhost:8000 -t public
```

### Accès Backend
- **URL** : http://localhost:8000
- **API** : http://localhost:8000/api
- **Status** : ✅ Actif

### Tester le Backend
```bash
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

# Connexion admin
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "password123"
  }'
```

## ⏳ Frontend - INSTALLATION EN COURS

```
⏳ Installation des dépendances npm...
⏳ Commande : npm start
⏳ Processus : react-scripts start
```

### Accès Frontend
- **URL** : http://localhost:3000 (bientôt disponible)
- **Status** : ⏳ Installation en cours

### Prochaines Étapes
1. Attendez que l'installation npm se termine
2. Le serveur React démarrera automatiquement
3. Allez sur http://localhost:3000

## 🔧 Changements Effectués

### ✅ Suppression de `php artisan serve`
- Remplacé par un serveur Node.js
- Fichier : `server.js`
- Utilise : `php -S localhost:8000 -t public`

### ✅ Nouveau Package.json
```json
{
  "scripts": {
    "dev": "node server.js",
    "start": "node server.js",
    "build": "composer install --no-dev --optimize-autoloader",
    "migrate": "php artisan migrate",
    "test": "php artisan test"
  }
}
```

### ✅ Serveur Node.js (server.js)
```javascript
const { spawn } = require('child_process');
const phpProcess = spawn('php', ['-S', 'localhost:8000', '-t', 'public']);
```

## 📝 Commandes

### Backend
```bash
npm run dev       # Démarrer le serveur
npm start         # Alias
npm run build     # Compiler
npm run migrate   # Migrations
npm run test      # Tests
```

### Frontend
```bash
npm start         # Démarrer le serveur
npm run build     # Compiler
npm test          # Tests
```

## 🌐 Accès

| Service | URL | Status |
|---------|-----|--------|
| Backend | http://localhost:8000 | ✅ Actif |
| Frontend | http://localhost:3000 | ⏳ Bientôt |
| API | http://localhost:8000/api | ✅ Actif |

## 🛑 Arrêter les Serveurs

Appuyez sur `Ctrl+C` dans chaque terminal.

## 📚 Documentation

- [SERVERS_RUNNING.md](./SERVERS_RUNNING.md) - Serveurs en cours d'exécution
- [GETTING_STARTED.md](./GETTING_STARTED.md) - Guide de démarrage
- [COMMANDS.md](./COMMANDS.md) - Commandes utiles

## 🎉 Résumé

✅ Backend démarré avec `npm run dev`
✅ Serveur Node.js utilisé (plus de `php artisan serve`)
✅ Frontend en cours d'installation
✅ Prêt à développer!

Attendez que le frontend soit prêt, puis allez sur http://localhost:3000!
