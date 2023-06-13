import React from "react";
import { Container } from "./index.style";

const WorkspaceCard = ({ workspace }) => {
  return (
    <Container>
      <div className="leaveWorkspace">
        <div className="leaveButton">
          <span className="material-symbols-outlined">logout</span>
        </div>
      </div>
      <div className="content">
        <img
          className="avatar"
          src={require("../../../img/" + workspace.avatar)}
          alt=""
        />
        <div className="name">{workspace.name}</div>
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
      </div>
    </Container>
  );
};

export default WorkspaceCard;
