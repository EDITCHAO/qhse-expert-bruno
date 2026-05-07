# 🔧 Portfolio QHSE - Backend API

Backend Laravel API pour le portfolio QHSE d'Abdoulaye DIALLO.

## 📋 Prérequis

- PHP 8.1+
- PostgreSQL 12+
- Composer
- Git

## 🚀 Installation

```bash
# Clonez le repository
git clone <votre-repo>
cd portfolio

# Installez les dépendances
composer install

# Créez le fichier .env
cp .env.example .env

# Générez la clé APP_KEY
php artisan key:generate

# Exécutez les migrations
php artisan migrate
```

## 🛠️ Développement

```bash
# Démarrez le serveur de développement
php artisan serve

# L'API sera disponible sur http://localhost:8000
```

## 📁 Structure du Projet

```
backend/
├── app/
│   ├── Console/
│   │   └── Commands/
│   │       └── MigrateProduction.php
│   ├── Exceptions/
│   │   └── Handler.php
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── Api/
│   │   │       ├── AuthController.php
│   │   │       └── ContactController.php
│   │   ├── Middleware/
│   │   │   ├── ApiTokenAuth.php
│   │   │   ├── CorsMiddleware.php
│   │   │   └── ...
│   │   └── Kernel.php
│   ├── Models/
│   │   └── Contact.php
│   └── Providers/
├── config/
│   ├── app.php
│   ├── database.php
│   └── ...
├── database/
│   ├── migrations/
│   │   └── 2024_01_01_000000_create_contacts_table.php
│   └── seeders/
├── routes/
│   ├── api.php
│   └── web.php
├── storage/
├── tests/
├── .env.example
├── .env.render
├── composer.json
├── render.yaml
└── README.md
```

## 🔌 API Endpoints

### Contacts (Public)

```
POST /api/contacts
Créer un nouveau contact

Body:
{
  "nom": "string (max: 100)",
  "email": "string (max: 150)",
  "numero": "string (max: 20)",
  "sujet": "string (max: 200)",
  "message": "string (max: 1000)"
}

Response:
{
  "success": true,
  "message": "Message envoyé avec succès!",
  "data": {
    "id": 1,
    "nom": "John Doe",
    "email": "john@example.com",
    "numero": "1234567890",
    "sujet": "Test",
    "message": "Test message",
    "created_at": "2024-01-01T12:00:00Z",
    "updated_at": "2024-01-01T12:00:00Z"
  }
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

Erreur (401):
{
  "success": false,
  "message": "Identifiants incorrects"
}
```

### Contacts (Admin - Protégé)

```
GET /api/contacts
Récupérer tous les contacts

Headers:
Authorization: Bearer <token>

Response:
{
  "success": true,
  "data": [ ... ]
}

DELETE /api/contacts/{id}
Supprimer un contact

Headers:
Authorization: Bearer <token>

Response:
{
  "success": true,
  "message": "Message supprimé avec succès"
}

GET /api/contacts/stats
Récupérer les statistiques

Headers:
Authorization: Bearer <token>

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

L'authentification utilise des tokens simples stockés en cache.

### Flux d'authentification

1. L'utilisateur envoie ses identifiants à `/api/auth/login`
2. Le serveur vérifie les identifiants
3. Si valides, un token est généré et stocké en cache (24h)
4. Le token est retourné au client
5. Le client envoie le token dans l'en-tête `Authorization: Bearer <token>`
6. Le middleware `ApiTokenAuth` vérifie le token

## 📝 Variables d'environnement

```
# Application
APP_NAME=Portfolio QHSE API
APP_ENV=production
APP_KEY=base64:YOUR_KEY
APP_DEBUG=false
APP_URL=https://portfolio-qhse-api.onrender.com

# Database
DB_CONNECTION=pgsql
DB_HOST=your-project.supabase.co
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_SSLMODE=require

# Admin
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password

# CORS
CORS_ALLOWED_ORIGINS=https://portfolio-qhse.vercel.app

# Cache
CACHE_DRIVER=file
SESSION_DRIVER=cookie
```

## 🚀 Déploiement

### Render

1. Créez un compte sur https://render.com
2. Connectez votre repository GitHub
3. Créez un nouveau Web Service
4. Configurez :
   - **Runtime** : PHP
   - **Build Command** : `composer install --no-dev --optimize-autoloader && php artisan migrate --force`
   - **Start Command** : `php -S 0.0.0.0:$PORT public/index.php`
5. Ajoutez les variables d'environnement
6. Déployez

### Docker

```bash
# Construisez l'image
docker build -t portfolio-api .

# Exécutez le conteneur
docker run -p 8000:8000 portfolio-api
```

## 🧪 Tests

```bash
# Exécutez les tests
php artisan test

# Exécutez les tests avec PostgreSQL
php artisan test --configuration=phpunit.pgsql.xml

# Exécutez un fichier de test spécifique
php artisan test tests/Feature/ContactTest.php
```

## 🔧 Commandes Utiles

```bash
# Migrations
php artisan migrate              # Exécuter les migrations
php artisan migrate:rollback     # Annuler la dernière migration
php artisan migrate:reset        # Réinitialiser la base de données
php artisan migrate:refresh      # Réinitialiser et relancer

# Cache
php artisan cache:clear         # Vider le cache
php artisan config:clear        # Vider le cache de configuration
php artisan view:clear          # Vider le cache des vues

# Développement
php artisan tinker              # Console interactive
php artisan serve               # Démarrer le serveur

# Production
php artisan migrate:production  # Migrations en production
```

## 📊 Monitoring

### Logs

```bash
# Voir les logs en temps réel
tail -f storage/logs/laravel.log

# Voir les dernières lignes
tail -n 100 storage/logs/laravel.log
```

### Render

- Dashboard : https://dashboard.render.com
- Logs : Service → Logs
- Metrics : Service → Metrics

### Supabase

- Dashboard : https://app.supabase.com
- Logs : Project → Logs
- Database : Project → Database

## ❓ Dépannage

### Erreur : "SQLSTATE[08006]"
- Vérifiez les identifiants Supabase
- Vérifiez que `DB_SSLMODE=require`
- Vérifiez que le firewall Supabase autorise les connexions

### Erreur : "Class not found"
```bash
composer dump-autoload
```

### Erreur : "No application encryption key"
```bash
php artisan key:generate
```

### Erreur : "Permission denied"
```bash
chmod -R 775 storage bootstrap/cache
```

## 📞 Support

Pour plus d'aide, consultez :
- [Laravel Documentation](https://laravel.com/docs)
- [Render Documentation](https://render.com/docs)
- [Supabase Documentation](https://supabase.com/docs)

## 📄 Licence

MIT
