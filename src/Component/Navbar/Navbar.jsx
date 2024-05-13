import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/" className="title">
          Homepage
        </NavLink>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/others">Others</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
