function CardGenres({ genre, img }) {
  return (
    <>
      <div className="relative hover:-translate-y-2 ease-in-out duration-300 cursor-pointer">
        <img className="rounded-lg" src={img} alt="game genre" />
        <p className="text-xl whitespace-nowrap text-white font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {genre}
        </p>
      </div>
    </>
  );
}

export default CardGenres;
