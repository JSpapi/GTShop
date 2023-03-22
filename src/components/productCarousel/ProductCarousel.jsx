import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { motion } from "framer-motion";
import AddRemoveBtn from "../ui/button/AddRemoveBtn";
const ProductCarousel = ({ products }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.2}
      freeMode={true}
      modules={FreeMode}
      className={`mySwiper lg:pl-[160px]`}
      breakpoints={{
        520: {
          slidesPerView: 2.2,
        },
        768: {
          slidesPerView: 3.2,
        },
        1024: {
          slidesPerView: 4.5,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product._id} className={`product-card rounded-xl`}>
          <NavLink
            to={`/products/${product._id}`}
            onClick={() => scrollTo({ top: 0 })}
          >
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col items-center justify-between h-[380px] p-5 `}
            >
              <div className={`max-w-[200px] max-h-[200px] h-full w-full`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-contain`}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <h4 className="text-white font-medium text-[14px] leading-[24px] text-center">
                  {product.name}
                </h4>
                <p className=" my-2 text-white text-[16px] leading-[20px] font-bold">
                  ${product.price} USD
                </p>
                <AddRemoveBtn product={product} />
              </div>
            </motion.div>
          </NavLink>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductCarousel;
