import React, { createContext, useContext, useEffect, useState } from "react";
import { FaInstagram, FaFacebookSquare, FaTelegramPlane } from "react-icons/fa";
import FetchServices from "./API/FetchServices";
import UseFetching from "./hooks/UseFetching";
const context = createContext();

const Context = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [totalProducts, setTotalProducts] = useState([]);

  const [fetchProducts, error, isLoading] = UseFetching(async () => {
    const response = await FetchServices.getAll();
    setTotalProducts(response.data);
  });

  useEffect(() => {
    fetchProducts();
  }, []);

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

  // totalProducts.map(({category}) => console.log(category))

  return (
    <context.Provider
      value={{
        showSearch,
        setShowSearch,
        socialMedia,
        showSidebar,
        setShowSidebar,
        totalProducts,
        setTotalProducts,
        error,
        isLoading,
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
