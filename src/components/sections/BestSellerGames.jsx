import Card from "../Card";
import Title from "../Title";

import minecraft from "../../assets/minecraft.png";
import asphalt from "../../assets/asphalt.png";
import witcher from "../../assets/witcher.png";
import smars from "../../assets/smars.png";

function BestSellerGames() {
  const bestSellerGamesDescription = [
    {
      id: "1",
      img: minecraft,
      isFree: false,
      name: "Minecraft",
      discount: "90%",
      prevPrice: "260.000",
    },
    {
      id: "2",
      img: asphalt,
      isFree: true,
      name: "Asphalt 9: Legends",
    },
    {
      id: "3",
      img: witcher,
      isFree: false,
      name: "The Witcher 3",
      discount: "25%",
      prevPrice: "590.000",
    },
    {
      id: "4",
      img: smars,
      isFree: false,
      name: "Surving Mars",
      price: "440.000",
    },
  ];

  return (
    <section className="py-10 md:w-3/4 m-auto px-4 md:px-0">
      <div className="flex justify-center md:justify-between items-center mb-6">
        <Title title={"Best Seller Games"} />
      </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 place-items-stretch">
        {bestSellerGamesDescription.map((card) => (
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

export default BestSellerGames;
