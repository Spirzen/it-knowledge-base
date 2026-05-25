import React, {type ReactNode} from 'react';
import {useWindowSize} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import IconMenu from '@theme/Icon/Menu';
import {useDocSidebarFallback} from '@site/src/theme/DocSidebarFallback/context';

export default function NavbarMobileSidebarToggle(): ReactNode {
  const {toggle, shown} = useNavbarMobileSidebar();
  const windowSize = useWindowSize();
  const {
    canUseDesktopOverlay,
    desktopOverlayOpen,
    toggleDesktopOverlay,
    closeDesktopOverlay,
  } = useDocSidebarFallback();

  const useDesktopFallback =
    canUseDesktopOverlay && (windowSize === 'desktop' || windowSize === 'ssr');

  const isOpen = useDesktopFallback ? desktopOverlayOpen : shown;

  const handleClick = () => {
    if (useDesktopFallback && windowSize === 'desktop') {
      toggleDesktopOverlay();
      return;
    }
    if (desktopOverlayOpen) {
      closeDesktopOverlay();
    }
    toggle();
  };

  return (
    <button
      onClick={handleClick}
      aria-label={translate({
        id: 'theme.docs.sidebar.toggleAriaLabel',
        message: 'Открыть меню навигации',
        description: 'ARIA label for navbar hamburger button',
      })}
      aria-expanded={isOpen}
      className="navbar__toggle clean-btn"
      type="button">
      <IconMenu />
    </button>
  );
}
