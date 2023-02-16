export interface GetJobsDto {
  companySkills: boolean;
  fetchJobDesc: boolean;
  jobTitle: string;
  locations: [];
  numJobs: number;
  dismissedListingHashes: [];
  previousListingHashes: [];
}

export interface GetJobsResponse {
  jobs: Job[];
  totalJobs: number;
  remainingJobs: number;
}

export interface Job {
  jobId: string;
  source: string;
  jobTitle: string;
  location: string;
  estimatedSalary: string;
  salary: {
    average: number;
    low: number;
    high: number;
  };
  unifiedZippiaSalary: number;
  salaryPeriod: string;
  companyName: string;
  companyLogo: string;
  companyCategories: string[];
  jobDescription: string;

  partnerName: string;

  titleID: string;
  postingDate: string;
  actionDateSince: string;

  OBJcountry: string;
  OBJcity: string;
  OBJstateCode: string;
  OBJstate: string;
  OBJcompanyID: number;
  OBJcompanyDisplay: string;
  OBJindustry: string;
  OBJpostingDate: Date;
  OBJtitle: string;
  OBJtitleDisplay: string;
  OBJurl: string;
  OBJzipcode: string;
  OBJjobTags: string[];
  OBJdesc: string;

  companyZippiaOverallScore: number;
}
