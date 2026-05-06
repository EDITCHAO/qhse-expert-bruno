# 📁 Structure du Projet - Portfolio QHSE

## Vue d'ensemble

```
portfolio/
├── frontend/                    # Frontend React
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── api/
│   │   │   ├── auth.js
│   │   │   ├── client.js
│   │   │   └── contacts.js
│   │   ├── components/
│   │   │   ├── ContactForm.js
│   │   │   ├── ContactForm.css
│   │   │   ├── Header.js
│   │   │   ├── Header.css
│   │   │   └── PrivateRoute.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── HomePage.css
│   │   │   ├── AdminLoginPage.js
│   │   │   ├── AdminLoginPage.css
│   │   │   ├── AdminDashboardPage.js
│   │   │   └── AdminDashboardPage.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── .env.example
│   ├── .env.development
│   ├── .env.production
│   ├── .gitignore
│   ├── package.json
│   ├── vercel.json
│   └── README.md
│
├── backend/                     # Backend Laravel API
│   ├── app/
│   │   ├── Console/
│   │   │   └── Commands/
│   │   │       └── MigrateProduction.php
│   │   ├── Exceptions/
│   │   │   └── Handler.php
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   │   └── Api/
│   │   │   │       ├── AuthController.php
│   │   │   │       └── ContactController.php
│   │   │   ├── Middleware/
│   │   │   │   ├── ApiTokenAuth.php
│   │   │   │   ├── CorsMiddleware.php
│   │   │   │   └── ...
│   │   │   └── Kernel.php
│   │   ├── Models/
│   │   │   └── Contact.php
│   │   └── Providers/
│   ├── config/
│   │   ├── app.php
│   │   ├── database.php
│   │   └── ...
│   ├── database/
│   │   ├── migrations/
│   │   │   └── 2024_01_01_000000_create_contacts_table.php
│   │   └── seeders/
│   ├── routes/
│   │   ├── api.php
│   │   └── web.php
│   ├── storage/
│   ├── tests/
│   ├── .env.example
│   ├── .env.development
│   ├── .env.render
│   ├── .gitignore
│   ├── composer.json
│   ├── render.yaml
│   └── README.md
│
├── .gitignore
├── QUICK_START.md
├── DEPLOYMENT_REACT_RENDER_SUPABASE.md
├── PROJECT_STRUCTURE.md
└── README.md
```

## 📂 Détails des dossiers

### Frontend (`frontend/`)

#### `public/`
- `index.html` : Fichier HTML principal

#### `src/`
- **`api/`** : Clients API
  - `client.js` : Client Axios configuré avec intercepteurs
  - `auth.js` : API d'authentification
  - `contacts.js` : API des contacts

- **`components/`** : Composants réutilisables
  - `Header.js` : En-tête avec navigation
  - `ContactForm.js` : Formulaire de contact
  - `PrivateRoute.js` : Route protégée pour l'admin

- **`pages/`** : Pages principales
  - `HomePage.js` : Page d'accueil avec formulaire
  - `AdminLoginPage.js` : Page de connexion admin
  - `AdminDashboardPage.js` : Tableau de bord admin

- **`App.js`** : Composant principal avec routage
- **`index.js`** : Point d'entrée React

#### Configuration
- `.env.example` : Template des variables d'environnement
- `.env.development` : Variables pour le développement
- `.env.production` : Variables pour la production
- `package.json` : Dépendances et scripts
- `vercel.json` : Configuration Vercel

### Backend (`backend/`)

#### `app/`
- **`Http/Controllers/Api/`** : Contrôleurs API
  - `AuthController.php` : Authentification
  - `ContactController.php` : Gestion des contacts

- **`Http/Middleware/`** : Middlewares
  - `ApiTokenAuth.php` : Authentification par token
  - `CorsMiddleware.php` : Gestion CORS

- **`Models/`** : Modèles Eloquent
  - `Contact.php` : Modèle Contact

#### `config/`
- `database.php` : Configuration base de données
- `app.php` : Configuration application

