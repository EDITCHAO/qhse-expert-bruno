# Script PowerShell pour pousser le code sur GitHub

Write-Host "========================================" -ForegroundColor Green
Write-Host "Pousser le code sur GitHub" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Aller dans le dossier frontend
Set-Location frontend

Write-Host "[1/4] Vérifier le statut Git..." -ForegroundColor Yellow
git status
Write-Host ""

Write-Host "[2/4] Ajouter tous les fichiers..." -ForegroundColor Yellow
git add .
Write-Host "✅ Fichiers ajoutés" -ForegroundColor Green
Write-Host ""

Write-Host "[3/4] Créer un commit..." -ForegroundColor Yellow
git commit -m "Update frontend - Add Vercel configuration and documentation"
Write-Host "✅ Commit créé" -ForegroundColor Green
Write-Host ""

Write-Host "[4/4] Pousser le code sur GitHub..." -ForegroundColor Yellow
git push -u origin main
Write-Host "✅ Code poussé" -ForegroundColor Green
Write-Host ""

Write-Host "========================================" -ForegroundColor Green
Write-Host "✅ Code poussé sur GitHub avec succès !" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Repository: https://github.com/EDITCHAO/qhse-expert-bruno" -ForegroundColor Cyan
Write-Host ""
