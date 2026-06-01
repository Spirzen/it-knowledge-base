import {useEffect} from 'react';
import {
  applySidebarWidth,
  clearAppliedSidebarWidth,
  hasUserSidebarWidth,
  readUserSidebarWidth,
  RESET_WIDTH_EVENT,
} from '@site/src/theme/docSidebarWidth';

const SIDEBAR_PADDING_PX = 28;
const MIN_WIDTH_PX = 168;
const MAX_WIDTH_VW = 0.42;

function isSidebarLinkVisible(link, nav) {
  if (!(link instanceof HTMLElement) || !nav.contains(link)) {
    return false;
  }
  if (link.offsetParent === null && link.getClientRects().length === 0) {
    return false;
  }

  let item = link.closest('.menu__list-item');
  while (item && nav.contains(item)) {
    if (item.classList.contains('menu__list-item--collapsed')) {
      const sublist = item.querySelector(':scope > .menu__list');
      if (sublist?.contains(link)) {
        return false;
      }
    }
    item = item.parentElement?.closest('.menu__list-item') ?? null;
  }

  return true;
}

function measureRequiredSidebarWidth(nav) {
  const sidebar = nav.closest('.theme-doc-sidebar-container');
  if (!sidebar) {
    return null;
  }

  const sidebarLeft = sidebar.getBoundingClientRect().left;
  let maxRight = 0;
  let maxNestDepth = 0;

  nav.querySelectorAll('.menu__link').forEach((link) => {
    if (!isSidebarLinkVisible(link, nav)) {
      return;
    }

    const rect = link.getBoundingClientRect();
    maxRight = Math.max(maxRight, rect.right - sidebarLeft);

    let depth = 0;
    let el = link.parentElement;
    while (el && el !== nav) {
      if (el.classList.contains('menu__list')) {
        depth += 1;
      }
      el = el.parentElement;
    }
    maxNestDepth = Math.max(maxNestDepth, depth);
  });

  const viewportCap = Math.floor(window.innerWidth * MAX_WIDTH_VW);
  const depthBonus = Math.max(0, maxNestDepth - 1) * 20;
  const width = Math.min(
    viewportCap,
    Math.max(MIN_WIDTH_PX, Math.ceil(maxRight + SIDEBAR_PADDING_PX + depthBonus)),
  );

  return {sidebar, width, maxNestDepth};
}

/**
 * Подстраивает ширину левого сайдбара под видимые вложенные пункты (планшет и desktop).
 */
export default function useSidebarAutoWidth(navRef, deps = []) {
  useEffect(() => {
    const nav = navRef.current;
    if (!nav || typeof window === 'undefined') {
      return undefined;
    }

    const mq = window.matchMedia('(min-width: 997px)');
    let frame = 0;

    let debounceTimer = 0;
    const apply = () => {
      cancelAnimationFrame(frame);
      if (debounceTimer) {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(() => {
        debounceTimer = 0;
        frame = requestAnimationFrame(() => {
        const sidebar = nav.closest('.theme-doc-sidebar-container');
        if (!sidebar) {
          return;
        }

        if (!mq.matches) {
          clearAppliedSidebarWidth(sidebar);
          sidebar.style.removeProperty('--doc-sidebar-nest-depth');
          return;
        }

        const userWidth = readUserSidebarWidth();
        if (userWidth) {
          applySidebarWidth(sidebar, userWidth);
          return;
        }

        if (hasUserSidebarWidth(sidebar)) {
          clearAppliedSidebarWidth(sidebar);
        }

        const result = measureRequiredSidebarWidth(nav);
        if (!result) {
          return;
        }

        result.sidebar.style.width = `${result.width}px`;
        result.sidebar.style.setProperty(
          '--doc-sidebar-nest-depth',
          String(result.maxNestDepth),
        );
        });
      }, 120);
    };

    apply();

    const observer = new MutationObserver(apply);
    observer.observe(nav, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['class'],
    });

    const onResize = () => apply();
    const onReset = () => apply();
    window.addEventListener('resize', onResize);
    window.addEventListener(RESET_WIDTH_EVENT, onReset);
    mq.addEventListener('change', apply);

    return () => {
      cancelAnimationFrame(frame);
      if (debounceTimer) {
        window.clearTimeout(debounceTimer);
      }
      observer.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener(RESET_WIDTH_EVENT, onReset);
      mq.removeEventListener('change', apply);
      const sidebar = nav.closest('.theme-doc-sidebar-container');
      if (sidebar) {
        clearAppliedSidebarWidth(sidebar);
        sidebar.style.removeProperty('--doc-sidebar-nest-depth');
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- deps задают пересчёт при фильтрации
  }, [navRef, ...deps]);
}
