const { default: Link } = require("next/link");

const Header = ({ title, Linkhref, LinkTitle }) => {
  return (
    <div className="flex justify-between py-4 px-4  ">
      <h1 className="p-4 text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">{title}</h1>
      {Linkhref && LinkTitle ? (
        <Link
          href={Linkhref}
          className="md:text-xl text-md  text-center text-white p-4 cursor-pointer transition-all hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"
        >
          {LinkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
