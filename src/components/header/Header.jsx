import React from "react";
import Search from "../search/Search";
import Categories from "./Categories";
import Navbar from "./Navbar";
import s from "./Header.module.scss";
import { useLocation } from "react-router-dom";

import { miceBg, mainBg, secondaryBg, review } from "../../assets/";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  const { pathname } = useLocation();
  const changeHeaderBg = () => {
    switch (pathname) {
      case "/":
        return {
          background: `url(${mainBg}) no-repeat center / cover`,
          height: "90vh",
        };
      case "/sales":
        return {
          background: `url(${miceBg}) no-repeat center / cover`,
          height: "90vh",
        };
      case "/loctions":
        return {
          background: `url(${secondaryBg}) no-repeat center / cover`,
          height: "90vh",
        };
      case "/reviews":
        return {
          background: `url(${review}) no-repeat center / cover`,
          height: "90vh",
        };
      default:
        return {
          background: ``,
          height: "",
        };
    }
  };

  return (
    <header style={changeHeaderBg()}>
      <Navbar />
      <div className="container">
        <HeaderTitle />
        <Search />
        {/* <Categories /> */}
      </div>
    </header>
  );
};

export default Header;
