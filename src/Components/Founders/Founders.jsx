import React from "react";
import "./Founders.css";
import vectorRight from "../../Assets/images/vector right.png";
import { foundersDatas } from "./data";

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
        {foundersDatas.map((foundersData) => (
          <div className="founders-card" key={foundersData.id}>
            <img
              src={foundersData.founderImage}
              alt=""
              className="founder-image"
            />
            <div className="founder-info-text">
              <h5 className="founder-name">{foundersData.founderName}</h5>
              <h5 className="founder-role" key={foundersData.id}>
                {foundersData.founderRole}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
