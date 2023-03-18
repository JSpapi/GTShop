import React from "react";
import { Pagination, ProductList } from "../components";

import { getContext } from "../Context";
const Products = () => {
  const { mainPageProducts, productsPage, setProductsPage, totalPages } =
    getContext();
  return (
    <div>
      <div className="container">
        <ProductList products={mainPageProducts} />
        <Pagination
          currentPage={productsPage}
          setCurrentPage={setProductsPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default Products;
