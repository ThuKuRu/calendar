import React from "react";
import { DoneStyle, Img, Color } from "./index.style";
import Popup from "reactjs-popup";
import AddTask from "../AddTask/AddTask";

const Done = ({
  currentWorkspace,
  workspaces,
  setWorkspaces,
  id,
  setTab,
  setId,
  toDoData,
  setToDoData,
  setCurrentWorkspace,
}) => {
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const handleSliderChange = (event, index) => {
    let newWorkspace = currentWorkspace;
    newWorkspace.todolist[index].percent = parseInt(event.target.value);
    setCurrentWorkspace(newWorkspace);
    setWorkspaces(
      workspaces.map((workspace) => {
        return workspace.id === currentWorkspace.id ? newWorkspace : workspace;
      })
    );
  };

  const onClickDelete = (key) => {
    const newToDoData = currentWorkspace.teamMems.filter((current) => {
      return current.id !== key;
    });
    setWorkspaces([...workspaces, newToDoData]);
  };
  return (
    <DoneStyle>
      <div className="specific-task">
        <div className="table">
          <div className="col ">
            <span className="material-symbols-outlined">badge</span>
            <p className="name">Name</p>
          </div>
          <div className="col ">
            <span className="material-symbols-outlined">assignment_ind</span>
            <p className="name">Assignee</p>
          </div>
          <div className="col ">
            <span className="material-symbols-outlined">description</span>
            <p className="name">Description</p>
          </div>
          <div className="col ">
            <span className="material-symbols-outlined">event_upcoming</span>
            <p className="name">Deadline</p>
          </div>
          <div className="col ">
            <span className="material-symbols-outlined">instant_mix</span>
            <p className="name">Priority</p>
          </div>
          <div className="col ">
            <span className="material-symbols-outlined">
              assignment_turned_in
            </span>
            <p className="name">Status</p>
          </div>
          <div className="col">
            <span className="material-symbols-outlined">comment</span>
            <p className="name">Comment</p>
          </div>
        </div>
        <div>
          {currentWorkspace.todolist !== undefined &&
            currentWorkspace.todolist.map((todo, index) => (
              <div>
                {todo.status === "done" && (
                  <div className="table">
                    <div className="col">
                      <span>
                        <Img src={require("../../../../img/" + todo.pjImg)} />
                      </span>
                      <p>{todo.pjName}</p>
                    </div>
                    <div className="col">
                      <img
                        className="avatar"
                        src={require("../../../../img/" + todo.memberAvatar)}
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
                      <Color value={todo.level} className="priorityItems">
                        {todo.level}
                      </Color>
                    </div>
                    <div className="col ">
                      <div className="done">Completed</div>
                    </div>
                    <div className="col">
                      <span className="material-symbols-outlined">forum</span>
                    </div>
                  </div>
                )}
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
                toDoData={toDoData}
                setToDoData={setToDoData}
                members={currentWorkspace.teamMems}
                todolist={currentWorkspace.todolist}
                currentWorkspace={currentWorkspace}
                setCurrentWorkspace={setCurrentWorkspace}
                workspaces={workspaces}
                setWorkspaces={setWorkspaces}
              />
            </div>
          )}
        </Popup>
      </div>
    </DoneStyle>
  );
};

export default Done;
