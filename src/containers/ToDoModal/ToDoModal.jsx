import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const ToDoModal = () => {
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

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
  };

  const todoItemStyle = {
    border: "1px solid #3788D8",
    borderRadius: "10px",
    color: "white",
    padding: "2% 6%",
    fontSize: "23px",
    margin: "1% 0",
  };

  const todoListStyle = {
    marginTop: 3,
    maxHeight: 500,
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
    },
  };

  const buttonStyle = {
    backgroundColor: "#D9D9D9",
    border: "1px solid #3788D8",
    borderRadius: "10px",
    color: "black",
    fontWeight: "bold",
    fontSize: "29px",
    lineHeight: "29px",
    padding: "2% 4%",
    marginTop: "3%",
    marginLeft: "auto",
    marginRight: "7%",
    maxWidth: "23%",
  };

  const levelColor = {
    5: "#FF0000",
    4: "#E67C73",
    3: "#FFBA00",
    2: "#7986CB",
    1: "#9DA7FF",
  };

  const sortToDoList = () => {
    const newToDoData = [...toDoData];
    newToDoData.sort((todo1, todo2) => todo2.level - todo1.level);
    setToDoData(newToDoData);
  };

  return (
    <Box sx={modalStyle}>
      <Typography
        variant="h4"
        component="h2"
        textAlign="center"
        fontWeight="bold"
      >
        To Do List
      </Typography>
      <Box sx={todoListStyle}>
        {toDoData.map((todo) => (
          <Box
            sx={{ ...todoItemStyle, backgroundColor: levelColor[todo.level] }}
          >
            {todo.name}
          </Box>
        ))}
      </Box>
      <Button sx={buttonStyle} onClick={sortToDoList}>
        SORT
      </Button>
    </Box>
  );
};

export default ToDoModal;
