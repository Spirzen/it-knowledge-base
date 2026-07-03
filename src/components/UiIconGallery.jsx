import React, {useMemo, useState} from 'react';
import UiIcon from '@site/src/components/UiIcon';
import {UI_ICON_CATEGORIES} from '@site/src/data/uiIconDefinitions';
import styles from './UiIconGallery.module.css';

/**
 * Справочная галерея иконок интерфейса с поиском.
 */
export default function UiIconGallery() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return UI_ICON_CATEGORIES;
    return UI_ICON_CATEGORIES.map((cat) => ({
      ...cat,
      icons: cat.icons.filter((icon) => {
        const hay = [
          icon.id,
          icon.label,
          icon.hint,
          icon.file,
          ...(icon.alternates ?? []),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return hay.includes(q);
      }),
    })).filter((cat) => cat.icons.length > 0);
  }, [query]);

  const total = filtered.reduce((n, c) => n + c.icons.length, 0);

  return (
    <div className={styles.gallery}>
      <label className={styles.searchWrap}>
        <span className="sr-only">Поиск по иконкам</span>
        <input
          type="search"
          className={styles.search}
          placeholder="Поиск: геолокация, Wi‑Fi, настройки…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <p className={styles.meta}>
        {total} {total === 1 ? 'иконка' : total < 5 ? 'иконки' : 'иконок'}
        {query ? ` по запросу «${query}»` : ''}
      </p>

      {filtered.map((category) => (
        <section key={category.id} className={styles.section}>
          <h3 className={styles.sectionTitle}>{category.label}</h3>
          <ul className={styles.grid}>
            {category.icons.map((icon) => (
              <li key={icon.id} className={styles.card}>
                <div className={styles.preview}>
                  <UiIcon id={icon.id} size="lg" inline={false} />
                  {(icon.alternates ?? []).map((alt) => (
                    <UiIcon key={alt} id={icon.id} file={alt} size="lg" inline={false} />
                  ))}
                </div>
                <p className={styles.label}>{icon.label}</p>
                <p className={styles.ids}>
                  <code>{icon.id}</code>
                  {icon.alternates?.length ? (
                    <span className={styles.alt}>
                      {' '}
                      · {icon.file}
                      {icon.alternates.map((a) => `, ${a}`).join('')}
                    </span>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
