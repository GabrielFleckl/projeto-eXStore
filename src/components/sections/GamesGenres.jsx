import AllLink from "../AllLink";
import CardGenres from "../CardGenres";
import Title from "../Title";

import strategy from "../../assets/strategy.png";
import FPS from "../../assets/FPS.png";
import RPG from "../../assets/RPG.png";
import puzzle from "../../assets/puzzle.png";
import rolePlaying from "../../assets/role_playing.png";
import sports from "../../assets/sports.png";

function GamesGenres() {
  const CardGenresDescription = [
    { id: "1", img: strategy, genre: "Strategy" },
    { id: "2", img: FPS, genre: "FPS" },
    { id: "3", img: RPG, genre: "RPG" },
    { id: "4", img: puzzle, genre: "Puzzle" },
    { id: "5", img: rolePlaying, genre: "Role Playing" },
    { id: "6", img: sports, genre: "Sports" },
  ];

  return (
    <section className="py-10 w-3/4 m-auto">
      <div className="flex justify-between items-center mb-6">
        <Title title={"Games Genres"} />
        <AllLink href={"#"} title={"See all genres"} />
      </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-6 place-items-center">
        {CardGenresDescription.map((card) => (
          <CardGenres genre={card.genre} img={card.img} key={card.id} />
        ))}
      </div>
    </section>
  );
}

export default GamesGenres;
