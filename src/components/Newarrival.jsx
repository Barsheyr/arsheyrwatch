import React from "react";
import { newarrivals } from "../data";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";
// import "./styles.css";

const Newarrival = () => {
  return (
    <section>
      <h1 className="lg:text-5xl text-2xl font-bold text-center mt-20">
        New Arrivals
      </h1>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 50 },
          480: { slidesPerView: 2, spaceBetween: 50 },
          768: { slidesPerView: 3, spaceBetween: 50 },
          1024: { slidesPerView: 6, spaceBetween: 50 },
        }}
        // slidesPerView={5}
        // spaceBetween={10}
        scrollbar={{ draggable: false, dragSize: 700 }}
        modules={[Scrollbar]}
        className="mt-10 max-w-7xl mx-auto"
      >
        {newarrivals.map((newarrival) => {
          const { id, price, img, name } = newarrival;

          return (
            <SwiperSlide key={id} className="">
              <div className="mb-2 relative group transition ">
                {/* <div className=""> */}

                <div className="">
                  {/* <p>scdsw</p> */}

                  <img
                    src={img}
                    alt="/"
                    className=" h-[30vh] group-hover:scale-110 transition duration-300"
                  />
                </div>

                <div className="absolute bottom-0 shadow-xl opacity-0 group-hover:opacity-100">
                  <button className="bg-gray-900 p-2 flex items-center justify-center gap-16">
                    <p className="text-white text-sm"> Quick view </p>
                    <BsEyeFill color="white" />
                  </button>
                </div>
              </div>

              <p className="mb-2 text-center"> {name} </p>
              <p className="mb-10 text-center"> {price}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Newarrival;

{
  /* <button onClick="">
                  <div className="flex justify-center items-center text-white bg-red-500 w-12 h-12">
                    <BsPlus className="text-3xl" />
                  </div>
                </button> */
}

{
  /* <div className="absolute group-hover:bottom-5 p-2 shadow-sm  flex flex-row  gap-y-2 opacity-0 group-hover:opacity-100 ">
<button className="h-12 w-max bg-gray-300 flex justify-center items-center">
  <BsEyeFill />
</button>
</div> */
}
