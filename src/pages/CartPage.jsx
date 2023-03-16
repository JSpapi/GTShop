import React from "react";
import { useCart } from "react-use-cart";
const CartPage = () => {
  const { items, isEmpty, removeItem, updateItemQuantity } = useCart();
  return (
    <div>
      {isEmpty ? <h1>Cart is empty</h1> : null}
      {items.map((item) => (
        <img src={item.image} alt={item.name} key={item._id} />
      ))}
    </div>
  );
};

export default CartPage;
