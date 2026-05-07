@echo off
REM Script de déploiement pour Portfolio QHSE (Windows)
REM Utilisation: deploy.bat [vercel|render|supabase]

setlocal enabledelayedexpansion

set PLATFORM=%1
if "%PLATFORM%"=="" set PLATFORM=vercel

set ENV_FILE=.env.%PLATFORM%

echo 🚀 Déploiement sur %PLATFORM%...

REM Vérifier que le fichier .env existe
if not exist "%ENV_FILE%" (
    echo ❌ Erreur: %ENV_FILE% non trouvé
    echo Créez d'abord le fichier %ENV_FILE% avec vos identifiants
    exit /b 1
)

REM Installer les dépendances
echo 📦 Installation des dépendances...
composer install --no-dev --optimize-autoloader

if "%PLATFORM%"=="vercel" (
    echo 📤 Déploiement sur Vercel...
    npm install -g vercel
    call vercel --prod
    echo ✅ Déploiement Vercel terminé!
) else if "%PLATFORM%"=="render" (
    echo 📤 Déploiement sur Render...
    echo Allez sur https://render.com et connectez votre repository
    echo Utilisez render.yaml pour la configuration
) else if "%PLATFORM%"=="supabase" (
    echo 📤 Configuration Supabase...
    npm install -g supabase
    call supabase link
    call supabase db push
    echo ✅ Configuration Supabase terminée!
) else (
    echo ❌ Plateforme inconnue: %PLATFORM%
    echo Utilisez: deploy.bat [vercel^|render^|supabase]
    exit /b 1
)

echo ✨ Déploiement terminé!
