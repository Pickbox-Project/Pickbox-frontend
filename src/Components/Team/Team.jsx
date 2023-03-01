import React from "react";
import "./Team.css";
import teamVectorRight from "../../Assets/images/team-vector-right.png";
import teamVectorLeft from "../../Assets/images/team-vector-left.png";

const Team = () => {
  return (
    <div className="team-container">
      <img src={teamVectorRight} alt="" className="team-vector-right" />
      <img src={teamVectorLeft} alt="" className="team-vector-left" />
      <div className="team-text">
        <h3>The PickBox Team</h3>
        <h5>
          The pickbox team is made up of very
          agile...............................................
        </h5>
      </div>
    </div>
  );
};

export default Team;
