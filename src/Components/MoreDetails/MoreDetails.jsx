import React from "react";
import "./MoreDetails.css";

const MoreDetails = () => {
  return (
    <div className="more-details-container">
      <div className="more-details-info">
        <div className="more-details-customer-info">
          <h4 className="main-text">Tracking details</h4>
          <h5>
            Tracking details: <span>XXXXXXXXXX1234</span>
          </h5>
          <h5>
            Status: <span>In transit</span>
          </h5>
          <h4>Receiver's information</h4>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
