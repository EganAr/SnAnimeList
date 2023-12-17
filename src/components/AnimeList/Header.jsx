const { default: Link } = require("next/link");

const Header = ({ title, Linkhref, LinkTitle }) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-lg font-bold p-4 text-white">{title}</h1>
      {Linkhref && LinkTitle ? (
        <Link
          href={Linkhref}
          className="md:text-lg text-md font-bold p-4 cursor-pointer hover:text-color-accent underline text-center text-white"
        >
          {LinkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
