import React from "react";
import { headsets, keyboards, laptop, mice, streaming } from "../../assets";
import { NavLink, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import s from "./Categories.module.scss";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Categories = () => {
  const categories = [
    {
      id: "Laptop",
      name: "Ноутбуки",
      img: laptop,
    },
    {
      id: "Keyboards",
      name: "Клавиатуры",
      img: keyboards,
    },
    {
      id: "MICE",
      name: "Мышки",
      img: mice,
    },
    {
      id: "Headsets",
      name: "Наушники",
      img: headsets,
    },
    {
      id: "Streaming",
      name: "Стриминг",
      img: streaming,
    },
  ];

  return (
    <div className="py-10" id="category">
      <div className="container">
        <div
          className={`flex xs:justify-center  items-center gap-[50px] md:gap-[100px] overflow-hidden sm:overflow-x-hidden overflow-x-auto`}
        >
          {categories.map(({ id, name, img }) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col justify-center items-center group/item text-active"
                  : "flex flex-col justify-center items-center group/item text-white"
              }
              to={`/categories/${id}`}
              key={id}
            >
              <img
                src={img}
                alt={name}
                className={`w-auto h-[75px] object-contain`}
              />
              <p className="font-normal text-[14px] leading-[20px] mt-4 group/edit group-hover/item:text-active">
                {name}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
