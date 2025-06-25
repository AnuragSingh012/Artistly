import SearchForm from "@/components/SearchForm";
import ArtistList from "@/components/ArtistList";

export default async function Home({ searchParams }) {
  const query = (await searchParams)?.query?.toLowerCase?.() || "";

  return (
    <>
      <section className="hero_container">
        <h1 className="heading">
          Discover & Book <br />Top Artists
        </h1>
        <p className="sub-heading !max-w-3xl">
          Artistly connects you with outstanding performers — singers, dancers, speakers, and DJs — to bring energy, emotion, and excellence to your events
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? (
              <>
                Search results for <span className="text-blue-600">"{query}"</span>
              </>
            ) : (
              "Explore Artists"
            )}
        </p>
        <ArtistList query={query} />
      </section>
    </>
  );
}
