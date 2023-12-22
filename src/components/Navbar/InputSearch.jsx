"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;
    
    if (!keyword || keyword.trim() === "") return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative">
      <input
        placeholder="Search"
        className="w-full rounded-md p-1 sm:flex-col bg-color-dark text-white placeholder:text-white opacity-90"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute end-1 top-1 text-white" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
