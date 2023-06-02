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
            <a className="Cancel" onClick={close}>
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
