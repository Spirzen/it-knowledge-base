import {useEffect, useRef} from 'react';
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
const APPLY_DEBOUNCE_MS = 200;

/**
 * Обходит только раскрытые ветки (без querySelectorAll по всему DOM).
 */
function walkVisibleMenuLinks(nav, visit) {
  const rootList = nav.querySelector('ul.menu__list');
  if (!rootList) {
    return;
  }

  function walkList(listEl) {
    for (const item of listEl.children) {
      if (!(item instanceof HTMLElement) || !item.classList.contains('menu__list-item')) {
        continue;
      }

      const leaf = item.querySelector(':scope > a.menu__link');
      if (leaf && !leaf.classList.contains('menu__link--sublist')) {
        visit(leaf);
      }

      const categoryLink = item.querySelector(
        ':scope > .menu__list-item-collapsible .menu__link--sublist',
      );
      if (categoryLink) {
        visit(categoryLink);
      }

      if (item.classList.contains('menu__list-item--collapsed')) {
        continue;
      }

      const sublist = item.querySelector(':scope > .menu__list');
      if (sublist) {
        walkList(sublist);
      }
    }
  }

  walkList(rootList);
}

function isLinkMeasurable(link) {
  return !(link.offsetParent === null && link.getClientRects().length === 0);
}

function measureRequiredSidebarWidth(nav) {
  const sidebar = nav.closest('.theme-doc-sidebar-container');
  if (!sidebar) {
    return null;
  }

  const sidebarLeft = sidebar.getBoundingClientRect().left;
  let maxRight = 0;
  let maxNestDepth = 0;

  walkVisibleMenuLinks(nav, (link) => {
    if (!isLinkMeasurable(link)) {
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
    Math.max(
      MIN_WIDTH_PX,
      maxRight > 0
        ? Math.ceil(maxRight + SIDEBAR_PADDING_PX + depthBonus)
        : MIN_WIDTH_PX,
    ),
  );

  return {sidebar, width, maxNestDepth};
}

function isSidebarContainerCollapsed(sidebar) {
  return [...sidebar.classList].some((className) =>
    className.includes('docSidebarContainerHidden'),
  );
}

function clearAutoSidebarWidth(sidebar) {
  sidebar.style.removeProperty('width');
  sidebar.style.removeProperty('--doc-sidebar-nest-depth');
}

function shouldRemeasureFromClick(event) {
  const target = event.target;
  if (!(target instanceof Element)) {
    return false;
  }
  return Boolean(
    target.closest('.menu__caret') ||
      target.closest('.menu__link--sublist-caret') ||
      target.closest('.menu__link--sublist'),
  );
}

/**
 * Подстраивает ширину левого сайдбара под раскрытые пункты (desktop).
 * Без MutationObserver: пересчёт при resize, фильтре, клике по категории.
 */
export default function useSidebarAutoWidth(navRef, deps = []) {
  const scheduleRef = useRef(() => {});

  useEffect(() => {
    const nav = navRef.current;
    if (!nav || typeof window === 'undefined') {
      return undefined;
    }

    const mq = window.matchMedia('(min-width: 997px)');
    let frame = 0;
    let debounceTimer = 0;

    const runMeasure = () => {
      const sidebar = nav.closest('.theme-doc-sidebar-container');
      if (!sidebar) {
        return;
      }

      if (!mq.matches) {
        clearAppliedSidebarWidth(sidebar);
        clearAutoSidebarWidth(sidebar);
        return;
      }

      if (isSidebarContainerCollapsed(sidebar)) {
        clearAppliedSidebarWidth(sidebar);
        clearAutoSidebarWidth(sidebar);
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
    };

    const scheduleApply = ({defer = false} = {}) => {
      cancelAnimationFrame(frame);
      if (debounceTimer) {
        window.clearTimeout(debounceTimer);
      }

      const queue = () => {
        debounceTimer = window.setTimeout(() => {
          debounceTimer = 0;
          frame = requestAnimationFrame(runMeasure);
        }, APPLY_DEBOUNCE_MS);
      };

      if (defer && typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(queue, {timeout: 600});
        return;
      }

      queue();
    };

    scheduleRef.current = scheduleApply;
    scheduleApply();

    const sidebarContainer = nav.closest('.theme-doc-sidebar-container');
    const hiddenStateObserver =
      sidebarContainer &&
      new MutationObserver(() => {
        scheduleApply();
      });
    hiddenStateObserver?.observe(sidebarContainer, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const onNavClick = (event) => {
      if (shouldRemeasureFromClick(event)) {
        scheduleApply({defer: true});
      }
    };

    const onResize = () => scheduleApply();
    const onReset = () => scheduleApply();
    nav.addEventListener('click', onNavClick);
    window.addEventListener('resize', onResize, {passive: true});
    window.addEventListener(RESET_WIDTH_EVENT, onReset);
    mq.addEventListener('change', scheduleApply);

    return () => {
      scheduleRef.current = () => {};
      hiddenStateObserver?.disconnect();
      cancelAnimationFrame(frame);
      if (debounceTimer) {
        window.clearTimeout(debounceTimer);
      }
      nav.removeEventListener('click', onNavClick);
      window.removeEventListener('resize', onResize);
      window.removeEventListener(RESET_WIDTH_EVENT, onReset);
      mq.removeEventListener('change', scheduleApply);
      const sidebar = nav.closest('.theme-doc-sidebar-container');
      if (sidebar) {
        clearAppliedSidebarWidth(sidebar);
        clearAutoSidebarWidth(sidebar);
      }
    };
  }, [navRef]);

  useEffect(() => {
    scheduleRef.current();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- пересчёт при смене отфильтрованного дерева
  }, [navRef, ...deps]);
}
