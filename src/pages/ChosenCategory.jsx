import React from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../components";

import { getContext } from "../Context";

const ChosenCategory = () => {
  const { totalProducts } = getContext();
  const { type } = useParams();
  const filteredByCategory = totalProducts.filter(
    (product) => product.category === type
  );

  return (
    <div>
      <div className="container">
        <ProductList products={filteredByCategory} />
      </div>
    </div>
  );
};

export default ChosenCategory;
