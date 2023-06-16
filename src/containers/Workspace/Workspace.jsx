import React, { useState } from "react";
import { Container } from "./index.style";
import WorkspaceHome from "./WorkspaceHome/WorkspaceHome";
import JoinWorkspace from "./JoinWorkspace/JoinWorkspace";
import CreateWorkspace from "./CreateWorkspace/CreateWorkspace";

const Workspace = ({workspaces, setWorkspaces}) => {
  const [tab, setTab] = useState("home");
  
  return (
    <Container>
      {tab === "home" && (
        <WorkspaceHome
          setTab={setTab}
          workspaces={workspaces}
          setWorkspaces={setWorkspaces}
        />
      )}
      {tab === "join" && (
        <JoinWorkspace setTab={setTab} workspaces={workspaces} />
      )}
      {tab === "create" && <CreateWorkspace setTab={setTab} />}
    </Container>
  );
};

export default Workspace;
