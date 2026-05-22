import React, {useCallback, useEffect, useState} from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import {
  applyItDesign,
  IT_DESIGNS,
  readStoredItDesignId,
} from '@site/src/utils/itDesignTheme';
import styles from './styles.module.css';

export default function DesignThemePicker(): React.ReactElement {
  const {setColorMode} = useColorMode();
  const [designId, setDesignId] = useState(readStoredItDesignId);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === 'it-universe-design' && event.newValue) {
        setDesignId(event.newValue);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const next = applyItDesign(event.target.value, setColorMode);
      setDesignId(next.id);
    },
    [setColorMode],
  );

  return (
    <label className={styles.root} title="Палитра оформления Вселенной IT">
      <span className={styles.label}>Тема</span>
      <select
        className={styles.select}
        value={designId}
        onChange={onChange}
        aria-label="Выбор темы оформления">
        {IT_DESIGNS.map((design) => (
          <option key={design.id} value={design.id}>
            {design.name}
          </option>
        ))}
      </select>
    </label>
  );
}
