import React from "react";
import "./Tracking.css";
import { AiOutlineSearch } from "react-icons/ai";

const Tracking = () => {
  return (
    <div className="tracking-container">
      <div className="tracking-text">
        <h3>Live track your Order</h3>
        <p>Please enter your tracking number</p>
      </div>
      <div className="tracking-input">
        <AiOutlineSearch />
        <input type="search" placeholder="Search" />
      </div>
    </div>
  );
};

export default Tracking;
