import React from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import ProductBtn from "../ui/button/ProductBtn";
import { useCart } from "react-use-cart";

const ProductItem = ({ product }) => {
  const { addItem, getItem, removeItem } = useCart();
  const { pathname } = useLocation();

  const removeProduct = (e, id) => {
    e.preventDefault();
    return removeItem(id);
  };
  const addProduct = (e, product) => {
    e.preventDefault();
    return addItem({ ...product, id: product._id });
  };
  return (
    <NavLink to={`/products/${product._id}`}>
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

          {!getItem(product._id) ? (
            <ProductBtn
              style={{ marginTop: 10 }}
              onClick={(e) => addProduct(e, product)}
            >
              Добавить в корзину
            </ProductBtn>
          ) : (
            <ProductBtn
              style={{
                marginTop: 10,
                background: "#bb0808",
                color: "#fff",
              }}
              onClick={(e) => removeProduct(e, product._id)}
            >
              Удалить из Корзины
            </ProductBtn>
          )}
        </div>
      </motion.div>
    </NavLink>
  );
};

export default ProductItem;
