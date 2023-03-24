import React from "react";

const Exchange = () => {
  return (
    <div className={`flex md:flex-row flex-col gap-5 md:gap-10`}>
      <div className={`w-full md:w-1/2`}>
        <iframe
          src="https://www.youtube.com/embed/mr9kK0_7x08"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={`w-full h-[400px] rounded-md`}
        ></iframe>
      </div>
      <div className={`w-full md:w-1/2`}>
        <h2
          className={`text-white font-medium text-[30px] leading-[40px] mb-5`}
        >
          Гарантия и качество это про нас
        </h2>
        <ul className={`list-disc ml-4`}>
          <li
            className={`text-gray-400 text-[16px] leading-[25px] font-normal mt-3`}
          >
            Lorem ipsum dolor sit amet.
          </li>
          <li
            className={`text-gray-400 text-[16px] leading-[25px] font-normal mt-3`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            quos!
          </li>
          <li
            className={`text-gray-400 text-[16px] leading-[25px] font-normal mt-3`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            cum nostrum, culpa saepe aperiam fugiat exercitationem sit tempora
            dolores. Saepe.
          </li>
          <li
            className={`text-gray-400 text-[16px] leading-[25px] font-normal mt-3`}
          >
            Lorem ipsum dolor sit amet.
          </li>
          <li
            className={`text-gray-400 text-[16px] leading-[25px] font-normal mt-3`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            cum nostrum, culpa saepe aperiam fugiat exercitationem sit tempora
            dolores. Saepe.
          </li>
          <li
            className={`text-gray-400 text-[16px] leading-[25px] font-normal mt-3`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            cum nostrum, culpa saepe aperiam fugiat exercitationem sit tempora
            dolores. Saepe.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Exchange;
