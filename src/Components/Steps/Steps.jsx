import React from "react";
import "./Steps.css";
import stepsVector from "../../Assets/images/steps-vector.png";

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
        <div className="steps-card">
            
        </div>
      </div>
    </div>
  );
};

export default Steps;
