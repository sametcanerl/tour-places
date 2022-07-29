import React from "react";
import {Link} from "react-router-dom"
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link id="logo" to="/">
          Logo
        </Link>
      </div>
      <div className="menu-container">
        <Link className="menu" to="/">
          Home
        </Link>
        <Link className="menu" to="/">
          Login
        </Link>
        <Link className="menu" to="/">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
