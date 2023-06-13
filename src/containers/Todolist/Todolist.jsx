import React, { useState, useRef } from "react";
import { TodolistStyle, Img, Color } from "./index.style";
import Popup from "reactjs-popup";
import CreateToDo from "./CreateToDo/CreateToDo";
import { Overlay, Tooltip } from "react-bootstrap";

function Event(event) {
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
    <div ref={ref} onMouseLeave={closeTooltip}>
      <span onMouseOver={openTooltip}>{event.title}</span>
      <Overlay
        rootClose
        target={getTarget}
        show={showTooltip}
        placement={
          ref.current === null
            ? "top"
            : ref.current.getBoundingClientRect().y > 467
            ? "top"
            : "bottom"
        }
        onHide={closeTooltip}
      >
        <Tooltip id="test" style={{ zIndex: 10 }}>
          <CreateToDo event={event} />
        </Tooltip>
      </Overlay>
    </div>
  );
}

const Todolist = () => {
  const [toDoData, setToDoData] = useState([
    {
      name: "HTML",
      name_img: "html.png",
      assignee: "you",
      assignee_img: "thu_1.png",
      description: "Study arrow function",
      deadline: "Dec 10 9:00 PM",
      priority: "Level 5",
      level: "5",
    },
    {
      name: "SE Project",
      name_img: "se_2.jpg",
      assignee: "Team SE",
      assignee_img: "se_1.jpg",
      description: "Draw Diagram",
      deadline: "Dec 14 0:00 AM",
      priority: "Level 5",
      level: "5",
    },
    {
      name: "UI UX",
      name_img: "uiux.png",
      assignee: "T2 Team",
      assignee_img: "t2.jpg",
      description: "Coding Homepage",
      deadline: "Dec 7 2:00 PM",
      priority: "Level 2",
      level: "2",
    },
    {
      name: "Figma",
      name_img: "figma.png",
      assignee: "Team design",
      assignee_img: "design_1.webp",
      description: "Design Figma",
      deadline: "Dec 17 9:00 AM",
      priority: "Level 3",
      level: "3",
    },
    {
      name: "Java",
      name_img: "java.png",
      assignee: "Team design",
      assignee_img: "thu_1.png",
      description: "Design MVC Model",
      deadline: "Dec 10 11:00 PM",
      priority: "Level 4",
      level: "4",
    },
    {
      name: "Python",
      name_img: "python.jpg",
      assignee: "Team design",
      assignee_img: "thu_1.png",
      description: "ML research",
      deadline: "Dec 10 4:00 PM",
      priority: "Level 3",
      level: "3",
    },
    {
      name: "HTML",
      name_img: "html.png",
      assignee: "you",
      assignee_img: "thu_1.png",
      description: "Complete the code",
      deadline: "Dec 10 8:00 AM",
      priority: "Level 5",
      level: "5",
    },
    {
      name: "Database",
      name_img: "database.png",
      assignee: "you",
      assignee_img: "thu_1.png",
      description: "Update database",
      deadline: "Dec 25 3:00 PM",
      priority: "Level 1",
      level: "1",
    },
  ]);

  const sortToDoList = () => {
    const newToDoData = [...toDoData];
    newToDoData.sort((todo1, todo2) => todo2.level - todo1.level);
    setToDoData(newToDoData);
  };

  const sortToDoName = () => {
    const newToDoData = [...toDoData];
    newToDoData.sort((todo1, todo2) => {
      let left = todo1.name;
      let right = todo2.name;
      return left === right ? 0 : left > right ? 1 : -1;
    });
    setToDoData(newToDoData);
  };

  const sortToDoDeadline = () => {
    const newToDoData = [...toDoData];
    newToDoData.sort((todo1, todo2) => {
      let left = todo1.deadline;
      let right = todo2.deadline;
      return left === right ? 0 : left > right ? 1 : -1;
    });
    setToDoData(newToDoData);
  };
  const [active, setActive] = useState("event");

  return (
    <TodolistStyle>
      <div className="header">
        <div className="headerContent">
          <h1>To Do List</h1>
        </div>
      </div>
      <div className="table">
        <div className="col ">
          <span className="material-symbols-outlined">badge</span>
          <p className="name">Name</p>
          <span
            className="material-symbols-outlined sort"
            onClick={sortToDoName}
          >
            filter_alt
          </span>
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
          <span
            className="material-symbols-outlined sort"
            onClick={sortToDoDeadline}
          >
            filter_alt
          </span>
        </div>
        <div className="col ">
          <span className="material-symbols-outlined">instant_mix</span>
          <p className="name">Priority</p>
          <span
            className="material-symbols-outlined sort"
            onClick={sortToDoList}
          >
            filter_alt
          </span>
        </div>
        <div className="col ">
          <span className="material-symbols-outlined">
            assignment_turned_in
          </span>
          <p className="name">Completed</p>
        </div>
      </div>
      <div>
        {toDoData.map((todo) => (
          <div className="table">
            <div className="col">
              <span>
                <Img src={require("../../img/" + todo.name_img)} />
              </span>
              <p>{todo.name}</p>
            </div>
            <div className="col">
              <img
                className="avatar"
                src={require("../../img/" + todo.assignee_img)}
                alt="/"
              />
              <p>{todo.assignee}</p>
            </div>
            <div className="col">
              <p>{todo.description}</p>
            </div>
            <div className="col">
              <p>{todo.deadline}</p>
            </div>
            <div className="col ">
              <Color value={todo.level}>{todo.priority}</Color>
            </div>
            <div className="col ">
              <input className="check" type="checkbox" />
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <div className="createDiv">
          <Popup
            modal
            trigger={
              <div className="createButton">
                <p className="create">Create To Do</p>
              </div>
            }
          >
            {(close) => (
              <div>
                <CreateToDo close={close} setActive={setActive} />
              </div>
            )}
          </Popup>
        </div>
        <div className="autoFill">
          <Popup
            modal
            trigger={
              <div className="fillButton">
                <p className="fill">Auto Fill</p>
              </div>
            }
          >
            {(close) => (
              <div>
                <CreateToDo close={close} setActive={setActive} />
              </div>
            )}
          </Popup>
        </div>
      </div>
    </TodolistStyle>
  );
};

export default Todolist;
