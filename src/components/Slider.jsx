import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper/modules";

import { sliders } from "../data";

const Slider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="heroSlider h-[600px] lg:h-[600px] font-ntr"
    >
      {sliders.map((slide, index) => {
        // destructure slide
        const { id, img, name, figure, description, text, btntext } = slide;
        return (
          <SwiperSlide className="h-[80vh] relative flex" key={index}>
            <div className="text-white z-20 lg:px-52 lg:pt-36 font-jost pt-32 px-5">
              <div className="uppercase lg:text-5xl text-4xl font-bold mb-5">
                {name}
              </div>
              <h1 className="font-bold text-red-400 uppercase lg:text-8xl text-5xl">
                {figure}
              </h1>

              <p className="sm:text-xl font-jost text-yellow-200"> {text}</p>

              <p className="text-white mr-[30%] mt-7">{description}</p>

              <button className="bg-white text-black w-40 h-10  flex flex-row gap-x-3 items-center px-5 mt-10 tracking-wider">
                {btntext} <AiOutlineArrowRight />
              </button>
            </div>

            <div className="absolute top-0 w-full h-full">
              <img className="object-cover h-[80vh] w-full" src={img} alt="" />
            </div>

            <div className="absolute w-full h-[80vh] bg-black/50"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
