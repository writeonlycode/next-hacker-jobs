import JobCardFooterUrl from "./JobCardFooterUrl";
import JobCardFooterUser from "./JobCardFooterUser";
import JobCardFooterDate from "./JobCardFooterDate";

export default function JobCardFooter({
  url,
  by,
  time,
}: {
  url: string;
  by: string;
  time: number;
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-2 items-center justify-end">
      <JobCardFooterUrl url={url} />
      <JobCardFooterUser user={by} />
      <JobCardFooterDate time={time} />
    </div>
  );
}
