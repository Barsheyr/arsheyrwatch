import React from "react";
import Ban22 from "../assets/images/Banners2-1.jpg";
import Ban21 from "../assets/images/Banners2-2.jpg";
import { BsArrowRight } from "react-icons/bs";

const Banner2 = () => {
  return (
    <main className="py-20">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row md:flex-row gap-10 px-20">
        <div className="relative text-center">
          <img src={Ban22} alt="" className="w-full" />
          {/* <div className="bg-white w-[80%] py-10 md:py-20 absolute -bottom-10 shadow-md">
            <h4 className="lg:text-3xl text-xl"> Fashion Sale </h4>
            <div className="flex items-center gap-2 justify-center mt-5">
              <p className="lg:text-2xl text-xl"> Shop now</p>
              <BsArrowRight />
            </div>
          </div> */}
        </div>
        <div className="relative">
          <img src={Ban21} alt="" className="" />
          {/* <div className="bg-white w-[80%] text-center mx-12 absolute -bottom-10 shadow-md">
            <h4 className="text-3xl"> Luxury Sale </h4>
            <div className="flex items-center gap-5 justify-center mt-5">
              <p> Shop now</p>
              <BsArrowRight />
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Banner2;
