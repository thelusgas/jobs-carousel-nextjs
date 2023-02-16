'use client';

import styles from './no-results.module.css';

export function NoResults() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.warning}>!</p>
      <h2>Your search returned no results</h2>
    </div>
  );
}
