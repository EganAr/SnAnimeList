"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ShowAnime = ({ api }) => {
  return (
    <div className="flex px-6 py-4 gap-2">
        <Swiper
               modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
               spaceBetween={10}
               slidesPerView={3}
               className="mySwiper "
               autoplay={{ delay: 4000 }}
               >
      {api.data?.map((anime, id) => {
        console.log(anime)
        return (
            <SwiperSlide key={id}>
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer text-white hover:text-color-accent transition-all"
            key={id}
          >
            <Image
              src={anime.images.jpg.large_image_url}
              alt="..."
              width={600}
              height={600}
              className="sm:w-full w-80 sm:h-96 h-60 object-cover "
            />
         <h1 className="font-bold md:text-lg text-md w-full py-4">{anime.title}</h1>
          </Link>
          </SwiperSlide>
        );
      })}
      </Swiper>
    </div>
  );
};

export default ShowAnime;
