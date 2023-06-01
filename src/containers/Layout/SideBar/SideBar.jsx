import React from "react";
import { Sidebar, HeaderLogo } from "./index.style";
import Logo from "../../../img/header_logo.png";
import ToDoModal from "../../ToDoModal/ToDoModal";
import { useState } from "react";
import Popup from "reactjs-popup";
import { Sidebar, HeaderLogo, CreateIcon } from "./index.style";
import Logo from "../../../img/calendar_logo.png";
import CreateIconImg from "../../../img/create_icon.png";
import MiniCalendar from "./MiniCalendar/MiniCalendar";

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
        <p className="createText">CREATE</p>
      </div>
      <div className="miniCalendar">
        <MiniCalendar></MiniCalendar>
      </div>
      <Popup modal trigger={<button>To Do List</button>}>
        <ToDoModal toDoData={toDoData} setToDoData={setToDoData} />
      </Popup>
    </Sidebar>
  );
};

export default SideBar;
