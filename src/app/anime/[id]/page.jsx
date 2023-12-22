import ButtonCollection from "@/components/AnimeList/ButtonCollection";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import { getAnimeResponse } from "@/service/Api";
import { authUserSession } from "@/service/auth-libs";
import prisma from "@/service/prisma";
import Image from "next/image";

const Page = async ({ params: id }) => {
  const anime = await getAnimeResponse(`anime/${id.id}`);
  const user = await authUserSession()
  const collection = await prisma.collection.findFirst({
    where: {user_email: user?.email, anime_mal_id: id.id}
  })

  return (
    <>
      <div className="pt-6 px-6">
        <h1 className="text-white sm:text-xl text-lg font-bold sm:text-center md:text-left">
          {anime.data.title} | {anime.data.title_japanese}
        </h1>
      </div>
      <div className="pt-4 px-6 gap-6 text-white flex sm:flex-row flex-col">
        <Image
          src={anime.data.images.webp.large_image_url}
          alt={anime.data.images.jpg.large_image_url}
          width={350}
          height={250}
          className="rounded object-cover min-w-[350px]"
        />
        <div className="grid grid-cols-4 text-center h-36 sm:w-[250px] md:w-[420px] ">
          <div className="flex-col text-color-dark sm:w-24 w-20">
            <div className="bg-color-accent rounded-lg sm:text-lg text-md font-bold">Score</div>
            <h1 className="text-color-accent sm:text-lg text-center py-1">{anime.data.score}</h1>
            <h2 className="text-color-accent text-xs text-center">{anime.data.scored_by} - users</h2>
          </div>
          <div className="flex-col text-color-dark sm:w-24 w-20">
            <div className="bg-color-accent rounded-lg sm:text-lg text-md font-bold ">Ranked</div>
            <h1 className="text-color-accent text-3xl text-center py-2">#{anime.data.rank}</h1>
          </div>
          <div className="flex-col text-color-dark sm:w-24 w-20">
            <div className="bg-color-accent rounded-lg sm:text-lg text-md font-bold">Popularity</div>
            <h1 className="text-color-accent text-xl text-center py-2">#{anime.data.popularity}</h1>
          </div>
          <div className="flex-col text-color-dark sm:w-24 w-20">
            <div className="bg-color-accent rounded-lg sm:text-lg text-md font-bold">Favorites</div>
            <h1 className="text-color-accent text-xl text-center py-2">#{anime.data.favorites}</h1>
          </div>
          <div className="col-span-4 text-white py-2">
            <div className="bg-white rounded-lg h-1 justify-center items-center"></div>
            <div className="text-xl font-bold py-4 sm:text-left text-center">Synopsis</div>
            <h1 className="text-white text-justify text-xs">{anime.data.synopsis}</h1>
          </div>
        </div>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
      </div>
      {!collection && user ? <div>
        <ButtonCollection anime_mal_id={id.id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title}/>
      </div> : <div></div>}
    </>
  );
};

export default Page;
