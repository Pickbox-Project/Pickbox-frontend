import React from "react";
import "./Tracking.css";
import { AiOutlineSearch } from "react-icons/ai";
import entertrackingNumberImage from "../../Assets/images/enter-tracking number.png";
import trackingMobile from "../../Assets/images/tracking-default-mobile.png";
import axios from "axios";

const Tracking = () => {
  return (
    <div className="tracking-container">
      <div className="tracking-text">
        <h3>Live track your Order</h3>
        <p>Please enter your tracking number</p>
      </div>
      <div className="tracking-input">
        <AiOutlineSearch className="search-icon" />
        <input type="search" placeholder="Search" />
      </div>
      <div className="tracking-result">
        <img
          src={entertrackingNumberImage}
          className="trackingImage"
          alt="Enter Tracking Number Icon"
        />
        <img
          className="trackingMobile"
          src={trackingMobile}
          alt="Enter Tracking Number Icon Mobile"
        />
      </div>
    </div>
  );
};

export default Tracking;
