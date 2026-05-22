/**
 * MDX: пустая строка после --- перед import и после блока import перед контентом.
 * Запуск: node scripts/fix-mdx-import-after-frontmatter.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.join(__dirname, '..', 'docs');

const FM_IMPORT_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n(import\s)/m;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (/\.mdx?$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function fixImportBlockSpacing(content) {
  const lines = content.split(/\r?\n/);
  const out = [];
  let afterFrontmatter = false;
  let inImportBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (i === 0 && line.trim() === '---') {
      out.push(line);
      continue;
    }

    if (!afterFrontmatter) {
      out.push(line);
      if (line.trim() === '---' && out.length > 1) {
        afterFrontmatter = true;
      }
      continue;
    }

    if (/^import\s/.test(line)) {
      if (!inImportBlock && out.length > 0 && out[out.length - 1] !== '') {
        out.push('');
      }
      inImportBlock = true;
      out.push(line);
      continue;
    }

    if (inImportBlock && line.trim() !== '') {
      out.push('');
      inImportBlock = false;
    } else if (inImportBlock && line.trim() === '') {
      inImportBlock = false;
    }

    out.push(line);
  }

  return out.join('\n');
}

let fixed = 0;
for (const filePath of walk(docsDir)) {
  let raw = fs.readFileSync(filePath, 'utf8');
  let next = raw;

  if (FM_IMPORT_RE.test(next)) {
    next = next.replace(FM_IMPORT_RE, '---\n$1\n---\n\n$2');
  }

  next = fixImportBlockSpacing(next);

  if (next !== raw) {
    fs.writeFileSync(filePath, next.endsWith('\n') ? next : `${next}\n`, 'utf8');
    fixed += 1;
  }
}

console.log(`fix-mdx-import: updated ${fixed} files`);
