import { Outlet } from "react-router-dom";
import React from "react";

import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Landing;
