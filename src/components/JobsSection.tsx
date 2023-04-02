import { useEffect, useState } from "react";
import { Job } from "@/lib/getJobs";
import JobCard from "@/components/JobCard";

export default function JobsSection({
  time,
  jobs,
}: {
  time: string;
  jobs: Job[];
}) {
  const [localeDate, setLocaleDate] = useState("");

  useEffect(() => {
    const localeDate = new Date(time).toLocaleDateString();
    setLocaleDate(localeDate);
  }, [time]);

  if (!time || !jobs) {
    return <></>;
  }

  const jobCards = jobs.map((job) => <JobCard key={job.id} job={job} />);

  return (
    <div>
      <h2 className="text-3xl font-heading font-bold mt-8 mb-2">
        {localeDate || time}
      </h2>
      {jobCards}
    </div>
  );
}
