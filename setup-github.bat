@echo off
echo ========================================
echo Initialisation GitHub - Frontend
echo ========================================
echo.

cd frontend

echo [1/5] Initialiser Git...
git init

echo [2/5] Ajouter tous les fichiers...
git add .

echo [3/5] Créer le premier commit...
git commit -m "Initial commit - Portfolio QHSE Frontend React"

echo [4/5] Ajouter le remote GitHub...
echo.
echo IMPORTANT: Remplacez YOUR_USERNAME par votre username GitHub
echo.
set /p GITHUB_URL="Entrez l'URL du repository GitHub (ex: https://github.com/YOUR_USERNAME/portfolio-qhse-frontend.git): "

git remote add origin %GITHUB_URL%

echo [5/5] Pousser le code sur GitHub...
git branch -M main
git push -u origin main

echo.
echo ========================================
echo ✅ GitHub mis à jour avec succès !
echo ========================================
echo.
pause
