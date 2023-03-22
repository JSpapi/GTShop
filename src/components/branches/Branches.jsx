import React from "react";
import { MdLocationOn } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
const Branches = ({ branchInfo }) => {
  return (
    <div
      className={`flex items-center justify-center gap-5 mt-5 md:flex-row flex-col`}
    >
      <div className={`md:w-1/2 w-full`}>
        <iframe
          src={branchInfo.map}
          className={`w-full h-[300px] border-0`}
          loading="lazy"
        ></iframe>
      </div>
      <div className={`md:w-1/2 w-full `}>
        <ul>
          <li className={`flex items-center  w-full gap-2 mt-3`}>
            <MdLocationOn size={25} />{" "}
            <span className={`text-white text-[16px] leading-[20px]`}>
              {branchInfo.address}
            </span>
          </li>
          <li className={`flex items-center  w-full gap-2 mt-3`}>
            <GiRotaryPhone size={25} />
            <a href="tel:+998941231212" className={`underline`}>
              {branchInfo.tel}
            </a>
          </li>
          <li className={`flex items-center  w-full gap-2 mt-3`}>
            Время работы: {branchInfo.openTime}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Branches;
