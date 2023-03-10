import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import trackingError from "../../Assets/images/trackingError.png";

const TrackingError = () => {
  return (
    <div className="tracking-container">
      <div className="tracking-text">
        <h3>Live track your Order</h3>
        <p>Please enter your tracking number</p>
      </div>
      <div className="tracking-input">
        <AiOutlineSearch className="search-icon" />
        <input type="search" placeholder="8E368916IBD" />
      </div>
      <div className="tracking-result">
        <img src={trackingError} alt="Tracking Error Icon" />
      </div>
    </div>
  );
};
export default TrackingError;
