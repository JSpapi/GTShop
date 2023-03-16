import React from "react";
import ProductList from "../components/productList/ProductList";
import { getContext } from "../Context";

const Sales = () => {
  const { totalProducts } = getContext();
  return (
    <div>
      <div className="container">
        <ProductList products={totalProducts}/>
      </div>
    </div>
  );
};

export default Sales;
