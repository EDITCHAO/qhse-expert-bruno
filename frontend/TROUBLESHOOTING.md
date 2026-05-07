# 🔧 Troubleshooting - Portfolio QHSE

## 🚨 Problèmes Courants et Solutions

### Frontend (React)

#### Erreur : "Cannot find module 'react'"

```bash
# Solution : Réinstallez les dépendances
cd frontend
rm -rf node_modules package-lock.json
npm install
```

#### Erreur : "REACT_APP_API_URL is not defined"

```bash
# Solution : Créez le fichier .env
cd frontend
cp .env.example .env

# Modifiez .env avec votre URL API
REACT_APP_API_URL=http://localhost:8000/api
```

#### Erreur : "Port 3000 already in use"

```bash
# Solution : Utilisez un autre port
npm start -- --port 3001

# Ou tuez le processus sur le port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

#### Erreur : "CORS error"

```
Access to XMLHttpRequest at 'http://localhost:8000/api/contacts' 
from origin 'http://localhost:3000' has been blocked by CORS policy
```

**Solution** :
1. Vérifiez que le backend est en cours d'exécution
2. Vérifiez que `CORS_ALLOWED_ORIGINS` inclut `http://localhost:3000`
3. Vérifiez que le middleware CORS est activé

```php
// app/Http/Kernel.php
protected $middleware = [
    \App\Http\Middleware\CorsMiddleware::class,
    ...
];
```

#### Erreur : "Cannot POST /api/contacts"

```
POST http://localhost:8000/api/contacts 404 (Not Found)
```

**Solution** :
1. Vérifiez que le backend est en cours d'exécution
2. Vérifiez que les routes sont correctes
3. Vérifiez que le contrôleur existe

```bash
# Vérifiez les routes
php artisan route:list | grep api
```

#### Erreur : "401 Unauthorized"

```
GET http://localhost:8000/api/contacts 401 (Unauthorized)
```

**Solution** :
1. Vérifiez que vous êtes connecté
2. Vérifiez que le token est stocké dans `localStorage`
3. Vérifiez que le token n'a pas expiré

```javascript
// Vérifiez le token dans la console
console.log(localStorage.getItem('admin_token'));
```

### Backend (Laravel)

#### Erreur : "Class not found"

```
Class 'App\Http\Controllers\Api\ContactController' not found
```

**Solution** :
```bash
# Régénérez l'autoloader
composer dump-autoload

# Ou réinstallez les dépendances
composer install
```

#### Erreur : "No application encryption key"

```
RuntimeException: No application encryption key has been specified.
```

**Solution** :
```bash
# Générez la clé
php artisan key:generate

# Vérifiez que APP_KEY est défini dans .env
cat .env | grep APP_KEY
```

#### Erreur : "SQLSTATE[HY000]"

```
SQLSTATE[HY000]: General error: 1030 Got error 28 from storage engine
```

**Solution** :
1. Vérifiez que le serveur de base de données est en cours d'exécution
2. Vérifiez les identifiants de base de données
3. Vérifiez que la base de données existe

```bash
# Vérifiez la connexion
php artisan tinker
> DB::connection()->getPdo()
```

#### Erreur : "SQLSTATE[08006]"

```
SQLSTATE[08006]: Connection failure: 7 could not connect to server
```

**Solution** (Supabase) :
1. Vérifiez les identifiants Supabase
2. Vérifiez que `DB_SSLMODE=require`
3. Vérifiez que le firewall Supabase autorise les connexions

```bash
# Testez la connexion
psql -h your-project.supabase.co -U postgres -d postgres
```

#### Erreur : "SQLSTATE[42P01]"

```
SQLSTATE[42P01]: Undefined table: 7 ERROR: relation "contacts" does not exist
```

**Solution** :
```bash
# Exécutez les migrations
php artisan migrate

# Ou créez les tables manuellement
php artisan migrate:fresh
```

#### Erreur : "Port 8000 already in use"

```bash
# Solution : Utilisez un autre port
php artisan serve --port=8001

# Ou tuez le processus sur le port 8000
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :8000
kill -9 <PID>
```

