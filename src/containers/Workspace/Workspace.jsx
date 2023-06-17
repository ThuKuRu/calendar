import React, { useState } from "react";
import { Container } from "./index.style";
import WorkspaceHome from "./WorkspaceHome/WorkspaceHome";
import JoinWorkspace from "./JoinWorkspace/JoinWorkspace";
import CreateWorkspace from "./CreateWorkspace/CreateWorkspace";
import WorkspaceSpecific from "./WorkspaceSpecific/WorkspaceSpecific";
import AddUser from "./AddUserWorkspace/AddUser";

const Workspace = ({
  workspaces,
  setWorkspaces,
  workspacesToJoin,
  setWorkspacesToJoin,
  id,
  setId,
}) => {
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
        <JoinWorkspace
          setTab={setTab}
          workspaces={workspaces}
          setWorkspaces={setWorkspaces}
          workspacesToJoin={workspacesToJoin}
          setWorkspacesToJoin={setWorkspacesToJoin}
        />
      )}
      {tab === "create" && (
        <CreateWorkspace
          setTab={setTab}
          id={id}
          setId={setId}
          workspaces={workspaces}
          setWorkspaces={setWorkspaces}
        />
      )}
      {tab === "specific" && (
        <WorkspaceSpecific
          setTab={setTab}
          currentWorkspace={currentWorkspace}
          workspaces={workspaces}
          setWorkspaces={setWorkspaces}
        />
      )}
      {tab === "addUser" && <AddUser setTab={setTab} />}
    </Container>
  );
};

export default Workspace;
