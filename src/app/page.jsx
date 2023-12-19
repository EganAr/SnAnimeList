import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/AnimeList/Header";
import Recomendations from "@/components/AnimeList/Recomendation";
import { getAnimeResponse, getRecommendations, reproduce } from "@/service/Api";

const Home = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recomendedAnime = await getRecommendations("recommendations/anime", "entry");
  recomendedAnime = reproduce(recomendedAnime, 4)

  return (
    <>
      <section>
        <Header title="Most Popular" Linkhref="/popular" LinkTitle="View All >"/>
        <AnimeList api={topAnime} />
      </section>
      <section >
        <Header title="Recomendations"/>
        <Recomendations api={recomendedAnime} />
      </section>
    </>
  );
};

export default Home;
