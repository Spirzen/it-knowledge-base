import React from 'react';
import DocSearchBar from '@site/src/components/DocSearch/DocSearchBar';
import styles from './styles.module.css';

export default function HomepageHeroSearch() {
  return (
    <div className={styles.wrap}>
      <DocSearchBar variant="hero" className={styles.bar} />
    </div>
  );
}
