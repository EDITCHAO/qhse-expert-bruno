# Guide de Déploiement - Portfolio QHSE

Ce guide explique comment déployer votre portfolio sur Vercel, Render, ou Supabase.

## 📋 Prérequis

- Compte Supabase (https://supabase.com)
- Compte Vercel (https://vercel.com) OU Render (https://render.com)
- Git installé
- Composer installé localement

## 🚀 Option 1 : Déploiement sur Vercel + Supabase

### Étape 1 : Créer une base de données Supabase

1. Allez sur https://supabase.com et créez un compte
2. Créez un nouveau projet
3. Notez vos identifiants :
   - Host: `your-project.supabase.co`
   - Database: `postgres`
   - Username: `postgres`
   - Password: (généré automatiquement)
   - Port: `5432`

### Étape 2 : Préparer le projet

```bash
# Clonez votre projet
git clone <votre-repo>
cd portfolio

# Installez les dépendances
composer install

# Générez la clé APP_KEY
php artisan key:generate

# Copiez la clé générée (elle commence par base64:...)
```

### Étape 3 : Configurer les variables d'environnement Vercel

1. Allez sur https://vercel.com et connectez-vous
2. Importez votre repository GitHub
3. Dans les paramètres du projet, allez à "Environment Variables"
4. Ajoutez les variables suivantes :

```
APP_ENV=production
APP_DEBUG=false
APP_KEY=base64:YOUR_KEY_FROM_STEP_2
APP_URL=https://your-domain.vercel.app

DB_CONNECTION=pgsql
DB_HOST=your-project.supabase.co
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=your_supabase_password
DB_SSLMODE=require

ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password

CORS_ALLOWED_ORIGINS=https://your-domain.vercel.app
```

### Étape 4 : Déployer sur Vercel

```bash
# Installez Vercel CLI
npm install -g vercel

# Déployez
vercel
```

### Étape 5 : Exécuter les migrations

Après le déploiement, exécutez les migrations :

```bash
# Via Vercel CLI
vercel env pull
php artisan migrate --force
```

Ou via l'interface Vercel :
- Allez dans "Deployments"
- Cliquez sur le dernier déploiement
- Allez dans "Functions" et exécutez une fonction pour déclencher les migrations

---

## 🚀 Option 2 : Déploiement sur Render

### Étape 1 : Créer une base de données Supabase (même que Option 1)

### Étape 2 : Préparer le projet

```bash
git clone <votre-repo>
cd portfolio
composer install
php artisan key:generate
```

### Étape 3 : Déployer sur Render

1. Allez sur https://render.com et connectez-vous
2. Cliquez sur "New +" → "Web Service"
3. Connectez votre repository GitHub
4. Configurez :
   - **Name**: portfolio-qhse
   - **Runtime**: PHP
   - **Build Command**: `composer install && php artisan migrate --force`
   - **Start Command**: `php -S 0.0.0.0:$PORT public/index.php`

### Étape 4 : Ajouter les variables d'environnement

Dans les paramètres du service, allez à "Environment" et ajoutez :

```
APP_ENV=production
APP_DEBUG=false
APP_KEY=base64:YOUR_KEY
APP_URL=https://your-service.onrender.com

DB_CONNECTION=pgsql
DB_HOST=your-project.supabase.co
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=your_supabase_password
DB_SSLMODE=require

ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password

CORS_ALLOWED_ORIGINS=https://your-service.onrender.com
```

### Étape 5 : Déployer

Cliquez sur "Create Web Service" et attendez le déploiement.

---

## 🚀 Option 3 : Déploiement sur Supabase (Edge Functions)

### Étape 1 : Installer Supabase CLI

```bash
npm install -g supabase
```

### Étape 2 : Initialiser le projet

```bash
supabase init
supabase link --project-ref your-project-ref
```

### Étape 3 : Créer les Edge Functions

Les Edge Functions Supabase utilisent Deno. Pour garder votre code PHP, vous pouvez :
- Garder l'API PHP sur Vercel/Render
- Utiliser Supabase uniquement pour la base de données

---

## 📝 Configuration de la Base de Données

### Créer les tables dans Supabase

1. Allez dans l'éditeur SQL de Supabase
2. Exécutez :

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

CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_created_at ON contacts(created_at);
```

Ou exécutez les migrations Laravel :

```bash
php artisan migrate --force
```

---

## 🔐 Sécurité

### Bonnes pratiques :

1. **Changez les identifiants admin** :
   - Utilisez un username et password forts
   - Stockez-les dans les variables d'environnement

2. **Utilisez HTTPS** :
   - Vercel et Render fournissent HTTPS automatiquement
   - Configurez `APP_URL` avec `https://`

3. **Protégez votre base de données** :
   - Utilisez les Row Level Security (RLS) de Supabase
   - Limitez les accès aux tables

4. **Validez les entrées** :
   - Le code valide déjà les données du formulaire
   - Assurez-vous que les règles de validation sont strictes

---

## 🧪 Tests Locaux

Avant de déployer, testez localement :

```bash
# Avec MySQL (développement)
php artisan serve

# Avec PostgreSQL (simulation production)
# Modifiez .env pour utiliser PostgreSQL
php artisan serve
```

---

## 📊 Monitoring

### Vercel
- Dashboard : https://vercel.com/dashboard
- Logs : Deployments → Logs

### Render
- Dashboard : https://dashboard.render.com
- Logs : Service → Logs

### Supabase
- Dashboard : https://app.supabase.com
- Logs : Project → Logs

---

## ❓ Dépannage

### Erreur : "SQLSTATE[08006]"
- Vérifiez les identifiants Supabase
- Vérifiez que `DB_SSLMODE=require`

### Erreur : "Class not found"
- Exécutez `composer install` sur le serveur
- Vérifiez que le build command inclut `composer install`

### Erreur : "Permission denied"
- Vérifiez les permissions de la base de données
- Vérifiez que l'utilisateur PostgreSQL a les droits nécessaires

### Erreur : "CORS"
- Vérifiez `CORS_ALLOWED_ORIGINS`
- Assurez-vous que le domaine frontend est dans la liste

---

## 📞 Support

Pour plus d'aide :
- Vercel Docs : https://vercel.com/docs
- Render Docs : https://render.com/docs
- Supabase Docs : https://supabase.com/docs
- Laravel Docs : https://laravel.com/docs
