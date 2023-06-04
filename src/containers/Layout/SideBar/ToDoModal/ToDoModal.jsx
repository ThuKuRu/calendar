import React from "react";
import { ToDoModalContainer, ToDoItem, Button, ToDosList } from "./index.style";

const ToDoModal = ({ toDoData, setToDoData, close }) => {
  const sortToDoList = () => {
    const newToDoData = [...toDoData];
    newToDoData.sort((todo1, todo2) => todo2.level - todo1.level);
    setToDoData(newToDoData);
  };

  return (
    <ToDoModalContainer>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      ></link>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="overlay">
        <div className="header"> To Do List </div>
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
