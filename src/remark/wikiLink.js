/**
 * Opt-in перекрёстные ссылки: [[термин]], [[термин|подпись]], [[/path#якорь|подпись]].
 * Обычный текст не изменяется — только явные [[...]].
 */
const fs = require('node:fs');
const path = require('node:path');
const {visit} = require('unist-util-visit');

const WIKI_LINK_RE = /\[\[([^\]|#]+)(?:#([^\]|]+))?(?:\|([^\]]+))?\]\]/g;
const SKIP_PARENT_TYPES = new Set([
  'code',
  'inlineCode',
  'link',
  'linkReference',
  'definition',
  'yaml',
  'html',
  'jsx',
  'mdxJsxFlowElement',
  'mdxJsxTextElement',
]);

const indexPath = path.join(__dirname, '..', 'data', 'wikiLinkIndex.json');

function normalizeKey(value) {
  return value.trim().toLocaleLowerCase('ru');
}

function loadIndex() {
  try {
    const raw = fs.readFileSync(indexPath, 'utf8');
    return JSON.parse(raw).terms ?? {};
  } catch {
    return {};
  }
}

function resolveTarget(target, hash, index) {
  const trimmed = target.trim();
  if (!trimmed) {
    return null;
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return {href: trimmed, kind: 'external'};
  }

  if (trimmed.startsWith('/')) {
    const href = hash ? `${trimmed}#${hash.trim()}` : trimmed;
    return {href, kind: 'explicit'};
  }

  if (/^(encyclopedia|glossary|lab|tools|context|philosophy|about)\//i.test(trimmed)) {
    const href = `/${trimmed}${hash ? `#${hash.trim()}` : ''}`;
    return {href, kind: 'explicit'};
  }

  const entry = index[normalizeKey(trimmed)];
  if (!entry) {
    return null;
  }

  const href = hash ? `${entry.href.split('#')[0]}#${hash.trim()}` : entry.href;
  return {href, kind: entry.kind, label: entry.label};
}

function splitTextToNodes(value, index) {
  const nodes = [];
  let lastIndex = 0;
  let match;

  WIKI_LINK_RE.lastIndex = 0;
  while ((match = WIKI_LINK_RE.exec(value)) !== null) {
    const [full, target, hash, label] = match;
    if (match.index > lastIndex) {
      nodes.push({type: 'text', value: value.slice(lastIndex, match.index)});
    }

    const resolved = resolveTarget(target, hash, index);
    const linkLabel = (label || resolved?.label || target).trim();

    if (resolved?.href) {
      nodes.push({
        type: 'link',
        url: resolved.href,
        data: {
          hProperties: {
            className: [
              'wiki-link',
              resolved.kind === 'glossary' ? 'wiki-link--glossary' : 'wiki-link--encyclopedia',
            ],
          },
        },
        children: [{type: 'text', value: linkLabel}],
      });
    } else {
      nodes.push({type: 'text', value: full});
    }

    lastIndex = match.index + full.length;
  }

  if (lastIndex < value.length) {
    nodes.push({type: 'text', value: value.slice(lastIndex)});
  }

  return nodes.length > 0 ? nodes : [{type: 'text', value}];
}

function wikiLinkPlugin() {
  const index = loadIndex();

  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || SKIP_PARENT_TYPES.has(parent.type)) {
        return;
      }
      if (!node.value.includes('[[')) {
        return;
      }

      const replacement = splitTextToNodes(node.value, index);
      if (replacement.length === 1 && replacement[0].type === 'text') {
        return;
      }

      parent.children.splice(index, 1, ...replacement);
      return index + replacement.length;
    });
  };
}

module.exports = wikiLinkPlugin;
