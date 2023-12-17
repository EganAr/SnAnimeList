const Pagination = ({ page, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    })
  };
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop()
  };
  const handlePrevPage = () => {
    if (page === 1) return;
    setPage((prevState) => prevState - 1);
    scrollTop()
  };
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-white text-xl">
      <button
        className="transition-all hover:text-color-accent"
        onClick={handlePrevPage}
      >
        Prev
      </button>
      <p>{page}</p>
      <button
        className="transition-all hover:text-color-accent"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
