import React, {type ReactNode} from 'react';
import {useWindowSize} from '@docusaurus/theme-common';
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarLayout from '@theme/Navbar/MobileSidebar/Layout';
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header';
import NavbarMobileSidebarPrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu';
import NavbarMobileSidebarSecondaryMenu from '@theme/Navbar/MobileSidebar/SecondaryMenu';
import {useDocSidebarFallback} from '@site/src/theme/DocSidebarFallback/context';

export default function NavbarMobileSidebar(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const windowSize = useWindowSize();
  const {canUseDesktopOverlay, desktopOverlayOpen} = useDocSidebarFallback();

  const mountOnDesktop =
    canUseDesktopOverlay && (windowSize === 'desktop' || windowSize === 'ssr');

  const shouldRender = mobileSidebar.shouldRender || mountOnDesktop;

  const overlayOpen =
    (mobileSidebar.shown && mobileSidebar.shouldRender) ||
    (mountOnDesktop && desktopOverlayOpen);

  useLockBodyScroll(overlayOpen);

  if (!shouldRender) {
    return null;
  }

  return (
    <NavbarMobileSidebarLayout
      header={<NavbarMobileSidebarHeader />}
      primaryMenu={<NavbarMobileSidebarPrimaryMenu />}
      secondaryMenu={<NavbarMobileSidebarSecondaryMenu />}
    />
  );
}
