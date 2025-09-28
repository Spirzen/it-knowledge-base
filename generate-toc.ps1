# generate-toc-new.ps1
$docsPath = "docs"
$tocFile = "docs/toc.md"

$content = "---`ntitle: Содержание`nsidebar_label: Содержание`n---`n`n## 📘 Содержание`n`n"

Get-ChildItem -Path $docsPath -Directory | Where-Object Name -NotMatch '^_' | ForEach-Object {
    $sectionDir = $_
    $sectionName = (Get-Content "$($sectionDir.FullName)/_category_.json" | ConvertFrom-Json).label
    if (-not $sectionName) { $sectionName = $sectionDir.Name }

    $content += "### $sectionName`n"

    Get-ChildItem -Path $sectionDir.FullName -Directory | Where-Object Name -NotMatch '^_' | ForEach-Object {
        $subDir = $_
        $subLabel = (Get-Content "$($subDir.FullName)/_category_.json" | ConvertFrom-Json).label
        if (-not $subLabel) { $subLabel = $subDir.Name }

        $content += "`n#### $subLabel`n"

        Get-ChildItem -Path $subDir.FullName -Filter "*.md" | Where-Object Name -match '^\d+\.md$' | Sort-Object Name | ForEach-Object {
            $num = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)
            $title = (Get-Content $_.FullName | Select-String "^# ").Line.TrimStart("# ").Trim()
            if (-not $title) { $title = "$subLabel — Часть $num" }
            $link = "./$($_.DirectoryName.Split('\')[-2])/$($_.DirectoryName.Split('\')[-1])/$( $_.Name )".Replace(" ", "%20")
            $content += "- [$title]($link)`n"
        }
    }
    $content += "`n"
}

# Добавляем "О проекте" в конец
$content += "### 🧩 О проекте`n"
$content += "- [Контакты](./about/contact.md)`n"
$content += "- [Лицензия](./about/license.md)`n"

Set-Content -Path $tocFile -Length 0  # Очищаем перед записью
Set-Content -Path $tocFile -Value $content -Encoding UTF8
Write-Host "✅ Содержание обновлено: $tocFile"