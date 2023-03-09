import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Drawer } from "antd";
import pickboxLogo from "../../Assets/images/pickbox-logo.png";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="pickbox-logo">
        <img src={pickboxLogo} alt="Pickbox Logo" />
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <NavLink
              to="/"
              className="nav-links"
              style={({ isActive }) => ({
                borderBottom: isActive ? "1px solid #d45500" : "none",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tracking"
              className="nav-links"
              style={({ isActive }) => ({
                borderBottom: isActive ? "1px solid #d45500" : "none",
              })}
            >
              Tracking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className="nav-links"
              style={({ isActive }) => ({
                borderBottom: isActive ? "1px solid #d45500" : "none",
              })}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className="nav-links"
              style={({ isActive }) => ({
                borderBottom: isActive ? "1px solid #d45500" : "none",
              })}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
