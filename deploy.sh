#!/bin/bash

# Script de déploiement pour Portfolio QHSE
# Utilisation: ./deploy.sh [vercel|render|supabase]

set -e

PLATFORM=${1:-vercel}
ENV_FILE=".env.${PLATFORM}"

echo "🚀 Déploiement sur $PLATFORM..."

# Vérifier que le fichier .env existe
if [ ! -f "$ENV_FILE" ]; then
    echo "❌ Erreur: $ENV_FILE non trouvé"
    echo "Créez d'abord le fichier $ENV_FILE avec vos identifiants"
    exit 1
fi

# Installer les dépendances
echo "📦 Installation des dépendances..."
composer install --no-dev --optimize-autoloader

# Générer la clé APP_KEY si nécessaire
if ! grep -q "APP_KEY=base64:" "$ENV_FILE"; then
    echo "🔑 Génération de la clé APP_KEY..."
    php artisan key:generate --show >> "$ENV_FILE"
fi

case $PLATFORM in
    vercel)
        echo "📤 Déploiement sur Vercel..."
        npm install -g vercel
        vercel --prod
        echo "✅ Déploiement Vercel terminé!"
        ;;
    render)
        echo "📤 Déploiement sur Render..."
        echo "Allez sur https://render.com et connectez votre repository"
        echo "Utilisez render.yaml pour la configuration"
        ;;
    supabase)
        echo "📤 Configuration Supabase..."
        npm install -g supabase
        supabase link
        supabase db push
        echo "✅ Configuration Supabase terminée!"
        ;;
    *)
        echo "❌ Plateforme inconnue: $PLATFORM"
        echo "Utilisez: ./deploy.sh [vercel|render|supabase]"
        exit 1
        ;;
esac

echo "✨ Déploiement terminé!"
