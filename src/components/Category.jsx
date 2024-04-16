import React from "react";
import cat1 from "../assets/images/category-1.jpg";
import cat2 from "../assets/images/category-2.jpg";
import cat3 from "../assets/images/category-3.jpg";
import cat4 from "../assets/images/category-4.jpg";
import cat5 from "../assets/images/category-5.jpg";
import cat6 from "../assets/images/category-6.jpg";
import { BsArrowRight } from "react-icons/bs";

const Category = () => {
  return (
    <div className="mt-32 max-w-6xl mx-auto py-20">
      <h1 className="lg:text-5xl text-3xl text-center pt-10 font-semibold">
        Shop by category
      </h1>

      <div className="grid lg:grid-cols-3 gap-20 mt-20 px-20 md:px-44">
        {/* m */}
        <div className="bg-white shadow-md">
          <div className="grid grid-cols-2 justify-between">
            <div className="px-5 font-bold flex  items-center lg:gap-5 gap-1">
              <h3 className="text-xl lg:text-2xl "> Men's </h3>
              <BsArrowRight />
            </div>
            <img src={cat1} alt="" className="" />
          </div>
        </div>
        <div className="bg-white shadow-md">
          <div className="grid grid-cols-2 justify-between">
            <div className="px-5 font-bold flex  items-center lg:gap-5 gap-1">
              <h3 className="text-xl lg:text-2xl "> Women's </h3>
              <BsArrowRight />
            </div>
            <img src={cat2} alt="" />
          </div>
        </div>
        <div className="bg-white shadow-md">
          <div className="grid grid-cols-2 justify-between">
            <div className="px-5 font-bold flex  items-center lg:gap-5 gap-1">
              <h3 className="text-xl lg:text-2xl "> Luxury </h3>
              <BsArrowRight />
            </div>
            <img src={cat3} alt="" />
          </div>
        </div>
        <div className="bg-white shadow-md">
          <div className="grid grid-cols-2 justify-between">
            <div className="px-5 font-bold flex  items-center lg:gap-5 gap-2">
              <h3 className="text-xl lg:text-2xl "> Fashion </h3>
              <BsArrowRight />
            </div>
            <img src={cat4} alt="" />
          </div>
        </div>
        <div className="bg-white shadow-md">
          <div className="grid grid-cols-2 justify-between">
            <div className="px-5 font-bold flex  items-center lg:gap-5 gap-2">
              <h3 className="text-xl lg:text-2xl "> Sport </h3>
              <BsArrowRight />
            </div>
            <img src={cat5} alt="" />
          </div>
        </div>
        <div className="bg-white shadow-md">
          <div className="grid grid-cols-2 justify-between">
            <div className="px-5 font-bold flex  items-center lg:gap-5 gap-2">
              <h3 className="text-xl lg:text-2xl "> Electronics </h3>
              <BsArrowRight />
            </div>
            <img src={cat6} alt="" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-20">
        <p className="text-3xl">Discover More</p>
      </div>
    </div>
  );
};

export default Category;
