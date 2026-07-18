import type React from "react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import FeaturedSection from "../FeaturedSection/FeaturedSection";

const App: React.FC = () => {
  return (
    <>
      <Header />

      <div className="relative">
        <Slider />
        <FeaturedSection />
      </div>

      <Footer />
    </>
  );
};
export default App;
