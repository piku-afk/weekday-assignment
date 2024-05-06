import { FilterType } from "../App";

export interface JobDescription {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: number;
  salaryCurrencyCode: string;
  location: string;
  minExp: number;
  maxExp: number;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

export interface JobListResponse {
  jdList: JobDescription[];
  totalCount: number;
}

export interface JobListRequest extends Partial<FilterType> {
  limit: number;
  offset?: number;
}
