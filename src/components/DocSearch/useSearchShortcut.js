import {useEffect, useState} from 'react';

/**
 * Подпись горячей клавиши: ⌘K на Apple, Ctrl+K на остальных.
 */
export function useSearchShortcutLabel() {
  const [label, setLabel] = useState('Ctrl+K');

  useEffect(() => {
    const platform = navigator.platform || '';
    const mac = /Mac|iPhone|iPad|iPod/i.test(platform);
    setLabel(mac ? '⌘K' : 'Ctrl+K');
  }, []);

  return label;
}
