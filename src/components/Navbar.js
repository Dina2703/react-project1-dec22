import React from "react";
import ReactLogo from "../images/logo512.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={ReactLogo} alt="logo" className="nav--icon" />
      <h3 className="nav--logo_text">React Facts</h3>
      <h4 className="nav--little">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
