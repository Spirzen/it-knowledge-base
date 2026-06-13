import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useColorMode, useThemeConfig, useWindowSize} from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';
import DesignThemePicker from '@site/src/components/DesignThemePicker';
import type {Props} from '@theme/Navbar/ColorModeToggle';
import styles from './styles.module.css';

function isSidebarPlacement(className?: string): boolean {
  return Boolean(className?.includes('margin-right'));
}

export default function NavbarColorModeToggle({className}: Props): ReactNode {
  const navbarStyle = useThemeConfig().navbar.style;
  const {disableSwitch, respectPrefersColorScheme} = useThemeConfig().colorMode;
  const {colorModeChoice, setColorMode} = useColorMode();
  const windowSize = useWindowSize();
  const inSidebar = isSidebarPlacement(className);
  const hideInTopBar =
    !inSidebar && (windowSize === 'mobile' || windowSize === 'tablet');

  if (hideInTopBar) {
    return null;
  }

  return (
    <div
      className={clsx(
        styles.themeControls,
        'it-navbar-theme-controls',
        inSidebar && styles.themeControlsSidebar,
      )}>
      <DesignThemePicker />
      {!disableSwitch && (
        <ColorModeToggle
          className={className}
          respectPrefersColorScheme={respectPrefersColorScheme}
          buttonClassName={
            navbarStyle === 'dark' ? styles.darkNavbarColorModeToggle : undefined
          }
          value={colorModeChoice}
          onChange={setColorMode}
        />
      )}
    </div>
  );
}
