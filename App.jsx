import React from "react";
import Navbar from "./component/Navbar/Navbar.jsx";
import Hero from "./component/Hero/Hero.jsx";
import HotDessert from "./component/HotDessert/HotDessert.jsx";
import Banner from "./component/Banner/Banner.jsx";
import PopularRecipe from "./component/PopularRecipe/PopularRecipe.jsx";
import Testimonial from "./component/Testimonial/Testimonial.jsx";
import Footer from "./component/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="overflow-hidden bg-white2 text-dark">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDessert />
      <Banner />
      <PopularRecipe />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
