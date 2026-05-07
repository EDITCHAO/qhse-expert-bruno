# 🎨 Portfolio QHSE - Frontend React

Frontend React pour le portfolio QHSE d'Abdoulaye DIALLO.

## 📋 Prérequis

- Node.js 16+
- npm ou yarn

## 🚀 Installation

```bash
# Installez les dépendances
npm install

# Créez le fichier .env
cp .env.example .env

# Modifiez .env avec votre URL API
# REACT_APP_API_URL=http://localhost:8000/api (développement)
# REACT_APP_API_URL=https://portfolio-qhse-api.onrender.com/api (production)
```

## 🛠️ Développement

```bash
# Démarrez le serveur de développement
npm start

# Le site sera disponible sur http://localhost:3000
```

## 🏗️ Build

```bash
# Créez une version de production
npm run build

# Le dossier build/ contient les fichiers optimisés
```

## 📁 Structure du Projet

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   ├── auth.js          # API d'authentification
│   │   ├── client.js        # Client Axios configuré
│   │   └── contacts.js      # API des contacts
│   ├── components/
│   │   ├── ContactForm.js   # Formulaire de contact
│   │   ├── ContactForm.css
│   │   ├── Header.js        # En-tête
│   │   ├── Header.css
│   │   └── PrivateRoute.js  # Route protégée
│   ├── pages/
│   │   ├── HomePage.js      # Page d'accueil
│   │   ├── HomePage.css
│   │   ├── AdminLoginPage.js    # Page de connexion admin
│   │   ├── AdminLoginPage.css
│   │   ├── AdminDashboardPage.js    # Tableau de bord admin
│   │   └── AdminDashboardPage.css
│   ├── App.js               # Composant principal
│   ├── App.css
│   ├── index.js             # Point d'entrée
│   └── index.css
├── .env.example
├── package.json
└── README.md
```

## 🔌 API Endpoints

### Contacts (Public)

```
POST /api/contacts
Créer un nouveau contact

Body:
{
  "nom": "string",
  "email": "string",
  "numero": "string",
  "sujet": "string",
  "message": "string"
}

Response:
{
  "success": true,
  "message": "Message envoyé avec succès!",
  "data": { ... }
}
```

### Authentification

```
POST /api/auth/login
Connexion admin

Body:
{
  "username": "string",
  "password": "string"
}

Response:
{
  "success": true,
  "message": "Connexion réussie",
  "token": "string"
}
```

### Contacts (Admin)

```
GET /api/contacts
Récupérer tous les contacts (nécessite authentification)

Response:
{
  "success": true,
  "data": [ ... ]
}

DELETE /api/contacts/{id}
Supprimer un contact (nécessite authentification)

Response:
{
  "success": true,
  "message": "Message supprimé avec succès"
}

GET /api/contacts/stats
Récupérer les statistiques (nécessite authentification)

Response:
{
  "success": true,
  "data": {
    "total": 10,
    "today": 2
  }
}
```

## 🔐 Authentification

L'authentification utilise des tokens stockés dans `localStorage`.

### Flux d'authentification

1. L'utilisateur se connecte avec ses identifiants
2. Le serveur retourne un token
3. Le token est stocké dans `localStorage`
4. Le token est envoyé dans l'en-tête `Authorization: Bearer <token>` pour les requêtes protégées
5. Si le token expire, l'utilisateur est redirigé vers la page de connexion

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans les fichiers CSS :
- Primaire : `#667eea`
- Secondaire : `#764ba2`
- Succès : `#4CAF50`
- Erreur : `#f44336`

### Texte

Modifiez le texte dans les fichiers des pages :
- `src/pages/HomePage.js` : Contenu de la page d'accueil
- `src/components/Header.js` : En-tête

## 📦 Dépendances

- **react** : Bibliothèque UI
- **react-dom** : Rendu DOM
- **react-router-dom** : Routage
- **axios** : Client HTTP
- **react-scripts** : Scripts de build

## 🚀 Déploiement

### Vercel

```bash
# Installez Vercel CLI
npm install -g vercel

# Déployez
vercel --prod
```

### Netlify

```bash
# Installez Netlify CLI
npm install -g netlify-cli

# Déployez
netlify deploy --prod --dir=build
```

## 📝 Variables d'environnement

```
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_API_TIMEOUT=10000
```

## 🧪 Tests

```bash
# Exécutez les tests
npm test

# Exécutez les tests avec couverture
npm test -- --coverage
```

## 📞 Support

Pour plus d'aide, consultez :
- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Axios Documentation](https://axios-http.com)

## 📄 Licence

MIT
