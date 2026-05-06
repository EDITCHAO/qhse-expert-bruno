@echo off
echo ========================================
echo   QHSEPRO - Portfolio Laravel
echo ========================================
echo.
echo Verification de Composer...
where composer >nul 2>nul
if %errorlevel% neq 0 (
    echo ERREUR: Composer n'est pas installe!
    echo.
    echo Veuillez d'abord executer: INSTALLER_DABORD.bat
    echo.
    pause
    exit /b 1
)
echo.
echo Verification du dossier vendor...
if not exist "vendor" (
    echo ERREUR: Le dossier vendor n'existe pas!
    echo.
    echo Veuillez d'abord executer: INSTALLER_DABORD.bat
    echo OU tapez: composer install
    echo.
    pause
    exit /b 1
)
echo.
echo Generation de la cle d'application...
php artisan key:generate
echo.
echo Creation des dossiers necessaires...
if not exist "storage\framework\sessions" mkdir storage\framework\sessions
if not exist "storage\framework\views" mkdir storage\framework\views
if not exist "storage\framework\cache" mkdir storage\framework\cache
if not exist "storage\logs" mkdir storage\logs
echo.
echo Execution des migrations...
php artisan migrate
echo.
echo ========================================
echo   Demarrage du serveur Laravel...
echo ========================================
echo.
echo Le site sera accessible sur:
echo http://127.0.0.1:8000
echo.
echo Admin: http://127.0.0.1:8000/admin/login
echo Username: admin
echo Password: 2086
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur
echo.
php artisan serve
pause
