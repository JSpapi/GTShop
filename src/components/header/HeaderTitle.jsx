import React from "react";
import s from "./Header.module.scss";
import { useLocation } from "react-router-dom";
const HeaderTitle = () => {
  const { pathname } = useLocation();

  const changeTitle = () => {
    switch (pathname) {
      case "/locations":
        return {
          id: "location",
          title: "Наши магазины и локация",
        };
      case "/comunity":
        return {
          id: "comunity",
          title: "Комьюнити и партнеры",
        };
      case "/reviews":
        return {
          id: "reviews",
          title: "Отзывы наших пользователей и блогеров",
        };
      case "/cybersport":
        return {
          id: "cybersport",
          title: "Активная поддержка киберсорта",
        };
      default:
        return {
          id: "category",
          title: "Самое лучшее для самых лучших",
        };
    }
  };

  return (
    <div className={`w-full text-center  mt-5 md:mt-36`}>
      <h1
        className={`font-medium text-white  text-[30px] leading-[40px] lg:text-[45px] lg:leading-[50px] uppercase`}
      >
        {changeTitle().title}
      </h1>
      <div className={`mt-7 flex justify-center items-center`}>
        <a
          href={`#${changeTitle().id}`}
          className={`text-white text-[20px] leading-[24px] mb-5 flex justify-center items-center flex-col ${s.moreInfo}`}
        >
          <span className={`mb-2`}>Узнать больше</span>
          <svg className={`${s.moreArrows}`}>
            <polygon
              className={`${s.arrowTop}`}
              points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
            />
            <polygon
              className={`${s.arrowMiddle}`}
              points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
            />
            <polygon
              className={`${s.arrowBottom}`}
              points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeaderTitle;
