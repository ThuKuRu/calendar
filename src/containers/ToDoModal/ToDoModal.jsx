import React from "react";
import {
  ToDoModalContainer,
  ToDoItem,
  Button,
  ToDosList,
  Typo,
} from "./index.style";

const ToDoModal = ({ toDoData, setToDoData }) => {
  const sortToDoList = () => {
    const newToDoData = [...toDoData];
    newToDoData.sort((todo1, todo2) => todo2.level - todo1.level);
    setToDoData(newToDoData);
  };

  return (
    <ToDoModalContainer>
      <Typo>To Do List</Typo>
      <ToDosList>
        {toDoData.map((todo) => (
          <ToDoItem level={todo.level}>{todo.name}</ToDoItem>
        ))}
      </ToDosList>
      <Button onClick={sortToDoList}>SORT</Button>
    </ToDoModalContainer>
  );
};

export default ToDoModal;
