import { Job } from "@/lib/getJobs";
import JobCardBody from "./JobCardBody";
import JobCardFooter from "./JobCardFooter";

export default function JobCard({ job }: { job: Job }) {
  if (!job) {
    return <></>;
  }

  return (
    <div key={job.id} className="shadow-md mb-5">
      <h3 className="text-2xl font-heading font-bold border-2 border-black bg-orange-light px-8 py-2 ">
        {job.title}
      </h3>
      <div className="story-text font-medium bg-white border-2 border-black px-8 py-6 overflow-hidden">
        <JobCardBody text={job.text} />
        <JobCardFooter url={job.url} by={job.by} time={job.time} />
      </div>
    </div>
  );
}
