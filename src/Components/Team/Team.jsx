import React from "react";
import "./Team.css";
import teamVectorRight from "../../Assets/images/team-vector-right.png";
import teamVectorLeft from "../../Assets/images/team-vector-left.png";

const Team = () => {
  return (
    <div className="team-container">
      <img src={teamVectorRight} alt="" className="team-vector-right" />
      <img src={teamVectorLeft} alt="" className="team-vector-left" />
    </div>
  );
};

export default Team;