#### `database/`
- **`migrations/`** : Migrations de schéma
  - `create_contacts_table.php` : Table contacts

#### `routes/`
- `web.php` : Routes API

#### Configuration
- `.env.example` : Template des variables
- `.env.development` : Variables développement
- `.env.render` : Variables Render
- `composer.json` : Dépendances PHP
- `render.yaml` : Configuration Render

## 🔄 Flux de données

```
Frontend (React)
    ↓
API Client (Axios)
    ↓
Backend API (Laravel)
    ↓
Database (PostgreSQL/Supabase)
```

### Exemple : Créer un contact

1. **Frontend** : Utilisateur remplit le formulaire
2. **ContactForm.js** : Valide et envoie les données
3. **api/contacts.js** : Appelle `POST /api/contacts`
4. **api/client.js** : Envoie la requête HTTP
5. **Backend** : `ContactController@store` reçoit la requête
6. **Database** : Insère le contact dans la table `contacts`
7. **Response** : Retourne le contact créé
8. **Frontend** : Affiche le message de succès

## 🔐 Authentification

### Flux de connexion

1. **Frontend** : Utilisateur se connecte
2. **AdminLoginPage.js** : Envoie les identifiants
3. **api/auth.js** : Appelle `POST /api/auth/login`
4. **Backend** : `AuthController@login` vérifie les identifiants
5. **Backend** : Génère un token et le stocke en cache
6. **Response** : Retourne le token
7. **Frontend** : Stocke le token dans `localStorage`
8. **api/client.js** : Ajoute le token aux requêtes suivantes

### Routes protégées

- `GET /api/contacts` : Récupérer tous les contacts
- `DELETE /api/contacts/{id}` : Supprimer un contact
- `GET /api/contacts/stats` : Récupérer les statistiques

## 🚀 Déploiement

### Frontend (Vercel)
- Branche : `main`
- Build : `npm run build`
- Output : `build/`
- Variables : `REACT_APP_API_URL`, `REACT_APP_API_TIMEOUT`

### Backend (Render)
- Branche : `main`
- Build : `composer install --no-dev --optimize-autoloader && php artisan migrate --force`
- Start : `php -S 0.0.0.0:$PORT public/index.php`
- Variables : `APP_KEY`, `DB_*`, `ADMIN_*`, `CORS_ALLOWED_ORIGINS`

### Database (Supabase)
- Type : PostgreSQL
- Tables : `contacts`
- Indices : `email`, `created_at`

## 📊 Modèle de données

### Table `contacts`

```sql
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  numero VARCHAR(20) NOT NULL,
  sujet VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔗 Endpoints API

### Public
- `POST /api/contacts` : Créer un contact

### Admin (Protégé)
- `POST /api/auth/login` : Connexion
- `GET /api/contacts` : Lister les contacts
- `DELETE /api/contacts/{id}` : Supprimer un contact
- `GET /api/contacts/stats` : Statistiques

## 📝 Variables d'environnement

### Frontend
```
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_API_TIMEOUT=10000
```

### Backend
```
APP_ENV=production
APP_DEBUG=false
APP_KEY=base64:...
DB_CONNECTION=pgsql
DB_HOST=...
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=...
DB_SSLMODE=require
ADMIN_USERNAME=admin
ADMIN_PASSWORD=...
CORS_ALLOWED_ORIGINS=https://...
```

## 🛠️ Commandes utiles

### Frontend
```bash
npm install          # Installer les dépendances
npm start            # Démarrer le serveur de développement
npm run build        # Créer une version de production
npm test             # Exécuter les tests
```

### Backend
```bash
composer install     # Installer les dépendances
php artisan serve    # Démarrer le serveur
php artisan migrate  # Exécuter les migrations
php artisan test     # Exécuter les tests
```

## 📞 Support

Pour plus d'informations, consultez :
- `QUICK_START.md` : Démarrage rapide
- `DEPLOYMENT_REACT_RENDER_SUPABASE.md` : Guide de déploiement détaillé
- `frontend/README.md` : Documentation frontend
- `backend/README.md` : Documentation backend
