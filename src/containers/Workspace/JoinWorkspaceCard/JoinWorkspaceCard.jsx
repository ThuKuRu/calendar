import React from "react";
import { Container } from "./index.style";

const WorkspaceCard = ({ workspace }) => {
  return (
    <Container>
      <div className="content">
        <img
          className="avatar"
          src={require("../../../img/" + workspace.avatar)}
          alt=""
        />
        <div className="name">{workspace.name}</div>
        {workspace.teamMems.length <= 4 && (
          <div className="teamMems">
            {workspace.teamMems.map(() => {
              return (
                <img
                  className="avatar"
                  src={require("../../../img/" + workspace.avatar)}
                  alt=""
                />
              );
            })}
          </div>
        )}
        {workspace.teamMems.length > 4 && (
          <div className="teamMems">
            {workspace.teamMems.slice(0, 3).map(() => {
              return (
                <img
                  className="avatar"
                  src={require("../../../img/" + workspace.avatar)}
                  alt=""
                />
              );
            })}
            <div className="avatar leftover">+{workspace.teamMems.length - 4}</div>
          </div>
        )}
      </div>
      <div className="joinButton">
        <div className="joinText">
            Join
        </div>
      </div>
    </Container>
  );
};

export default WorkspaceCard;
