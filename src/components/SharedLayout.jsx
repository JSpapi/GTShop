import React from "react";
import { Categories, Footer, Header, Navbar } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { AnimatePresence, motion } from "framer-motion";
const SharedLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <CartProvider>
        <Header />

        <motion.div
          // className={`py-5`}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {pathname !== "/comunity" &&
          pathname !== "/locations" &&
          pathname !== "/reviews" ? (
            <Categories />
          ) : null}
          <div className="main py-5">
            <Outlet />
          </div>
        </motion.div>
        <Footer />
      </CartProvider>
    </>
  );
};

export default SharedLayout;
