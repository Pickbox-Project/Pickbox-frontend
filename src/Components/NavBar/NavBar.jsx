import React, { useState } from "react";
import "./NavBar.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Drawer } from "antd";
import pickboxLogo from "../../Assets/images/pickbox-logo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="navbar-container">
      <div className="pickbox-logo">
        <a href="/">
          {" "}
          <img src={pickboxLogo} alt="Pickbox Logo" />
        </a>
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
      <div className="toggler-icon">
        <FaBars onClick={showDrawer} className="toggler-bars" />
      </div>
      <Drawer placement="left" onClose={onClose} open={open}>
        <div className="nav-list-mobile">
          <ul>
            <li>
              <NavLink
                to="/"
                onClick={onClose}
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
                onClick={onClose}
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
                onClick={onClose}
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
                onClick={onClose}
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
      </Drawer>
    </div>
  );
};

export default NavBar;
