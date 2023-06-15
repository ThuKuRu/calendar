import React from "react";
import { Sidebar } from "./index.style";
import Logo from "../../../img/logo.png";

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
          <div className="dashboard">
            <span
              className="material-symbols-outlined"
              onClick={() => {
                setTab("dashboard");
              }}
            >
              grid_view
            </span>
            <p
              onClick={() => {
                setTab("dashboard");
              }}
            >
              Dashboard
            </p>
          </div>
        </div>
        <div className={tab === "calendar" ? "container active" : "container"}>
          <div className="calendar">
            <span
              className="material-symbols-outlined"
              onClick={() => {
                setTab("calendar");
              }}
            >
              calendar_month
            </span>
            <p
              onClick={() => {
                setTab("calendar");
              }}
            >
              Calendar
            </p>
          </div>
        </div>
        <div className={tab === "todolist" ? "container active" : "container"}>
          <div className="todolist">
            <span
              className="material-symbols-outlined"
              onClick={() => {
                setTab("todolist");
              }}
            >
              checklist
            </span>
            <p
              onClick={() => {
                setTab("todolist");
              }}
            >
              To-do list
            </p>
          </div>
        </div>
        <div className={tab === "workspace" ? "container active" : "container"}>
          <div className="">
            <span
              className="material-symbols-outlined"
              onClick={() => {
                setTab("workspace");
              }}
            >
              lan
            </span>
            <p
              onClick={() => {
                setTab("workspace");
              }}
            >
              Workspace
            </p>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default SideBar;
