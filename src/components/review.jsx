import React from "react";
import alexander from "../assets/images/alexander.png";
import catherine from "../assets/images/catherine.png";
import jason from "../assets/images/jason.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const review = () => {
  return (
    <main>
      <div className="text-white py-32 flex flex-row  px-2 lg:px-0">
        <div className="flex flex-col gap-5 w-1/2">
          <p className="text-2xl"> REVIEWS</p>
          <h1 className="lg:text-5xl text-2xl">
            What buyers say <br /> about our store
          </h1>
          <div>
            <p className="text-[10px]">Shop Now </p>
          </div>
        </div>

        <Swiper
          breakpoints={{
            120: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 1.5, spaceBetween: 10 },
            1024: { slidesPerView: 2.5, spaceBetween: 10 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-2/3"
        >
          <SwiperSlide className="bg-[#303030] rounded-md">
            <div className="p-5">
              <div className="flex flex-row justify-between items-center">
                <img src={alexander} alt="" className="w-[20%]" />
                <p className="text-sm text-gray-400"> Alexander , 23rd 2018 </p>
              </div>
              <p className="mt-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur, at? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Consectetur, at?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#303030] rounded-md ">
            <div className="p-5">
              <div className="flex flex-row justify-between items-center">
                <img src={catherine} alt="" className="w-[20%]" />
                <p className="text-sm text-gray-400"> Catherine , 23rd 2018 </p>
              </div>
              <p className="mt-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur, at? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Consectetur, at?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#303030] rounded-md ">
            <div className="p-5">
              <div className="flex flex-row justify-between items-center">
                <img src={jason} alt="" className="w-[20%]" />
                <p className="text-sm text-gray-400"> Jason , 23rd 2018 </p>
              </div>
              <p className="mt-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur, at? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Consectetur, at?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#303030] rounded-md ">
            <div className="p-5">
              <div className="flex flex-row justify-between items-center">
                <img src={jason} alt="" className="w-[20%]" />
                <p className="text-sm text-gray-400"> Jason , 23rd 2018 </p>
              </div>
              <p className="mt-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur, at? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Consectetur, at?
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default review;
