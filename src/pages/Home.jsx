import React from "react";
import { BestSellers, NewProducts, Popular } from "../components";
import { getContext } from "../Context";
const Home = () => {
  return (
    <div>
      <Popular title="Популярные" />
      <BestSellers title="Лидеры продаж" />
      <NewProducts title="Новые поступления" />
    </div>
  );
};

export default Home;
