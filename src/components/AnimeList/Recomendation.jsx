import Image from "next/image";
import Link from "next/link";

const Recomendations = ({ api }) => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 px-6">
          {api.data?.map((anime, id) => {
            return (
              <Link
                href={`/anime/${anime.mal_id}`}
                className="cursor-pointer text-white hover:text-color-accent transition-all"
                key={id}
              >
                <Image
                  src={anime.images.webp.image_url}
                  alt="..."
                  width={350}
                  height={350}
                  className="w-full h-1/3 object-cover "
                />
                <h1 className="font-bold md:text-lg text-md p-4 ">{anime.title}</h1>
              </Link>
            );
          })}
        </div>
      );
}

export default Recomendations