import React, { createContext, useContext, useState } from "react";
import { FaInstagram, FaFacebookSquare, FaTelegramPlane } from "react-icons/fa";
const context = createContext();

const Context = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const socialMedia = [
    {
      id: "instagram",
      icon: <FaInstagram size={22} />,
      path: "https://www.instagram.com/jspapi365/",
    },
    {
      id: "facebook",
      icon: <FaFacebookSquare size={22} />,
      path: "#!",
    },
    {
      id: "telegram",
      icon: <FaTelegramPlane size={22} />,
      path: "https://t.me/AKcoder7L",
    },
  ];

  return (
    <context.Provider
      value={{
        showSearch,
        setShowSearch,
        socialMedia,
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const getContext = () => {
  return useContext(context);
};

export default Context;
