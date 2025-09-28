# generate-toc.ps1
$docsPath = "docs"
$tocFile = "docs/toc.md"

$content = "---`ntitle: Содержание`nsidebar_label: Содержание`n---`n`n## 📘 Содержание`n`n"

Get-ChildItem -Path $docsPath -Directory | Where-Object { $_.Name -ne "about" } | ForEach-Object {
    $sectionDir = $_
    $sectionName = (Get-Content "$($sectionDir.FullName)/_category_.json" | ConvertFrom-Json).label
    if (-not $sectionName) { $sectionName = $sectionDir.Name }

    $content += "### $sectionName`n"

    Get-ChildItem -Path $sectionDir.FullName -Filter "*.md" | Where-Object Name -ne "toc.md" | ForEach-Object {
        $title = (Get-Content $_.FullName | Select-String "^# ").Line.TrimStart("# ").Trim()
        if (-not $title) { $title = [System.Web.HttpUtility]::UrlDecode($_.BaseName).Replace("-", " ").Replace("_", " ") }
        $link = "./$($_.DirectoryName.Split('\')[-1])/$($_.BaseName).md".Replace(" ", "%20")
        $content += "- [$title]($link)`n"
    }
    $content += "`n"
}

# Добавляем раздел "О проекте" в конец
$content += "### 🧩 О проекте`n"
$content += "- [Контакты](./about/contact.md)`n"
$content += "- [Лицензия](./about/license.md)`n"

Set-Content -Path $tocFile -Value $content -Encoding UTF8
Write-Host "✅ Содержание обновлено: $tocFile"