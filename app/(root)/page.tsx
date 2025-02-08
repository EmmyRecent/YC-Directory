import StartupCard, { StartupCardType } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

type HomeType = {
  searchParams: Promise<{ query?: string }>;
};

const Home = async ({ searchParams }: HomeType) => {
  const query = (await searchParams).query;
  const posts = await client.fetch(STARTUPS_QUERY);

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> Connect with Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">{query ? `Search results for ${query}` : "All startups"}</p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => <StartupCard key={post?._id} post={post} />)
          ) : (
            <p>Nothing to show here!</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
