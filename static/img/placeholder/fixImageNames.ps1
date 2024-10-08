# Specify the directory where your images are located
$directory = "."

# Get all the files in the directory
Get-ChildItem -Path $directory | ForEach-Object {
    $oldName = $_.Name

    # Check if the file name contains spaces
    if ($oldName -match " ") {
        $newName = $oldName -replace " ", "-"

        # Construct the full paths for the old and new names
        $oldPath = Join-Path $directory $oldName
        $newPath = Join-Path $directory $newName

        # Rename the file
        Rename-Item -Path $oldPath -NewName $newPath
        Write-Host "Renamed: $oldName -> $newName"
    }
}