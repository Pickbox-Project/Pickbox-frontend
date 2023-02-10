import React from "react";
import "./Footer.css";
import pickBoxLogo from "../../Assets/images/pickbox-logo.png"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-details">
        <div className="footer-logo-text">
            <img src={pickBoxLogo} alt="Pickbox Logo" />
            <p className="footer-text">Pickbox logistics is eradicating logistics hassle by providing swift and affordable market to door-step delivery services.</p>
        </div>
        <div className="footer-navigation">
            <h5 className="footer-title">Navigation</h5>
            <ul className="navigation-links">
                <li>Home</li>
                <li>Tracking</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="footer-navigation">
            <h5 className="footer-title">Links</h5>
            <ul className="navigation-links">
                <li>FAQ</li>
                <li>Customer Support</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
            </ul>
        </div>
        <div className="footer-connect">
        <h5 className="footer-title">Connect with us</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
