import React, { useNavigate } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import trackingWaiting from "../../Assets/images/trackingWaiting.png";
import "./TrackingWaiting.css";

const TrackingWaiting = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/more-details");
  };
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
        <img src={trackingWaiting} alt="Waiting Tracking Icon" />
      </div>
      <button className="tracking-button" onClick={handleNavigate}>
        More details
      </button>
    </div>
  );
};

export default TrackingWaiting;
