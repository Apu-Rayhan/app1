import React from "react";
import { NavLink } from "react-router-dom";
// import { AiOutlineBars} from "react-icons/ai";
import { AiOutlineBars } from "@react-icons/all-files/ai/AiOutlineBars";

const Nav = () => {
  return (
    <>
      <div className="navbar">
        <div className="toggleButtom">
        <button><AiOutlineBars/></button>
        </div>

        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          
        </div>
      </div>
    </>
  );
};

export default Nav;
