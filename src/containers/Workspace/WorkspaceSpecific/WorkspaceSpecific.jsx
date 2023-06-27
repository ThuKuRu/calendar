import React, { useState } from "react";
import { WorkspaceSpecificStyle } from "./index.style";
import Todo from "./Todo/Todo";

const WorkspaceSpecific = ({
  id,
  setId,
  setTab,
  currentWorkspace,
  setCurrentWorkspace,
  workspaces,
  setWorkspaces,
  toDoData,
  setToDoData,
  currentTeam,
}) => {
  const [change, setChange] = useState("todo");
  const handleCancel = () => {
    setTab("teamlist");
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
                <p>
                  {currentTeam.name} ({currentWorkspace.name})
                </p>
              </div>
              <div className="description">
                <p>
                  This is a place where the runner-up live and work. The link to
                  Google Meet room:
                  <p
                    style={{
                      padding: "initial",
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "blue",
                    }}
                  >
                    {currentWorkspace.link}
                  </p>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="buttons">
            <div
              className={change === "todo" ? "container active" : "container"}
              onClick={() => {
                setChange("todo");
              }}
            >
              <div>
                <p>Todo</p>
              </div>
            </div>
            <div
              className={change === "doing" ? "container active" : "container"}
              onClick={() => {
                setChange("doing");
              }}
            >
              <div>
                <p>Doing</p>
              </div>
            </div>
            <div
              className={change === "done" ? "container active" : "container"}
              onClick={() => {
                setChange("done");
              }}
            >
              <div>
                <p>Done</p>
              </div>
            </div>
          </div>
          <div className="specific-task">
            <Todo
              id={id}
              setTab={setTab}
              setId={setId}
              toDoData={toDoData}
              setToDoData={setToDoData}
              currentWorkspace={currentWorkspace}
              workspaces={workspaces}
              setWorkspaces={setWorkspaces}
              setCurrentWorkspace={setCurrentWorkspace}
              change={change}
            />
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
          <div
            className="add-member"
            onClick={() => {
              setTab("addUser");
            }}
          >
            <span class="material-symbols-outlined">add_circle</span>
            <p>Add more user</p>
          </div>
        </div>
      </div>
    </WorkspaceSpecificStyle>
  );
};

export default WorkspaceSpecific;
