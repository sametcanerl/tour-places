import React from "react";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <a id="logo" href="#">
          Logo
        </a>
      </div>
      <div className="menu-container">
        <a className="menu" href="#">
          Home
        </a>
        <a className="menu" href="#">
          Login
        </a>
        <a className="menu" href="#">
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
