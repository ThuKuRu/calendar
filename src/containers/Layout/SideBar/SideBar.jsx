import React from "react";
import ToDoModal from "./ToDoModal/ToDoModal";
import { useState } from "react";
import Popup from "reactjs-popup";
import { Sidebar, HeaderLogo, CreateIcon, TodolistIcon } from "./index.style";
import Logo from "../../../img/calendar_logo.png";
import CreateIconImg from "../../../img/create_icon.png";
import MiniCalendar from "./MiniCalendar/MiniCalendar";
import FormEvent from "./FormEvent/FormEvent";
import FormTodo from "./FormTodo/FormTodo";
import FormReminder from "./FormReminder/FormReminder";
import FormEditTodo from "./FormEditTodo/FormEditTodo";
import TodolistIconImg from "../../../img/todolist_icon.png";

const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  // mock data
  const [toDoData, setToDoData] = useState([
    {
      name: "Conference",
      level: 1,
    },
    {
      name: "Conference",
      level: 2,
    },
    {
      name: "Conference",
      level: 3,
    },
    {
      name: "Conference",
      level: 4,
    },
    {
      name: "Conference",
      level: 1,
    },
    {
      name: "Conference",
      level: 4,
    },
    {
      name: "Conference",
      level: 3,
    },
    {
      name: "Conference",
      level: 5,
    },
    {
      name: "Conference",
      level: 5,
    },
    {
      name: "Conference",
      level: 5,
    },
    {
      name: "Conference",
      level: 5,
    },
    {
      name: "Conference",
      level: 5,
    },
  ]);

  return (
    <Sidebar>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      ></link>
      <div className="headLogo">
        <HeaderLogo src={Logo} />
        <p>KARENDA</p>
      </div>
      <div className="createButton">
        <CreateIcon src={CreateIconImg} />
        <Popup modal trigger={<p className="createText">CREATE</p>}>
          {/* {(close) => <FormEvent close={close} />} */}
          {/* {(close) => <FormTodo close={close} />} */}
          {/* {(close) => <FormReminder close={close} />} */}
          {(close) => <FormEditTodo close={close} />}
        </Popup>
      </div>
      <div className="miniCalendar">
        <MiniCalendar />
      </div>
      <Popup
        modal
        trigger={
          <div className="todolistButton">
            <TodolistIcon src={TodolistIconImg} />
            <p className="todolistText">TO DO LIST</p>
          </div>
        }
      >
        {(close) => (
          <ToDoModal
            close={close}
            toDoData={toDoData}
            setToDoData={setToDoData}
          />
        )}
      </Popup>
    </Sidebar>
  );
};

export default SideBar;
