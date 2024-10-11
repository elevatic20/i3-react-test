import logo from "../logo.svg";
import "./Navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <img src={logo} className="navbar__logo" alt="logo" />
        <Link to={"/nes1"}>Nes1</Link>
        <Link to={"/nes2"}>Nes2</Link>
      </div>
    </div>
  );
}

export default Navbar;
