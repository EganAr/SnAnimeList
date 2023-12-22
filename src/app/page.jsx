import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/AnimeList/Header";
import Recomendations from "@/components/AnimeList/Recomendation";
import ShowAnime from "@/components/AnimeList/ShowAnime";
import { getAnimeResponse, getRecommendations, reproduce } from "@/service/Api";

const Home = async () => {
  const newAnime = await getAnimeResponse("seasons/now", "limit=16");
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recomendedAnime = await getRecommendations(
    "recommendations/anime",
    "entry"
  );
  recomendedAnime = reproduce(recomendedAnime, 16);
  console.log(newAnime.length);

  return (
    <>
      <section>
        <Header title="Fall 2023" justify="justify-center" />
        <ShowAnime api={newAnime} />
      </section>
      <section>
        <Header
          title="Most Popular"
          Linkhref="/popular"
          LinkTitle="View All >"
          justify="justify-between"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recomendations" justify="justify-between" />
        <Recomendations api={recomendedAnime} />
      </section>
    </>
  );
};

export default Home;
