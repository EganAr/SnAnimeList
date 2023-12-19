"use client";
import AnimeList from "@/components/AnimeList/AnimeList";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { getAnimeResponse } from "@/service/Api";
import { useEffect, useState } from "react";

const page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const popularAnime = await getAnimeResponse(
      `top/anime`,
      `page=${page}&limit=25`
    );
    setTopAnime(popularAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <>
      <HeaderMenu title="Most Popular" />
      <AnimeList api={topAnime} />
      <Pagination page={page} setPage={setPage} />
    </>
  );
};

export default page;
