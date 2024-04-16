import React from "react";
import channel from "../assets/images/Channel.png";
import Dior from "../assets/images/Dior.png";
import Fendi from "../assets/images/Fendi.png";
import fossil from "../assets/images/fossil.png";
import Guess from "../assets/images/Guess.png";
import Hublot from "../assets/images/Hublot.png";
import invicta from "../assets/images/invicta.png";
import bulagri from "../assets/images/Bulgari.png";
import Longines from "../assets/images/Longines.png";
import Omega from "../assets/images/Omega.png";
import Radio from "../assets/images/Radio.png";
import Rolex from "../assets/images/Rolex.png";
import Seiko from "../assets/images/Seiko.png";
import swatch from "../assets/images/swatch.png";
import Tissot from "../assets/images/Tissot.png";
import casio from "../assets/images/casio.png";
import calvin from "../assets/images/calvin-klein.png";

const brands = () => {
  return (
    <main>
      <div className="py-20">
        <div>
          <h1 className="text-5xl text-center pt-10">Shop by brands</h1>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-32 mt-20 max-w-4xl mx-auto gap-10">
          <img src={channel} alt="" className="w-full" />
          <img src={Dior} alt="" className="w-full" />
          <img src={Fendi} alt="" className="w-full" />
          <img src={fossil} alt="" className="w-full" />
          <img src={Guess} alt="" className="w-full" />
          <img src={invicta} alt="" className="w-full" />
          <img src={Omega} alt="" className="w-full" />
          <img src={Longines} alt="" className="w-full" />
          <img src={Radio} alt="" className="w-full" />
          <img src={Rolex} alt="" className="w-full" />
          <img src={Seiko} alt="" className="w-full" />
          <img src={swatch} alt="" className="w-full" />
          <img src={Tissot} alt="" className="w-full" />
          <img src={casio} alt="" className="w-full" />
          <img src={Hublot} alt="" className="w-full" />
          <img src={bulagri} alt="" className="w-full" />
          <img src={calvin} alt="" className="w-full" />
          <img src={swatch} alt="" className="w-full" />
        </div>

        <div className="flex items-center justify-center mt-20">
          <p className="text-3xl">Discover More</p>
        </div>
      </div>
    </main>
  );
};

export default brands;
