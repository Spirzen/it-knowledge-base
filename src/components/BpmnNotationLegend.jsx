import React from 'react';
import BpmnIcon from './BpmnIcon';
import {BPMN_LEGEND_SECTIONS} from '@site/src/data/bpmn/iconDefinitions';
import styles from './BpmnNotationLegend.module.css';

/**
 * @param {{ compact?: boolean }} props
 */
export default function BpmnNotationLegend({compact = false}) {
  return (
    <div className={compact ? styles.rootCompact : styles.root} aria-label="Легенда элементов BPMN 2.0">
      {BPMN_LEGEND_SECTIONS.map((section) => (
        <section key={section.category} className={styles.section}>
          <h4 className={styles.heading}>{section.category}</h4>
          <ul className={styles.grid}>
            {section.items.map((item) => (
              <li key={item.id} className={styles.item}>
                <BpmnIcon id={item.id} size="lg" inline={false} />
                <span className={styles.caption}>{item.caption}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
