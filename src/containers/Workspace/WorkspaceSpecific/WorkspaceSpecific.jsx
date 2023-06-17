import React from "react";
import { WorkspaceSpecificStyle, Color, Percent, Img } from "./index.style";
import Popup from "reactjs-popup";
import AddTask from "./AddTask/AddTask";

const WorkspaceSpecific = ({
  id,
  setId,
  setTab,
  currentWorkspace,
  setWorkspaces,
}) => {
  const handleCancel = () => {
    setTab("home");
  };

  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const onClickDelete = (key) => {
    const newToDoData = currentWorkspace.teamMems.filter((current) => {
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
          <div className="specific-task">
            <div className="table">
              <div className="col ">
                <span className="material-symbols-outlined">badge</span>
                <p className="name">Name</p>
              </div>
              <div className="col ">
                <span className="material-symbols-outlined">
                  assignment_ind
                </span>
                <p className="name">Assignee</p>
              </div>
              <div className="col ">
                <span className="material-symbols-outlined">description</span>
                <p className="name">Description</p>
              </div>
              <div className="col ">
                <span className="material-symbols-outlined">
                  event_upcoming
                </span>
                <p className="name">Deadline</p>
              </div>
              <div className="col ">
                <span className="material-symbols-outlined">instant_mix</span>
                <p className="name">Priority</p>
              </div>
              <div className="col">
                <span className="material-symbols-outlined">percent</span>
                <p className="name">Percent</p>
              </div>
              <div className="col ">
                <span className="material-symbols-outlined">
                  assignment_turned_in
                </span>
                <p className="name">Completed</p>
              </div>
            </div>
            <div>
              {currentWorkspace.teamMems.map((todo, index) => (
                <div className="table">
                  <div className="col">
                    <span>
                      <Img src={require("../../../img/" + todo.pjImg)} />
                    </span>
                    <p>{todo.pjName}</p>
                  </div>
                  <div className="col">
                    <img
                      className="avatar"
                      src={require("../../../img/" + todo.memberAvatar)}
                      alt="/"
                    />
                    <p>{todo.memberName}</p>
                  </div>
                  <div className="col">
                    <p>{todo.description}</p>
                  </div>
                  <div className="col">
                    <p>{todo.deadline.toLocaleString("en-US", options)}</p>
                  </div>
                  <div className="col ">
                    <Color value={todo.level}>Level {todo.level}</Color>
                  </div>
                  <div className="col">
                    <div className="percent">
                      <Percent percent={todo.percent}>
                        <div className="percentContent">{todo.percent}</div>
                      </Percent>
                    </div>
                  </div>
                  <div className="col ">
                    <span
                      class="material-symbols-outlined delete"
                      onClick={() => {
                        onClickDelete(index);
                      }}
                    >
                      delete
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="buttons">
            <Popup
              modal
              trigger={
                <div className="add-button">
                  <p className="add">Add task</p>
                </div>
              }
            >
              {(close) => (
                <div>
                  <AddTask
                    close={close}
                    id={id}
                    setId={setId}
                    currentWorkspace={currentWorkspace.teamMems}
                    setWorkspaces={setWorkspaces}
                  />
                </div>
              )}
            </Popup>
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
          <div className="add-member">
            <span
              class="material-symbols-outlined"
              onClick={() => {
                setTab("addUser");
              }}
            >
              add_circle
            </span>
            <p>Add more user</p>
          </div>
        </div>
      </div>
    </WorkspaceSpecificStyle>
  );
};

export default WorkspaceSpecific;
