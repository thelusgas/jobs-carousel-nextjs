import styles from './job-card-header.module.css';
export interface JobCardHeaderProps {
  jobTitle: string;
  companyName: string;
}

export function JobCardHeader({ jobTitle, companyName }: JobCardHeaderProps) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{jobTitle}</h2>
      <h3 className={styles.company__name}>{companyName}</h3>
    </header>
  );
}
