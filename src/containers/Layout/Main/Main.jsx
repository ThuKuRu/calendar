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

  return (
    <Content>
      {tab === "dashboard" && <Dashboard />}
      {tab === "calendar" && (
        <MainCalendar events={events} setEvents={setEvents} id={id} setId={setId}/> 
      )}
      {tab === "todolist" && <Todolist />}
      {tab === "workspace" && <Workspace />}
    </Content>
  );
};

export default Main;
