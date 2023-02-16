'use client';

import { CarouselControls } from '@components/carousel/elements/carousel-controls';
import { CarouselFilters } from '@components/carousel/elements/carousel-filters';
import { JobCard } from '@components/carousel/elements/job-card';
import { NoResults } from '@components/carousel/elements/no-results';
import { useInView } from '@helpers/in-view';
import { Job } from '@interfaces/data';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';

import styles from './carousel.module.css';

const SEVEN_DAYS_AGO_IN_MS = 7 * 24 * 60 * 60 * 1000;

export function Carousel({ jobs }: { jobs: Job[] }) {
  const { ref, visibleElements } = useInView();
  const [currentElement, setCurrentElement] = useState(0);

  const [onlyLastSeven, setOnlyLastSeven] = useState(false);
  const [filterByCompanyName, setFilterByCompanyName] = useState('');

  const scrollToElement = (index: number) => {
    const newElement = ref.current[index];
    if (newElement) {
      newElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (visibleElements.length > 0) {
      const index = ref.current.findIndex((el) => el === visibleElements[0]);
      const newIndex = direction === 'left' ? index - 1 : index + 1;
      scrollToElement(newIndex);
    }
  };

  const handleCompanyNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterByCompanyName(e.target.value);
  };

  const handleOnlyLastSevenChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOnlyLastSeven(e.target.checked);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (visibleElements.length > 0) {
        const index = ref.current.findIndex((el) => el === visibleElements[0]);
        /*
          setCurrentElement causes a re-render, which interrupts the snap.
          dont ask how long it took me to figure this one out.
        */
        setCurrentElement(index);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [visibleElements, ref]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const postingDate = new Date(job.postingDate);
      const sevenDaysAgo = new Date(new Date().getTime() - SEVEN_DAYS_AGO_IN_MS);

      const includesName = job.companyName
        .toLowerCase()
        .includes(filterByCompanyName.toLowerCase());

      if (onlyLastSeven && postingDate >= sevenDaysAgo) {
        return false;
      }

      if (filterByCompanyName !== '' && !includesName) {
        return false;
      }

      return true;
    });
  }, [onlyLastSeven, filterByCompanyName, jobs]);

  useEffect(() => {
    if (filteredJobs.length === 0) {
      setCurrentElement(0);
    }
  }, [filteredJobs]);

  return (
    <div className={styles.wrapper}>
      <CarouselFilters
        handleCompanyNameChange={handleCompanyNameChange}
        handleOnlyLastSevenChange={handleOnlyLastSevenChange}
        filterByCompanyName={filterByCompanyName}
      />

      <div className={styles.slider}>
        <div className={styles.cards}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <JobCard
                job={job}
                ref={(r) => (ref.current[index] = r)}
                key={`${job.jobTitle}-${job.companyName}-key-carousel`}
              />
            ))
          ) : (
            <NoResults />
          )}
        </div>
      </div>

      <CarouselControls
        handleScroll={handleScroll}
        handleScrollToElement={scrollToElement}
        currentElement={currentElement}
        filteredJobs={filteredJobs}
        numOfItems={ref.current.length}
      />
    </div>
  );
}
