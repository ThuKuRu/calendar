import React from "react";
import { Sidebar } from "./index.style";
import Logo from "../../../img/logo.png";
import Popup from "reactjs-popup";
import FormEvent from "./FormEvent/FormEvent";
import FormTodo from "./FormTodo/FormTodo";
import FormReminder from "./FormReminder/FormReminder";
import FormEditTodo from "./FormEditTodo/FormEditTodo";

const SideBar = ({ tab, setTab }) => {
  return (
    <Sidebar>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="headLogo">
        <img src={Logo} className="logo" alt="" />
        <p>arenda-</p>
      </div>
      <div className="navbar">
        <div className={tab === "dashboard" ? "container active" : "container"}>
          <div
            className="dashboard"
            onClick={() => {
              setTab("dashboard");
            }}
          >
            <span class="material-symbols-outlined">grid_view</span>
            <p>Dashboard</p>
          </div>
        </div>
        <div className={tab === "calendar" ? "container active" : "container"}>
          <div
            className="calendar"
            onClick={() => {
              setTab("calendar");
            }}
          >
            <span class="material-symbols-outlined">calendar_month</span>
            <p>Calendar</p>
          </div>
        </div>
        <div className={tab === "todolist" ? "container active" : "container"}>
          <div
            className="todolist"
            onClick={() => {
              setTab("todolist");
            }}
          >
            <span class="material-symbols-outlined">checklist</span>
            <p>To-do list</p>
          </div>
        </div>
        <div className={tab === "workspace" ? "container active" : "container"}>
          <div
            className=""
            onClick={() => {
              setTab("workspace");
            }}
          >
            <span class="material-symbols-outlined">lan</span>
            <p>Workspace</p>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default SideBar;
