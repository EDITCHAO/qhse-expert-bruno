# 🚀 Serveurs Démarrés - Portfolio QHSE

## ✅ Backend Node.js - EN COURS D'EXÉCUTION

```
✅ Backend API démarré sur http://localhost:8000
✅ Framework : Express.js
✅ Port : 8000
✅ Dépendances : express, cors, body-parser
```

### Endpoints Disponibles

**Public** :
- `POST   /api/contacts`          - Créer un contact
- `POST   /api/auth/login`        - Connexion admin
- `GET    /health`                - Health check

**Protégé** (nécessite token) :
- `GET    /api/contacts`          - Récupérer les contacts
- `DELETE /api/contacts/:id`      - Supprimer un contact
- `GET    /api/contacts/stats`    - Statistiques

## ⏳ Frontend React - DÉMARRAGE EN COURS

```
⏳ Frontend React en cours de démarrage...
⏳ Port : 3000
⏳ Framework : React 18
```

### Accès Frontend
- **URL** : http://localhost:3000 (bientôt disponible)

## 🔐 Authentification

1. Envoyer les identifiants à `/api/auth/login` :
```json
{
  "username": "admin",
  "password": "password123"
}
```

2. Recevoir un token :
```json
{
  "success": true,
  "message": "Connexion réussie",
  "token": "token_..."
}
```

3. Envoyer le token dans l'en-tête :
```
Authorization: Bearer token_...
```

## 📊 Stockage

- **Développement** : Stockage en mémoire
- **Production** : À remplacer par une vraie base de données (MongoDB, PostgreSQL, etc.)

## 🌐 CORS

Origines autorisées :
- http://localhost:3000
- http://localhost:3001

## 🎯 Prochaines Étapes

1. Attendez que le frontend React démarre (http://localhost:3000)
2. Testez le formulaire de contact
3. Testez la connexion admin
4. Vérifiez les messages dans le tableau de bord

## 📋 Commandes

```bash
# Démarrer le backend
npm run dev

# Démarrer le frontend
cd frontend
npm start

# Arrêter les serveurs
Ctrl+C dans chaque terminal
```

## ✨ Résumé

✅ Backend Node.js démarré sur http://localhost:8000
✅ Express.js configuré
✅ API REST complète
✅ CORS configuré
✅ Authentification par token
⏳ Frontend React en cours de démarrage...

Allez sur http://localhost:3000 une fois que le frontend est prêt!
