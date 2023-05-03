import React from "react";
import Navber from "../components/Navber/Navber";
import Footer from "../contanier/Footer/Footer";
import { Outlet } from "react-router-dom";

const FullHome = () => {
  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default FullHome;
