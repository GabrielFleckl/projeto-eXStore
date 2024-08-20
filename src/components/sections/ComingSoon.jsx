import PreOrderCard from "../CardPreOrder";
import Title from "../Title";

import cod from "../../assets/big_cod.png";
import nba from "../../assets/big_nba.png";
import alien from "../../assets/small_alien.png";
import fifa from "../../assets/small_fifa.png";
import re4 from "../../assets/small_re4.png";

function ComingSoon() {
  const preOrderCardDescriptionBig = [
    {
      key: "1",
      title: "Call of Duty®",
      img: cod,
    },
    {
      key: "2",
      title: "NBA 2K23",
      img: nba,
    },
  ];

  const preOrderCardDescriptionSmall = [
    {
      key: "1",
      title: "EA SPORTS™ FIFA 23",
      img: fifa,
    },
    {
      key: "2",
      title: "Resident Evil 4",
      img: re4,
    },
    {
      key: "3",
      title: "ALIEN - Dark Descent",
      img: alien,
    },
  ];

  return (
    <section className="bg-tertiaryBlack">
      <div className="py-10 w-3/4 m-auto">
        <Title secondary={true} title={"Coming Soon"} />
        <div className="mt-10 flex gap-4 flex-col lg:flex-row ">
          <div className="flex flex-col gap-4 ">
            {preOrderCardDescriptionBig.map((card) => (
              <PreOrderCard title={card.title} key={card.key} img={card.img} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {preOrderCardDescriptionSmall.map((card) => (
              <PreOrderCard title={card.title} key={card.key} img={card.img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
