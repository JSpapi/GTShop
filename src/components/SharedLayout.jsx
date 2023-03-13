import React from "react";
import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default SharedLayout;
