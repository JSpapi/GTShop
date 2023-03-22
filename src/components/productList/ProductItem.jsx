import React from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import AddRemoveBtn from "../ui/button/AddRemoveBtn";

const ProductItem = ({ product }) => {
  const { pathname } = useLocation();

  return (
    <NavLink to={`/products/${product._id}`} onClick={() => scrollTo({ top: 0 })}>
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex flex-col items-center justify-between h-[380px] p-5 card-gradient rounded-lg`}
      >
        <div className={`max-w-[200px] max-h-[200px] h-full w-full`}>
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-contain`}
          />
        </div>
        <div className={`flex flex-col justify-center items-center w-full`}>
          <h4 className="text-white font-medium text-[14px] leading-[20px] text-center">
            {product.name}
          </h4>
          <p
            className={`my-2 text-white text-[16px] leading-[20px] font-bold ${
              pathname === "/sales" ? "line-through" : "list-none"
            }`}
          >
            ${product.price} USD
          </p>
          {pathname === "/sales" ? (
            <p
              className={`mb-2 text-white text-[14px] leading-[20px] font-normal`}
            >
              ${30} USD
            </p>
          ) : null}
          <AddRemoveBtn product={product} />
        </div>
      </motion.div>
    </NavLink>
  );
};

export default ProductItem;
