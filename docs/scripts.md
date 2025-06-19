---
sidebar_position: 8
---

# PowerShell

## Deploy

```powershell
<#
.SYNOPSIS
Builds and publishes all .NET projects found recursively in the ../src folder.
#>

# Set the source directory (one level up from script location, then src)
$scriptDir = if ($PSScriptRoot) { $PSScriptRoot } else { Get-Location }
$srcPath = Join-Path -Path (Join-Path -Path $scriptDir -ChildPath "..") -ChildPath "src" | Resolve-Path

if (-not (Test-Path -Path $srcPath)) {
    Write-Host "Source directory not found: $srcPath" -ForegroundColor Red
    exit 1
}

# Find all .csproj files recursively under src folder
$projectFiles = Get-ChildItem -Path $srcPath -Filter "*.csproj" -Recurse -File

if (-not $projectFiles) {
    Write-Host "No .csproj files found in $srcPath or its subdirectories" -ForegroundColor Red
    exit 1
}

Write-Host "Found $($projectFiles.Count) projects in $($srcPath):" -ForegroundColor Cyan
$projectFiles | ForEach-Object { 
    $relativePath = $_.FullName.Substring($srcPath.Length + 1)
    Write-Host "- $relativePath" 
}

foreach ($projectFile in $projectFiles) {
    $projectName = $projectFile.BaseName
    $outputFolder = $projectName -replace '\.', '_'
    
    Write-Host "`nProcessing $projectName..." -ForegroundColor Cyan
    Write-Host "Project path: $($projectFile.FullName)"

    # Build the project
    Write-Host "Building project..."
    dotnet build $projectFile.FullName -c Release
    
    if (-not $?) {
        Write-Host "Build failed for $projectName" -ForegroundColor Red
        continue
    }
    
    # Clean and create output directory
    if (Test-Path -Path $outputFolder) {
        Write-Host "Cleaning existing output directory..."
        Remove-Item -Path $outputFolder -Recurse -Force
    }
    $null = New-Item -ItemType Directory -Path $outputFolder -Force
    
    # Publish the project
    Write-Host "Publishing to $outputFolder..."
    $publishArgs = @(
        "publish",
        $projectFile.FullName,
        "--configuration", "Release",
        "--output", $outputFolder,
        "--framework", "net6.0",
        "--self-contained", "false",
        "--no-restore",
        "--no-build",
        "/p:PublishProtocol=FileSystem",
        "/p:_TargetId=Folder"
    )
    
    dotnet @publishArgs
    
    if (-not $?) {
        Write-Host "Publish failed for $projectName" -ForegroundColor Red
        continue
    }
    
    Write-Host "Successfully published to: $outputFolder" -ForegroundColor Green
    Write-Host "--------------------------------------------------"
}

Write-Host "`nBuild complete. Published $($projectFiles.Count) projects to current directory." -ForegroundColor Green
```