import RemoteJobCard, { RemoteJobCardType } from "@/components/RemoteJobCard";
import SearchForm from "../../components/SearchForm";
import { REMOTEJOBS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  // const session = await auth();
  // console.log(session?.id);
  // const jobPosts = await client.fetch(REMOTEJOBS_QUERY);
  const { data: jobPosts } = await sanityFetch({
    query: REMOTEJOBS_QUERY,
    params,
  });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading"> FIND YOUR FREEDOM AND WORK ANYWHERE </h1>

        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All remote jobs"}
        </p>

        <ul className="mt-7 card_grid">
          {jobPosts?.length > 0 ? (
            jobPosts.map((jobPost: RemoteJobCardType) => (
              <RemoteJobCard key={jobPost?._id} post={jobPost} />
            ))
          ) : (
            <p className="no-results">No jobs found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
