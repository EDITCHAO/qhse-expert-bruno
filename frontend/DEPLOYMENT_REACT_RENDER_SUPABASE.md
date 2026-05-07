# 🚀 Guide de Déploiement Complet - React + Render + Supabase

Ce guide explique comment déployer votre portfolio avec :
- **Frontend** : React sur Vercel
- **Backend** : Laravel API sur Render
- **Base de données** : PostgreSQL sur Supabase

---

## 📋 Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (React)                      │
│                   Vercel / Netlify                       │
│              https://portfolio-qhse.vercel.app           │
└────────────────────────┬────────────────────────────────┘
                         │ API Calls
                         ▼
┌─────────────────────────────────────────────────────────┐
│                  Backend (Laravel API)                   │
│                      Render                              │
│            https://portfolio-qhse-api.onrender.com       │
└────────────────────────┬────────────────────────────────┘
                         │ Database Queries
                         ▼
┌─────────────────────────────────────────────────────────┐
│              Database (PostgreSQL)                       │
│                    Supabase                              │
│            your-project.supabase.co                      │
└─────────────────────────────────────────────────────────┘
```

---

## 🔧 Étape 1 : Créer une base de données Supabase

### 1.1 Créer un compte Supabase

1. Allez sur https://supabase.com
2. Cliquez sur "Start your project"
3. Connectez-vous avec GitHub ou créez un compte

### 1.2 Créer un nouveau projet

1. Cliquez sur "New project"
2. Remplissez les informations :
   - **Name** : portfolio-qhse
   - **Database Password** : Générez un mot de passe fort
   - **Region** : Choisissez la région la plus proche
3. Cliquez sur "Create new project"

### 1.3 Récupérer les identifiants

1. Allez dans "Settings" → "Database"
2. Notez les informations :
   - **Host** : `your-project.supabase.co`
   - **Database** : `postgres`
   - **User** : `postgres`
   - **Password** : (celui que vous avez défini)
   - **Port** : `5432`

### 1.4 Créer les tables

1. Allez dans "SQL Editor"
2. Cliquez sur "New query"
3. Exécutez ce SQL :

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

---

## 🚀 Étape 2 : Déployer le Backend sur Render

### 2.1 Préparer le projet

```bash
# Clonez votre repository
git clone <votre-repo>
cd portfolio

# Installez les dépendances
composer install

# Générez la clé APP_KEY
php artisan key:generate
# Copiez la clé affichée (commence par base64:...)
```

### 2.2 Créer un repository GitHub

```bash
# Initialisez Git (si pas déjà fait)
git init
git add .
git commit -m "Initial commit"

# Créez un repository sur GitHub
# Puis poussez votre code
git remote add origin https://github.com/votre-username/portfolio.git
git branch -M main
git push -u origin main
```

### 2.3 Déployer sur Render

1. Allez sur https://render.com
2. Connectez-vous avec GitHub
3. Cliquez sur "New +" → "Web Service"
4. Sélectionnez votre repository `portfolio`
5. Configurez :
   - **Name** : `portfolio-qhse-api`
   - **Runtime** : `PHP`
   - **Build Command** : `composer install --no-dev --optimize-autoloader && php artisan migrate --force`
   - **Start Command** : `php -S 0.0.0.0:$PORT public/index.php`
   - **Plan** : Free (ou payant selon vos besoins)

### 2.4 Ajouter les variables d'environnement

Dans les paramètres du service, allez à "Environment" et ajoutez :

```
APP_ENV=production
APP_DEBUG=false
APP_KEY=base64:YOUR_KEY_FROM_STEP_2.1
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

### 2.5 Déployer

Cliquez sur "Create Web Service" et attendez le déploiement (5-10 minutes).

**Notez l'URL du service** : `https://portfolio-qhse-api.onrender.com`

---

## 🎨 Étape 3 : Déployer le Frontend sur Vercel

### 3.1 Préparer le frontend

```bash
# Allez dans le dossier frontend
cd frontend

# Installez les dépendances
npm install

# Créez le fichier .env
echo "REACT_APP_API_URL=https://portfolio-qhse-api.onrender.com/api" > .env

# Testez localement
npm start
```

### 3.2 Déployer sur Vercel

#### Option A : Via Vercel CLI

```bash
# Installez Vercel CLI
npm install -g vercel

# Déployez
vercel --prod
```

#### Option B : Via GitHub

