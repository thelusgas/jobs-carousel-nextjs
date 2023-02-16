'use client';

import { ChangeEvent } from 'react';

import styles from './carousel-filters.module.css';

export interface CarouselFiltersProps {
  handleCompanyNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleOnlyLastSevenChange: (event: ChangeEvent<HTMLInputElement>) => void;
  filterByCompanyName: string;
}
export function CarouselFilters({
  handleCompanyNameChange,
  handleOnlyLastSevenChange,
  filterByCompanyName,
}: CarouselFiltersProps) {
  return (
    <form className={styles.input__container}>
      <div className={styles.input__wrapper}>
        <label htmlFor="filter-by-company-name" className={styles.input__label}>
          Company name
        </label>
        <input
          type="text"
          id="filter-by-company-name"
          className={styles.input}
          onChange={handleCompanyNameChange}
          value={filterByCompanyName}
        />
      </div>
      <div className={styles.input__wrapper}>
        <input
          type="checkbox"
          id="show-last-7-days"
          className={styles.input}
          onChange={handleOnlyLastSevenChange}
        />
        <label htmlFor="show-last-7-days" className={styles.input__label}>
          Show only last 7 days
        </label>
      </div>
    </form>
  );
}
