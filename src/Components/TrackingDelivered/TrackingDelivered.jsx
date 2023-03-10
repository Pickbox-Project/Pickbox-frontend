import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import trackingDelivered from "../../Assets/images/tracking-delivered.png";
import trackingDeliveredMobile from "../../Assets/images/trackingDeliveredMobile.png";

const TrackingDelivered = () => {
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
        <img
          src={trackingDelivered}
          className="trackingImage"
          alt="Waiting Tracking Icon"
        />
        <img
          src={trackingDeliveredMobile}
          className="trackingMobile"
          alt="Waiting Tracking Icon"
        />
      </div>
      <button className="tracking-button" onClick={handleNavigate}>
        More details
      </button>
    </div>
  );
};

export default TrackingDelivered;
