@echo off
setlocal enabledelayedexpansion

echo.
echo ========================================
echo Nettoyage - Suppression PHP/Laravel
echo ========================================
echo.
echo ATTENTION: Cela va supprimer tous les fichiers PHP/Laravel
echo Assurez-vous que tout est commité sur GitHub !
echo.
pause

echo.
echo [1/13] Suppression du dossier app/...
rmdir /s /q app 2>nul
echo OK

echo [2/13] Suppression du dossier config/...
rmdir /s /q config 2>nul
echo OK

echo [3/13] Suppression du dossier database/...
rmdir /s /q database 2>nul
echo OK

echo [4/13] Suppression du dossier resources/...
rmdir /s /q resources 2>nul
echo OK

echo [5/13] Suppression du dossier routes/...
rmdir /s /q routes 2>nul
echo OK

echo [6/13] Suppression du dossier storage/...
rmdir /s /q storage 2>nul
echo OK

echo [7/13] Suppression du dossier tests/...
rmdir /s /q tests 2>nul
echo OK

echo [8/13] Suppression du dossier bootstrap/...
rmdir /s /q bootstrap 2>nul
echo OK

echo [9/13] Suppression du dossier vendor/...
rmdir /s /q vendor 2>nul
echo OK

echo [10/13] Suppression du dossier admin/...
rmdir /s /q admin 2>nul
echo OK

echo [11/13] Suppression du dossier api/...
rmdir /s /q api 2>nul
echo OK

echo [12/13] Suppression du dossier backend/...
rmdir /s /q backend 2>nul
echo OK

echo [13/13] Suppression des fichiers PHP...
del artisan 2>nul
del composer.json 2>nul
del composer.lock 2>nul
del phpunit.xml 2>nul
del phpunit.pgsql.xml 2>nul
del server.php 2>nul
del server.js 2>nul
del deploy.bat 2>nul
del deploy.sh 2>nul
del Dockerfile 2>nul
del docker-compose.yml 2>nul
del render.yaml 2>nul
echo OK

echo.
echo ========================================
echo ✅ Nettoyage terminé !
echo ========================================
echo.
echo Dossiers restants:
echo ✅ frontend/ - React
echo ✅ frontend-nextjs/ - Next.js
echo ✅ backend-server.js - Backend Node.js
echo ✅ package.json - Dépendances Node.js
echo.
pause
