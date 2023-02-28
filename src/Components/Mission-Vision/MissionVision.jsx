import React from "react";
import "./MissionVision.css";

const MissionVision = () => {
  return (
    <div className="mission-vision-container">
      <div className="mission-container">
        <div className="our-mission-text-container">
          <div className="our-text">
            <span>O</span>
            <span>U</span>
            <span>R</span>
          </div>
          <div className="mission-text">
            <span>M</span>
            <span>I</span>
            <span>S</span>
            <span>S</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
          </div>
        </div>
        <h5>
          To foster a global solution platform <br />
          that makes it easier for individuals
          <br />
          and businesses to trade.
        </h5>
      </div>
      {/* Vision Container */}
      <div className="vision-container">
        <div className="our-mission-text-container">
          <div className="our-text">
            <span>O</span>
            <span>U</span>
            <span>R</span>
          </div>
          <div className="mission-text">
            <span>V</span>
            <span>I</span>
            <span>S</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
          </div>
        </div>
        <h5>
          To foster a global solution platform <br />
          that makes it easier for individuals
          <br />
          and businesses to trade.
        </h5>
      </div>
    </div>
  );
};

export default MissionVision;
