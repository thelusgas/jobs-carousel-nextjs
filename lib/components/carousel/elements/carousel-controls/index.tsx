'use client';

import { ChevronIcon } from '@assets/chevron-icon';
import { Job } from '@interfaces/data';
import clsx from 'clsx';

import styles from './carousel-controls.module.css';

export interface CarouselControlsProps {
  handleScroll: (direction: 'left' | 'right') => void;
  handleScrollToElement: (index: number) => void;
  currentElement: number;
  filteredJobs: Job[];
  numOfItems: number;
}
export function CarouselControls(props: CarouselControlsProps) {
  const { handleScroll, handleScrollToElement, currentElement, filteredJobs, numOfItems } = props;

  return (
    <div role={'toolbar'} className={styles.carrousel__controls}>
      <button
        type="button"
        className={styles.arrow__left}
        onClick={() => handleScroll('left')}
        disabled={currentElement === 0}
      >
        <ChevronIcon direction="left" size={2} />
      </button>

      <div className={styles.controls__indicators__wrapper}>
        {filteredJobs.map((j, index) => (
          <button
            key={`${j.jobTitle}-${j.companyName}-indicator`}
            onClick={() => handleScrollToElement(index)}
            className={clsx({
              [styles.controls__indicator__button]: true,
              [styles.indicator__active]: index === currentElement,
            })}
          />
        ))}
      </div>
      <button
        type="button"
        className={styles.arrow__right}
        onClick={() => handleScroll('right')}
        disabled={currentElement === numOfItems - 1}
      >
        <ChevronIcon direction="right" size={2} />
      </button>
    </div>
  );
}
