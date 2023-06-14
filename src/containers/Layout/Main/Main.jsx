import React from "react";
import { useState } from "react";
import { Content } from "./index.style";
import MainCalendar from "../../MainCalendar/MainCalendar";
import Dashboard from "../../Dashboard/Dashboard";
import Todolist from "../../Todolist/Todolist";
import Workspace from "../../Workspace/Workspace";

const Main = ({ tab }) => {
  const [id, setId] = useState(3);
  const tempEvents = [
    {
      id: 0,
      title: "Học UIUX",
      start: new Date(2023, 5, 20, 5),
      end: new Date(2023, 5, 20, 6),
      description: "Cô chấm bài round 1",
    },
    {
      id: 1,
      title: "Tâm lý học",
      start: new Date(2023, 5, 21, 10),
      end: new Date(2023, 5, 21, 15),
      description: "",
    },
    {
      id: 2,
      title: "Công nghệ phần mềm",
      start: new Date(2023, 5, 22, 9),
      end: new Date(2023, 5, 22, 10),
      description: "",
    },
  ];
  const [events, setEvents] = useState(tempEvents);
  const [toDoData, setToDoData] = useState([
    {
      name: "HTML",
      name_img: "html.png",
      assignee: "you",
      assignee_img: "thu_1.png",
      description: "Study arrow function",
      deadline: new Date(2023, 4, 25, 3, 30),
      percent: "70",
      level: "5",
      comple: "false",
    },
    {
      name: "SE Project",
      name_img: "se_2.jpg",
      assignee: "Team SE",
      assignee_img: "se_1.jpg",
      description: "Draw Diagram",
      deadline: new Date(2023, 2, 12, 5, 0),
      percent: "50",
      level: "5",
      comple: "false",
    },
    {
      name: "UI UX",
      name_img: "uiux.png",
      assignee: "T2 Team",
      assignee_img: "t2.jpg",
      description: "Coding Homepage",
      deadline: new Date(2023, 9, 30, 9, 30),
      percent: "40",
      level: "2",
      comple: "false",
    },
    {
      name: "Figma",
      name_img: "figma.png",
      assignee: "Team design",
      assignee_img: "design_1.webp",
      description: "Design Figma",
      deadline: new Date(2023, 1, 1, 7, 0),
      percent: "30",
      level: "3",
      comple: "false",
    },
    {
      name: "Java",
      name_img: "java.png",
      assignee: "You",
      assignee_img: "thu_1.png",
      description: "Design MVC Model",
      deadline: new Date(2023, 6, 9, 20, 30),
      percent: "90",
      level: "4",
      comple: "false",
    },
    {
      name: "Python",
      name_img: "python.jpg",
      assignee: "You",
      assignee_img: "thu_1.png",
      description: "ML research",
      deadline: new Date(2023, 4, 25, 13, 30),
      percent: "20",
      level: "3",
      comple: "false",
    },
    {
      name: "HTML",
      name_img: "html.png",
      assignee: "you",
      assignee_img: "thu_1.png",
      description: "Complete the code",
      deadline: new Date(2023, 3, 25, 19, 30),
      percent: "0",
      level: "5",
      comple: "false",
    },
    {
      name: "Database",
      name_img: "database.png",
      assignee: "you",
      assignee_img: "thu_1.png",
      description: "Update database",
      deadline: new Date(2023, 4, 20, 21, 0),
      percent: "10",
      level: "1",
      comple: "false",
    },
  ]);
  return (
    <Content>
      {tab === "dashboard" && <Dashboard />}
      {tab === "calendar" && (
        <MainCalendar
          events={events}
          setEvents={setEvents}
          id={id}
          setId={setId}
          toDoData={toDoData}
          setToDoData={setToDoData}
        />
      )}
      {tab === "todolist" && (
        <Todolist
          id={id}
          setId={setId}
          toDoData={toDoData}
          setToDoData={setToDoData}
        />
      )}
      {tab === "workspace" && <Workspace />}
    </Content>
  );
};

export default Main;
