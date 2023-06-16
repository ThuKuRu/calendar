import React, { useState } from "react";
import { TodolistStyle, Img, Color, Percent } from "./index.style";
import Popup from "reactjs-popup";
import CreateToDo from "./CreateToDo/CreateToDo";

const Todolist = ({ toDoData, setToDoData, id, setId, events, setEvents }) => {
  const onClickDelete = (key) => {
    const newToDoData = toDoData.filter((current, index) => {
      return index !== key;
    });
    setToDoData(newToDoData);
  };

  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
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
  const autoFill = () => {
    const sortedTodoList = [...toDoData].sort(
      (a, b) => a.deadline - b.deadline
    );
    let currTime = new Date();
    const newEventsList = sortedTodoList.map((current) => {
      const event = {
        title: current.name,
        start: currTime,
        end: new Date(currTime.getTime() + 60 * 60 * 1000),
        description: current.description,
      };
      currTime = new Date(event.end.getTime() + 60 * 60 * 1000 * 8);
      console.log(event.start);
      console.log(event.end);
      return event;
    });
    setEvents([...events, ...newEventsList]);
  };

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
      <div className="footer">
        <div className="createDiv">
          <div className="createButton">
            <p className="fill" onClick={autoFill}>
              Auto Fill
            </p>
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
                <CreateToDo
                  close={close}
                  id={id}
                  setId={setId}
                  setActive={setActive}
                  toDoData={toDoData}
                  setToDoData={setToDoData}
                />
              </div>
            )}
          </Popup>
        </div>
      </div>
    </TodolistStyle>
  );
};

export default Todolist;
