export interface Job {
  id: number; // The item's unique id.
  title: string; // The title of the story, poll or job. HTML.
  text: string; // The comment, story or poll text. HTML.
  by: string; // The username of the item's author.
  time: number; // Creation date of the item, in Unix Time.
  url: string; // The URL of the story.
  type: string; // The type of item. One of "job", "story", "comment", "poll", or "pollopt".
  score: number; // The story's score, or the votes for a pollopt.
}

export async function getJobs(): Promise<Job[]> {
  const jobsIdsResponse = await fetch(
    "https://hacker-news.firebaseio.com/v0/jobstories.json"
  );

  let jobsIds = await jobsIdsResponse.json();

  const jobsRequests = jobsIds.map(async (id: number) => {
    const jobResponse = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    return jobResponse.json();
  });

  let jobs = await Promise.all(jobsRequests);

  jobs = jobs.filter((e) => e);

  return jobs;
}
