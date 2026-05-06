#!/bin/bash

echo "========================================"
echo "  QHSEPRO - Portfolio Laravel"
echo "========================================"
echo ""
echo "Installation des dépendances..."
composer install
echo ""
echo "Génération de la clé d'application..."
php artisan key:generate
echo ""
echo "Création des dossiers nécessaires..."
mkdir -p storage/framework/sessions
mkdir -p storage/framework/views
mkdir -p storage/framework/cache
mkdir -p storage/logs
echo ""
echo "Exécution des migrations..."
php artisan migrate
echo ""
echo "========================================"
echo "  Démarrage du serveur Laravel..."
echo "========================================"
echo ""
echo "Le site sera accessible sur:"
echo "http://127.0.0.1:8000"
echo ""
echo "Admin: http://127.0.0.1:8000/admin/login"
echo "Username: admin"
echo "Password: 2086"
echo ""
echo "Appuyez sur Ctrl+C pour arrêter le serveur"
echo ""
php artisan serve
