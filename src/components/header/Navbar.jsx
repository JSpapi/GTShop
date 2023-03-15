import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../../assets";
import s from "./Header.module.scss";
import { BsFillCartFill, BsSearch } from "react-icons/bs";
import { AiOutlineHome, AiOutlineDollar } from "react-icons/ai";
import { getContext } from "../../Context";

// !DESKTOP NAVBAR
const DesktopNavbar = ({ setShowSearch }) => {
  const DesktopLinks = [
    {
      id: "home",
      path: "/",
      name: "Главная",
    },
    {
      id: "sales",
      path: "/sales",
      name: "Расспродажи",
    },
    {
      id: "locations",
      path: "/locations",
      name: "Локации",
    },
    {
      id: "comunity",
      path: "/comunity",
      name: "Сообщество",
    },
    {
      id: "reviews",
      path: "/reviews",
      name: "Отзывы",
    },
    {
      id: "cybersport",
      path: "/cybersport",
      name: "Кибер спорт",
    },
  ];

  return (
    <div className={`navbar items-center justify-center md:flex hidden`}>
      <div className={`logo flex flex-[0.3]`}>
        <img src={logo} alt="logo" className={`w-[50px] object-contain`} />
      </div>
      <ul className={`flex justify-center font-normal flex-[2] gap-6`}>
        {DesktopLinks.map(({ id, path, name }) => (
          <li key={id}>
            <NavLink
              to={path}
              style={({ isActive }) =>
                isActive ? { color: "#bb0808" } : { color: "#fff" }
              }
              className={`font-normal text-[14px] lg:text-[16px]`}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={`flex  flex-[0.3] justify-end gap-6`}>
        <button>
          <BsSearch
            size={20}
            cursor="pointer"
            onClick={() => setShowSearch(true)}
          />
        </button>
        <NavLink to={`/cart`}>
          <BsFillCartFill size={20} cursor="pointer" />
        </NavLink>
      </div>
    </div>
  );
};
// !MOBILE NAVBAR
const MobileNavbar = ({ setShowSearch }) => {
  const mobileNavbar = [
    {
      id: "mobile-home",
      icon: <AiOutlineHome size={25} cursor="pointer" />,
      name: "Главная",
      path: "/",
    },
    {
      id: "mobile-search",
      icon: <BsSearch size={25} cursor="pointer" />,
      name: "Поиск",
      path: null,
    },
    {
      id: "mobile-sales",
      icon: <AiOutlineDollar size={25} cursor="pointer" />,
      name: "Распродажа",
      path: "/sales",
    },
    {
      id: "mobile-cart",
      icon: <BsFillCartFill size={25} cursor="pointer" />,
      name: "Корзина",
      path: "/cart",
    },
  ];

  return (
    <div className={`md:hidden w-full`}>
      <ul className={`flex items-center justify-between sm:px-8`}>
        {mobileNavbar.map(({ id, icon, name, path }) => (
          <li key={id}>
            <NavLink
              className={`flex flex-col justify-center items-center`}
              to={path}
              onClick={
                id === "mobile-search" ? () => setShowSearch(true) : null
              }
              style={({ isActive }) =>
                isActive ? { color: "#bb0808" } : { color: "#fff" }
              }
            >
              {icon}
              <span className={`xs:text-[16px] text-[14px]`}>{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
// !SIDEBAR NAVBAR
const SideBar = () => {
  // !Я МОГУ ТАК Ж ИСПОЛЬЗОВАТЬ МЕТОД SLICE ИЛИ SPLICE И ВЫРАЗИТЬ ИЗ DESKTOPLINKS ЭТИ 4 ССЫЛКИ, НО ДУМОЮ АЙДИШКИ ДОЛЖНЫ БЫТЬ УНИКАЛЬНЫМИ
  const sideBarLinks = [
    {
      id: "sidebar-locations",
      path: "/locations",
      name: "Локации",
    },
    {
      id: "sidebar-comunity",
      path: "/comunity",
      name: "Сообщество",
    },
    {
      id: "sidebar-reviews",
      path: "/reviews",
      name: "Отзывы",
    },
    {
      id: "sidebar-cybersport",
      path: "/cybersport",
      name: "Кибер спорт",
    },
  ];

  const { socialMedia, setShowSidebar, showSidebar } = getContext();

  return (
    <div
      className={`fixed h-screen w-full left-0 top-0 md:hidden block bg-[#00000087] ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } duration-[.5s] transition-all`}
      onClick={() => setShowSidebar(false)}
    >
      <div className={`bg-black h-full w-[80%] p-6`}>
        <div>
          <button
            className={`font-thin text-[50px] leading-[60px]`}
            onClick={() => setShowSidebar(false)}
          >
            &times;
          </button>
        </div>

        <div
          className={`flex flex-col items-start pt-5 pb-10 border-b-[1px] border-danger`}
        >
          {sideBarLinks.map(({ id, name, path }, index) => (
            <NavLink
              to={path}
              className={`text-[16px] font-normal leading-[20px] inline-block  ${
                sideBarLinks.length - 1 === index ? "pb-0" : "pb-6"
              }`}
              key={id}
              style={({ isActive }) =>
                isActive ? { color: "#bb0808" } : { color: "#fff" }
              }
              onClick={() => setShowSidebar(false)}
            >
              {name}
            </NavLink>
          ))}
        </div>
        <div className={`pt-5 pb-10 border-b-[1px] border-danger`}>
          <h4
            className={`text-[18px] font-medium leading-[24px] text-white mb-3`}
          >
            Мы в социальных сетях
          </h4>
          <div className={` flex items-center justify-start gap-5`}>
            {socialMedia.map(({ id, path, icon }) => (
              <a href={path} key={id}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className={`pt-5`}>
          <h4
            className={`text-[18px] font-medium leading-[24px] text-white mb-3`}
          >
            Контакты
          </h4>
          <div className={`flex flex-col items-start gap-3`}>
            <a
              href="mailto:GtStore@gmail.com"
              className={`font-light text-[14px]`}
            >
              GtStore@gmail.com
            </a>
            <a href="tel:998941231234" className={`font-light text-[14px]`}>
              +99894 123 12 34
            </a>
          </div>

          <p className={`font-light text-[13px] mt-5`}>
            {new Date().getFullYear()} &copy; Ahror Kurban
          </p>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { setShowSearch } = getContext();
  return (
    <nav
      className={` w-full py-2 text-white bg-zinc-900 md:bg-transparent  bottom-0 md:bottom-auto fixed md:top-0 z-[3]`}
    >
      <div className="container">
        <DesktopNavbar setShowSearch={setShowSearch} />
        <MobileNavbar setShowSearch={setShowSearch} />
        <SideBar />
      </div>
    </nav>
  );
};

export default Navbar;
