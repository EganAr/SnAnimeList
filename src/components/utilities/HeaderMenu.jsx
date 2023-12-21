const HeaderMenu = ({ title }) => {
  return (
    <div>
      <div className="p-8">
        <h1 className="text-center text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">{title}</h1>
      </div>
    </div>
  );
};

export default HeaderMenu;
