/**
 * Восстанавливает строки с артефактами $1/$3 и пустыми « — .» из истории git.
 * Запуск: node scripts/analysis/restore-empty-dash-holes.js
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repoRoot = path.join(__dirname, '../..');
const docsRoot = path.join(repoRoot, 'docs/encyclopedia');
const BASE_COMMITS = ['6d41f6104a', '757ea1c3a5', '2775a0dbd2'];

const BROKEN_RE =
  /\$[13]|  — \.|  — ,|  — $|^  — \.|^  — ,| — \.$| — ,| — \. | — , |:\s+—\s+[\.,]/;

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.(md|mdx)$/i.test(entry.name)) acc.push(full);
  }
  return acc;
}

const gitCache = new Map();

function gitLines(relPath, commit) {
  const key = `${commit}:${relPath}`;
  if (gitCache.has(key)) return gitCache.get(key);
  try {
    const out = execSync(`git show ${commit}:${relPath}`, {
      cwd: repoRoot,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'ignore'],
      maxBuffer: 20 * 1024 * 1024,
    });
    const lines = out.split('\n');
    gitCache.set(key, lines);
    return lines;
  } catch {
    gitCache.set(key, null);
    return null;
  }
}

function findOldLine(oldLines, brokenLine) {
  const anchor = brokenLine.split(' — ')[0].slice(0, 45).trim();
  if (anchor.length < 10) return null;
  for (const hit of oldLines) {
    if (!hit.includes(anchor.slice(0, Math.min(anchor.length, 30)))) continue;
    if (/\$[13]/.test(hit)) continue;
    if (BROKEN_RE.test(hit)) continue;
    if (hit === brokenLine) continue;
    return hit;
  }
  return null;
}

let files = 0;
let lines = 0;

for (const file of walk(docsRoot)) {
  const rel = path.relative(repoRoot, file).replace(/\\/g, '/');
  const current = fs.readFileSync(file, 'utf8').split('\n');
  const holeIdx = current
    .map((line, i) => (BROKEN_RE.test(line) ? i : -1))
    .filter((i) => i >= 0);
  if (!holeIdx.length) continue;

  let old = null;
  for (const commit of BASE_COMMITS) {
    old = gitLines(rel, commit);
    if (old) break;
  }
  if (!old) continue;

  let changed = false;
  const out = [...current];
  for (const i of holeIdx) {
    const line = current[i];
    if (!/\$[13]|  — \.|  — ,|  — $|^  — \.|^  — ,| — \.$| — ,|:\s+—\s+[\.,]/.test(line)) {
      continue;
    }
    const candidate = findOldLine(old, line);
    if (!candidate) continue;
    out[i] = candidate;
    changed = true;
    lines += 1;
  }

  if (changed) {
    files += 1;
    fs.writeFileSync(file, out.join('\n'), 'utf8');
  }
}

console.log(`restored files: ${files}, lines: ${lines}`);