1. Poussez votre code sur GitHub
2. Allez sur https://vercel.com
3. Cliquez sur "Import Project"
4. Sélectionnez votre repository
5. Configurez :
   - **Framework** : Create React App
   - **Root Directory** : `frontend`
   - **Build Command** : `npm run build`
   - **Output Directory** : `build`

### 3.3 Ajouter les variables d'environnement

Dans les paramètres du projet Vercel, allez à "Environment Variables" et ajoutez :

```
REACT_APP_API_URL=https://portfolio-qhse-api.onrender.com/api
REACT_APP_API_TIMEOUT=10000
```

### 3.4 Déployer

Cliquez sur "Deploy" et attendez le déploiement (2-5 minutes).

**Notez l'URL du site** : `https://portfolio-qhse.vercel.app`

---

## ✅ Vérifier le déploiement

### 4.1 Tester l'API

```bash
# Tester la création de contact
curl -X POST https://portfolio-qhse-api.onrender.com/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Test",
    "email": "test@example.com",
    "numero": "1234567890",
    "sujet": "Test",
    "message": "Test message"
  }'

# Tester la connexion admin
curl -X POST https://portfolio-qhse-api.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "your_secure_password"
  }'
```

### 4.2 Tester le frontend

1. Allez sur https://portfolio-qhse.vercel.app
2. Remplissez et envoyez le formulaire de contact
3. Allez sur https://portfolio-qhse.vercel.app/admin/login
4. Connectez-vous avec les identifiants admin
5. Vérifiez que le message apparaît dans le tableau de bord

---

## 🔐 Sécurité

### Bonnes pratiques

1. **Changez les identifiants admin**
   - Utilisez un username et password forts
   - Stockez-les dans les variables d'environnement Render

2. **Utilisez HTTPS**
   - Vercel et Render fournissent HTTPS automatiquement
   - Configurez `APP_URL` avec `https://`

3. **Configurez CORS**
   - Assurez-vous que `CORS_ALLOWED_ORIGINS` contient votre domaine Vercel
   - Ne mettez pas `*` en production

4. **Protégez votre base de données**
   - Utilisez un mot de passe fort pour Supabase
   - Activez les Row Level Security (RLS) si nécessaire

5. **Validez les entrées**
   - Le code valide déjà les données du formulaire
   - Assurez-vous que les règles de validation sont strictes

---

## 📊 Monitoring

### Vercel
- Dashboard : https://vercel.com/dashboard
- Logs : Deployments → Logs
- Analytics : Analytics

### Render
- Dashboard : https://dashboard.render.com
- Logs : Service → Logs
- Metrics : Service → Metrics

### Supabase
- Dashboard : https://app.supabase.com
- Logs : Project → Logs
- Database : Project → Database

---

## 🧪 Tests Locaux

Avant de déployer, testez localement :

### Backend

```bash
# Avec PostgreSQL (simulation production)
# Modifiez .env pour utiliser PostgreSQL
php artisan serve
```

### Frontend

```bash
cd frontend
npm start
```

---

## ❓ Dépannage

### Erreur : "SQLSTATE[08006]"
- Vérifiez les identifiants Supabase
- Vérifiez que `DB_SSLMODE=require`
- Vérifiez que le firewall Supabase autorise les connexions

### Erreur : "CORS"
- Vérifiez `CORS_ALLOWED_ORIGINS` dans Render
- Assurez-vous que le domaine Vercel est dans la liste
- Vérifiez que le middleware CORS est activé

### Erreur : "401 Unauthorized"
- Vérifiez que le token est envoyé correctement
- Vérifiez que le token n'a pas expiré
- Vérifiez que les identifiants admin sont corrects

### Erreur : "502 Bad Gateway"
- Attendez quelques minutes (Render peut être en cours de déploiement)
- Vérifiez les logs Render
- Vérifiez que la base de données est accessible

### Erreur : "Cannot find module"
- Exécutez `composer install` sur Render
- Vérifiez que le build command inclut `composer install`

---

## 📞 Support

Pour plus d'aide :
- Vercel Docs : https://vercel.com/docs
- Render Docs : https://render.com/docs
- Supabase Docs : https://supabase.com/docs
- Laravel Docs : https://laravel.com/docs
- React Docs : https://react.dev

---

## 🎉 Félicitations!

Votre portfolio est maintenant déployé sur :
- **Frontend** : https://portfolio-qhse.vercel.app
- **Backend** : https://portfolio-qhse-api.onrender.com
- **Database** : Supabase

Vous pouvez maintenant partager votre portfolio avec le monde!
