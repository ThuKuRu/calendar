import React from "react";
import { Container } from "./index.style";
import JoinWorkspaceCard from "../JoinWorkspaceCard/JoinWorkspaceCard";
import { ToastContainer } from "react-toastify";

const WorkspaceHome = ({
  workspaces,
  setTab,
  setWorkspaces,
  workspacesToJoin,
  setWorkspacesToJoin,
}) => {
  return (
    <Container>
      <ToastContainer />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="header">
        <div className="headerText">
          <span
            class="material-symbols-outlined"
            onClick={() => {
              setTab("home");
            }}
          >
            arrow_back_ios
          </span>
          <div>Join workspace</div>
        </div>
        <div className="searchBar">
          <input className="searchText" placeholder="Search for a workspace" />
          <span class="material-symbols-outlined">search</span>
        </div>
      </div>
      <div className="main">
        {workspacesToJoin.map((workspace) => (
          <JoinWorkspaceCard
            workspace={workspace}
            workspaces={workspaces}
            setWorkspaces={setWorkspaces}
            workspacesToJoin={workspacesToJoin}
            setWorkspacesToJoin={setWorkspacesToJoin}
          />
        ))}
      </div>
    </Container>
  );
};

export default WorkspaceHome;
