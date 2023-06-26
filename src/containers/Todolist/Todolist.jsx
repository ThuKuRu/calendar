import React, { useState } from "react";
import { TodolistStyle, Img, Color } from "./index.style";
import Popup from "reactjs-popup";
import CreateToDo from "./CreateToDo/CreateToDo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const levelColor = {
  Critical: "#FF0000",
  High: "#FFA500",
  Medium: "#FFFF00",
  Low: "#1AC71A",
  Optional: "#00BFFF",
};

const levelFontColor = {
  Critical: "#fff",
  High: "#fff",
  Medium: "#000",
  Low: "#fff",
  Optional: "#fff",
};

const Todolist = ({ toDoData, setToDoData, id, setId, events, setEvents }) => {
  const onClickDelete = (key) => {
    const newToDoData = toDoData.filter((current, index) => {
      return index !== key;
    });
    setToDoData(newToDoData);

    toast.success("To-do deleted successfully");
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

  const handleSliderChange = (event, index) => {
    let newToDoData = toDoData;
    console.log(newToDoData);
    newToDoData[index].percent = parseInt(event.target.value);
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
  const autoFill = () => {
    const sortedTodoList = [...toDoData].sort(
      (a, b) => a.deadline - b.deadline
    );
    let currTime = new Date();
    const filteredEventsList = events.filter(
      (currentEvent) =>
        toDoData.filter((currentTodo) => currentTodo.id === currentEvent.id)
          .length === 0
    );
    const newEventsList = sortedTodoList.map((current) => {
      const event = {
        id: current.id,
        title: current.name,
        start: currTime,
        end: new Date(currTime.getTime() + 60 * 60 * 1000),
        deadline: new Date(currTime.getTime() + 60 * 60 * 1000),
        description: current.description,
        level: current.level,
        color: levelColor[current.level],
        fontColor: levelFontColor[current.level],
        eventType: "todo",
        duration: current.duration,
      };
      currTime = new Date(event.end.getTime() + 60 * 60 * 1000 * 8);
      return event;
    });
    setEvents([...filteredEventsList, ...newEventsList]);

    toast.success("Calendar has been successfully updated");
  };

  return (
    <TodolistStyle>
      <ToastContainer />
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
              <Color value={todo.level} className="priorityItems">
                {todo.level}
              </Color>
            </div>
            <div className="col">
              <div className="percent">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={todo.percent}
                  onInput={(e) => {
                    handleSliderChange(e, index);
                  }}
                />
                <p>{todo.percent}</p>
              </div>
            </div>
            <div className="col ">
              <span
                className="material-symbols-outlined delete "
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
        <div className="fillDiv" onClick={autoFill}>
          <div className="fillButton">
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
                <CreateToDo
                  close={close}
                  id={id}
                  setId={setId}
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
