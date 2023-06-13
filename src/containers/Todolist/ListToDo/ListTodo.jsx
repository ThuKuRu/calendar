import React from "react";
import {
  ToDoModalContainer,
  ToDoItem,
  Button,
  ToDosList,
  Typo,
} from "./index.style";

const ToDoModal = ({ toDoData, setToDoData, close }) => {
  const sortToDoList = () => {
    const newToDoData = [...toDoData];
    newToDoData.sort((todo1, todo2) => todo2.level - todo1.level);
    setToDoData(newToDoData);
  };

  return (
    <ToDoModalContainer>
      <div className="overlay">
        <Typo>To Do List</Typo>
        <ToDosList>
          {toDoData.map((todo) => (
            <ToDoItem level={todo.level}>{todo.name}</ToDoItem>
          ))}
        </ToDosList>
        <div className="button">
          <Button>
            <a className="Cancel" onClick={close} href="/#">
              Cancel
            </a>
          </Button>
          <Button onClick={sortToDoList}>Sort</Button>
        </div>
      </div>
    </ToDoModalContainer>
  );
};

export default ToDoModal;
Huy
Đỗ Quang Huy
import styled from "styled-components";

const levelColor = {
  5: "#FF0000",
  4: "#E67C73",
  3: "#FFBA00",
  2: "#7986CB",
  1: "#9DA7FF",
};

const ToDoModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  text-align: center;
  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 60%;
    background-color: white;
    padding: 20px;
    box-shadow: 24px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 20px;
    justify-content: center;
    text-align: center;
    .button {
      display: flex;
      float: right;
      margin-left: 150px;
      justify-content: center;
      text-direction: none;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
`;

const ToDoItem = styled.div`
  border: 1px solid #3788d8;
  border-radius: 10px;
  color: white;
  padding: 2% 5%;
  font-size: 18px;
  margin: 1% 0;
  background-color: ${({ level }) => levelColor[level]};
`;

const ToDosList = styled.div`
  max-height: 500px;
  justify-content: center;
  margin-left: 20px;
  width: 90%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.4em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  background-color: #d9d9d9;
  border: 2px solid #000;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  padding: 2% 4%;
  margin-top: 3%;
  width: auto;
  cursor: pointer;
  margin-left: 10px;
`;

const Typo = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin: 0px 20px 10px;
`;

export { ToDoModalContainer, ToDoItem, ToDosList, Typo, Button };

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
          {(close) => <FormEvent close={close} />}
          {/* {(close) => <FormTodo close={close} />} */}
          {/* {(close) => <FormReminder close={close} />} */}
          {/* {(close) => <FormEditTodo close={close} />} */}
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
