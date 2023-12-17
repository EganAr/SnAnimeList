const { default: Link } = require("next/link");

const Header = ({ title, Linkhref, LinkTitle }) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-lg font-bold p-4">{title}</h1>
      {Linkhref && LinkTitle ? (
        <Link
          href={Linkhref}
          className="md:text-lg text-md font-bold p-4 cursor-pointer hover:text-blue-500 underline text-center"
        >
          {LinkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
