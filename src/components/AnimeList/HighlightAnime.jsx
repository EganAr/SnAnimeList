import { getAnimeResponse } from "@/service/Api";
import Image from "next/image";
import Link from "next/link";

const HighlightAnime = async ({ api }) => {
  const anime = await getAnimeResponse(`anime/23847`);

  return (
    <div className="px-6 py-20 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-xl">
      <div className="bg-black rounded-xl w-full h-full"> 
        <div className="flex sm:flex-row flex-col">
          <Image
            src={anime.data.images.webp.large_image_url}
            alt={anime.data.images.jpg.large_image_url}
            width={350}
            height={500}
            className="rounded-lg object-cover sm:w-[350px] w-96 h-[500px] justify-center items-center p-6"
          />
          <div className="flex flex-col text-white sm:text-left text-center">
            <h1 className="font-bold md:text-2xl text-md pt-6 hover:underline">
              {anime.data.title}
            </h1>
            <h2 className="font-bold md:text-xl text-md pt-6 text-color-accent">
              Series ◽ {anime.data.episodes} Episodes
            </h2>
            <h3 className="font-bold text-sm pt-6 sm:px-0 px-4 sm:w-3/4 w-full text-justify">
              {anime.data.synopsis}
            </h3>
            <div className="sm:pt-10 py-8">
              <Link
                href={`/anime/23847`}
                className="cursor-pointer font-bold text-black bg-color-accent hover:text-color-accent hover:bg-black transition-all p-2 w-32 h-10 rounded-lg "
              >
                Click Here 💢
              </Link>
              <Link
                href={`https://myanimelist.net/anime/23847/Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru_Zoku?q=oregai&cat=anime`}
                className="cursor-pointer font-bold text-white bg-blue-600 hover:text-black transition-all  p-2 w-32 h-10 rounded-lg ml-6"
              >
                MyAnimeList
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightAnime;
