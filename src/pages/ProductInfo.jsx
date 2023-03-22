import React from "react";
import { useParams } from "react-router-dom";
import { ChosenProduct } from "../components";
import { getContext } from "../Context";

const ProductInfo = () => {
  const { chosenProduct } = useParams();
  const { totalProducts } = getContext();
  const exactProduct = totalProducts.find((item) => item._id === chosenProduct);
  return (
    <div>
      <div className="container">
        <ChosenProduct product={exactProduct} />
      </div>
    </div>
  );
};

export default ProductInfo;
