# 🧹 Nettoyage - Supprimer PHP/Laravel

## 🎯 Objectif

Supprimer tous les fichiers PHP/Laravel et garder seulement React/Next.js.

## 📋 Dossiers à Supprimer

```
❌ app/                    - Code PHP Laravel
❌ config/                 - Configuration Laravel
❌ database/               - Migrations Laravel
❌ resources/              - Vues Laravel
❌ routes/                 - Routes Laravel
❌ storage/                - Stockage Laravel
❌ tests/                  - Tests Laravel
❌ bootstrap/              - Bootstrap Laravel
❌ vendor/                 - Dépendances PHP
❌ admin/                  - Admin Laravel
❌ api/                    - API Laravel
❌ backend/                - Backend Laravel
```

## 📋 Fichiers à Supprimer

```
❌ artisan                 - CLI Laravel
❌ composer.json           - Dépendances PHP
❌ composer.lock           - Lock file PHP
❌ phpunit.xml             - Tests PHP
❌ phpunit.pgsql.xml       - Tests PHP
❌ server.php              - Serveur PHP
❌ server.js               - Ancien serveur
❌ deploy.bat              - Déploiement PHP
❌ deploy.sh               - Déploiement PHP
❌ Dockerfile              - Docker PHP
❌ docker-compose.yml      - Docker Compose
❌ render.yaml             - Render PHP
```

## ✅ Dossiers à Garder

```
✅ frontend/               - React
✅ frontend-nextjs/        - Next.js
✅ public/                 - Fichiers statiques
✅ .git/                   - Git
✅ .vscode/                - VS Code
✅ node_modules/           - Dépendances Node.js
```

## ✅ Fichiers à Garder

```
✅ backend-server.js       - Backend Node.js
✅ package.json            - Dépendances Node.js
✅ package-lock.json       - Lock file Node.js
✅ .env                    - Variables d'environnement
✅ .gitignore              - Git ignore
✅ README.md               - Documentation
✅ [Documentation]         - Guides
```

## 🚀 Commandes de Suppression

### Option 1 : Supprimer les Dossiers Individuellement

```bash
# Supprimer les dossiers PHP/Laravel
rmdir /s /q app
rmdir /s /q config
rmdir /s /q database
rmdir /s /q resources
rmdir /s /q routes
rmdir /s /q storage
rmdir /s /q tests
rmdir /s /q bootstrap
rmdir /s /q vendor
rmdir /s /q admin
rmdir /s /q api
rmdir /s /q backend
```

### Option 2 : Supprimer les Fichiers PHP

```bash
# Supprimer les fichiers PHP
del artisan
del composer.json
del composer.lock
del phpunit.xml
del phpunit.pgsql.xml
del server.php
del server.js
del deploy.bat
del deploy.sh
del Dockerfile
del docker-compose.yml
del render.yaml
```

### Option 3 : Script Batch Automatisé

Créer un fichier `cleanup.bat` :

```batch
@echo off
echo Suppression des fichiers PHP/Laravel...

rmdir /s /q app
rmdir /s /q config
rmdir /s /q database
rmdir /s /q resources
rmdir /s /q routes
rmdir /s /q storage
rmdir /s /q tests
rmdir /s /q bootstrap
rmdir /s /q vendor
rmdir /s /q admin
rmdir /s /q api
rmdir /s /q backend

del artisan
del composer.json
del composer.lock
del phpunit.xml
del phpunit.pgsql.xml
del server.php
del server.js
del deploy.bat
del deploy.sh
del Dockerfile
del docker-compose.yml
del render.yaml

echo OK - Nettoyage terminé !
pause
```

## ✅ Résultat Final

Après nettoyage, votre projet contiendra :

```
bruno-hse/
├── frontend/               ✅ React
├── frontend-nextjs/        ✅ Next.js
├── backend-server.js       ✅ Backend Node.js
├── package.json            ✅ Dépendances Node.js
├── .env                    ✅ Variables
├── .gitignore              ✅ Git
├── public/                 ✅ Fichiers statiques
├── node_modules/           ✅ Dépendances
├── .git/                   ✅ Git
└── [Documentation]         ✅ Guides
```

## 🎯 Prochaines Étapes

1. Exécuter le nettoyage
2. Vérifier que seul React/Next.js reste
3. Pousser sur GitHub
4. Déployer sur Vercel

## ⚠️ Attention

- ✅ Assurez-vous que tout est commité sur GitHub avant de supprimer
- ✅ Faites une sauvegarde si nécessaire
- ✅ Vérifiez que vous êtes dans le bon dossier

---

**Status:** ✅ Prêt à Nettoyer  
**Prochaine Étape:** Exécuter le nettoyage
