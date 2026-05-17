import {isSamePath} from '@docusaurus/theme-common/internal';

/**
 * @param {import('@docusaurus/plugin-content-docs').PropSidebarItem[]} items
 * @param {string} docId
 * @returns {{ parentItems: import('@docusaurus/plugin-content-docs').PropSidebarItem[] } | null}
 */
export function findSidebarSiblingContainer(items, docId) {
  if (!items?.length) {
    return null;
  }

  for (const item of items) {
    const itemDocId =
      item.type === 'doc'
        ? item.id
        : item.type === 'link' && item.docId
          ? item.docId
          : undefined;

    if (itemDocId === docId) {
      return {parentItems: items};
    }

    if (item.type === 'category' && item.items?.length) {
      const nested = findSidebarSiblingContainer(item.items, docId);
      if (nested) {
        return nested;
      }
    }
  }

  return null;
}

/**
 * Соседи по тому же принципу, что useCurrentSidebarSiblings (по pathname).
 * @param {import('@docusaurus/plugin-content-docs').PropSidebarItem[]} sidebarItems
 * @param {string} pathname
 */
export function getSiblingsByPathname(sidebarItems, pathname) {
  const categoryBreadcrumbs = getSidebarBreadcrumbs({
    sidebarItems,
    pathname,
    onlyCategories: true,
  });
  const deepestCategory = categoryBreadcrumbs.slice(-1)[0];
  return deepestCategory?.items ?? sidebarItems;
}

/**
 * @param {{ sidebarItems: import('@docusaurus/plugin-content-docs').PropSidebar, pathname: string, onlyCategories?: boolean }} param
 */
function getSidebarBreadcrumbs({sidebarItems, pathname, onlyCategories = false}) {
  /** @type {import('@docusaurus/plugin-content-docs').PropSidebarItem[]} */
  const breadcrumbs = [];

  function extract(items) {
    for (const item of items) {
      if (item.type === 'category') {
        if (isSamePath(item.href, pathname) || extract(item.items)) {
          breadcrumbs.unshift(item);
          return true;
        }
      } else if (
        item.type === 'link' &&
        item.docId &&
        isSamePath(item.href, pathname)
      ) {
        if (!onlyCategories) {
          breadcrumbs.unshift(item);
        }
        return true;
      }
    }
    return false;
  }

  extract(sidebarItems);
  return breadcrumbs;
}

/**
 * @param {import('@docusaurus/plugin-content-docs').PropVersion} version
 * @param {import('@docusaurus/plugin-content-docs').PropMetadata} metadata
 */
export function resolveDocSidebarItems(version, metadata) {
  const sidebars = version.docsSidebars ?? {};
  const sidebarName =
    metadata.sidebar && sidebars[metadata.sidebar]
      ? metadata.sidebar
      : Object.keys(sidebars)[0];

  if (!sidebarName) {
    return [];
  }

  return sidebars[sidebarName] ?? [];
}

export function isIntroDocId(docId) {
  if (!docId) {
    return false;
  }
  const segment = docId.split('/').pop() ?? '';
  return segment === 'intro';
}

export function getDocIdFromSidebarItem(item) {
  if (item.type === 'doc') {
    return item.id;
  }
  if (item.type === 'link' && item.docId) {
    return item.docId;
  }
  return undefined;
}

export function getHrefFromSidebarItem(item) {
  if (item.type === 'doc') {
    return item.href;
  }
  if (item.type === 'link') {
    return item.href;
  }
  return undefined;
}
