import React from "react";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { IoMdReturnRight } from "react-icons/io";

const features = () => {
  return (
    <main>
      <div className="flex lg:flex-row flex-col items-center justify-between py-20 max-w-5xl mx-auto text-center space-y-10">
        <div className="flex items-center justify-center gap-5">
          <PiShoppingCartSimpleLight />
          <div>
            <h1 className="font-bold">FREE SHIPPING</h1>
            <p> From all orders over $100 </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <IoMdReturnRight />
          <div>
            <h1 className="font-bold">FREE RETURNS</h1>
            <p> Return money within 30 days </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold">SECURE SHOPPING</h1>
          <p> You're safe hands </p>
        </div>
        <div>
          <h1 className="font-bold">OVER 10,000 STYLES </h1>
          <p> We have everything you need </p>
        </div>
      </div>
    </main>
  );
};

export default features;
