# 🔐 Configuration des Variables d'Environnement

## 📋 Vue d'ensemble

Ce guide explique comment configurer les variables d'environnement pour le développement et la production.

## 🛠️ Développement Local

### Backend

```bash
# Copiez le fichier d'exemple
cp .env.example .env

# Générez la clé APP_KEY
php artisan key:generate

# Modifiez .env pour le développement local
APP_ENV=local
APP_DEBUG=true
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portfolio_dev
DB_USERNAME=root
DB_PASSWORD=
ADMIN_USERNAME=admin
ADMIN_PASSWORD=password123
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8000
```

### Frontend

```bash
# Allez dans le dossier frontend
cd frontend

# Copiez le fichier d'exemple
cp .env.example .env

# Modifiez .env pour le développement local
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_API_TIMEOUT=10000
```

## 🚀 Production (Render + Supabase)

### Backend (Render)

Dans les paramètres du service Render, allez à "Environment" et ajoutez :

```
APP_ENV=production
APP_DEBUG=false
APP_KEY=base64:YOUR_KEY_FROM_php_artisan_key:generate
APP_URL=https://portfolio-qhse-api.onrender.com

DB_CONNECTION=pgsql
DB_HOST=your-project.supabase.co
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=your_supabase_password
DB_SSLMODE=require

ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password

CORS_ALLOWED_ORIGINS=https://portfolio-qhse.vercel.app
```

### Frontend (Vercel)

Dans les paramètres du projet Vercel, allez à "Environment Variables" et ajoutez :

```
REACT_APP_API_URL=https://portfolio-qhse-api.onrender.com/api
REACT_APP_API_TIMEOUT=10000
```

## 📝 Variables Détaillées

### Backend

#### Application
- **APP_NAME** : Nom de l'application
- **APP_ENV** : Environnement (local, production)
- **APP_KEY** : Clé de chiffrement (généré avec `php artisan key:generate`)
- **APP_DEBUG** : Mode debug (true en développement, false en production)
- **APP_URL** : URL de l'application

#### Database
- **DB_CONNECTION** : Type de base de données (mysql, pgsql)
- **DB_HOST** : Hôte de la base de données
- **DB_PORT** : Port de la base de données
- **DB_DATABASE** : Nom de la base de données
- **DB_USERNAME** : Utilisateur de la base de données
- **DB_PASSWORD** : Mot de passe de la base de données
- **DB_SSLMODE** : Mode SSL (require pour Supabase)

#### Admin
- **ADMIN_USERNAME** : Nom d'utilisateur admin
- **ADMIN_PASSWORD** : Mot de passe admin

#### CORS
- **CORS_ALLOWED_ORIGINS** : Origines autorisées (séparées par des virgules)

#### Cache
- **CACHE_DRIVER** : Driver de cache (file, redis, etc.)

#### Session
- **SESSION_DRIVER** : Driver de session (cookie, file, etc.)
- **SESSION_LIFETIME** : Durée de vie de la session (en minutes)

### Frontend

#### API
- **REACT_APP_API_URL** : URL de l'API backend
- **REACT_APP_API_TIMEOUT** : Timeout des requêtes API (en millisecondes)

## 🔑 Générer la Clé APP_KEY

```bash
# Générez une nouvelle clé
php artisan key:generate

# La clé sera affichée et ajoutée à .env
# Copiez-la pour la production
```

## 🔐 Sécurité

### Bonnes Pratiques

1. **Ne committez jamais .env**
   ```bash
   # Vérifiez que .env est dans .gitignore
   cat .gitignore | grep .env
   ```

2. **Utilisez des mots de passe forts**
   ```
   ADMIN_PASSWORD=your_very_secure_password_123!@#
   ```

3. **Changez les identifiants par défaut**
   ```
   ADMIN_USERNAME=admin (changez-le)
   ADMIN_PASSWORD=password123 (changez-le)
   ```

4. **Utilisez HTTPS en production**
   ```
   APP_URL=https://portfolio-qhse-api.onrender.com
   ```

5. **Configurez CORS correctement**
   ```
   CORS_ALLOWED_ORIGINS=https://portfolio-qhse.vercel.app
   # Ne mettez pas * en production
   ```

## 📋 Checklist de Configuration

### Développement Local

- [ ] Copié .env.example en .env
- [ ] Généré APP_KEY avec `php artisan key:generate`
- [ ] Configuré DB_CONNECTION=mysql
- [ ] Configuré DB_HOST=127.0.0.1
- [ ] Configuré DB_DATABASE=portfolio_dev
- [ ] Configuré ADMIN_USERNAME et ADMIN_PASSWORD
- [ ] Configuré CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8000
- [ ] Copié frontend/.env.example en frontend/.env
- [ ] Configuré REACT_APP_API_URL=http://localhost:8000/api

### Production (Render)

- [ ] Créé un compte Render
- [ ] Créé un Web Service
- [ ] Configuré APP_ENV=production
- [ ] Configuré APP_DEBUG=false
- [ ] Configuré APP_KEY (copié de développement)
- [ ] Configuré DB_CONNECTION=pgsql
- [ ] Configuré DB_HOST=your-project.supabase.co
- [ ] Configuré DB_PORT=5432
- [ ] Configuré DB_DATABASE=postgres
- [ ] Configuré DB_USERNAME=postgres
- [ ] Configuré DB_PASSWORD (de Supabase)
- [ ] Configuré DB_SSLMODE=require
- [ ] Configuré ADMIN_USERNAME et ADMIN_PASSWORD
- [ ] Configuré CORS_ALLOWED_ORIGINS=https://portfolio-qhse.vercel.app

### Production (Vercel)

- [ ] Créé un compte Vercel
- [ ] Créé un projet
- [ ] Configuré REACT_APP_API_URL=https://portfolio-qhse-api.onrender.com/api
- [ ] Configuré REACT_APP_API_TIMEOUT=10000

### Production (Supabase)

- [ ] Créé un compte Supabase
- [ ] Créé un projet
- [ ] Noté Host, Database, User, Password, Port
- [ ] Créé les tables (SQL)
- [ ] Testé la connexion

## 🧪 Tester la Configuration

### Backend

```bash
# Vérifiez que les variables sont chargées
php artisan tinker
> env('APP_NAME')
> env('DB_HOST')
> env('ADMIN_USERNAME')

# Testez la connexion à la base de données
> DB::connection()->getPdo()
```

### Frontend

```bash
# Vérifiez que les variables sont chargées
console.log(process.env.REACT_APP_API_URL)
console.log(process.env.REACT_APP_API_TIMEOUT)
```

## 🔄 Mettre à Jour les Variables

### Développement Local

```bash
# Modifiez .env
nano .env

# Redémarrez le serveur
php artisan serve
```

### Production (Render)

```bash
# Allez sur https://dashboard.render.com
# Cliquez sur votre service
# Allez à "Environment"
# Modifiez les variables
# Cliquez sur "Save"
# Le service redémarrera automatiquement
```

### Production (Vercel)

```bash
# Allez sur https://vercel.com/dashboard
# Cliquez sur votre projet
# Allez à "Settings" → "Environment Variables"
# Modifiez les variables
# Cliquez sur "Save"
# Le projet redéploiera automatiquement
```

## 📞 Support

Pour plus d'aide :
- [Laravel Docs - Configuration](https://laravel.com/docs/configuration)
- [React Docs - Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [Vercel Docs - Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Render Docs - Environment Variables](https://render.com/docs/environment-variables)
