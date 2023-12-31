import FeedbackCard from "../CardFeedback";

import john from "../../assets/john_doe.png";
import taylor from "../../assets/taylor_doe.png";
import carol from "../../assets/carol_doe.png";
import fiveStars from "../../assets/5_stars.png";
import fourStars from "../../assets/4_stars.png";

function Feedback() {
  const feedbackCardDescription = [
    {
      key: "1",
      name: "John Doe",
      img: john,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo vitae ipsum vestibulum porta.",
      stars: fourStars,
    },
    {
      key: "2",
      name: "Taylor Doe",
      img: taylor,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo vitae ipsum vestibulum porta.",
      stars: fiveStars,
    },
    {
      key: "3",
      name: "Carol Doe",
      img: carol,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo vitae ipsum vestibulum porta.",
      stars: fourStars,
    },
    {
      key: "4",
      name: "Taylor Doe",
      img: taylor,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo vitae ipsum vestibulum porta.",
      stars: fourStars,
    },
    {
      key: "5",
      name: "John Doe",
      img: john,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo vitae ipsum vestibulum porta.",
      stars: fiveStars,
    },
    {
      key: "5",
      name: "Carol Doe",
      img: carol,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo vitae ipsum vestibulum porta.",
      stars: fiveStars,
    },
  ];

  return (
    <section className="py-10 ">
      <div className="text-center mt-10">
        <h1 className="font-bold text-4xl mb-4 text-primaryBlack">
          12.000+ gamers satisfied
        </h1>
        <p className="text-lg px-4 md:px-0 m-auto font-semibold text-secondaryBlack">
          Let's hear what our customers have to say about their <br />{" "}
          satisfaction with our services and products.
        </p>
      </div>
      <div className="overflow-hidden mt-5">
        <div className=" flex my-10 cursor-pointer ">
          <div className="animate-slide flex">
            {feedbackCardDescription.map((card) => (
              <FeedbackCard
                name={card.name}
                img={card.img}
                stars={card.stars}
                description={card.description}
                key={card.key}
              />
            ))}
          </div>
          <div className="animate-slide flex">
            {feedbackCardDescription.map((card) => (
              <FeedbackCard
                name={card.name}
                img={card.img}
                stars={card.stars}
                description={card.description}
                key={card.key}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
