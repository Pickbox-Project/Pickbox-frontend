import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import trackingWaiting from "../../Assets/images/trackingWaiting.png";
import "./TrackingWaiting.css";

const TrackingWaiting = () => {
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
        <img src={trackingWaiting} alt="Enter Tracking Number Icon" />
      </div>
    </div>
  );
};

export default TrackingWaiting;
