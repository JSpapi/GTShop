import React from "react";

const CyberSportEvent = ({ data }) => {
  return (
    <div
      className={`flex gap-5  mb-10 text-center  lg:items-start items-center lg:text-start flex-col lg:flex-row  w-full`}
    >
      <div className={`flex flex-1 justify-center items-center `}>
        <div
          className={`lg:w-[600px] w-full sm:w-3/4 relative group/item overflow-hidden`}
        >
          <img
            src={data.img}
            alt="winner"
            className={`w-full  object-contain rounded-lg  `}
          />
          <img
            src={data.img2}
            alt="winner2"
            className={`w-full  object-contain rounded-lg  group/edit  opacity-0 group-hover/item:opacity-[1] transition-all duration-[.5s] ease-out absolute top-0 left-0`}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col w-full sm:w-[70%]">
        <h4
          className={`text-white text-[30px] leading-[35px] mb-3 font-medium`}
        >
          {data.title}
        </h4>
        <p className={`text-white text-[20px] leading-[30px] mb-1`}>
          {data.subTitle}
        </p>
        <p className={`text-white text-[18px] leading-[28px] font-light mb-3`}>
          {data.info}
        </p>
        <p
          className={`text-white  text-[16px] leading-[24px] font-normal mb-5 lg:mb-8`}
        >
          {data.desc}
        </p>
        <div className={``}>
          <a
            href={data.watchLink}
            target="_blank"
            className={`p-3 bg-red-500 inline-flex justify-start rounded-lg text-[20px] leading-[30px] font-medium`}
          >
            Посмотреть
          </a>
        </div>
      </div>
    </div>
  );
};

export default CyberSportEvent;
