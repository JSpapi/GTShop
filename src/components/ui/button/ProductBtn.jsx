import React, { Children } from "react";
import s from "./ProductBtn.module.scss";
const ProductBtn = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`text-black ${s.productBtn} py-2 px-4 rounded-lg font-medium text-[14px] leading-[20px]`}
    >
      {children}
    </button>
  );
};

export default ProductBtn;
