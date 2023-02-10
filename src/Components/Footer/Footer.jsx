import React from "react";
import "./Footer.css";
import pickBoxLogo from "../../Assets/images/pickbox-logo.png"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-details">
        <div className="footer-logo-text">
            <img src={pickBoxLogo} alt="Pickbox Logo" />
            <p>Pickbox logistics is eradicating logistics hassle by providing swift and affordable market to door-step delivery services.</p>
        </div>
        <div className="footer-navigation">
            <h5 className="footer-title">Navigation</h5>
            <ul className="navigation-links">
                <li></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
