import React from "react";
import "./MoreDetails.css";
import { AiFillPhone } from "react-icons/ai";

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
          <form className="tracking-form">
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
              placeholder="13th August, 2022 by 15:30pm"
              id="delivery-time"
            />
          </form>
          <h4 className="sub-main-text">Agent's number</h4>
          <a href="tel:0803354XXXX" className="agent-number">
            {" "}
            <AiFillPhone className="agent-icon" />
            0803354XXXX
          </a>
          <div className="send-download-button">
            <button className="primary-button">Send ID to receiver</button>
            <button className="secondary-button">Download receipt</button>
          </div>
        </div>
        <div className="delivering-image">
          <p>Image</p>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
