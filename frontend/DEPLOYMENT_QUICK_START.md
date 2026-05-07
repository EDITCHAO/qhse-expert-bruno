# 🚀 Déploiement Rapide - Portfolio QHSE

## ⚡ Démarrage Rapide (5 minutes)

### 1️⃣ Créer une base de données Supabase

```bash
# Allez sur https://supabase.com
# Créez un nouveau projet
# Notez vos identifiants:
# - Host: your-project.supabase.co
# - Password: (généré)
```

### 2️⃣ Préparer le projet

```bash
# Clonez et installez
git clone <votre-repo>
cd portfolio
composer install

# Générez la clé
php artisan key:generate
# Copiez la clé affichée (commence par base64:...)
```

### 3️⃣ Déployer sur Vercel (Recommandé)

```bash
# Installez Vercel CLI
npm install -g vercel

# Déployez
vercel

# Lors du déploiement, ajoutez les variables d'environnement:
# APP_KEY=base64:YOUR_KEY
# DB_CONNECTION=pgsql
# DB_HOST=your-project.supabase.co
# DB_PORT=5432
# DB_DATABASE=postgres
# DB_USERNAME=postgres
# DB_PASSWORD=your_password
# DB_SSLMODE=require
```

### 4️⃣ Exécuter les migrations

```bash
# Via Vercel CLI
vercel env pull
php artisan migrate --force
```

---

## 📋 Alternatives

### Render
```bash
# Allez sur https://render.com
# Connectez votre GitHub
# Utilisez render.yaml pour la configuration
```

### Supabase Edge Functions
```bash
npm install -g supabase
supabase init
supabase link --project-ref your-ref
```

---

## ✅ Vérifier le déploiement

```bash
# Testez l'API
curl https://your-domain.com/api/contacts

# Testez le formulaire de contact
# Allez sur https://your-domain.com
# Remplissez et envoyez le formulaire
```

---

## 🔐 Sécurité

- ✅ Changez `ADMIN_USERNAME` et `ADMIN_PASSWORD`
- ✅ Utilisez `APP_DEBUG=false` en production
- ✅ Utilisez HTTPS (automatique sur Vercel/Render)
- ✅ Configurez `CORS_ALLOWED_ORIGINS` avec votre domaine

---

## 📞 Besoin d'aide?

Consultez `DEPLOYMENT_GUIDE.md` pour les instructions détaillées.
