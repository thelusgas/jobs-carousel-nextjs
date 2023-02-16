import { Carousel } from '@components/carousel';
import { GetJobsDto, GetJobsResponse } from '@interfaces/data';
import { Suspense } from 'react';

import Loading from '@/app/loading';

import styles from './page.module.css';

const JOB_TITLE = 'Business Analyst';
const NUM_JOBS = 20;

const options: GetJobsDto = {
  companySkills: true,
  dismissedListingHashes: [],
  fetchJobDesc: true,
  jobTitle: JOB_TITLE,
  locations: [],
  numJobs: NUM_JOBS,
  previousListingHashes: [],
};

const getJobs = async () => {
  const res = await fetch('https://www.zippia.com/api/jobs/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(options),
  });

  const jobs: GetJobsResponse = await res.json();

  return jobs;
};

export default async function Home() {
  const jobs = await getJobs();

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Jobs</h1>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<Loading />}>
          <Carousel jobs={jobs.jobs} />
        </Suspense>
      </main>
      <footer className={styles.footer}>by Lucas C. Ferreira</footer>
    </>
  );
}
