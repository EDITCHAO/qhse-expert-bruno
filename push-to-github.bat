@echo off
echo ========================================
echo Pousser le code sur GitHub
echo ========================================
echo.

cd frontend

echo [1/3] Vérifier le statut Git...
git status

echo.
echo [2/3] Ajouter les fichiers...
git add .

echo [3/3] Créer un commit et pousser...
git commit -m "Update frontend - Add Vercel configuration"
git push -u origin main

echo.
echo ========================================
echo ✅ Code poussé sur GitHub avec succès !
echo ========================================
echo.
echo Repository: https://github.com/EDITCHAO/qhse-expert-bruno
echo.
pause
