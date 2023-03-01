import React from "react";
import "./Founders.css";
import vectorRight from "../../Assets/images/vector right.png";

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
      </div>
    </div>
  );
};

export default Founders;
