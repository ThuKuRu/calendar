import React from "react";
import { Container } from "./index.style";
import WorkspaceCard from "../WorkspaceCard/WorkspaceCard";

const WorkspaceHome = ({ workspaces, setTab }) => {
  return (
    <Container>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="header">
        <div className="headerText">Workspaces (7)</div>
        <div
          className="joinButton"
          onClick={() => {
            setTab("join");
          }}
        >
          <span className="material-symbols-outlined">group_add</span>
          <div className="joinText">Join a workspace</div>
        </div>
      </div>
      <div className="main">
        <div className="workspaceComponent-create">hay qua</div>
        <WorkspaceCard />
      </div>
    </Container>
  );
};

export default WorkspaceHome;
