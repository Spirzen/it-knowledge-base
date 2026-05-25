import {useEffect} from 'react';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import {useDocSidebarFallback} from '@site/src/theme/DocSidebarFallback/context';

/** Включает desktop-fallback бургера только на страницах с docs-сайдбаром. */
export default function DocSidebarFallbackActivator(): null {
  const sidebar = useDocsSidebar();
  const {setCanUseDesktopOverlay} = useDocSidebarFallback();

  useEffect(() => {
    const enabled = sidebar != null;
    setCanUseDesktopOverlay(enabled);
    document.documentElement.classList.toggle('it-docs-page', enabled);
    return () => {
      setCanUseDesktopOverlay(false);
      document.documentElement.classList.remove('it-docs-page');
    };
  }, [sidebar, setCanUseDesktopOverlay]);

  return null;
}
