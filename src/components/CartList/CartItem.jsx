import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineRight,
} from "react-icons/ai";

const CartItem = ({ product, productPrice }) => {
  const { updateItemQuantity } = useCart();

  return (
    <div
      className={`card-gradient rounded-2xl flex flex-col sm:flex-row justify-between gap-y-8 sm:gap-y-3 sm:gap-x-5 flex-wrap items-center mb-5 w-full py-10 px-5`}
    >
      <div className="left flex sm:flex-row flex-col  items-center  justify-start">
        <div className={`w-[150px] sm:mr-5 mb-3 sm:mb-0`}>
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover`}
          />
        </div>
        <div className={`text-center sm:text-left`}>
          <p className={`font-medium text-[20px] leading-[30px] mb-3`}>
            {product.name}
          </p>
          <NavLink
            to={`/products/${product._id}`}
            className={`flex items-center justify-center sm:justify-start gap-1`}
            onClick={() => scrollTo({ top: 0 })}
          >
            Посмотреть товар
            <AiOutlineRight size={16} className={``} />
          </NavLink>
        </div>
      </div>
      <div className="right flex flex-col sm:flex-row justify-end items-center gap-8">
        <div className={` flex  sm:mr-[100px] items-center gap-4`}>
          <button
            onClick={() =>
              updateItemQuantity(product._id, product.quantity - 1)
            }
          >
            <AiFillMinusCircle size={22} color={`#fff`} />
          </button>
          <span
            className={`py-3 px-5 border-[1px] rounded-md border-gray-500 font-bold`}
          >
            {product.quantity}
          </span>
          <button
            onClick={() =>
              updateItemQuantity(product._id, product.quantity + 1)
            }
          >
            <AiFillPlusCircle size={22} color={`#fff`} />
          </button>
        </div>
        <p className={`font-bold text-[16px] leading-[20px]`}>
          ${productPrice} USD Сумма
        </p>
      </div>
    </div>
  );
};

export default CartItem;
