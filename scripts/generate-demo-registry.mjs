/**
 * Реестр интерактивных демо: компонент → статьи, где он подключён.
 * Запуск: npm run docs:demo-registry
 */
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const componentsDir = path.join(root, 'src', 'components');
const docsDir = path.join(root, 'docs');
const outFile = path.join(root, 'info', 'demo-registry.md');
const manifestPath = path.join(root, '..', 'it-play', 'scripts', 'plays-manifest.json');

const EMBED_RE = /ExternalPlayEmbed[^>]*\sexample=["']([^"']+)["']/g;

const SKIP_DIRS = new Set(['shared']);
const SKIP_FILES = new Set([
  'ArticlePdfExport.jsx',
  'ArticlePdfExport.module.css',
  'ArticleSeeAlso.jsx',
  'ArticleSeeAlso.module.css',
  'AnimatedBackground.tsx',
  'AnimatedBackground.module.css',
  'Timer.jsx',
]);

const IMPORT_RE =
  /import\s+(?:[\w{},\s*]+\s+from\s+)?['"]@site\/src\/components\/([^'"]+)['"]/g;

function listComponentFiles() {
  const files = [];
  for (const entry of fs.readdirSync(componentsDir, {withFileTypes: true})) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) {
        continue;
      }
      continue;
    }
    if (!/\.(jsx?|tsx?)$/.test(entry.name)) {
      continue;
    }
    if (SKIP_FILES.has(entry.name)) {
      continue;
    }
    files.push(entry.name);
  }
  return files.sort((a, b) => a.localeCompare(b, 'ru'));
}

function componentKeyFromImportPath(importPath) {
  const base = path.basename(importPath).replace(/\.(jsx|js|tsx|ts)$/, '');
  return base;
}

function docIdFromFile(filePath) {
  const rel = path.relative(docsDir, filePath).replace(/\\/g, '/');
  const withoutExt = rel.replace(/\.(md|mdx)$/, '');
  return withoutExt;
}

function docUrl(docId) {
  return `/${docId}`;
}

