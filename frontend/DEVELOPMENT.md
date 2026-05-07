# 🛠️ Guide de Développement - Portfolio QHSE

## 📋 Prérequis

- PHP 8.1+ (8.2 recommandé)
- PostgreSQL 12+ (ou MySQL 5.7+)
- Composer
- Node.js 16+ (optionnel, pour les outils frontend)
- Git

## 🚀 Installation Locale

### 1. Cloner le projet

```bash
git clone <votre-repo>
cd portfolio
```

### 2. Installer les dépendances

```bash
composer install
```

### 3. Configurer l'environnement

```bash
# Copier le fichier d'exemple
cp .env.example .env

# Générer la clé APP_KEY
php artisan key:generate

# Pour développement avec PostgreSQL:
cp .env.local.example .env.local
# Modifiez .env.local avec vos identifiants PostgreSQL
```

### 4. Créer la base de données

#### Avec MySQL (développement simple)

```bash
# Créez une base de données
mysql -u root -p
> CREATE DATABASE portfolio_dev;
> EXIT;

# Exécutez les migrations
php artisan migrate
```

#### Avec PostgreSQL (simulation production)

```bash
# Créez une base de données
psql -U postgres
> CREATE DATABASE portfolio_dev;
> \q

# Exécutez les migrations
php artisan migrate --database=pgsql
```

#### Avec Docker

```bash
# Démarrez les conteneurs
docker-compose up -d

# Exécutez les migrations
docker-compose exec app php artisan migrate
```

### 5. Démarrer le serveur

```bash
php artisan serve
# Le serveur sera disponible sur http://localhost:8000
```

---

## 📁 Structure du Projet

```
portfolio/
├── app/
│   ├── Console/          # Commandes Artisan
│   ├── Exceptions/       # Gestion des erreurs
│   ├── Http/
│   │   ├── Controllers/  # Contrôleurs
│   │   ├── Middleware/   # Middlewares
│   │   └── Kernel.php    # Configuration HTTP
│   ├── Models/           # Modèles Eloquent
│   └── Providers/        # Service providers
├── config/               # Fichiers de configuration
├── database/
│   ├── migrations/       # Migrations de base de données
│   └── seeders/          # Seeders
├── public/               # Fichiers publics (CSS, JS, images)
├── resources/
│   └── views/            # Vues Blade
├── routes/               # Définition des routes
├── storage/              # Fichiers générés (logs, cache, sessions)
├── tests/                # Tests unitaires et fonctionnels
└── vendor/               # Dépendances Composer
```

---

## 🔧 Commandes Utiles

### Migrations

```bash
# Exécuter les migrations
php artisan migrate

# Annuler la dernière migration
php artisan migrate:rollback

# Réinitialiser la base de données
php artisan migrate:reset

# Réinitialiser et relancer les migrations
php artisan migrate:refresh

# Remplir la base de données avec des données de test
php artisan db:seed
```

### Développement

```bash
# Démarrer le serveur de développement
php artisan serve

# Accéder à la console Tinker (REPL)
php artisan tinker

# Vider le cache
php artisan cache:clear

# Vider le cache de configuration
php artisan config:clear

# Vider le cache des vues
php artisan view:clear
```

### Tests

```bash
# Exécuter tous les tests
php artisan test

# Exécuter les tests avec PostgreSQL
php artisan test --configuration=phpunit.pgsql.xml

# Exécuter un fichier de test spécifique
php artisan test tests/Feature/ExampleTest.php

# Exécuter les tests avec couverture de code
php artisan test --coverage
```

---

## 🧪 Tests

### Créer un test

```bash
php artisan make:test ContactTest --feature
```

### Exemple de test

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Contact;

class ContactTest extends TestCase
{
    public function test_contact_can_be_created()
    {
        $response = $this->post('/contact', [
            'nom' => 'John Doe',
            'email' => 'john@example.com',
            'numero' => '1234567890',
            'sujet' => 'Test',
            'message' => 'Test message'
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('contacts', [
            'email' => 'john@example.com'
        ]);
    }
}
```

---

## 🔐 Sécurité

### Bonnes pratiques

1. **Validation des entrées**
   ```php
   $validated = $request->validate([
       'email' => 'required|email',
       'message' => 'required|string|max:1000'
   ]);
   ```

2. **Protection CSRF**
   - Automatique dans les formulaires Blade
   - Inclure `@csrf` dans les formulaires

3. **Authentification**
   - Utiliser les middlewares d'authentification
   - Protéger les routes sensibles

4. **Variables d'environnement**
   - Ne jamais commiter `.env`
   - Utiliser `.env.example` pour les templates

---

## 📝 Conventions de Code

### PHP

```php
// Noms de classe: PascalCase
class ContactController {}

// Noms de méthode: camelCase
public function storeContact() {}

// Noms de variable: camelCase
$userName = 'John';

// Constantes: UPPER_SNAKE_CASE
const MAX_ATTEMPTS = 5;
```

### Blade Templates

```blade
<!-- Utiliser les directives Blade -->
@if ($condition)
    <p>{{ $variable }}</p>
@endif

<!-- Inclure des vues partielles -->
@include('partials.header')

<!-- Boucles -->
@foreach ($items as $item)
    <li>{{ $item->name }}</li>
@endforeach
```

---

## 🐛 Débogage

### Utiliser dd() (dump and die)

```php
dd($variable); // Affiche et arrête l'exécution
```

### Utiliser dump()

```php
dump($variable); // Affiche sans arrêter
```

### Logs

```php
Log::info('Message d\'information');
Log::error('Message d\'erreur');
Log::debug('Message de débogage');

// Voir les logs
tail -f storage/logs/laravel.log
```

### Debugbar (optionnel)

```bash
composer require barryvdh/laravel-debugbar --dev
```

---

## 📚 Ressources

- [Documentation Laravel](https://laravel.com/docs)
- [Documentation Blade](https://laravel.com/docs/blade)
- [Documentation Eloquent](https://laravel.com/docs/eloquent)
- [Documentation PostgreSQL](https://www.postgresql.org/docs/)

---

## 💡 Conseils

1. **Utilisez Tinker pour tester rapidement**
   ```bash
   php artisan tinker
   > Contact::all()
   ```

2. **Utilisez les migrations pour les changements de schéma**
   ```bash
   php artisan make:migration add_field_to_contacts
   ```

3. **Testez régulièrement**
   ```bash
   php artisan test
   ```

4. **Gardez le code propre**
   ```bash
   composer require --dev laravel/pint
   ./vendor/bin/pint
   ```

---

## ❓ Dépannage

### Erreur: "Class not found"
```bash
composer dump-autoload
```

### Erreur: "No application encryption key"
```bash
php artisan key:generate
```

### Erreur: "SQLSTATE[HY000]"
- Vérifiez les identifiants de base de données
- Vérifiez que le serveur de base de données est en cours d'exécution

### Erreur: "Permission denied"
```bash
chmod -R 775 storage bootstrap/cache
```

---

## 📞 Support

Pour plus d'aide, consultez la documentation officielle ou ouvrez une issue sur GitHub.
