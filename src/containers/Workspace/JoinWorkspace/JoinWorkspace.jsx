import React from "react";
import { Container } from "./index.style";

const WorkspaceHome = ({ setTab }) => {
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
        <div className="headerText">
          <span
            class="material-symbols-outlined"
            onClick={() => {
              setTab("home");
            }}
          >
            arrow_back_ios
          </span>
          Join workspace
        </div>
        <div className="searchBar">
          <input className="searchText" placeholder="Search for a workspace" />
          <span class="material-symbols-outlined">search</span>
        </div>
      </div>
      <div className="main">
        <div className="workspaceComponent-create">
          <div className="logo">
            <span className="material-symbols-outlined">add_box</span>
          </div>
          <div className="createText">Create a workspace</div>
          <div className="eg">e.g : Fluck, Tliet</div>
        </div>
      </div>
    </Container>
  );
};

export default WorkspaceHome;
