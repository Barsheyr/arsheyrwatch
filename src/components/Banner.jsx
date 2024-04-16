import React from "react";
import { banner1s } from "../data";
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <section>
      <div className="flex flex-row max-w-4xl mx-auto py-20 gap-7 font-jost">
        {banner1s.map((banner1, index) => {
          const { id, img, text, btntext } = banner1;
          return (
            <div key={index} className="relative">
              <div className="">
                <div className="">
                  <img src={img} alt="" className="w-[100%] h-52" />
                </div>

                <div className="absolute top-20 text-xl pl-10">
                  <p className="text-white text-sm lg:text-3xl"> {text} </p>
                  <button className="text-white flex flex-row gap-5 items-center text-sm">
                    {btntext} <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto font-jost flex flex-col lg:flex-row -mt-10">
        <div className="bg-red-400  text-center lg:w-1/2">
          <h2 className="text-2xl font-bold text-white py-10">
            % END OF SEASON SALE
          </h2>
        </div>

        <div className="bg-red-500 flex flex-row items-center justify-center gap-5 text-2xl font-bold text-white lg:w-1/2 px-10 py-5">
          <div className="">
            <p> 07 </p>
            <span className="text-sm"> Days </span>
          </div>
          <div> : </div>
          <div>
            <p>12</p>
            <span className="text-sm"> Hours </span>
          </div>
          <div> : </div>
          <div>
            <p> 36 </p>
            <span className="text-sm"> Minutes </span>
          </div>
          <div> : </div>
          <div>
            <p> 48 </p>
            <span className="text-sm"> Seconds </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
