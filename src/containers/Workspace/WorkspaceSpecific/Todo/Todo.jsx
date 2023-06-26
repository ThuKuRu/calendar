import React, { useState } from "react";
import { TodoStyle, Img, Color } from "./index.style";
import Popup from "reactjs-popup";
import AddTask from "../AddTask/AddTask";
import RangeSlider from "react-bootstrap-range-slider";

const Todo = ({
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
  const handleSliderChange = (event, index) => {
    let newWorkspace = currentWorkspace;
    newWorkspace.todolist[index].percent = parseInt(event.target.value);
    setCurrentWorkspace(newWorkspace);
    setWorkspaces(
      workspaces.map((workspace) => {
        return workspace.id === currentWorkspace.id ? newWorkspace : workspace;
      })
    );
    if (parseInt(newWorkspace.todolist[index].percent) > 0) {
      newWorkspace.todolist[index].status = "doing";
      setCurrentWorkspace(newWorkspace);
      setWorkspaces(
        workspaces.map((workspace) => {
          return workspace.id === currentWorkspace.id
            ? newWorkspace
            : workspace;
        })
      );
    }
    if (parseInt(newWorkspace.todolist[index].percent) === 100) {
      newWorkspace.todolist[index].status = "done";
      setCurrentWorkspace(newWorkspace);
      setWorkspaces(
        workspaces.map((workspace) => {
          return workspace.id === currentWorkspace.id
            ? newWorkspace
            : workspace;
        })
      );
    }
  };

  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return (
    <TodoStyle>
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
            <span className="material-symbols-outlined">percent</span>
            <p className="name">Percent</p>
          </div>
          <div className="col">
            <span className="material-symbols-outlined">
              assignment_turned_in
            </span>
            <p className="name">Status</p>
          </div>
        </div>
        <div>
          {currentWorkspace.todolist !== undefined &&
            currentWorkspace.todolist.map((todo, index) => (
              <div>
                {todo.status === "todo" && (
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
                    <div className="col">
                      <div className="percent">
                        <RangeSlider
                          value={parseInt(todo.percent)}
                          maxValue={100}
                          minValue={0}
                          className="slider"
                          onInput={(e) => {
                            handleSliderChange(e, index);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col ">
                      <div className="todo">Initiate</div>
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
    </TodoStyle>
  );
};

export default Todo;
