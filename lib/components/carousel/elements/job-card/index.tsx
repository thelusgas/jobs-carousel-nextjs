import { JobCardDetails } from '@components/carousel/elements/job-card/elements/job-card-details';
import { JobCardHeader } from '@components/carousel/elements/job-card/elements/job-card-header';
import { Job } from '@interfaces/data';
import Image from 'next/image';
import { forwardRef } from 'react';

import styles from './job-card.module.css';

const PLACEHOLDER_IMAGE_URL =
  'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg';

export interface JobCardProps {
  job: Job;
}

export const JobCard = forwardRef<HTMLDivElement, JobCardProps>(({ job }, ref) => {
  return (
    <article className={styles.wrapper} ref={ref}>
      <JobCardHeader jobTitle={job.jobTitle} companyName={job.companyName} />

      <Image
        className={styles.image}
        src={job.companyLogo ?? PLACEHOLDER_IMAGE_URL}
        alt={'company logo'}
        width={800}
        height={800}
      />

      <JobCardDetails
        location={job.location}
        estimatedSalary={job.estimatedSalary}
        postingDate={new Date(job.postingDate)}
      />

      <div
        className={styles.job_description}
        dangerouslySetInnerHTML={{ __html: job.jobDescription }}
      />
    </article>
  );
});

JobCard.displayName = 'JobCard';
