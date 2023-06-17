import React from "react";
import { Container } from "./index.style";

const WorkspaceCard = ({
  workspace,
  workspaces,
  setWorkspaces,
  setTab,
  setCurrentWorkspace,
}) => {
  const onClickDelete = (key) => {
    const newToDoData = workspaces.filter((current) => {
      return current.id !== key;
    });
    setWorkspaces(newToDoData);
  };
  return (
    <Container>
      <div className="leaveWorkspace">
        <div className="leaveButton">
          <span
            className="material-symbols-outlined"
            onClick={() => {
              onClickDelete(workspace.id);
            }}
          >
            logout
          </span>
        </div>
      </div>
      <div
        className="content"
        onClick={() => {
          setCurrentWorkspace(workspace);
          setTab("specific");
        }}
      >
        <img
          className="avatar"
          src={require("../../../img/" + workspace.avatar)}
          alt=""
        />
        <div className="name">{workspace.name}</div>
        {workspace.teamMems.length <= 4 && (
          <div className="teamMems">
            {workspace.teamMems.map((member) => {
              return (
                <img
                  className="avatar"
                  src={require("../../../img/" + member.memberAvatar)}
                  alt=""
                />
              );
            })}
          </div>
        )}
        {workspace.teamMems.length > 4 && (
          <div className="teamMems">
            {workspace.teamMems.slice(0, 3).map((member) => {
              return (
                <img
                  className="avatar"
                  src={require("../../../img/" + member.memberAvatar)}
                  alt=""
                />
              );
            })}
            <div className="avatar leftover">
              +{workspace.teamMems.length - 4}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default WorkspaceCard;
