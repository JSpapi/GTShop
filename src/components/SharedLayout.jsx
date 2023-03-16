import React from "react";
import { Categories, Footer, Header } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { AnimatePresence, motion } from "framer-motion";
const SharedLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <CartProvider>
        <Header />

        {pathname === "/sales" || pathname === "/" ? <Categories /> : null}
        <div className="main">
          <motion.div
            className={`py-5`}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Outlet />
          </motion.div>
        </div>
        <Footer />
      </CartProvider>
    </>
  );
};

export default SharedLayout;
