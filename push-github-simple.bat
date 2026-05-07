@echo off
setlocal enabledelayedexpansion

echo.
echo ========================================
echo Pousser le code sur GitHub
echo ========================================
echo.

REM Aller dans le dossier frontend
cd /d "%~dp0frontend"

echo [1/4] Verifier le statut Git...
git status
echo.

echo [2/4] Ajouter tous les fichiers...
git add .
echo OK - Fichiers ajoutes
echo.

echo [3/4] Creer un commit...
git commit -m "Update frontend - Add Vercel configuration and documentation"
echo OK - Commit cree
echo.

echo [4/4] Pousser le code sur GitHub...
git push -u origin main

echo.
echo ========================================
echo OK - Code pousse sur GitHub avec succes !
echo ========================================
echo.
echo Repository: https://github.com/EDITCHAO/qhse-expert-bruno
echo.
pause
