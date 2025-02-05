import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

type HomeType = {
  searchParams: Promise<{ query?: string }>;
};

const Home = async ({ searchParams }: HomeType) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      views: 55,
      description: "This is a description...",
      image: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
      category: "robots",
      title: "We Robots",
      author: {
        _id: 1,
        name: "EmmyRecent",
      },
    },
  ];

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
            posts.map((post: StartupCardType) => <StartupCard key={post?._id} {...post} />)
          ) : (
            <p>Nothing to show here!</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
