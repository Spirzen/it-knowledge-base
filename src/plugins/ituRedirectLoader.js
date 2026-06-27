const fs = require('fs-extra');
const path = require('path');
const {loaderMarkup} = require('../lib/itu-loader.cjs');

const loaderCss = fs.readFileSync(path.join(__dirname, '../css/itu-loader.css'), 'utf8');

function buildRedirectPage({toUrl, searchAnchorForwarding}) {
  const jsTarget = searchAnchorForwarding
    ? `'${toUrl}' + window.location.search + window.location.hash`
    : `'${toUrl}'`;

  return `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0; url=${toUrl}">
    <link rel="canonical" href="${toUrl}" />
    <title>Переход — Вселенная IT</title>
    <style>${loaderCss}
body { margin: 0; }</style>
  </head>
  <body>
    <div class="itu-loader-host itu-loader-host--page">
      ${loaderMarkup({title: 'Вселенная IT', label: 'Переход на обновлённый раздел…'})}
    </div>
    <script>
      window.location.href = ${jsTarget};
    </script>
  </body>
</html>
`;
}

async function walkHtmlFiles(dir, files = []) {
  const entries = await fs.readdir(dir, {withFileTypes: true});
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkHtmlFiles(full, files);
      continue;
    }
    if (entry.name.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

module.exports = function ituRedirectLoaderPlugin() {
  return {
    name: 'itu-redirect-loader',
    async postBuild({outDir}) {
      const files = await walkHtmlFiles(outDir);
      let patched = 0;

      await Promise.all(
        files.map(async (file) => {
          const content = await fs.readFile(file, 'utf8');
          if (!content.includes('meta http-equiv="refresh"') || content.includes('itu-loader')) {
            return;
          }

          const toUrlMatch = content.match(/content="0; url=([^"]+)"/);
          const jsMatch = content.match(
            /window\.location\.href = '([^']+)'(\s*\+ window\.location\.search \+ window\.location\.hash)?/,
          );
          if (!toUrlMatch) {
            return;
          }

          const next = buildRedirectPage({
            toUrl: toUrlMatch[1],
            searchAnchorForwarding: Boolean(jsMatch?.[2]),
          });
          await fs.writeFile(file, next, 'utf8');
          patched += 1;
        }),
      );

      console.log(`itu-redirect-loader: patched ${patched} redirect pages`);
    },
  };
};
