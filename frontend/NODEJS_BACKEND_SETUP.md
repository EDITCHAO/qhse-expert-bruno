# 🚀 Backend Node.js Pur - Configuration Complète

## ✅ Changements Effectués

### 1. Backend Node.js Pur (Express)
- **Fichier** : `backend-server.js`
- **Framework** : Express.js
- **Port** : 8000
- **Dépendances** : express, cors, body-parser

### 2. Suppression de PHP
- ❌ Plus de `php artisan serve`
- ❌ Plus de Laravel
- ✅ Backend Node.js uniquement

### 3. Package.json Modifié
```json
{
  "scripts": {
    "dev": "node backend-server.js",
    "start": "node backend-server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "body-parser": "^1.20.2"
  }
}
```

## 📝 API Endpoints

### Public
```
POST   /api/contacts          - Créer un contact
POST   /api/auth/login        - Connexion admin
GET    /health                - Health check
```

### Protégé (nécessite token)
```
GET    /api/contacts          - Récupérer les contacts
DELETE /api/contacts/:id      - Supprimer un contact
GET    /api/contacts/stats    - Statistiques
```

## 🔐 Authentification

1. Envoyer les identifiants à `/api/auth/login`
2. Recevoir un token
3. Envoyer le token dans l'en-tête `Authorization: Bearer <token>`

## 📊 Stockage

- **Développement** : Stockage en mémoire (contacts = [])
- **Production** : À remplacer par une vraie base de données

## 🌐 CORS

Origines autorisées :
- http://localhost:3000
- http://localhost:3001

## 🚀 Démarrage

```bash
# Backend
npm run dev

# Frontend
cd frontend
npm start
```

## 📋 Installation en Cours

- ⏳ Backend Node.js : npm install
- ⏳ Frontend React : npm install --legacy-peer-deps

## 🎯 Prochaines Étapes

1. Attendre que les installations se terminent
2. Démarrer le backend : `npm run dev`
3. Démarrer le frontend : `cd frontend && npm start`
4. Accéder à http://localhost:3000

## ✨ Résumé

✅ Backend Node.js pur créé
✅ Express.js configuré
✅ API REST complète
✅ CORS configuré
✅ Authentification par token
⏳ Installation en cours...
