"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Recomendations = ({ api }) => {
    return (
        <div className="flex md:flex-row flex-col max-w-screen h-[450px] px-6 ">
          <Swiper
               modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
               spaceBetween={20}
               slidesPerView={4}
               navigation={{ clickable: true }}
               className="mySwiper"
               autoplay={{ delay: 4000 }}
               >
          {api.data?.map((anime, id) => {
            return (
              <SwiperSlide >
              <Link
                href={`/anime/${anime.mal_id}`}
                className="cursor-pointer text-white hover:text-color-accent transition-all justify-center"
                key={id}
              >
               <Image
                  src={anime.images.webp.large_image_url}
                  alt="..."
                  width={350}
                  height={350}
                  className="md:w-full w-90 hover:opacity-80 h-[350px] object-cover flex rounded-lg"
                />
                <h1 className="font-bold md:text-lg text-md h-20 p-4">{anime.title}</h1>
              </Link>
              </SwiperSlide>
            );
          })}
          </Swiper>
        </div>
      );
}

export default Recomendations