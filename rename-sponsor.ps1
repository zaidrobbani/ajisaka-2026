# PowerShell script to rename sponsor-medpar files to kebab-case

$sponsorDir = "public\sponsor-medpar"
$mapping = @{}

# Get files in sponsor-medpar
$files = Get-ChildItem -Path $sponsorDir -File

foreach ($file in $files) {
    $oldName = $file.Name
    
    # Convert to kebab-case
    $newName = $oldName `
        -replace '\[BESAR\]\s*', 'besar-' `
        -replace '\[KECIL\]\s*', 'kecil-' `
        -replace '\s+', '-' `
        -replace '--+', '-'
    
    # Convert to lowercase
    $newName = $newName.ToLower()
    
    Write-Host "Will rename: $oldName -> $newName" -ForegroundColor Yellow
    
    $oldPath = $file.FullName
    $newPath = Join-Path $file.DirectoryName $newName
    
    # Check if target exists
    if (Test-Path $newPath) {
        Write-Host "SKIP: Target already exists: $newName" -ForegroundColor Red
        continue
    }
    
    # Store mapping for code updates
    $mapping["/sponsor-medpar/$oldName"] = "/sponsor-medpar/$newName"
    
    try {
        Rename-Item -Path $oldPath -NewName $newName -ErrorAction Stop
        Write-Host "SUCCESS: Renamed to $newName" -ForegroundColor Green
    }
    catch {
        Write-Host "ERROR: Failed - $_" -ForegroundColor Red
    }
}

# Save mapping
$mappingJson = $mapping | ConvertTo-Json
Set-Content -Path "sponsor-mapping.json" -Value $mappingJson
Write-Host "`nMapping saved to sponsor-mapping.json" -ForegroundColor Cyan
Write-Host "Total files: $($mapping.Count)" -ForegroundColor Cyan
