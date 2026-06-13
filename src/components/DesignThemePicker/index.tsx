import React, {useCallback, useEffect, useState} from 'react';
import {
  applyItDesign,
  IT_DESIGNS,
  IT_FEATURED_DESIGNS,
  IT_OTHER_DESIGNS,
  IT_DESIGN_DEFAULT_ID,
  readStoredItDesignId,
} from '@site/src/utils/itDesignTheme';
import styles from './styles.module.css';

export default function DesignThemePicker(): React.ReactElement {
  const [designId, setDesignId] = useState(readStoredItDesignId);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === 'it-universe-design' && event.newValue) {
        const next = applyItDesign(event.newValue);
        setDesignId(next.id);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const onChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const next = applyItDesign(event.target.value);
    setDesignId(next.id);
  }, []);

  return (
    <label className={styles.root} title="Палитра оформления Вселенной IT">
      <span className={styles.label}>Тема</span>
      <select
        className={styles.select}
        value={designId}
        onChange={onChange}
        aria-label="Выбор темы оформления">
        {IT_DESIGNS.filter((d) => d.id === IT_DESIGN_DEFAULT_ID).map((design) => (
          <option key={design.id} value={design.id}>
            {design.name}
          </option>
        ))}
        <optgroup label="★ Популярные">
          {IT_FEATURED_DESIGNS.map((design) => (
            <option key={design.id} value={design.id}>
              {design.name}
            </option>
          ))}
        </optgroup>
        <optgroup label="Все темы">
          {IT_OTHER_DESIGNS.map((design) => (
            <option key={design.id} value={design.id}>
              {design.name}
            </option>
          ))}
        </optgroup>
      </select>
    </label>
  );
}
