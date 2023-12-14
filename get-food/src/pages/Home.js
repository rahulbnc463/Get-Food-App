import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImgSlider from "../components/ImgSlider";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <ImgSlider />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
