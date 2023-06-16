import React, { useState } from "react";
import { Container } from "./index.style";
import WorkspaceHome from "./WorkspaceHome/WorkspaceHome";
import JoinWorkspace from "./JoinWorkspace/JoinWorkspace";
import CreateWorkspace from "./CreateWorkspace/CreateWorkspace";
import WorkspaceSpecific from "./WorkspaceSpecific/WorkspaceSpecific";

const Workspace = ({workspaces, setWorkspaces}) => {
  const [tab, setTab] = useState("home");

  const [currentWorkspace, setCurrentWorkspace] = useState({});
  return (
    <Container>
      {tab === "home" && (
        <WorkspaceHome
          setTab={setTab}
          workspaces={workspaces}
          setWorkspaces={setWorkspaces}
          setCurrentWorkspace={setCurrentWorkspace}
        />
      )}
      {tab === "join" && (
        <JoinWorkspace setTab={setTab} workspaces={workspaces} />
      )}
      {tab === "create" && <CreateWorkspace setTab={setTab} />}
      {tab === "specific" && (
        <WorkspaceSpecific
          setTab={setTab}
          currentWorkspace={currentWorkspace}
          workspaces={workspaces}
          setWorkspaces={setWorkspaces}
        />
      )}
    </Container>
  );
};

export default Workspace;
