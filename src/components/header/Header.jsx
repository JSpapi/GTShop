import React from "react";
import Search from "../search/Search";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  miceBg,
  mainBg,
  review,
  logo,
  locationBg,
  syberSprot,
} from "../../assets/";
import HeaderTitle from "./HeaderTitle";
import { getContext } from "../../Context";
import { motion } from "framer-motion";

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
      case "/locations":
        return {
          background: `url(${locationBg}) no-repeat center / cover`,
          height: "90vh",
        };
      case "/reviews":
        return {
          background: `url(${review}) no-repeat center / cover`,
          height: "90vh",
        };
      case "/cybersport":
        return {
          background: `url(${syberSprot}) no-repeat center / cover`,
          height: "90vh",
        };
      default:
        return {
          background: ``,
          height: "",
        };
    }
  };
  const checkingPathname =
    pathname === "/" ||
    pathname === "/comunity" ||
    pathname === "/locations" ||
    pathname === "/sales" ||
    pathname === "/reviews" ||
    pathname === "/cybersport";

  const { setShowSidebar } = getContext();

  return (
    <header>
      {/* !MOBILE SIDEBAR HANDLER */}

      <motion.div
        className={`py-5 relative`}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={changeHeaderBg()}
      >
        <div className={`flex items-center justify-center md:hidden py-5`}>
          <button
            className={`absolute left-[30px] top-[40px]`}
            onClick={() => setShowSidebar(true)}
          >
            <HiMenuAlt1 size={30} />
          </button>
          <div className={`w-[60px]`}>
            <img src={logo} alt="logo" className={`w-full`} />
          </div>
        </div>
        <Navbar />
        <div className="container">
          {checkingPathname ? <HeaderTitle /> : null}
          <Search />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
