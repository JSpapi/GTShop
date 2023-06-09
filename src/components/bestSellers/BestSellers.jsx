import React from "react";
import { getContext } from "../../Context";
import ProductCarousel from "../productCarousel/ProductCarousel";
import { NavLink } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const BestSellers = ({ title }) => {
  const { bestSellers } = getContext();
  return (
    <div className={`pt-5 mb-10 px-[20px]`}>
      <div className={`flex justify-between items-center mb-5 lg:pl-[160px]`}>
        <h2
          className={`font-medium text-[16px] leading-[20px] md:text-[20px] md:leading-[24px]`}
        >
          {title}
        </h2>
        <NavLink
          className={`flex items-center gap-1 group/item  text-[16px] leading-[20px] md:text-[20px] md:leading-[24px]`}
          to={`/products`}
          onClick={() => scrollTo({ top: 0 })}
        >
          <span>Посмотреть</span>
          <AiOutlineRight
            size={20}
            className={`group/edit opacity-[1] md:opacity-0 md:group-hover/item:opacity-[1] transition duration-[.5s] ease-out`}
          />
        </NavLink>
      </div>

      <ProductCarousel products={bestSellers} />
    </div>
  );
};

export default BestSellers;
