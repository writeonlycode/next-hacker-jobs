import { Job } from "./getJobs";

export interface JobsByDate {
  [key: string]: Job[];
}

export function organizeJobsByDate(jobs: Job[]): JobsByDate {
  return jobs.reduce(function (result, current) {
    const date = new Date(current.time * 1000);
    const yearMonthDate = date.toDateString();

    result[yearMonthDate] = result[yearMonthDate] || [];
    result[yearMonthDate].push(current);

    return result;
  }, Object.create(null));
}
