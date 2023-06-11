import React from "react";
import { useState } from "react";
import { Content } from "./index.style";
import MainCalendar from "../../MainCalendar/MainCalendar";
import Dashboard from "../../Dashboard/Dashboard";
import Todolist from "../../Todolist/Todolist";
import Workspace from "../../Workspace/Workspace";

const Main = ({ tab }) => {
  

  return (
    <Content>
      {tab === "dashboard" && <Dashboard />}
      {tab === "calendar" && <MainCalendar />}
      {tab === "todolist" && <Todolist />}
      {tab === "workspace" && <Workspace />}
    </Content>
  );
};

export default Main;
