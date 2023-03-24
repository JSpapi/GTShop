import React from "react";
import { getContext } from "../../Context";
import Characteristics from "../characteristic/Characteristics";
import Description from "../description/Description";
import AddRemoveBtn from "../ui/button/AddRemoveBtn";

const ChosenProduct = ({ product }) => {
  const { productCharacteristics, setProductCharacteristics } = getContext();
  const characteristicsData = [
    {
      title: "Тип",
      name: "Ноутбук",
    },
    {
      title: "Дисплей",
      name: "16 Full HD 60Гц",
    },
    {
      title: "Операционная система",
      name: "Windows 10 home",
    },
    {
      title: "Процессор",
      name: "Intel Core i7 1165G7",
    },
    {
      title: "Оперативная память/ОЗУ",
      name: "16 ГБ",
    },
    {
      title: "Память",
      name: "512 ГБ",
    },
    {
      title: "Видеокарта",
      name: "Intel® Iris® Xe Graphics - Quartz",
    },
    {
      title: "Touchscreen (сенсорный экран)",
      name: "да",
    },
    {
      title: "Аккумулятор",
      name: "70,5 Втч",
    },
    {
      title: "Беспроводная связь",
      name: "Bluetooth, Wi-Fi",
    },
    {
      title: "Веб-камера",
      name: "есть",
    },
    {
      title: "Размеры",
      name: "220,1х298,3х16,9 мм",
    },
    {
      title: "Вес",
      name: "1,34 кг",
    },
    {
      title: "Дополнительная информация",
      name: "Thunderbolt 4 x 2, USB 3.0 Type A, микрофон/наушники Combo",
    },
  ];

  return (
    <div>
      <div
        className={`flex items-start gap-4 md:gap-8 mb-10 md:flex-row flex-col`}
      >
        <div
          className={`flex flex-1 bg-slate-600 justify-center h-full md:w-auto w-full`}
        >
          <img
            src={product.image}
            alt={product.name}
            className={`w-3/4 h-full`}
          />
        </div>
        <div className={`felx flex-1 flex-col`}>
          <h4
            className={`text-white text-[20px] md:text-[30px] leading-[40px] mb-5`}
          >
            {product.name}
          </h4>
          <div className={`flex items-center gap-5 mb-5`}>
            <p className=" text-white text-[16px] leading-[24px] ">
              Производитель:
            </p>
            <a
              href="#!"
              className=" underline text-white text-[18px] leading-[26px] font-medium"
            >
              Razer
            </a>
          </div>
          <div className={`flex items-center mb-5 gap-10`}>
            <p className=" text-white text-[16px] leading-[24px] ">Доставка:</p>
            <p className=" text-white text-[18px] leading-[26px] font-thin">
              1 день, бесплатно
            </p>
          </div>
          <div className="card-gradient w-full p-10 rounded-xl">
            <p>Можно показать разные акции и ивенты</p>
          </div>
          <p className={`text-white text-[16px] leading-[24px] my-5`}>
            Цена:
            <span
              className={` text-white text-[20px] leading-[26px] font-bold ml-5 `}
            >
              ${product.price} USD
            </span>
          </p>

          <AddRemoveBtn product={product} />
        </div>
      </div>
      <div className={`rounded-md bg-slate-800 overflow-hidden`}>
        <div
          className={`flex items-center border-b 
          border-solid w-full border-danger`}
        >
          <button
            className={`p-4 text-[16px] leading-[20px] ${
              productCharacteristics === "description"
                ? " bg-white text-black font-medium"
                : " bg-transparent text-white font-normal"
            }`}
            onClick={() => setProductCharacteristics("description")}
          >
            Описание
          </button>
          <button
            className={`p-4 text-[16px] leading-[20px] ${
              productCharacteristics === "characteristics"
                ? " bg-white text-black font-medium"
                : "bg-transparent text-white font-normal"
            }`}
            onClick={() => setProductCharacteristics("characteristics")}
          >
            Характиристики
          </button>
        </div>
        {productCharacteristics === "description" ? (
          <Description product={product} />
        ) : (
          <Characteristics characteristicsData={characteristicsData} />
        )}
      </div>
    </div>
  );
};

export default ChosenProduct;
