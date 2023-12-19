import Link from "next/link";
import InputSearch from "./InputSearch";
import UserAction  from "./UserAction";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
      <div className="flex md:flex-row flex-col p-4 gap-2  items-center">
        <Link href="/" className="text-color-dark font-bold text-2xl px-6 hover:text-white transition-all">
          SnAnimeList
        </Link>
        <div className="justify-end flex w-full gap-4 items-center">
        <InputSearch/>
        <UserAction />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
