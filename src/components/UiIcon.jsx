import React from 'react';
import clsx from 'clsx';
import {resolveUiIconEntry} from '@site/src/data/uiIconDefinitions';
import {uiIconMediaUrl} from '@site/src/data/encyclopediaMedia';
import styles from './UiIcon.module.css';

const SIZE_MAP = {xs: 16, sm: 20, md: 24, lg: 32, xl: 40};

/**
 * Семантическая иконка интерфейса (Hugeicons).
 *
 * @param {{
 *   id: string;
 *   file?: string;
 *   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
 *   title?: string;
 *   className?: string;
 *   inline?: boolean;
 * }} props
 */
export default function UiIcon({
  id,
  file,
  size = 'md',
  title,
  className,
  inline = true,
}) {
  const entry = resolveUiIconEntry(id);
  const fileName = file ?? entry?.file;
  if (!fileName) return null;

  const px = typeof size === 'number' ? size : (SIZE_MAP[size] ?? SIZE_MAP.md);
  const label = title ?? entry?.label ?? id;

  return (
    <img
      src={uiIconMediaUrl(fileName)}
      alt=""
      aria-hidden={title ? undefined : true}
      title={label}
      width={px}
      height={px}
      className={clsx(styles.icon, inline && styles.inline, className)}
      loading="lazy"
      decoding="async"
    />
  );
}
