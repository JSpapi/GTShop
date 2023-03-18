import React from "react";
import { Pagination, ProductList } from "../components";
import { getContext } from "../Context";

const Sales = () => {
  const { salesPageProducts, salesPage, setSalesPage, totalPages } =
    getContext();
  return (
    <div>
      <div className="container">
        <ProductList products={salesPageProducts} />
        <Pagination
          currentPage={salesPage}
          setCurrentPage={setSalesPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default Sales;
