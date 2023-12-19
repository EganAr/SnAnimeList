import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="text-color-dark font-bold text-2xl px-6 hover:text-white transition-all">
          SnAnimeList
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
