import React from "react";
import { networkError } from "../../assets";
import { getContext } from "../../Context";

const NetworkError = () => {
  const { error } = getContext();
  return (
    <div className=" App w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-[30px] font-media leading-[45px] mb-4">
        Ой что то пошло не так: {error}
      </h1>
      <div className="w-[600px] ">
        <img src={networkError} alt="error" className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default NetworkError;
