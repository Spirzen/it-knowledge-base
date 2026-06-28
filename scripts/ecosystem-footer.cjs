const fs = require('fs');
const path = require('path');

function loadEcosystemConfig(options = {}) {
  const root = path.join(__dirname, '..');
  const raw = JSON.parse(fs.readFileSync(path.join(root, 'ecosystem-urls.json'), 'utf8'));
  const isProdBuild = options.isProdBuild !== false;
  const domains = {...raw.domains};

  if (!isProdBuild && raw.localDev) {
    for (const [key, url] of Object.entries(raw.localDev)) {
      if (url) {
        domains[key] = url.replace(/\/$/, '');
      }
    }
  }

  return {...raw, domains};
}

function resolveFooterItemHref(config, item) {
  if (item.href) {
    return item.href;
  }
  const domain = config.domains[item.hrefKey]?.replace(/\/$/, '') ?? '#';
  if (item.routeKey) {
    return `${domain}${config.routes[item.routeKey] ?? ''}${item.suffix ?? ''}`;
  }
  return `${domain}${item.path ?? ''}`;
}

function buildFooterSections(config, options = {}) {
  const onSpirzen = options.onSpirzen === true;
  const year = new Date().getFullYear();
  const copyright = (config.footer?.copyright ?? '').replace('{year}', String(year));

  const columns = (config.footer?.columns ?? []).map((column) => ({
    title: column.title,
    items: column.items.map((item) => {
      const href = resolveFooterItemHref(config, item);
      if (onSpirzen && item.hrefKey === 'spirzen' && item.path && !item.href) {
        return {label: item.label, to: item.path};
      }
      return {label: item.label, href};
    }),
  }));

  return {copyright, columns};
}

function buildDocusaurusFooter(config) {
  const {copyright, columns} = buildFooterSections(config, {onSpirzen: true});
  return {
    style: 'dark',
    links: columns.map((column) => ({
      title: column.title,
      items: column.items.map((item) =>
        item.to ? {label: item.label, to: item.to} : {label: item.label, href: item.href},
      ),
    })),
    copyright,
  };
}

module.exports = {
  loadEcosystemConfig,
  buildDocusaurusFooter,
};
