import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import banner_1 from "../assets/banner_1.png";
import banner_2 from "../assets/banner_2.png";
import banner_3 from "../assets/banner_3.png";

function Carousel() {
  // const [isHidden, setIsHidden] = useState(false);

  const images = [
    {
      img: banner_1,
      id: "1",
      title: "MultiVersus",
      description: "Now officially free to play for all Xbox users.",
    },
    {
      img: banner_2,
      id: "2",
      title: "Ultimate Sale",
      description: "Save up to 85% on select Xbox games.",
    },
    {
      img: banner_3,
      id: "3",
      title: "UFC®️ 4",
      description: "Get it now with 34% discount for all users.",
    },
  ];

  // useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth < 720) {
  //       setIsHidden(false);
  //     } else {
  //       setIsHidden(false);
  //     }
  //   }

  //   handleResize();

  //   window.addEventListener("resize", handleResize);
  // }, []);

  return (
    <div>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
        scrollbar={{ draggable: true, hide: true }}
        className="relative"

      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              src={img.img}
              alt="Slider"
              className="w-screen h-screen object-cover"
            />
            <h1 className="absolute sm:left-44 sm:top-40 left-4 top-40 text-5xl w-80 font-semibold text-slate-50">
              {img.title}
            </h1>
            <p className="absolute md:w-96 text-2xl  w-60 sm:left-44 left-4 top-64 sm:top-60 text-slate-50">
              {img.description}
            </p>
            <button className="absolute sm:left-44 sm:top-96 left-4 top-96 z-10 btn font-normal normal-case text-lg px-8 border-none bg-primaryBlue hover:bg-primaryHover  text-slate-50">
              Get in now!
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
