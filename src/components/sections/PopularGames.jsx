import gta from "../../assets/gta.png";
import roblox from "../../assets/roblox.png";
import nba from "../../assets/nba.png";
import deadByDayLight from "../../assets/dbd.png";
import ark from "../../assets/ark.png";
import rocket from "../../assets/rl.png";
import forza from "../../assets/fh.png";
import city from "../../assets/cs.png";

import Title from "../Title";
import AllLink from "../AllLink";
import Card from "../Card";

function PopularGames() {
  const popularGamesCardDescription = [
    {
      id: "1",
      img: gta,
      name: "GTA V",
      isFree: false,
      discount: "40%",
      prevPrice: "590.000",
    },
    {
      id: "2",
      img: roblox,
      name: "ROBLOX",
      isFree: true,
      discount: "",
      prevPrice: "",
    },
    {
      id: "3",
      img: nba,
      name: "NBA 2K22",
      isFree: false,
      discount: "70%",
      prevPrice: "990.000",
    },
    {
      id: "4",
      img: deadByDayLight,
      name: "Dead by Daylight",
      isFree: false,
      discount: "50%",
      prevPrice: "429.000",
    },
    {
      id: "5",
      img: ark,
      name: "ARK: Survival Evolved",
      isFree: false,
      discount: "",
      prevPrice: "",
      price: "430.000",
    },
    {
      id: "6",
      img: rocket,
      name: "Rocket League",
      isFree: true,
      discount: "",
      prevPrice: "",
    },
    {
      id: "7",
      img: forza,
      name: "Forza Horizon 5",
      isFree: false,
      discount: "60%",
      prevPrice: "890.000",
    },
    {
      id: "8",
      img: city,
      name: "Cities: Skylines",
      isFree: false,
      discount: "",
      prevPrice: "",
      price: "590.000",
    },
  ];

  return (
    <section className="py-10 md:w-3/4 m-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <Title title={"Popular Games"} />
        <AllLink href={"#"} title={"Browse all games"} />
      </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 place-items-stretch ">
        {popularGamesCardDescription.map((card) => (
          <Card
            key={card.id}
            img={card.img}
            isFree={card.isFree}
            discount={card.discount}
            prevPrice={card.prevPrice}
            price={card.price}
            name={card.name}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularGames;
