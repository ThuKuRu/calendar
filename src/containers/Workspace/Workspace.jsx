import React, { useState } from "react";
import { Container } from "./index.style";
import WorkspaceHome from "./WorkspaceHome/WorkspaceHome";
import JoinWorkspace from "./JoinWorkspace/JoinWorkspace";

const Workspace = () => {
  const [tab, setTab] = useState("home");
  const [workspaces, setWorkspaces] = useState([
    {
      avatar: "Avatar",
      name: "Name",
      size: 4,
    },
  ]);

  return (
    <Container>
      {tab === "home" && (
        <WorkspaceHome setTab={setTab} workspaces={workspaces} />
      )}
      {tab === "join" && <JoinWorkspace setTab={setTab} />}
    </Container>
  );
};

export default Workspace;
