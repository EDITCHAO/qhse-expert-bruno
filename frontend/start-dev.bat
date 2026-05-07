@echo off
REM Script de démarrage pour le développement local
REM Démarre le backend et le frontend

echo.
echo ========================================
echo   Portfolio QHSE - Démarrage Local
echo ========================================
echo.

REM Vérifier si les dépendances sont installées
if not exist "vendor" (
    echo Installation des dépendances backend...
    call composer install
)

if not exist "frontend\node_modules" (
    echo Installation des dépendances frontend...
    call npm install --prefix frontend
)

REM Générer la clé APP_KEY si nécessaire
if not exist ".env" (
    echo Création du fichier .env...
    copy .env.example .env
    call php artisan key:generate
)

echo.
echo ========================================
echo   Démarrage des serveurs...
echo ========================================
echo.

REM Démarrer le backend dans une nouvelle fenêtre
echo Démarrage du backend (http://localhost:8000)...
start "Backend - Laravel" cmd /k "php artisan serve"

REM Attendre un peu avant de démarrer le frontend
timeout /t 3 /nobreak

REM Démarrer le frontend dans une nouvelle fenêtre
echo Démarrage du frontend (http://localhost:3000)...
start "Frontend - React" cmd /k "cd frontend && npm start"

echo.
echo ========================================
echo   Serveurs démarrés!
echo ========================================
echo.
echo Frontend : http://localhost:3000
echo Backend  : http://localhost:8000
echo.
echo Appuyez sur Ctrl+C dans chaque fenêtre pour arrêter les serveurs.
echo.
