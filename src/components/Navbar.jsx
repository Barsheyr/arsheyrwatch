import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { PiUserBold } from "react-icons/pi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex flex-col font-ntr">
      <div className="bg-gray-300">
        <div className="lg:flex items-center hidden justify-between max-w-6xl mx-auto">
          <h2>Free Shipping over $100</h2>

          <div className="flex flex-row items-center justify-between gap-5">
            <p> United States </p>
            <p> USD </p>
            <p> English </p>
          </div>

          <div className="flex flex-row items-center justify-between gap-5">
            <p>shipping</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>

          <ul>
            <li className="flex flex-row items-center justify-between gap-5">
              <AiFillFacebook size={20} />
              <FaTwitter size={20} />
              <AiOutlineInstagram size={20} />
              <AiOutlineShoppingCart size={20} />
            </li>
          </ul>
        </div>
      </div>

      <div className="py-10">
        <div className="lg:flex flex-row items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold"> Arsheyr Watch </h1>

          <nav className="lg:flex flex-row items-center justify-between gap-5 list-none font-semibold hidden">
            <li className="">
              <a href=""> Home </a>
            </li>
            <li>
              <a href=""> About </a>
            </li>
            <li>
              <a href=""> Products </a>
            </li>
            <li>
              <a href=""> Watchpage </a>
            </li>
          </nav>

          <div className="lg:flex flex-row items-center justify-between gap-5 hidden">
            <AiOutlineSearch size={20} />
            <PiUserBold size={20} />
            <MdOutlineFavoriteBorder size={20} />
            <AiOutlineShoppingCart size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
