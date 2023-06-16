import React from "react";
import { WorkspaceSpecificStyle } from "./index.style";

const WorkspaceSpecific = ({
  setTab,
  currentWorkspace,
  workspaces,
  setWorkspaces,
}) => {
  const handleCancel = () => {
    setTab("home");
  };

  const onClickDelete = (key) => {
    const newToDoData = workspaces.filter((current) => {
      return current.id !== key;
    });
    setWorkspaces(newToDoData);
  };

  return (
    <WorkspaceSpecificStyle>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="header">
        <div className="backWorkspace">
          <span class="material-symbols-outlined" onClick={handleCancel}>
            arrow_back_ios_new
          </span>
        </div>
        <div className="headerRight">
          <div className="leaveWorkspace">
            <div className="leaveButton">
              <span
                className="material-symbols-outlined"
                onClick={() => {
                  onClickDelete(currentWorkspace.id);
                }}
              >
                logout
              </span>
            </div>
          </div>
          <div className="settingWorkspace">
            <div className="settingButton">
              <span class="material-symbols-outlined">settings</span>
            </div>
          </div>
        </div>
      </div>
      <div className="specific">
        <div className="specificLeft">
          <div className="specific-team">
            <div className="specific-avatar">
              <img
                className="avatar-team"
                src={require("../../../img/" + currentWorkspace.avatar)}
                alt=""
              />
            </div>
            <div className="specific-name">
              <div className="name">
                <p>{currentWorkspace.name}</p>
              </div>
              <div className="description">
                <p>This is a place where the runner-up live and work.</p>
              </div>
            </div>
          </div>
          <div></div>
          <div className="buttons">
            <button className="add-button" type="button">
              Add task
            </button>
          </div>
        </div>
        <div className="specificRight">
          <div className="owner">
            <p>Owner</p>
            <div className="menbers">
              <img
                className="avatar"
                src={require("../../../img/" +
                  currentWorkspace.teamMems[0].memberAvatar)}
                alt=""
              />
              <p className="name">{currentWorkspace.teamMems[0].memberName}</p>
            </div>
          </div>
          <div className="participants">
            <p>Participants</p>
            {currentWorkspace.teamMems
              .slice(1, currentWorkspace.teamMems.length + 1)
              .map((member) => {
                return (
                  <div className="menbers">
                    <img
                      className="avatar"
                      src={require("../../../img/" + member.memberAvatar)}
                      alt=""
                    />
                    <p className="name">{member.memberName}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </WorkspaceSpecificStyle>
  );
};

export default WorkspaceSpecific;
