import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {useWindowSize} from '@docusaurus/theme-common';

type DocSidebarFallbackContextValue = {
  desktopOverlayOpen: boolean;
  toggleDesktopOverlay: () => void;
  closeDesktopOverlay: () => void;
  canUseDesktopOverlay: boolean;
  setCanUseDesktopOverlay: (enabled: boolean) => void;
};

const DocSidebarFallbackContext =
  createContext<DocSidebarFallbackContextValue | null>(null);

export function DocSidebarFallbackProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const windowSize = useWindowSize();
  const [desktopOverlayOpen, setDesktopOverlayOpen] = useState(false);
  const [canUseDesktopOverlay, setCanUseDesktopOverlay] = useState(false);

  const closeDesktopOverlay = useCallback(() => {
    setDesktopOverlayOpen(false);
  }, []);

  const toggleDesktopOverlay = useCallback(() => {
    setDesktopOverlayOpen((open) => !open);
  }, []);

  useEffect(() => {
    if (windowSize === 'mobile') {
      setDesktopOverlayOpen(false);
    }
  }, [windowSize]);

  useEffect(() => {
    if (!canUseDesktopOverlay) {
      setDesktopOverlayOpen(false);
    }
  }, [canUseDesktopOverlay]);

  useEffect(() => {
    const root = document.documentElement;
    if (desktopOverlayOpen && canUseDesktopOverlay && windowSize === 'desktop') {
      root.classList.add('it-doc-mobile-sidebar-open');
    } else {
      root.classList.remove('it-doc-mobile-sidebar-open');
    }
    return () => root.classList.remove('it-doc-mobile-sidebar-open');
  }, [desktopOverlayOpen, canUseDesktopOverlay, windowSize]);

  const value = useMemo(
    () => ({
      desktopOverlayOpen,
      toggleDesktopOverlay,
      closeDesktopOverlay,
      canUseDesktopOverlay,
      setCanUseDesktopOverlay,
    }),
    [
      desktopOverlayOpen,
      toggleDesktopOverlay,
      closeDesktopOverlay,
      canUseDesktopOverlay,
    ],
  );

  return (
    <DocSidebarFallbackContext.Provider value={value}>
      {children}
    </DocSidebarFallbackContext.Provider>
  );
}

export function useDocSidebarFallback(): DocSidebarFallbackContextValue {
  const ctx = useContext(DocSidebarFallbackContext);
  if (!ctx) {
    return {
      desktopOverlayOpen: false,
      toggleDesktopOverlay: () => {},
      closeDesktopOverlay: () => {},
      canUseDesktopOverlay: false,
      setCanUseDesktopOverlay: () => {},
    };
  }
  return ctx;
}
