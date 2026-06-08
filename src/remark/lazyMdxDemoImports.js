/**
 * Превращает статические import демо в MDX в lazy-загрузку.
 * External*Embed — отдельный lazyExternalEmbed (iframe, не в route-chunk).
 */
const {visit} = require('unist-util-visit');

const STATIC_DEMO_IMPORT_RE =
  /^import\s+([A-Za-z_$][\w$]*)\s+from\s+['"]@site\/src\/components\/(?!shared\/)([^'"]+)['"];?\s*$/;

const EXTERNAL_EMBED_KIND = {
  ExternalPlayEmbed: 'play',
  ExternalCodeEmbed: 'code',
};

function toImportPath(rawPath) {
  const normalized = rawPath.replace(/\\/g, '/');
  if (/\.(jsx?|tsx?)$/.test(normalized)) {
    return `@site/src/components/${normalized}`;
  }
  return `@site/src/components/${normalized}`;
}

module.exports = function lazyMdxDemoImports() {
  return (tree) => {
    visit(tree, 'mdxjsEsm', (node) => {
      const value = node.value?.trim();
      if (!value) {
        return;
      }

      const match = value.match(STATIC_DEMO_IMPORT_RE);
      if (!match) {
        return;
      }

      const [, componentName, importPath] = match;
      const resolved = toImportPath(importPath);
      const baseName = importPath.split('/').pop().replace(/\.(jsx?|tsx?)$/, '');
      const embedKind = EXTERNAL_EMBED_KIND[baseName];

      if (embedKind) {
        node.value = `import __itLazyExternalEmbed from '@site/src/components/shared/lazyExternalEmbed';
const ${componentName} = __itLazyExternalEmbed(() => import('${resolved}'), { kind: '${embedKind}' });`;
        return;
      }

      node.value = `import __itLazyDemoInView from '@site/src/components/shared/lazyDemoInView';
const ${componentName} = __itLazyDemoInView(() => import('${resolved}'));`;
    });
  };
};
