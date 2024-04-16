import React from "react";
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import Newarrival from "../components/Newarrival";
import Category from "../components/Category";
import Banner2 from "../components/Banner2";
import Bestsellers from "../components/bestsellers";
import Brands from "../components/brands";
import Reviews from "../components/review";
import About from "../components/about";
import Newsletter from "../components/newsletter";
import Features from "../components/features";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="font-ntr">
      <Slider />
      <Banner />
      <Newarrival />
      <div className="bg-gray-100">
        <Category />
      </div>
      <Banner2 />
      <Bestsellers />
      <div className="bg-gray-100">
        <Brands />
      </div>
      <div className="bg-black">
        <Reviews />
      </div>
      <About />
      <Newsletter />
      <div className="bg-gray-100">
        <Features />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
