import React, { useState, useRef } from "react";
import { TodoStyle, Img, Color, SelectList, MenuItem } from "./index.style";
import Popup from "reactjs-popup";
import AddTask from "../AddTask/AddTask";
import RangeSlider from "react-bootstrap-range-slider";
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
        // onMouseOver={openTooltip}
        onClick={openTooltip}
        // onMouseOut={closeTooltip}
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
  change,
}) => {
  const handleSliderChange = (event, index) => {
    let newWorkspace = currentWorkspace;
    newWorkspace.todolist[index].percent = parseInt(event.target.value);
    if (
      parseInt(newWorkspace.todolist[index].percent) > 0 &&
      parseInt(newWorkspace.todolist[index].percent) < 100
    ) {
      newWorkspace.todolist[index].status = "doing";
    } else if (parseInt(newWorkspace.todolist[index].percent) === 100) {
      newWorkspace.todolist[index].status = "done";
    } else {
      newWorkspace.todolist[index].status = "todo";
    }
    setCurrentWorkspace(newWorkspace);
    setWorkspaces(
      workspaces.map((workspace) => {
        return workspace.id === currentWorkspace.id ? newWorkspace : workspace;
      })
    );
  };

  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const handleChange = async (event, index) => {
    let newWorkspace = currentWorkspace;
    newWorkspace.todolist[index].status = event.target.value;
    setCurrentWorkspace(newWorkspace);
    const tmp = await Promise.all(
      workspaces.map((workspace) => {
        return workspace.id === currentWorkspace.id ? newWorkspace : workspace;
      })
    );
    setWorkspaces(tmp);
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
          {change !== "done" && (
            <div className="col ">
              <span className="material-symbols-outlined">percent</span>
              <p className="name">Percent</p>
            </div>
          )}
          <div className="col">
            <span className="material-symbols-outlined">
              assignment_turned_in
            </span>
            <p className="name">Status</p>
          </div>
          {change === "done" && (
            <div className="col">
              <span className="material-symbols-outlined">comment</span>
              <p className="name">Comment</p>
            </div>
          )}
        </div>
        <div>
          {currentWorkspace.todolist !== undefined &&
            currentWorkspace.todolist.map((todo, index) => (
              <div>
                {todo.status === change && (
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
                    {change !== "done" && (
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
                    )}
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
                    {change === "done" && <div className="col">{Cmt()}</div>}
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