#### Erreur : "Permission denied"

```
Permission denied: storage/logs/laravel.log
```

**Solution** :
```bash
# Changez les permissions
chmod -R 775 storage bootstrap/cache

# Ou sur Windows
icacls storage /grant Everyone:F /T
icacls bootstrap/cache /grant Everyone:F /T
```

### Déploiement (Render)

#### Erreur : "Build failed"

**Solution** :
1. Vérifiez les logs Render
2. Vérifiez que le build command est correct
3. Vérifiez que les dépendances sont installées

```bash
# Build command correct
composer install --no-dev --optimize-autoloader && php artisan migrate --force
```

#### Erreur : "502 Bad Gateway"

**Solution** :
1. Attendez quelques minutes (Render peut être en cours de déploiement)
2. Vérifiez les logs Render
3. Vérifiez que la base de données est accessible

```bash
# Vérifiez les logs
# Allez sur https://dashboard.render.com
# Cliquez sur votre service
# Allez à "Logs"
```

#### Erreur : "Application error"

**Solution** :
1. Vérifiez les logs Render
2. Vérifiez que les variables d'environnement sont correctes
3. Vérifiez que la base de données est accessible

### Déploiement (Vercel)

#### Erreur : "Build failed"

**Solution** :
1. Vérifiez les logs Vercel
2. Vérifiez que le build command est correct
3. Vérifiez que les dépendances sont installées

```bash
# Build command correct
npm run build
```

#### Erreur : "Cannot find module"

**Solution** :
```bash
# Réinstallez les dépendances
rm -rf node_modules package-lock.json
npm install
```

#### Erreur : "API not responding"

**Solution** :
1. Vérifiez que le backend est en cours d'exécution
2. Vérifiez que `REACT_APP_API_URL` est correct
3. Vérifiez que CORS est configuré

### Base de Données (Supabase)

#### Erreur : "Connection refused"

**Solution** :
1. Vérifiez que le projet Supabase est actif
2. Vérifiez les identifiants
3. Vérifiez que le firewall autorise les connexions

#### Erreur : "Table does not exist"

**Solution** :
1. Vérifiez que les migrations ont été exécutées
2. Vérifiez que les tables existent dans Supabase

```sql
-- Vérifiez les tables
SELECT * FROM information_schema.tables WHERE table_schema = 'public';
```

#### Erreur : "Permission denied"

**Solution** :
1. Vérifiez que l'utilisateur a les permissions nécessaires
2. Vérifiez les Row Level Security (RLS)

## 🔍 Débogage

### Frontend

```javascript
// Vérifiez les variables d'environnement
console.log(process.env.REACT_APP_API_URL);

// Vérifiez le token
console.log(localStorage.getItem('admin_token'));

// Vérifiez les requêtes API
// Allez dans DevTools → Network
```

### Backend

```bash
# Vérifiez les logs
tail -f storage/logs/laravel.log

# Utilisez Tinker
php artisan tinker

# Vérifiez la base de données
php artisan tinker
> DB::table('contacts')->get()

# Vérifiez les routes
php artisan route:list
```

### Base de Données

```sql
-- Vérifiez les tables
SELECT * FROM information_schema.tables WHERE table_schema = 'public';

-- Vérifiez les données
SELECT * FROM contacts;

-- Vérifiez les indices
SELECT * FROM pg_indexes WHERE tablename = 'contacts';
```

## 📞 Ressources

- [Vercel Docs](https://vercel.com/docs)
- [Render Docs](https://render.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Laravel Docs](https://laravel.com/docs)
- [React Docs](https://react.dev)

## 🆘 Besoin d'Aide?

Si vous ne trouvez pas la solution :

1. Vérifiez les logs (Render, Vercel, Supabase)
2. Consultez la documentation officielle
3. Ouvrez une issue sur GitHub
4. Contactez le support

## 💡 Conseils

- Gardez les logs ouverts pendant le déploiement
- Testez localement avant de déployer
- Utilisez des variables d'environnement pour les secrets
- Mettez à jour les dépendances régulièrement
- Sauvegardez votre base de données régulièrement
