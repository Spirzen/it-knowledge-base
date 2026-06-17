import React from 'react';
import clsx from 'clsx';
import {BPMN_ICON_DEFINITIONS} from '@site/src/data/bpmn/iconDefinitions';
import {bpmnIconMediaUrl} from '@site/src/data/encyclopediaMedia';
import styles from './BpmnIcon.module.css';

const SIZE_MAP = {sm: 24, md: 28, lg: 36};

/**
 * @param {{
 *   id: string;
 *   size?: 'sm' | 'md' | 'lg' | number;
 *   title?: string;
 *   className?: string;
 *   inline?: boolean;
 * }} props
 */
export default function BpmnIcon({id, size = 'md', title, className, inline = true}) {
  const def = BPMN_ICON_DEFINITIONS[id];
  if (!def) return null;

  const px = typeof size === 'number' ? size : (SIZE_MAP[size] ?? SIZE_MAP.md);
  const label = title ?? def.label;

  return (
    <img
      src={bpmnIconMediaUrl(id)}
      alt={label}
      title={label}
      width={px}
      height={px}
      className={clsx(styles.icon, inline && styles.inline, className)}
      loading="lazy"
      decoding="async"
    />
  );
}
