import React from "react";
import ProductBtn from "./ProductBtn";
import { useCart } from "react-use-cart";
const AddRemoveBtn = ({ product }) => {
  const { addItem, getItem, removeItem } = useCart();
  const removeProduct = (e, id) => {
    e.preventDefault();
    return removeItem(id);
  };
  const addProduct = (e, product) => {
    e.preventDefault();
    return addItem({ ...product, id: product._id });
  };
  return !getItem(product._id) ? (
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
  );
};

export default AddRemoveBtn;
