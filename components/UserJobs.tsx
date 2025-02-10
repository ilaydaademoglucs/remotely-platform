import { client } from "@/sanity/lib/client";
import { REMOTEJOBS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import React from "react";
import RemoteJobCard, { RemoteJobCardType } from "./RemoteJobCard";

const UserJobs = async ({ id }: { id: string }) => {
  const jobs = await client.fetch(REMOTEJOBS_BY_AUTHOR_QUERY, { id });
  return (
    <>
      {jobs.length > 0 ? (
        jobs.map((job: RemoteJobCardType) => (
          <RemoteJobCard key={job._id} post={job} />
        ))
      ) : (
        <p className="no-results">No jobs found</p>
      )}
    </>
  );
};

export default UserJobs;
