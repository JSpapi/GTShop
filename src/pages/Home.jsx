import React from "react";
import { BestSellers, NewProducts, Popular } from "../components";
import { getContext } from "../Context";

const Home = () => {
  return (
    <div className="py-10">
      <div className="container">
        <Popular />
        <BestSellers />
        <NewProducts />
      </div>
    </div>
  );
};

export default Home;
