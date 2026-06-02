import React, {type ReactNode, useState, useMemo, useRef} from 'react';
import useSidebarAutoWidth from './useSidebarAutoWidth';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {
  useAnnouncementBar,
  useScrollPosition,
} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import DocSidebarItems from '@theme/DocSidebarItems';
import type {Props} from '@theme/DocSidebar/Desktop/Content';

import SidebarPanelHead from './SidebarPanelHead';
import SidebarResizeHandle from './SidebarResizeHandle';
import styles from './styles.module.css';

function useShowAnnouncementBar() {
  const {isActive} = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);

  useScrollPosition(
    ({scrollY}) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive],
  );
  return isActive && showAnnouncementBar;
}

function normalize(text: string): string {
  return text.toLowerCase();
}

function filterSidebarItems(
  items: Props['sidebar'],
  query: string,
): Props['sidebar'] {
  if (!query.trim()) {
    return items;
  }

  const normQuery = normalize(query);

  const filterItem = (
    item: Props['sidebar'][number],
  ): Props['sidebar'][number] | null => {
    if (item.type === 'category') {
      const labelMatch = normalize(item.label).includes(normQuery);
      const filteredChildren =
        item.items?.map(filterItem).filter(Boolean) as Props['sidebar'];

      if (labelMatch || filteredChildren.length > 0) {
        return {...item, items: filteredChildren};
      }
      return null;
    }

    if (item.type === 'link') {
      const labelMatch = normalize(item.label).includes(normQuery);
      const hrefMatch = item.href ? normalize(item.href).includes(normQuery) : false;
      return labelMatch || hrefMatch ? item : null;
    }

    return item;
  };

  return items
    .map(filterItem)
    .filter(Boolean) as Props['sidebar'];
}

export default function DocSidebarDesktopContent({
  path,
  sidebar,
  className,
}: Props): ReactNode {
  const showAnnouncementBar = useShowAnnouncementBar();
  const [search, setSearch] = useState('');

  const filteredSidebar = useMemo(
    () => filterSidebarItems(sidebar, search),
    [sidebar, search],
  );

  const navRef = useRef<HTMLElement>(null);
  useSidebarAutoWidth(navRef, [filteredSidebar]);

  const quickFilters = [
    {label: 'Языки', query: 'язык'},
    {label: 'Проект', query: 'проект'},
    {label: 'Аналитику', query: 'аналитик'},
    {label: 'Тестировщику', query: 'тестиров'},
    {label: 'Инженеру', query: 'инженер'},
    {label: 'Архитектору', query: 'архитект'},
    {label: 'Сеть', query: 'сет'},
  ];

  const activeQuick = quickFilters.find((f) => f.query === search.trim());

  return (
    <nav
      ref={navRef}
      aria-label={translate({
        id: 'theme.docs.sidebar.navAriaLabel',
        message: 'Docs sidebar',
        description: 'The ARIA label for the sidebar navigation',
      })}
      className={clsx(
        'menu thin-scrollbar',
        styles.menu,
        showAnnouncementBar && styles.menuWithAnnouncementBar,
        className,
      )}>
      <SidebarPanelHead />
      <div className={clsx(styles.sidebarSearchWrapper, 'it-sidebar-tools')}>
        <input
          type="search"
          className={styles.sidebarSearchInput}
          placeholder="Фильтр по категориям..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={clsx(styles.sidebarQuickFilters, 'it-sidebar-quick-filters')}>
          {quickFilters.map((filter) => (
            <button
              key={filter.query}
              type="button"
              className={clsx(
                styles.sidebarQuickFilter,
                activeQuick?.query === filter.query &&
                  styles.sidebarQuickFilterActive,
                activeQuick?.query === filter.query &&
                  'it-sidebar-quick-filter--active',
              )}
              onClick={() => setSearch(filter.query)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
        <DocSidebarItems items={filteredSidebar} activePath={path} level={1} />
      </ul>
      <SidebarResizeHandle navRef={navRef} />
    </nav>
  );
}

