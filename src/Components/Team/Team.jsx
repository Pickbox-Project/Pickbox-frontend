import React from "react";
import "./Team.css";
import teamVectorRight from "../../Assets/images/team-vector-right.png";
import teamVectorLeft from "../../Assets/images/team-vector-left.png";
import { teamsData } from "./data";

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
      <div className="team-gallery">
        {teamsData.map((teamData) => (
          <div className="team-card" key={teamData.id}>
            <img
              src={teamData.teamMemberImage}
              alt=""
              className="team-member-image"
            />
            <div className="team-info-text">
              <h5 className="team-member-name">{teamData.teamMemberName}</h5>
              <h5 className="team-member-role" key={teamData.teamMemberRole}>
                {teamData.teamMemberRole}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
