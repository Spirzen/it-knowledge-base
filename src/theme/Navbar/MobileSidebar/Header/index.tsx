import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import IconClose from '@theme/Icon/Close';
import NavbarLogo from '@theme/Navbar/Logo';
import DocSearchBar from '@site/src/components/DocSearch/DocSearchBar';
import {useDocSidebarFallback} from '@site/src/theme/DocSidebarFallback/context';

import styles from './styles.module.css';

function CloseButton(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const {desktopOverlayOpen, closeDesktopOverlay} = useDocSidebarFallback();

  const handleClose = () => {
    if (desktopOverlayOpen) {
      closeDesktopOverlay();
    }
    if (mobileSidebar.shown) {
      mobileSidebar.toggle();
    }
  };

  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.navbar.mobileSidebar.close',
        message: 'Закрыть меню',
        description: 'ARIA label for close button of mobile sidebar',
      })}
      className="clean-btn navbar-sidebar__close"
      onClick={handleClose}>
      <IconClose color="var(--ifm-color-emphasis-600)" />
    </button>
  );
}

export default function NavbarMobileSidebarHeader(): ReactNode {
  return (
    <div className={clsx('it-mobile-sidebar-header', styles.header)}>
      <div className="navbar-sidebar__brand">
        <NavbarLogo />
        <NavbarColorModeToggle className="margin-right--md" />
        <CloseButton />
      </div>
      <div className={styles.search}>
        <DocSearchBar
          variant="navbar"
          placement="sidebar"
          className={styles.searchBar}
        />
      </div>
    </div>
  );
}
