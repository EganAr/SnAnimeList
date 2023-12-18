import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/service/Api";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const SearchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);
  return (
    <>
      <section>
        <Header
          title={`Searching for ${decodeKeyword}...`}
        />
        <AnimeList api={SearchAnime} />
      </section>
    </>
  );
};

export default Page;
