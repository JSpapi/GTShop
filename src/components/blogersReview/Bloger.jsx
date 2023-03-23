import React from "react";
import { AiFillStar } from "react-icons/ai";

const Bloger = ({ bloger }) => {
  return (
    <div
      className={`w-full md:flex-row flex-col-reverse flex p-6 items-center gap-3`}
    >
      <div className={`left w-full md:w-1/2 md:text-left text-center `}>
        <div className={`flex  md:flex-col flex-col-reverse`}>
          <ul
            className={`flex gap-1 items-center md:justify-start justify-center`}
          >
            <li>
              <AiFillStar size={20} color="#d9b604" />
            </li>
            <li>
              <AiFillStar size={20} color="#d9b604" />
            </li>
            <li>
              <AiFillStar size={20} color="#d9b604" />
            </li>
            <li>
              <AiFillStar size={20} color="#d9b604" />
            </li>
            <li>
              <AiFillStar size={20} color="#d9b604" />
            </li>
          </ul>

          <p
            className={`text-white text-[18px] leading-[28px] md:mt-10 mb-3 md:mb-0`}
          >
            {bloger.text}
          </p>
        </div>

        <div className={`mt-8`}>
          <a
            href="#!"
            className={`text-white text-[20px] leading-[30px] mr-4 hover:text-yellow-400`}
          >
            {bloger.name}
          </a>
          <span className={`text-gray-400 text-[16px] font-thin`}>
            {bloger.viewers}
          </span>
        </div>
        <a
          href="#!"
          className={`text-gray-400 text-[16px] font-thin mt-3 inline-block hover:text-yellow-400`}
        >
          {bloger.job}
        </a>
      </div>
      <div className="right w-full  md:w-1/2">
        <div className={`w-full`}>
          <img
            src={bloger.img}
            alt={bloger.name}
            className={`w-full h-full object-contain`}
          />
        </div>
      </div>
    </div>
  );
};

export default Bloger;
