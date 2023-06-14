import React, { useState } from "react";
import { TodolistStyle, Img, Color } from "./index.style";
import Popup from "reactjs-popup";
import CreateToDo from "./CreateToDo/CreateToDo";

const Todolist = ({ toDoData, setToDoData }) => {
  const onClickDelete = (key) => {
    const newToDoData = toDoData.filter((current, index) => {
      return index !== key;
    });
    setToDoData(newToDoData);
  };

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
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
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
        {toDoData.map((todo, index) => (
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
              <Color value={todo.level}>Level {todo.level}</Color>
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
      <div className="footer">
        <div className="createDiv">
          <div className="createButton">
            <p className="fill">Auto Fill</p>
          </div>
        </div>
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
      </div>
    </TodolistStyle>
  );
};

export default Todolist;
