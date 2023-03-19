import React from "react";
import { useCart } from "react-use-cart";
import { cart } from "../assets";
import { CartList } from "../components";
const CartPage = () => {
  const { items, isEmpty, removeItem } = useCart();
  return (
    <div className="container">
      {isEmpty ? (
        <div className={`flex flex-col justify-start items-center`}>
          <img
            src={cart}
            alt="cart"
            className={`w-[250px] object-contain mb-3`}
          />
          <h1
            className={`text-white font-medium text-[30px] leading-[40px] text-center`}
          >
            В корзине пока нет товаров
          </h1>
        </div>
      ) : (
        <CartList cartProducts={items} removeItem={removeItem} />
      )}
    </div>
  );
};

export default CartPage;
