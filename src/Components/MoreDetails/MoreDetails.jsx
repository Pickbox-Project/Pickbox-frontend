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
            Status: <span className="result">In transit</span>
          </h5>
          <h4 className="sub-main-text">Receiver's information</h4>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Mary Allison" id="name" />
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              placeholder="No 15 Olu road, Ibadan"
              id="destination"
            />
            <label htmlFor="delivery-time">Expected delivery time</label>
            <input
              type="text"
              placeholder="No 15 Olu road, Ibadan"
              id="delivery-time"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
