import React from "react";
import ProductBtn from "../ui/button/ProductBtn";
import CartItem from "./CartItem";

const CartList = ({ cartProducts, removeItem }) => {
  let totalPrice = 0;
  return (
    <div className={`w-full`} id="cartProduct">
      {cartProducts.map((product) => {
        let productPrice = product.quantity * product.price;
        totalPrice += productPrice;

        return product.quantity >= 1 ? (
          <CartItem
            product={product}
            productPrice={productPrice}
            key={product._id}
          />
        ) : (
          removeItem(product._id)
        );
      })}
      <div className={`mt-8 flex flex-col items-end w-full text-left`}>
        <h2
          className={`text-white font-medium  text-[25px] leading-[30px] mb-6`}
        >
          Итого: ${totalPrice} USD
        </h2>
        <ProductBtn >Оформить Заказ</ProductBtn>
      </div>
    </div>
  );
};

export default CartList;
