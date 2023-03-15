import React from "react";
import { Categories, Footer, Header } from "../components";
import { Outlet, useLocation } from "react-router-dom";
const SharedLayout = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <Header />
      {pathname === "/sales" || pathname === "/" ? <Categories /> : null}
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default SharedLayout;
