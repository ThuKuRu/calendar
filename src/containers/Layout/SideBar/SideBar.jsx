import React from "react";
import ToDoModal from "./ToDoModal/ToDoModal";
import { useState } from "react";
import Popup from "reactjs-popup";
import { Sidebar, HeaderLogo } from "./index.style";
import Logo from "../../../img/calendar_logo.png";
import CreateIconImg from "../../../img/create_icon.png";
import FormEvent from "./FormEvent/FormEvent";
import FormTodo from "./FormTodo/FormTodo";
import FormReminder from "./FormReminder/FormReminder";
import FormEditTodo from "./FormEditTodo/FormEditTodo";
import TodolistIconImg from "../../../img/todolist_icon.png";

const SideBar = ({ setTab }) => {
  const [open, setOpen] = React.useState(false);

  const [active, setActive] = React.useState("event");

  return (
    <Sidebar>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      ></link>
      <div className="headLogo">
        <p>Logo</p>
      </div>
      <div>
        {/* <Popup modal trigger={<p className="createText">CREATE</p>}>
          {(close) => (
            <div>
              {active === "event" && (
                <FormEvent close={close} setActive={setActive} />
              )}
              {active === "todo" && (
                <FormTodo close={close} setActive={setActive} />
              )}
              {active === "reminder" && (
                <FormReminder close={close} setActive={setActive} />
              )}
            </div>
          )}
        </Popup> */}
      </div>
      <div className="navbar">
        <div
          className="dashboard"
          onClick={() => {
            setTab("dashboard");
          }}
        >
          <p>Dashboard</p>
        </div>
        <div
          className="calendar"
          onClick={() => {
            setTab("calendar");
          }}
        >
          <p>Calendar</p>
        </div>
        <div
          className="todolist"
          onClick={() => {
            setTab("todolist");
          }}
        >
          <p>To-do list</p>
        </div>
        <div
          className=""
          onClick={() => {
            setTab("workspace");
          }}
        >
          <p>Workspace</p>
        </div>
      </div>
    </Sidebar>
  );
};

export default SideBar;
