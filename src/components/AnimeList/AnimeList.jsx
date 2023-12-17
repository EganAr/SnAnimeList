import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data.map((anime) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer ">
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="w-full max-h-96 object-cover"
            />
            <h1 className="font-bold md:text-lg text-md p-4">{anime.title}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
