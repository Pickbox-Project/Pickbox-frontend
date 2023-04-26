import React, { useContext, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import trackingWaiting from "../../Assets/images/trackingWaiting.png";
import trackingWaitingMobile from "../../Assets/images/trackingWaitingMobile.png";
import "./TrackingWaiting.css";
import { searchContext } from "../../Context/searchContext";

const TrackingWaiting = () => {
  const [trackingCode, setTrackingCode] = useContext(searchContext);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/more-details");
  };

  useEffect(() => {
    if (trackingCode) {
      console.log(trackingCode);
    } else {
      navigate("/tracking");
    }
  }, []);
  return (
    <div className="tracking-container">
      <div className="tracking-text">
        <h3>Live track your Order</h3>
        <p>Please enter your tracking number</p>
      </div>
      <div className="tracking-result">
        <img
          src={trackingWaiting}
          className="trackingImage"
          alt="Waiting Tracking Icon"
        />
        <img
          src={trackingWaitingMobile}
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

export default TrackingWaiting;
