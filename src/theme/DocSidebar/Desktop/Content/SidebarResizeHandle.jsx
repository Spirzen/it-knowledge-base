import {useEffect} from 'react';
import {translate} from '@docusaurus/Translate';
import {
  applySidebarWidth,
  clearAppliedSidebarWidth,
  clearUserSidebarWidth,
  dispatchSidebarWidthReset,
  readUserSidebarWidth,
  writeUserSidebarWidth,
} from '@site/src/theme/docSidebarWidth';

import styles from './styles.module.css';

/**
 * Ручка изменения ширины левого сайдбара (desktop).
 */
export default function SidebarResizeHandle({navRef}) {
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) {
      return undefined;
    }

    const mq = window.matchMedia('(min-width: 997px)');
    const sidebar = nav.closest('.theme-doc-sidebar-container');
    if (!sidebar) {
      return undefined;
    }

    const handle = document.createElement('div');
    handle.className = styles.resizeHandle;
    handle.setAttribute('role', 'separator');
    handle.setAttribute('aria-orientation', 'vertical');
    handle.setAttribute(
      'aria-label',
      translate({
        id: 'theme.docs.sidebar.resize',
        message: 'Изменить ширину бокового меню',
        description: 'ARIA label for doc sidebar resize handle',
      }),
    );
    handle.title = translate({
      id: 'theme.docs.sidebar.resizeHint',
      message: 'Перетащите. Двойной щелчок — сброс ширины.',
      description: 'Tooltip for doc sidebar resize handle',
    });

    sidebar.appendChild(handle);

    const stored = readUserSidebarWidth();
    if (stored && mq.matches) {
      applySidebarWidth(sidebar, stored);
    }

    const dragRef = {current: null};

    const onPointerDown = (event) => {
      if (!mq.matches || event.button !== 0) {
        return;
      }
      event.preventDefault();
      dragRef.current = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startWidth: sidebar.getBoundingClientRect().width,
      };
      handle.setPointerCapture(event.pointerId);
      handle.classList.add(styles.resizeHandleActive);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    };

    const onPointerMove = (event) => {
      const drag = dragRef.current;
      if (!drag || drag.pointerId !== event.pointerId) {
        return;
      }
      const delta = event.clientX - drag.startX;
      applySidebarWidth(sidebar, drag.startWidth + delta);
    };

    const finishDrag = (event) => {
      const drag = dragRef.current;
      if (!drag || (event.pointerId != null && drag.pointerId !== event.pointerId)) {
        return;
      }
      dragRef.current = null;
      if (handle.hasPointerCapture(event.pointerId)) {
        handle.releasePointerCapture(event.pointerId);
      }
      handle.classList.remove(styles.resizeHandleActive);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      writeUserSidebarWidth(sidebar.getBoundingClientRect().width);
    };

    const onDoubleClick = () => {
      clearUserSidebarWidth();
      clearAppliedSidebarWidth(sidebar);
      dispatchSidebarWidthReset();
    };

    handle.addEventListener('pointerdown', onPointerDown);
    handle.addEventListener('pointermove', onPointerMove);
    handle.addEventListener('pointerup', finishDrag);
    handle.addEventListener('pointercancel', finishDrag);
    handle.addEventListener('dblclick', onDoubleClick);

    return () => {
      handle.removeEventListener('pointerdown', onPointerDown);
      handle.removeEventListener('pointermove', onPointerMove);
      handle.removeEventListener('pointerup', finishDrag);
      handle.removeEventListener('pointercancel', finishDrag);
      handle.removeEventListener('dblclick', onDoubleClick);
      handle.classList.remove(styles.resizeHandleActive);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      handle.remove();
    };
  }, [navRef]);

  return null;
}
