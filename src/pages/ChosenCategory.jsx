import React from 'react'
import { NavLink, useLocation } from "react-router-dom";

const ChosenCategory = () => {
  const tesst = useLocation();
  console.log(tesst);
  return (
	 <div>ChosenCategory</div>
  )
}

export default ChosenCategory