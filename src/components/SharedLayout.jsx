import React from "react";
import { Categories, Footer, Header, Navbar } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { AnimatePresence, motion } from "framer-motion";
const SharedLayout = () => {
  const { pathname } = useLocation();
  const checkingPathname =
    pathname !== "/comunity" &&
    pathname !== "/locations" &&
    pathname !== "/reviews";
  return (
    <>
      <CartProvider>
        <Header />

        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {checkingPathname ? <Categories /> : null}
          <div className="main pt-5 pb-28 md:py-10">
            <Outlet />
          </div>
        </motion.div>
        <Footer />
      </CartProvider>
    </>
  );
};

export default SharedLayout;
