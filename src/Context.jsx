import React, { createContext, useContext, useEffect, useState } from "react";
import { FaInstagram, FaFacebookSquare, FaTelegramPlane } from "react-icons/fa";
import FetchServices from "./API/FetchServices";
import UseFetching from "./hooks/UseFetching";
import { getPageCount } from "./utils/PagesCount";
const context = createContext();

const Context = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [totalProducts, setTotalProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [fetchProducts, error, isLoading] = UseFetching(async () => {
    const response = await FetchServices.getAll();
    setTotalProducts(response.data.slice(0, 125));
    setTotalPages(getPageCount(response.data, productsPerPage));

    setPopularProducts(response.data.slice(10, 26));
    setBestSellers(response.data.slice(26, 42));
    setNewProducts(response.data.slice(42, 58));
  });
  const lastPageIndex = currentPage * productsPerPage;
  const firstPageIndex = lastPageIndex - productsPerPage;
  const CurrentProducts = totalProducts.slice(firstPageIndex, lastPageIndex);

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
        popularProducts,
        setPopularProducts,
        bestSellers,
        setBestSellers,
        newProducts,
        setNewProducts,
        productsPerPage,
        setProductsPerPage,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        CurrentProducts,
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
