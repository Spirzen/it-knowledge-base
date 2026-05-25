import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames, useThemeConfig} from '@docusaurus/theme-common';
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import {useDocSidebarFallback} from '@site/src/theme/DocSidebarFallback/context';
import type {Props} from '@theme/Navbar/Layout';

import styles from './styles.module.css';

function NavbarBackdrop({
  className,
  onClick,
  ...props
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx('navbar-sidebar__backdrop', className)}
      onClick={onClick}
    />
  );
}

export default function NavbarLayout({children}: Props): ReactNode {
  const {
    navbar: {hideOnScroll, style},
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);
  const {desktopOverlayOpen, closeDesktopOverlay, canUseDesktopOverlay} =
    useDocSidebarFallback();

  const sidebarShown =
    mobileSidebar.shown ||
    (canUseDesktopOverlay && desktopOverlayOpen);

  const handleBackdropClick = () => {
    if (desktopOverlayOpen) {
      closeDesktopOverlay();
    }
    if (mobileSidebar.shown) {
      mobileSidebar.toggle();
    }
  };

  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: 'theme.NavBar.navAriaLabel',
        message: 'Main',
        description: 'The ARIA label for the main navigation',
      })}
      className={clsx(
        ThemeClassNames.layout.navbar.container,
        'navbar',
        'navbar--fixed-top',
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden,
        ],
        {
          'navbar--dark': style === 'dark',
          'navbar--primary': style === 'primary',
          'navbar-sidebar--show': sidebarShown,
        },
      )}>
      {children}
      <NavbarBackdrop onClick={handleBackdropClick} />
      <NavbarMobileSidebar />
    </nav>
  );
}
