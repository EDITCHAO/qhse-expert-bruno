# 🔨 Build & Output Settings - Configuration Complète

## 📋 Table des Matières
1. [Frontend Build Settings](#frontend-build-settings)
2. [Backend Build Settings](#backend-build-settings)
3. [Vercel Configuration](#vercel-configuration)
4. [Render Configuration](#render-configuration)
5. [Docker Configuration](#docker-configuration)
6. [Output Directories](#output-directories)

---

## 🎨 FRONTEND BUILD SETTINGS

### Fichier: `frontend/vercel.json`

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Configuration Détaillée:

| Setting | Valeur | Description |
|---------|--------|-------------|
| `version` | `2` | Version de la configuration Vercel |
| `builds[].src` | `package.json` | Fichier source pour détecter le build |
| `builds[].use` | `@vercel/static-build` | Builder pour React (static) |
| `builds[].config.distDir` | `build` | Dossier de sortie du build |
| `routes[].src` | `/(.*)`  | Route pour toutes les URLs |
| `routes[].dest` | `/index.html` | Redirige vers index.html (SPA) |

### Build Process (Frontend):

```bash
# 1. Installation des dépendances
npm install

# 2. Build React
npm run build

# 3. Output généré
frontend/build/
├── index.html
├── static/
│   ├── js/
│   │   ├── main.[hash].js
│   │   ├── main.[hash].js.map
│   │   └── ...
│   ├── css/
│   │   ├── main.[hash].css
│   │   └── ...
│   └── media/
│       └── [images, fonts, etc.]
└── favicon.ico
```

### Environment Variables (Frontend):

```env
# .env.production
REACT_APP_API_URL=https://portfolio-qhse-api.onrender.com/api
REACT_APP_ENV=production
REACT_APP_SITE_NAME=QHSEPRO
REACT_APP_SITE_TITLE=QHSEPRO - Expert QHSE
REACT_APP_PRIMARY_COLOR=#ff6b35
REACT_APP_DARK_COLOR=#1a2332
REACT_APP_DEBUG=false
```

---

## 🔧 BACKEND BUILD SETTINGS

### Fichier: `backend/render.yaml`

```yaml
services:
  - type: web
    name: portfolio-qhse-api
    runtime: php
    plan: free
    buildCommand: composer install --no-dev --optimize-autoloader && php artisan migrate --force
    startCommand: php -S 0.0.0.0:$PORT public/index.php
    envVars:
      - key: APP_ENV
        value: production
      - key: APP_DEBUG
        value: false
      - key: APP_KEY
        scope: run
      - key: APP_URL
        value: https://portfolio-qhse-api.onrender.com
      - key: DB_CONNECTION
        value: pgsql
      - key: DB_HOST
        fromDatabase:
          name: portfolio-db
          property: host
      - key: DB_PORT
        fromDatabase:
          name: portfolio-db
          property: port
      - key: DB_DATABASE
        fromDatabase:
          name: portfolio-db
          property: database
      - key: DB_USERNAME
        fromDatabase:
          name: portfolio-db
          property: user
      - key: DB_PASSWORD
        fromDatabase:
          name: portfolio-db
          property: password
      - key: DB_SSLMODE
        value: require
      - key: CORS_ALLOWED_ORIGINS
        value: https://portfolio-qhse.vercel.app

databases:
  - name: portfolio-db
    databaseName: portfolio
    user: postgres
    plan: free
    region: oregon
```

### Configuration Détaillée:

| Setting | Valeur | Description |
|---------|--------|-------------|
| `type` | `web` | Type de service (web, worker, etc.) |
| `runtime` | `php` | Runtime PHP 8.2 |
| `plan` | `free` | Plan gratuit Render |
| `buildCommand` | `composer install && php artisan migrate` | Commande de build |
| `startCommand` | `php -S 0.0.0.0:$PORT public/index.php` | Commande de démarrage |
| `DB_CONNECTION` | `pgsql` | PostgreSQL (Supabase) |
| `DB_SSLMODE` | `require` | SSL requis pour la DB |

### Build Process (Backend):

```bash
# 1. Installation des dépendances
composer install --no-dev --optimize-autoloader

# 2. Migration de la base de données
php artisan migrate --force

# 3. Démarrage du serveur
php -S 0.0.0.0:8000 public/index.php
```

### Environment Variables (Backend):

```env
# .env.production (Render)
APP_ENV=production
APP_DEBUG=false
APP_KEY=base64:YOUR_APP_KEY_HERE
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

---

## 🌐 VERCEL CONFIGURATION

### Fichier: `vercel.json` (Root)

```json
{
  "version": 2,
  "buildCommand": "composer install && npm install",
  "env": {
    "APP_ENV": "production",
    "APP_DEBUG": "false"
  },
  "functions": {
    "api/**/*.php": {
      "runtime": "php-8.2"
    }
  },
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1.php"
    },
    {
      "src": "/(.*)",
      "dest": "/public/index.php"
    }
  ]
}
```

### Configuration Détaillée:

| Setting | Valeur | Description |
|---------|--------|-------------|
| `version` | `2` | Version Vercel |
| `buildCommand` | `composer install && npm install` | Installation des dépendances |
| `env.APP_ENV` | `production` | Environnement production |
| `env.APP_DEBUG` | `false` | Debug désactivé |
| `functions.runtime` | `php-8.2` | Runtime PHP 8.2 |
| `routes[0].src` | `/api/(.*)` | Routes API |
| `routes[1].src` | `/(.*)` | Routes frontend |

---

## 🐳 DOCKER CONFIGURATION

### Fichier: `Dockerfile`

```dockerfile
FROM php:8.2-fpm

# Installer les extensions PHP nécessaires
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-install pdo pdo_pgsql zip

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet
COPY . .

# Installer les dépendances
RUN composer install --no-dev --optimize-autoloader

# Définir les permissions
RUN chown -R www-data:www-data /app

# Exposer le port
EXPOSE 9000

# Commande de démarrage
CMD ["php-fpm"]
```

### Fichier: `docker-compose.yml`

```yaml
version: '3.8'

services:
  app:
    build: .
    container_name: portfolio-app
    working_dir: /app
    volumes:
      - ./:/app
    ports:
      - "8000:8000"
    environment:
      - APP_ENV=local
      - APP_DEBUG=true
      - DB_CONNECTION=pgsql
      - DB_HOST=postgres
      - DB_PORT=5432
      - DB_DATABASE=portfolio
      - DB_USERNAME=postgres
      - DB_PASSWORD=postgres
    depends_on:
      - postgres
    command: php artisan serve --host=0.0.0.0

  postgres:
    image: postgres:15-alpine
    container_name: portfolio-postgres
    environment:
      - POSTGRES_DB=portfolio
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Commandes Docker:

```bash
# Construire l'image
docker-compose build

# Démarrer les services
docker-compose up -d

# Voir les logs
docker-compose logs -f app

# Arrêter les services
docker-compose down

# Accéder à l'app
http://localhost:8000
```

---

## 📁 OUTPUT DIRECTORIES

### Frontend Output

```
frontend/build/
├── index.html                    # Page principale (minifiée)
├── favicon.ico                   # Favicon
├── manifest.json                 # PWA manifest
├── robots.txt                    # SEO robots
└── static/
    ├── js/
    │   ├── main.[hash].js        # Code React minifié
    │   ├── main.[hash].js.map    # Source map
    │   └── [autres chunks]
    ├── css/
    │   ├── main.[hash].css       # CSS minifié
    │   └── main.[hash].css.map   # Source map CSS
    └── media/
        ├── images/
        ├── fonts/
        └── [autres assets]
```

**Taille typique:** 100-300 KB (gzippé)

### Backend Output

```
Pas de dossier de build spécifique
Les fichiers source sont déployés directement:

├── app/
├── bootstrap/
├── config/
├── database/
├── public/
│   └── index.php                 # Point d'entrée
├── routes/
├── storage/
├── vendor/                        # Dépendances Composer
└── .env                           # Variables d'environnement
```

---

## 🚀 BUILD COMMANDS SUMMARY

### Frontend

```bash
# Développement
cd frontend
npm install
npm run dev                        # Port 3000

# Production
npm run build                      # Crée frontend/build/
npm run serve                      # Sert le build localement
```

### Backend

```bash
# Développement
npm install
npm run dev                        # Port 8000

# Production
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php -S 0.0.0.0:8000 public/index.php
```

### Docker

```bash
# Développement avec Docker
docker-compose up -d
# Accès: http://localhost:8000
```

---

## 📊 BUILD SETTINGS COMPARISON

| Aspect | Frontend | Backend |
|--------|----------|---------|
| **Build Tool** | React Scripts | Composer |
| **Output Dir** | `frontend/build/` | N/A (source) |
| **Runtime** | Node.js | PHP 8.2 |
| **Deployment** | Vercel | Render |
| **Database** | N/A | PostgreSQL (Supabase) |
| **Build Time** | ~2-3 min | ~1-2 min |
| **Output Size** | ~100-300 KB | ~50-100 MB (avec vendor) |

---

## ✅ DEPLOYMENT CHECKLIST

### Frontend (Vercel)
- [ ] `frontend/vercel.json` configuré
- [ ] `.env.production` avec `REACT_APP_API_URL` correcte
- [ ] `npm run build` fonctionne localement
- [ ] `frontend/build/` généré avec succès
- [ ] Variables d'environnement définies sur Vercel
- [ ] Domain configuré (si custom domain)

### Backend (Render)
- [ ] `backend/render.yaml` configuré
- [ ] `.env.production` avec credentials DB
- [ ] `composer install` fonctionne
- [ ] Migrations prêtes
- [ ] Variables d'environnement définies sur Render
- [ ] Database PostgreSQL créée
- [ ] CORS configuré pour le frontend

### Docker
- [ ] `Dockerfile` valide
- [ ] `docker-compose.yml` configuré
- [ ] `docker-compose build` fonctionne
- [ ] `docker-compose up` démarre sans erreurs
- [ ] Services accessibles sur les bons ports

---

## 🔗 URLS DE DÉPLOIEMENT

| Service | URL | Status |
|---------|-----|--------|
| Frontend | https://portfolio-qhse.vercel.app | Vercel |
| Backend API | https://portfolio-qhse-api.onrender.com | Render |
| Database | Supabase PostgreSQL | Render |
| Local Frontend | http://localhost:3000 | Dev |
| Local Backend | http://localhost:8000 | Dev |

---

## 📝 NOTES IMPORTANTES

1. **Build Frontend** - Génère des fichiers statiques optimisés et minifiés
2. **Build Backend** - Installe les dépendances et exécute les migrations
3. **Output Frontend** - Dossier `build/` prêt pour le déploiement
4. **Output Backend** - Fichiers source + vendor déployés directement
5. **Docker** - Permet de tester localement dans un environnement similaire à la production
6. **Variables d'environnement** - Différentes pour dev, staging et production
7. **CORS** - Doit être configuré pour permettre les requêtes du frontend

