import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import pickBoxLogo from "../../Assets/images/pickbox-logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr className="footer-hr" />
      <div className="footer-details">
        <div className="footer-logo-text">
          <img src={pickBoxLogo} alt="Pickbox Logo" />
          <p className="footer-text">
            Pickbox logistics is eradicating logistics hassle by providing swift
            and affordable market to door-step delivery services.
          </p>
        </div>
        <div className="footer-navigation">
          <h5 className="footer-title">Navigation</h5>
          <ul className="navigation-links">
            <li>
              <NavLink to="/"> Home</NavLink>
            </li>
            <li>
              <NavLink to="/tracking"> Tracking </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-navigation">
          <h5 className="footer-title">Links</h5>
          <ul className="navigation-links">
            <li>
              <NavLink to="/contactus"> FAQ </NavLink>
            </li>
            <li>
              <NavLink to="/contactus"> Customer Support </NavLink>
            </li>
            <li>
              <NavLink to="/contactus"> Privacy Policy </NavLink>
            </li>
            <li>
              <NavLink to="/contactus"> Terms and Conditions </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-connect">
          <h5 className="footer-title">Connect with us</h5>
          <div className="footer-icons">
            <a href="##">
              <AiFillTwitterCircle className="icon" />
            </a>
            <a href="##">
              <AiFillFacebook className="icon" />
            </a>
            <a href="##">
              <AiFillInstagram className="icon" />
            </a>
            <a href="##">
              <AiFillLinkedin className="icon" />
            </a>
          </div>
        </div>
      </div>
      <hr className="footer-hr" />
      <p className="footer-copyright">
        Copyright {new Date().getFullYear()} reserved @ Pickbox logistics
      </p>
    </div>
  );
};

export default Footer;
