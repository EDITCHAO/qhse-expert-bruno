# 🚀 Commandes de Déploiement - Portfolio QHSE

## 📋 Prérequis

- Git installé
- Compte GitHub
- Compte Vercel
- Compte Render
- Compte Supabase

## 🔧 Préparation

### 1. Cloner et préparer le projet

```bash
# Clonez le repository
git clone <votre-repo>
cd portfolio

# Installez les dépendances backend
composer install

# Générez la clé APP_KEY
php artisan key:generate
# Copiez la clé affichée (commence par base64:...)

# Installez les dépendances frontend
cd frontend
npm install
cd ..
```

### 2. Créer un repository GitHub

```bash
# Initialisez Git (si pas déjà fait)
git init

# Ajoutez tous les fichiers
git add .

# Créez le premier commit
git commit -m "Initial commit: React + Laravel API + Supabase"

# Créez un repository sur GitHub
# https://github.com/new

# Ajoutez le remote
git remote add origin https://github.com/votre-username/portfolio.git

# Changez la branche en main
git branch -M main

# Poussez le code
git push -u origin main
```

## 🗄️ Supabase - Configuration de la Base de Données

### 1. Créer un projet Supabase

```bash
# Allez sur https://supabase.com
# Créez un nouveau projet
# Notez les identifiants :
# - Host: your-project.supabase.co
# - Database: postgres
# - User: postgres
# - Password: (généré)
# - Port: 5432
```

### 2. Créer les tables

```bash
# Allez dans SQL Editor de Supabase
# Exécutez ce SQL :

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

## 🔴 Render - Déploiement du Backend

### 1. Créer un Web Service

```bash
# Allez sur https://render.com
# Connectez-vous avec GitHub
# Cliquez sur "New +" → "Web Service"
# Sélectionnez votre repository
```

### 2. Configurer le service

```
Name: portfolio-qhse-api
Runtime: PHP
Build Command: composer install --no-dev --optimize-autoloader && php artisan migrate --force
Start Command: php -S 0.0.0.0:$PORT public/index.php
Plan: Free
```

### 3. Ajouter les variables d'environnement

```bash
# Dans Render, allez à "Environment"
# Ajoutez ces variables :

APP_ENV=production
APP_DEBUG=false
APP_KEY=base64:YOUR_KEY_FROM_STEP_1
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

### 4. Déployer

```bash
# Cliquez sur "Create Web Service"
# Attendez le déploiement (5-10 minutes)
# Notez l'URL : https://portfolio-qhse-api.onrender.com
```

## 🔵 Vercel - Déploiement du Frontend

### Option 1 : Via Vercel CLI

```bash
# Installez Vercel CLI
npm install -g vercel

# Allez dans le dossier frontend
cd frontend

# Déployez
vercel --prod

# Lors du déploiement, configurez :
# - Project name: portfolio-qhse
# - Framework: Create React App
# - Build command: npm run build
# - Output directory: build
```

### Option 2 : Via GitHub (Recommandé)

```bash
# Allez sur https://vercel.com
# Cliquez sur "Import Project"
# Sélectionnez votre repository GitHub
# Configurez :
# - Framework: Create React App
# - Root Directory: frontend
# - Build Command: npm run build
# - Output Directory: build
```

### Ajouter les variables d'environnement

```bash
# Dans Vercel, allez à "Settings" → "Environment Variables"
# Ajoutez :

REACT_APP_API_URL=https://portfolio-qhse-api.onrender.com/api
REACT_APP_API_TIMEOUT=10000
```

### Déployer

```bash
# Cliquez sur "Deploy"
# Attendez le déploiement (2-5 minutes)
# Notez l'URL : https://portfolio-qhse.vercel.app
```

## ✅ Vérification du Déploiement

### 1. Tester l'API

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

# Réponse attendue :
# {
#   "success": true,
#   "message": "Message envoyé avec succès!",
#   "data": { ... }
# }
```

### 2. Tester la connexion admin

```bash
# Tester la connexion
curl -X POST https://portfolio-qhse-api.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "your_secure_password"
  }'

# Réponse attendue :
# {
#   "success": true,
#   "message": "Connexion réussie",
#   "token": "..."
# }
```

### 3. Tester le frontend

```bash
# Allez sur https://portfolio-qhse.vercel.app
# Remplissez et envoyez le formulaire de contact
# Allez sur https://portfolio-qhse.vercel.app/admin/login
# Connectez-vous avec admin / your_secure_password
# Vérifiez que le message apparaît dans le tableau de bord
```

## 🔄 Mise à Jour du Déploiement

### Mettre à jour le backend

```bash
# Modifiez le code
# Committez et poussez
git add .
git commit -m "Update backend"
git push origin main

# Render redéploiera automatiquement
```

### Mettre à jour le frontend

```bash
# Modifiez le code
# Committez et poussez
git add .
git commit -m "Update frontend"
git push origin main

# Vercel redéploiera automatiquement
```

## 🐛 Dépannage

### Erreur : "SQLSTATE[08006]"

```bash
# Vérifiez les identifiants Supabase
# Vérifiez que DB_SSLMODE=require
# Vérifiez que le firewall Supabase autorise les connexions
```

### Erreur : "CORS"

```bash
# Vérifiez CORS_ALLOWED_ORIGINS dans Render
# Assurez-vous que le domaine Vercel est dans la liste
# Vérifiez que le middleware CORS est activé
```

### Erreur : "401 Unauthorized"

```bash
# Vérifiez que le token est envoyé correctement
# Vérifiez que le token n'a pas expiré
# Vérifiez que les identifiants admin sont corrects
```

### Erreur : "502 Bad Gateway"

```bash
# Attendez quelques minutes (Render peut être en cours de déploiement)
# Vérifiez les logs Render
# Vérifiez que la base de données est accessible
```

## 📊 Monitoring

### Vercel

```bash
# Allez sur https://vercel.com/dashboard
# Cliquez sur votre projet
# Allez à "Deployments" pour voir les logs
# Allez à "Analytics" pour voir les performances
```

### Render

```bash
# Allez sur https://dashboard.render.com
# Cliquez sur votre service
# Allez à "Logs" pour voir les logs
# Allez à "Metrics" pour voir les performances
```

### Supabase

```bash
# Allez sur https://app.supabase.com
# Cliquez sur votre projet
# Allez à "Logs" pour voir les logs
# Allez à "Database" pour voir les données
```

## 🎉 Résumé

Votre portfolio est maintenant déployé sur :

- **Frontend** : https://portfolio-qhse.vercel.app
- **Backend** : https://portfolio-qhse-api.onrender.com
- **Database** : Supabase

Vous pouvez maintenant partager votre portfolio avec le monde! 🚀

## 📞 Support

Pour plus d'aide :
- [Vercel Docs](https://vercel.com/docs)
- [Render Docs](https://render.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Laravel Docs](https://laravel.com/docs)
- [React Docs](https://react.dev)
