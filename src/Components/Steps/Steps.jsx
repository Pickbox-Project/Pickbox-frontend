import React from "react";
import "./Steps.css";
import stepsVector from "../../Assets/images/steps-vector.png";
import bookDeliveryIcon from "../../Assets/images/book-delivery-icon.png"
import lineVector from "../../Assets/images/line-vector.png"

const Steps = () => {
  return (
    <div className="steps-container">
      <div className="steps-text">
        <h4>
          <span>3</span> easy steps of delivery
        </h4>
        <img src={stepsVector} alt="" />
      </div>
      <div className="steps-details">
        <div className="first-steps-card">
            <img src={lineVector} alt="line-vector" className="line-vector" />
            <div className="card-icon">
                <img src={bookDeliveryIcon} alt="Book Delivery Icon" />
            </div>
            <div className="card-text">
                <h5 className="card-title">
                    Book a delivery
                </h5>
                <p>Place an order(s) from your <br/> place of comfort.</p>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
