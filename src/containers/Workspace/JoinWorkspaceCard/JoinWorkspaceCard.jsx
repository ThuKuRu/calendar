import React from "react";
import { Container } from "./index.style";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WorkspaceCard = ({
  workspace,
  workspaces,
  setWorkspaces,
  workspacesToJoin,
  setWorkspacesToJoin,
}) => {
  const join = () => {
    setWorkspaces([...workspaces, workspace]);
    const newWorkspaces = workspacesToJoin.filter((current) => {
      return current.id !== workspace.id;
    });
    setWorkspacesToJoin([...newWorkspaces]);
    toast.success("Workspace joined successfully!");
  };

  return (
    <Container>
      <div className="content">
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
              +{workspace.teamMems.length - 3}
            </div>
          </div>
        )}
      </div>
      <div className="joinButton" onClick={join}>
        <div className="joinText">Join</div>
      </div>
    </Container>
  );
};

export default WorkspaceCard;
