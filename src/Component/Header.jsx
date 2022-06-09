import React from "react";
import Nav from "./Nav";
import Router from "./Router";

const Header = () => {
  return (
    <>
      <div className="header">
        <Nav />
      </div>
      <Router />
    </>
  );
};

export default Header;
