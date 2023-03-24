import React from "react";
import ProductBtn from "./ProductBtn";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";

const AddRemoveBtn = ({ product }) => {
  const { addItem, getItem, removeItem } = useCart();
  const removeProduct = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    toast.error("Товар удален из корзины!", {
      className: "bg-teal-700",
      bodyClassName: "text-white font-medium",
      position: "bottom-center",
    });
    return removeItem(id);
  };
  const addProduct = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success("Товар добавлен в корзину!", {
      className: "bg-teal-900",
      bodyClassName: "text-white font-medium",
      position: "bottom-center",
    });
    return addItem({ ...product, id: product._id });
  };
  return !getItem(product._id) ? (
    <ProductBtn
      style={{ marginTop: 10 }}
      onClick={(e) => addProduct(e, product)}
      className={`bg-teal-900`}
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
