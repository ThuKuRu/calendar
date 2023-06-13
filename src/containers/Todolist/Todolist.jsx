import React, { useState, useRef } from "react";
import { TodolistStyle, Img } from "./index.style";
import Popup from "reactjs-popup";
import CreateToDo from "./CreateToDo/CreateToDo";
import { Overlay, Tooltip } from "react-bootstrap";
import HTML from "../../img/html.png";
import You from "../../img/thu_1.png";
import SE from "../../img/se_1.jpg";
import SElOGO from "../../img/se_2.jpg";
import UIUX from "../../img/uiux.png";
import Figma from "../../img/figma.svg";
import Java from "../../img/java.png";
import Python from "../../img/python.jpg";
import Database from "../../img/database.png";
import T2 from "../../img/t2.jpg";
import Design from "../../img/design_1.webp";

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
    },
  ]);

  const sortToDoList = () => {
    const newToDoData = [...toDoData];
    newToDoData.sort((todo1, todo2) => todo2.level - todo1.level);
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
          <span className="material-symbols-outlined sort">filter_alt</span>
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
          <span className="material-symbols-outlined sort">filter_alt</span>
        </div>
        <div className="col ">
          <span className="material-symbols-outlined">instant_mix</span>
          <p className="name">Priority</p>
          <span className="material-symbols-outlined sort">filter_alt</span>
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
              <p className="level">{todo.priority}</p>
            </div>
            <div className="col ">
              <input className="check" type="checkbox" />
            </div>
          </div>
        ))}
      </div>
      <div className="table">
        <div className="col">
          <span>
            <Img src={HTML} />
          </span>
          <p>HTML</p>
        </div>
        <div className="col">
          <img className="avatar" src={You} />
          <p>You</p>
        </div>
        <div className="col">
          <p>Study arrow function</p>
        </div>
        <div className="col">
          <p>Dec 10 9:00 PM</p>
        </div>
        <div className="col ">
          <p className="level" value="5">
            Level 5
          </p>
        </div>
        <div className="col ">
          <input className="check" type="checkbox" />
        </div>
      </div>
      <div className="table">
        <div className="col">
          <span>
            <Img src={SElOGO} />
          </span>
          <p>SE Project </p>
        </div>
        <div className="col">
          <img className="avatar" src={SE} />
          <p>Team SE</p>
        </div>
        <div className="col">
          <p>Draw Diagram</p>
        </div>
        <div className="col">
          <p>Dec 14 0:00 AM</p>
        </div>
        <div className="col ">
          <p className="level" value="5">
            Level 5
          </p>
        </div>
        <div className="col ">
          <input className="check" type="checkbox" />
        </div>
      </div>
      <div className="table">
        <div className="col">
          <span>
            <Img src={UIUX} />
          </span>
          <p>UI UX</p>
        </div>
        <div className="col">
          <img className="avatar" src={T2} />
          <p>T2 Team</p>
        </div>
        <div className="col">
          <p>Coding Homepage</p>
        </div>
        <div className="col">
          <p>Dec 7 2:00 PM</p>
        </div>
        <div className="col ">
          <p className="level" value="2">
            {" "}
            Level 2{" "}
          </p>
        </div>
        <div className="col ">
          <input className="check" type="checkbox" />
        </div>
      </div>
      <div className="table">
        <div className="col">
          <span>
            <Img src={Figma} />
          </span>
          <p>Figma</p>
        </div>
        <div className="col">
          <img className="avatar" src={Design} />
          <p>Team design</p>
        </div>
        <div className="col">
          <p>Design Figma</p>
        </div>
        <div className="col">
          <p>Dec 17 9:00 AM</p>
        </div>
        <div className="col ">
          <p className="level" value="3">
            Level 3
          </p>
        </div>
        <div className="col ">
          <input className="check" type="checkbox" />
        </div>
      </div>
      <div className="table">
        <div className="col">
          <span>
            <Img src={Java} />
          </span>
          <p>Java</p>
        </div>
        <div className="col">
          <img className="avatar" src={You} />
          <p>You</p>
        </div>
        <div className="col">
          <p>Design MVC Model</p>
        </div>
        <div className="col">
          <p>Dec 10 11:00 PM</p>
        </div>
        <div className="col ">
          <p className="level" value="5">
            Level 5
          </p>
        </div>
        <div className="col ">
          <input className="check" type="checkbox" />
        </div>
      </div>
      <div className="table">
        <div className="col">
          <span>
            <Img src={Python} />
          </span>
          <p>Python</p>
        </div>
        <div className="col">
          <img className="avatar" src={You} />
          <p>You</p>
        </div>
        <div className="col">
          <p>ML research</p>
        </div>
        <div className="col">
          <p>Dec 10 4:00 PM</p>
        </div>
        <div className="col ">
          <p className="level" value="3">
            Level 3
          </p>
        </div>
        <div className="col ">
          <input className="check" type="checkbox" />
        </div>
      </div>
      <div className="table">
        <div className="col">
          <span>
            <Img src={HTML} />
          </span>
          <p>HTML</p>
        </div>
        <div className="col">
          <img className="avatar" src={You} />
          <p>You</p>
        </div>
        <div className="col">
          <p>Complete the code </p>
        </div>
        <div className="col">
          <p>Dec 10 8:00 AM</p>
        </div>
        <div className="col ">
          <p className="level" value="5">
            Level 5
          </p>
        </div>
        <div className="col ">
          <input className="check" type="checkbox" />
        </div>
      </div>
      <div className="table">
        <div className="col">
          <span>
            <Img src={Database} />
          </span>
          <p>Database</p>
        </div>
        <div className="col">
          <img className="avatar" src={You} />
          <p>You</p>
        </div>
        <div className="col">
          <p>Update database</p>
        </div>
        <div className="col">
          <p>Dec 25 3:00 PM</p>
        </div>
        <div className="col ">
          <p className="level" value="1">
            Level 1
          </p>
        </div>
        <div className="col ">
          <input className="check" type="checkbox" />
        </div>
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
