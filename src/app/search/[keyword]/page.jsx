import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/service/Api";

const Page = async ({ params }) => {
  const { keyword } = params;
  const SearchAnime = await getAnimeResponse("anime", `q=${keyword}`);
  return (
    <>
      <section>
        <Header
          title={`Searching for ${keyword}...`}
          Linkhref="/popular"
          LinkTitle="View More"
        />
        <AnimeList api={SearchAnime} />
      </section>
    </>
  );
};

export default Page;