function walkDocs(dir, files = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDocs(full, files);
    } else if (/\.(md|mdx)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function scanDocImports() {
  /** @type {Map<string, Set<string>>} */
  const usage = new Map();

  for (const file of walkDocs(docsDir)) {
    const text = fs.readFileSync(file, 'utf8');
    const docId = docIdFromFile(file);
    let match;
    IMPORT_RE.lastIndex = 0;
    while ((match = IMPORT_RE.exec(text)) !== null) {
      const key = componentKeyFromImportPath(match[1]);
      if (!usage.has(key)) {
        usage.set(key, new Set());
      }
      usage.get(key).add(docId);
    }
  }

  return usage;
}

function loadPlayManifest() {
  if (!fs.existsSync(manifestPath)) {
    return {manifest: {}, exampleToKey: new Map()};
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const exampleToKey = new Map();
  for (const [key, meta] of Object.entries(manifest)) {
    if (meta?.example) exampleToKey.set(meta.example, key);
  }
  return {manifest, exampleToKey};
}

function scanPlayEmbeds() {
  /** @type {Map<string, Set<string>>} */
  const usage = new Map();
  const {exampleToKey} = loadPlayManifest();

  for (const file of walkDocs(docsDir)) {
    const text = fs.readFileSync(file, 'utf8');
    const docId = docIdFromFile(file);
    let match;
    EMBED_RE.lastIndex = 0;
    while ((match = EMBED_RE.exec(text)) !== null) {
      const slug = match[1].replace(/^\/+|\/+$/g, '');
      const key = exampleToKey.get(slug) ?? slug;
      if (!usage.has(key)) usage.set(key, new Set());
      usage.get(key).add(docId);
    }
  }

  return usage;
}

function buildPlayEmbedSection(playUsage, manifest) {
  if (!playUsage.size) return '';

  const aiRows = [];
  const otherRows = [];

  for (const [key, docIds] of [...playUsage.entries()].sort((a, b) =>
    a[0].localeCompare(b[0], 'ru'),
  )) {
    const meta = manifest[key];
    const slug = meta?.example ?? key;
    const location = slug.startsWith('ai/') ? aiRows : otherRows;
    location.push(
      `| **${key}** | \`it-play/${slug}\` | ${docIds.size} | ${formatArticleLinks(docIds)} |`,
    );
  }

  let section = `
## IT Play (ExternalPlayEmbed)

Демо, вынесенные в [it-play](https://play.spirzen.ru/) — подключение через \`ExternalPlayEmbed\`, не через \`src/components/\`.

| Компонент | Путь play | Статей | Статьи (примеры) |
| --- | --- | ---: | --- |
${[...aiRows, ...otherRows].join('\n')}
`;

  if (aiRows.length) {
    section += `\nКатегория **ai/** — ${aiRows.length} демо.\n`;
  }

  return section;
}

function formatArticleLinks(docIds, max = 5) {
  const sorted = [...docIds].sort((a, b) => a.localeCompare(b, 'ru'));
  const shown = sorted.slice(0, max);
  const links = shown.map((id) => `[${id.split('/').pop()}](${docUrl(id)})`);
  const rest = sorted.length - shown.length;
  if (rest > 0) {
    links.push(`…ещё ${rest}`);
  }
  return links.join(', ');
}

function buildMarkdown(componentFiles, usage, playUsage, manifest, exampleToKey) {
  const generatedAt = new Date().toISOString().slice(0, 10);
  const rows = [];
  let usedCount = 0;
  let unusedCount = 0;

  for (const file of componentFiles) {
    const key = file.replace(/\.(jsx|js|tsx|ts)$/, '');
    const docIds = usage.get(key);
    const count = docIds?.size ?? 0;
    const fileCell = `\`${path.posix.join('src/components', file)}\``;

    if (count > 0) {
      usedCount += 1;
      rows.push(
        `| **${key}** | ${fileCell} | ${count} | ${formatArticleLinks(docIds)} |`,
      );
    } else {
      unusedCount += 1;
      rows.push(`| **${key}** | ${fileCell} | 0 | — |`);
    }
  }

  const orphanDocs = [];
  for (const [key, docIds] of usage) {
    const fileExists = componentFiles.some(
      (f) => f.replace(/\.(jsx|js|tsx|ts)$/, '') === key,
    );
    const inPlay = exampleToKey.has(key) || manifest[key];
    if (!fileExists && !inPlay) {
      orphanDocs.push({key, docIds});
    }
  }

  let orphanSection = '';
  if (orphanDocs.length > 0) {
    orphanSection = `
## Импорты без файла компонента

| Имя в импорте | Статей | examples статей |
| --- | ---: | --- |
${orphanDocs
  .map(
    ({key, docIds}) =>
      `| \`${key}\` | ${docIds.size} | ${formatArticleLinks(docIds, 3)} |`,
  )
  .join('\n')}
`;
  }

  return `# Реестр интерактивных демо

> Служебный файл (не публикуется на сайте).  
> Сгенерировано **${generatedAt}** — \`npm run docs:demo-registry\`. Не редактировать вручную.

Путь: \`info/demo-registry.md\`

Сводка: **${componentFiles.length}** компонентов в \`src/components/\`, из них **${usedCount}** используются в статьях, **${unusedCount}** пока без подключений.

| Компонент | Файл | Статей | Статьи (примеры) |
| --- | --- | ---: | --- |
${rows.join('\n')}
${orphanSection}
${buildPlayEmbedSection(playUsage, manifest)}
`;
}

function main() {
  const componentFiles = listComponentFiles();
  const usage = scanDocImports();
  const playUsage = scanPlayEmbeds();
  const {manifest, exampleToKey} = loadPlayManifest();
  const markdown = buildMarkdown(componentFiles, usage, playUsage, manifest, exampleToKey);
  fs.mkdirSync(path.dirname(outFile), {recursive: true});
  fs.writeFileSync(outFile, markdown, 'utf8');
  console.log(`Wrote ${outFile}`);
  console.log(
    `Components: ${componentFiles.length}, with usage: ${[...usage.keys()].length}`,
  );
}

main();
