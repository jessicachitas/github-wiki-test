import React from "react";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img className="logo" src="/imgs/ramalama-logo-text-only.svg"></img>
        </a>
      </div>
      <div className="navbar-middle"></div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <a href="#install">Install</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
