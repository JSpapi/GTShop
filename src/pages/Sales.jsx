import React from "react";
import { Pagination } from "../components";
import ProductList from "../components/productList/ProductList";
import { getContext } from "../Context";

const Sales = () => {
  const { CurrentProducts } = getContext();
  return (
    <div>
      <div className="container">
        <ProductList products={CurrentProducts} />
        <Pagination />
      </div>
    </div>
  );
};

export default Sales;
