import React, {type ReactNode} from 'react';
import {useColorMode, useThemeConfig} from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';
import DesignThemePicker from '@site/src/components/DesignThemePicker';
import type {Props} from '@theme/Navbar/ColorModeToggle';
import styles from './styles.module.css';

export default function NavbarColorModeToggle({className}: Props): ReactNode {
  const navbarStyle = useThemeConfig().navbar.style;
  const {disableSwitch} = useThemeConfig().colorMode;
  const {colorModeChoice, setColorMode} = useColorMode();

  if (disableSwitch) {
    return <DesignThemePicker />;
  }

  return (
    <div className={styles.themeControls}>
      <DesignThemePicker />
      <ColorModeToggle
        className={className}
        buttonClassName={
          navbarStyle === 'dark' ? styles.darkNavbarColorModeToggle : undefined
        }
        value={colorModeChoice}
        onChange={setColorMode}
      />
    </div>
  );
}
