#!/bin/bash

# Script de démarrage pour le développement local
# Démarre le backend et le frontend

echo ""
echo "========================================"
echo "  Portfolio QHSE - Démarrage Local"
echo "========================================"
echo ""

# Vérifier si les dépendances sont installées
if [ ! -d "vendor" ]; then
    echo "Installation des dépendances backend..."
    composer install
fi

if [ ! -d "frontend/node_modules" ]; then
    echo "Installation des dépendances frontend..."
    npm install --prefix frontend
fi

# Générer la clé APP_KEY si nécessaire
if [ ! -f ".env" ]; then
    echo "Création du fichier .env..."
    cp .env.example .env
    php artisan key:generate
fi

echo ""
echo "========================================"
echo "  Démarrage des serveurs..."
echo "========================================"
echo ""

# Démarrer le backend
echo "Démarrage du backend (http://localhost:8000)..."
php artisan serve &
BACKEND_PID=$!

# Attendre un peu avant de démarrer le frontend
sleep 3

# Démarrer le frontend
echo "Démarrage du frontend (http://localhost:3000)..."
cd frontend
npm start &
FRONTEND_PID=$!

echo ""
echo "========================================"
echo "  Serveurs démarrés!"
echo "========================================"
echo ""
echo "Frontend : http://localhost:3000"
echo "Backend  : http://localhost:8000"
echo ""
echo "Appuyez sur Ctrl+C pour arrêter les serveurs."
echo ""

# Attendre l'interruption
wait
