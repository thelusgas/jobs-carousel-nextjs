'use client';

import { ClockLoader } from '@assets/clock-loader';

import styles from './loading.module.css';

export default function Loading() {
  return (
    <article className={styles.wrapper}>
      <ClockLoader size={10} />
    </article>
  );
}
