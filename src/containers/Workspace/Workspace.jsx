import React, { useState } from "react";
import { Container } from "./index.style";
import WorkspaceHome from "./WorkspaceHome/WorkspaceHome";
import JoinWorkspace from "./JoinWorkspace/JoinWorkspace";
import CreateWorkspace from "./CreateWorkspace/CreateWorkspace";
import WorkspaceSpecific from "./WorkspaceSpecific/WorkspaceSpecific";
import AddUser from "./AddUserWorkspace/AddUser";
import TeamList from "./TeamList/TeamList";
import { ToastContainer } from "react-toastify";

const Workspace = ({
  workspaces,
  setWorkspaces,
  workspacesToJoin,
  setWorkspacesToJoin,
  id,
  setId,
  people,
  toDoData,
  setToDoData,
}) => {
  const [tab, setTab] = useState("home");

  const [currentWorkspace, setCurrentWorkspace] = useState({});

  const [currentTeam, setCurrentTeam] = useState({});
  return (
    <Container>
      <ToastContainer />
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
          people={people}
        />
      )}
      {tab === "specific" && (
        <WorkspaceSpecific
          setTab={setTab}
          currentWorkspace={currentWorkspace}
          setCurrentWorkspace={setCurrentWorkspace}
          workspaces={workspaces}
          setWorkspaces={setWorkspaces}
          toDoData={toDoData}
          setToDoData={setToDoData}
          id={id}
          setId={setId}
          currentTeam={currentTeam}
        />
      )}
      {tab === "addUser" && <AddUser setTab={setTab} />}
      {tab === "teamlist" && (
        <TeamList
          setTab={setTab}
          id={id}
          setId={setId}
          currentWorkspace={currentWorkspace}
          setCurrentWorkspace={setCurrentWorkspace}
          workspaces={workspaces}
          setWorkspaces={setWorkspaces}
          toDoData={toDoData}
          setToDoData={setToDoData}
          setCurrentTeam={setCurrentTeam}
        />
      )}
    </Container>
  );
};

export default Workspace;
