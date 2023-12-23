import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/AnimeList/Header";
import HighlightAnime from "@/components/AnimeList/HighlightAnime";
import Recomendations from "@/components/AnimeList/Recomendation";
import ShowAnime from "@/components/AnimeList/ShowAnime";
import { getAnimeResponse, getRecommendations, reproduce } from "@/service/Api";

const Home = async () => {
  const AnimeSeason = await getAnimeResponse("seasons/now", "limit=16");
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recomendedAnime = await getRecommendations(
    "recommendations/anime",
    "entry"
  );
  recomendedAnime = reproduce(recomendedAnime, 16);

  return (
    <>
      <section>
        <Header title="Fall 2023" justify="justify-center" padding="py-6"/>
        <ShowAnime api={AnimeSeason} />
      </section>
      <section>
        <Header
          title="Most Popular"
          Linkhref="/popular"
          LinkTitle="View All >"
          justify="justify-between"
          padding="pt-20"
        />
        <AnimeList api={topAnime} />
      </section>
      <section className="pt-20">
        <HighlightAnime/>
      </section>
      <section>
        <Header title="Recomendations" justify="justify-between"  padding="pt-20"/>
        <Recomendations api={recomendedAnime} />
      </section>
    </>
  );
};

export default Home;
