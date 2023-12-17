import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="text-color-dark font-bold text-2xl">
          SnAnimeList
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
