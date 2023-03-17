import React from "react";
import ProductList from "../components/productList/ProductList";
import { Pagination } from "../components";

import { getContext } from "../Context";
const Products = () => {
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

export default Products;
