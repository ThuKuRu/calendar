import React, { useState } from "react";
import { Container } from "./index.style";
import WorkspaceHome from "./WorkspaceHome/WorkspaceHome";
import JoinWorkspace from "./JoinWorkspace/JoinWorkspace";
import CreateWorkspace from "./CreateWorkspace/CreateWorkspace";

const Workspace = () => {
  const [tab, setTab] = useState("home");
  const [workspaces, setWorkspaces] = useState([
    {
      avatar: "thu_1.png",
      name: "Thu thút",
      teamMems: [1, 2, 3, 4],
    },
    {
      avatar: "thu_1.png",
      name: "Thu thút",
      teamMems: [1, 2, 3, 4, 5],
    },
    {
      avatar: "thu_1.png",
      name: "Thu thút",
      teamMems: [1, 2, 3, 4, 1, 1, 1, 1],
    },
    {
      avatar: "thu_1.png",
      name: "Thu thút",
      teamMems: [1, 2, 3, 4],
    },
  ]);

  return (
    <Container>
      {tab === "home" && (
        <WorkspaceHome setTab={setTab} workspaces={workspaces} />
      )}
      {tab === "join" && (
        <JoinWorkspace setTab={setTab} workspaces={workspaces} />
      )}
      {tab === "create" && <CreateWorkspace setTab={setTab} />}
    </Container>
  );
};

export default Workspace;
