import React, { createContext, useContext, useState } from "react";

const context = createContext();

const Context = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);
  const socialMedia = [
    {
      id: '',
      icon: '',
      path: '',
    }
  ]

  return <context.Provider value={{showSearch, setShowSearch}}>{children}</context.Provider>;
};

export const getContext = () => {
  return useContext(context);
};

export default Context;
