import React, { useState } from "react";
import { Container } from "./index.style";
import WorkspaceCard from "../WorkspaceCard/WorkspaceCard";

const WorkspaceHome = ({
  workspaces,
  setWorkspaces,
  setTab,
  id,
  setId,
  setCurrentWorkspace,
}) => {
  console.log(setCurrentWorkspace);

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
        <div className="workspaceComponent-create">
          <div
            className="logo"
            onClick={() => {
              setTab("create");
            }}
          >
            <span className="material-symbols-outlined">add_box</span>
          </div>
          <div className="createText">Create a workspace</div>
          <div className="eg">e.g : Fluck, Tliet</div>
        </div>

        {workspaces.map((workspace) => (
          <WorkspaceCard
            workspace={workspace}
            workspaces={workspaces}
            setWorkspaces={setWorkspaces}
            id={id}
            setId={setId}
            setTab={setTab}
            setCurrentWorkspace={setCurrentWorkspace}
          />
        ))}
      </div>
    </Container>
  );
};

export default WorkspaceHome;
