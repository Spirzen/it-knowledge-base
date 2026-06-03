/**
 * Ограничивает фоновый prefetch Docusaurus Link (IntersectionObserver в viewport).
 * window.docusaurus заморожен (Object.freeze) — подменяем ссылку на window, не свойство prefetch.
 */

const HEAVY_ROUTE_PREFIXES = [
  '/about/interactive',
  '/lab/',
  '/encyclopedia/',
];

function normalizePath(pathname) {
  if (!pathname) {
    return '/';
  }
  return pathname.replace(/\/$/, '') || '/';
}

function isHeavyRoute(pathname) {
  const path = normalizePath(pathname);
  return HEAVY_ROUTE_PREFIXES.some(
    (prefix) => path === prefix.replace(/\/$/, '') || path.startsWith(prefix),
  );
}

function installPrefetchGuard() {
  if (typeof window === 'undefined' || !window.docusaurus?.prefetch) {
    return;
  }

  if (window.__itPrefetchGuardInstalled) {
    return;
  }

  const original = window.docusaurus;
  const originalPrefetch = original.prefetch.bind(original);
  const originalPreload = original.preload.bind(original);

  try {
    Object.defineProperty(window, 'docusaurus', {
      value: {
        prefetch(routePath) {
          if (isHeavyRoute(routePath)) {
            return false;
          }
          return originalPrefetch(routePath);
        },
        preload(routePath) {
          return originalPreload(routePath);
        },
      },
      writable: true,
      configurable: true,
      enumerable: true,
    });
    window.__itPrefetchGuardInstalled = true;
  } catch {
    // Не удалось подменить API — остаются prefetch={false} на тяжёлых ссылках
  }
}

export default {
  onClientEntry() {
    installPrefetchGuard();
  },
  onRouteDidUpdate() {
    installPrefetchGuard();
  },
};
