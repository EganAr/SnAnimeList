import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/service/Api";

const Home = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  return (
    <>
      <section>
        <Header
          title="Most Popular"
          Linkhref="/popular"
          LinkTitle="View More"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Home;
