import React, { useState, useRef } from "react";
import { DoneStyle, Img, Color, SelectList, MenuItem } from "./index.style";
import Popup from "reactjs-popup";
import AddTask from "../AddTask/AddTask";
import { Overlay, Tooltip } from "react-bootstrap";
import Comment from "./Comment/Comment";

function Cmt() {
  const [showTooltip, setShowTooltip] = useState(false);
  const closeTooltip = () => {
    setShowTooltip(false);
  };
  const openTooltip = () => {
    setShowTooltip(true);
  };
  const ref = useRef(null);

  const getTarget = () => {
    return ref.current;
  };
  return (
    <div className="comment">
      <span
        className="material-symbols-outlined"
        ref={ref}
        onMouseOver={openTooltip}
        onMouseOut={closeTooltip}
        style={{ height: "100%" }}
      >
        forum
      </span>
      <Overlay
        rootClose
        target={getTarget}
        show={showTooltip}
        onHide={closeTooltip}
        placement="right"
      >
        <Tooltip id="test" style={{ zIndex: 4 }}>
          <Comment />
        </Tooltip>
      </Overlay>
    </div>
  );
}

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
  const handleChange = (event, index) => {
    if (event.target.value === "doing") {
      let newWorkspace = currentWorkspace;
      newWorkspace.todolist[index].status = event.target.value;
      setCurrentWorkspace(newWorkspace);
      console.log(currentWorkspace.todolist);
      setWorkspaces(
        workspaces.map((workspace) => {
          return workspace.id === currentWorkspace.id
            ? newWorkspace
            : workspace;
        })
      );
    }
    if (event.target.value === "todo") {
      let newWorkspace = currentWorkspace;
      newWorkspace.todolist[index].status = event.target.value;
      newWorkspace.todolist[index].percent = "0";
      setCurrentWorkspace(newWorkspace);
      console.log(currentWorkspace.todolist);
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
                      <div className="todo">
                        <SelectList
                          value={todo.status}
                          onChange={(e) => {
                            handleChange(e, index);
                          }}
                        >
                          <MenuItem value="todo" selected="selected">
                            Initiate
                          </MenuItem>
                          <MenuItem value="doing">Doing</MenuItem>
                          <MenuItem value="done">Completed</MenuItem>
                        </SelectList>
                      </div>
                    </div>
                    <div className="col">{Cmt()}</div>
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
