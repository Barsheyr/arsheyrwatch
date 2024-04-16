import React from "react";
import Zuuft66 from "../assets/images/zuuft66.png";
import Buidf99 from "../assets/images/biidf99.png";

const about = () => {
  return (
    <main>
      <div className="flex lg:flex-row flex-col  gap-10 justify-between max-w-4xl mx-auto py-32">
        <div className="lg:w-1/2 space-y-5 px-10 lg:px-0">
          <p>WHO WE ARE</p>
          <h1 className="text-3xl font-bold"> About our Store </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae, fugit iure? Accusamus ratione dolorem totam omnis
            voluptate cupiditate dolor praesentium?
          </p>
          <p className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            odio!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae, fugit iure? Accusamus ratione dolorem totam omnis
            voluptate cupiditate dolor praesentium?
          </p>

          <button className="px-14 py-3 bg-black text-white">About Us</button>
        </div>

        {/* second */}
        <div className="lg:w-1/2 space-y-10 px-10 lg:px-0">
          <div className="flex lg:flex-row md:flex-row flex-col gap-10">
            <img src={Zuuft66} alt="" />
            <div className="space-y-3">
              <h3 className="font-bold">Replenish give it Saying over</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, officiis
              </p>
              <div>
                <p>Read More </p>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col gap-10">
            <img src={Buidf99} alt="" />
            <div className="space-y-3">
              <h3 className="font-bold">Divide dominion Together</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, officiis?
              </p>
              <div>
                <p>Read More </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default about;
