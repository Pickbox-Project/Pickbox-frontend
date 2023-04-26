import React, {useContext}from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import trackingTransit from "../../Assets/images/tracking-transit.png";
import trackingTransitMobile from "../../Assets/images/trackingInTransitMobile.png";
import "./TrackingTransit.css";
import { searchContext } from "../../Context/searchContext";

const TrackingTransit = () => {
  const navigate = useNavigate();
  const { trackingCode, setTrackingCode } = useContext(searchContext);
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
          src={trackingTransit}
          className="trackingImage"
          alt="Waiting Tracking Icon"
        />
        <img
          src={trackingTransitMobile}
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

export default TrackingTransit;
