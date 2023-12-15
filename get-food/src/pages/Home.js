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
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
