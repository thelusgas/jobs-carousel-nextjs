import styles from './job-card-details.module.css';

export interface JobCardDetailsProps {
  location: string;
  estimatedSalary: string;
  postingDate: Date;
}

export function JobCardDetails({ location, estimatedSalary, postingDate }: JobCardDetailsProps) {
  return (
    <dl className={styles.job_details}>
      <dt>Location</dt>
      <dd>{location}</dd>
      <dt>Salary</dt>
      <dd>{estimatedSalary}</dd>
      <dt>Date posted</dt>
      <dd>{postingDate.toDateString()}</dd>
    </dl>
  );
}
