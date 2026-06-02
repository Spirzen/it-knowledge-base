/**
 * Превращает статические import демо в MDX в lazyDemoInView(() => import(...)).
 * Иначе route-chunk тянет синхронный граф; старый splitChunks давал монолит demo-widgets.js.
 */
const {visit} = require('unist-util-visit');

const STATIC_DEMO_IMPORT_RE =
  /^import\s+([A-Za-z_$][\w$]*)\s+from\s+['"]@site\/src\/components\/(?!shared\/)([^'"]+)['"];?\s*$/;

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

      node.value = `import __itLazyDemoInView from '@site/src/components/shared/lazyDemoInView';
const ${componentName} = __itLazyDemoInView(() => import('${resolved}'));`;
    });
  };
};
