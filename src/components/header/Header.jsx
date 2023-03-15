import React from "react";
import Search from "../search/Search";
import Navbar from "./Navbar";
import s from "./Header.module.scss";
import { useLocation } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { miceBg, mainBg, secondaryBg, review, logo } from "../../assets/";
import HeaderTitle from "./HeaderTitle";
import { getContext } from "../../Context";

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

  const {setShowSidebar} = getContext()

  return (
    <header style={changeHeaderBg()} className={`relative`}>
      {/* !MOBILE SIDEBAR HANDLER */}
      <div className={`flex items-center justify-center md:hidden py-5`}>
        <button className={`absolute left-[30px] top-[40px]`} onClick={()=> setShowSidebar(true)}>
          <HiMenuAlt1 size={30} />
        </button>
        <div className={`w-[60px]`}>
          <img src={logo} alt="logo" className={`w-full`} />
        </div>
      </div>
      <Navbar />
      <div className="container">
        <HeaderTitle />
        <Search />
      </div>
    </header>
  );
};

export default Header;
