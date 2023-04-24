import React from "react";
import trackingError from "../../Assets/images/trackingError.png";
import "./TrackingError.css";

const TrackingError = () => {
  return (
    <div className="tracking-container">
      <div className="tracking-text">
        <h3>Live track your Order</h3>
        <p>Please enter your tracking number</p>
      </div>
      <div className="tracking-result-error">
        <img src={trackingError} alt="Tracking Error Icon" />
        <p className="error-message">
          Incorrect tracking number. Please confirm your Tracking number and try
          again
        </p>
      </div>
    </div>
  );
};
export default TrackingError;
