// Sections
import GamesGenres from "./components/sections/GamesGenres";
import WhyExstore from "./components/sections/WhyExstore";
import BestSellerGames from "./components/sections/BestSellerGames";
import PopularGames from "./components/sections/PopularGames";
import ComingSoon from "./components/sections/ComingSoon";
import Feedback from "./components/sections/Feedback";


// Components
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <WhyExstore />
      <GamesGenres />
      <BestSellerGames />
      <PopularGames />
      <ComingSoon />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;
