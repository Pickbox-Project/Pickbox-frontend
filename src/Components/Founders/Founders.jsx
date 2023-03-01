import React from "react";
import "./Founders.css";
import vectorRight from "../../Assets/images/vector right.png";
import founderImage from "../../Assets/images/Adediran Ifeoluwa.png";

const Founders = () => {
  return (
    <div className="founders-container">
      <img
        src={vectorRight}
        alt="Vector Right"
        className="founders-vector-right"
      />
      <div className="founder-text">
        <h3>Meet The Founders</h3>
        <h5>A little extra writeup for the founders</h5>
      </div>
      <div className="founders-gallery">
        <div className="founders-card">
          <img src={founderImage} alt="" className="founder-image" />
          <div className="founder-info-text">
            <h5 className="founder-name">Ifeoluwa Adediran</h5>
            <h5 className="founder-role">Founder</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
