import React from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <button>Logout</button>
    </nav>
  );
};

export default Navbar;