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
        <div className="avatar">{workspace.avatar}</div>
        <div className="name">{workspace.name}</div>
        <div className="teamMems">{workspace.size}</div>
      </div>
    </Container>
  );
};

export default WorkspaceCard;
