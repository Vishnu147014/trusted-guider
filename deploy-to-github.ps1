# One-Click GitHub & GitHub Pages Deployment Script for Trusted Guider
param (
    [string]$RepoUrl
)

$gitExe = "$env:LOCALAPPDATA\Programs\MinGit\cmd\git.exe"
if (!(Test-Path $gitExe)) {
    $gitExe = "git"
}

Write-Host "`n=== Trusted Guider - GitHub Pages Deployment Helper ===`n" -ForegroundColor Cyan

if (-not $RepoUrl) {
    Write-Host "Please create a new public repository on GitHub (e.g. named 'trusted-guider')." -ForegroundColor Yellow
    Write-Host "Then paste the repository URL below (e.g. https://github.com/your-username/trusted-guider.git):" -ForegroundColor Green
    $RepoUrl = Read-Host "GitHub Repository URL"
}

if (-not $RepoUrl) {
    Write-Host "Deployment aborted: No repository URL provided." -ForegroundColor Red
    exit 1
}

Write-Host "`nSetting up remote origin: $RepoUrl" -ForegroundColor Cyan
& $gitExe remote remove origin 2>$null
& $gitExe remote add origin $RepoUrl

Write-Host "Pushing main branch to GitHub..." -ForegroundColor Cyan
& $gitExe branch -M main
& $gitExe push -u origin main

Write-Host "`nDeploying production build directly to gh-pages branch..." -ForegroundColor Cyan
npm run deploy

Write-Host "`n========================================================" -ForegroundColor Green
Write-Host " SUCCESS: Trusted Guider pushed and deployed!" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Green
Write-Host "Next steps on GitHub:" -ForegroundColor Yellow
Write-Host "1. Go to your repo -> Settings -> Pages"
Write-Host "2. Under 'Build and deployment' -> Source:"
Write-Host "   - Select 'Deploy from a branch' -> branch: 'gh-pages' -> / (root)"
Write-Host "   (Or select 'GitHub Actions' to use the automated CI/CD workflow)"
Write-Host "3. Your website will be live in 1-2 minutes at:"
Write-Host "   https://<your-username>.github.io/<repo-name>/" -ForegroundColor Cyan
