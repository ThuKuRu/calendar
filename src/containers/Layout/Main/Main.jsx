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
      assignee: "You",
      assignee_img: "thu_1.png",
      description: "Study arrow function",
      deadline: new Date(2023, 6, 25, 3, 30),
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
      deadline: new Date(2023, 6, 12, 5, 0),
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
      deadline: new Date(2023, 7, 1, 7, 0),
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
      deadline: new Date(2023, 6, 25, 13, 30),
      percent: "20",
      level: "3",
      comple: "false",
    },
    {
      name: "HTML",
      name_img: "html.png",
      assignee: "You",
      assignee_img: "thu_1.png",
      description: "Complete the code",
      deadline: new Date(2023, 5, 25, 19, 30),
      percent: "80",
      level: "5",
      comple: "false",
    },
    {
      name: "Database",
      name_img: "database.png",
      assignee: "You",
      assignee_img: "thu_1.png",
      description: "Update database",
      deadline: new Date(2023, 5, 20, 21, 0),
      percent: "10",
      level: "1",
      comple: "false",
    },
  ]);
  const [workspaces, setWorkspaces] = useState([
    {
      id: 1,
      avatar: "thu_1.png",
      name: "Thu thút",
      teamMems: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
          pjName: "Python",
          pjImg: "python.jpg",
          description: "Coding Homepage",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "20",
          level: "3",
          comple: "false",
        },
        {
          id: 2,
          memberName: "Bá Hoàng",
          memberAvatar: "python.jpg",
          pjName: "Python",
          pjImg: "python.jpg",
          description: "Coding Login/Sign up",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "60",
          level: "3",
          comple: "false",
        },
        {
          id: 3,
          memberName: "Tuấn Anh",
          memberAvatar: "user6.jpg",
          pjName: "Python",
          pjImg: "python.jpg",
          description: "Learning Design Rules",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "30",
          level: "4",
          comple: "false",
        },
        {
          id: 4,
          memberName: "Quang Huy",
          memberAvatar: "user5.jpg",
          pjName: "Python",
          pjImg: "python.jpg",
          description: "Coding Layout",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "80",
          level: "2",
          comple: "false",
        },
      ],
    },
    {
      id: 2,
      avatar: "database.png",
      name: "Database",
      teamMems: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
          pjName: "UI UX",
          pjImg: "uiux.png",
          description: "Design home page",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "80",
          level: "1",
          comple: "false",
        },
        {
          id: 2,
          memberName: "Bá Hoàng",
          memberAvatar: "python.jpg",
          pjName: "UI UX",
          pjImg: "uiux.png",
          description: "Design tour page",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "50",
          level: "2",
          comple: "false",
        },
        {
          id: 3,
          memberName: "Tuấn Anh",
          memberAvatar: "user6.jpg",
          pjName: "UI UX",
          pjImg: "uiux.png",
          description: "Design address page",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "40",
          level: "4",
          comple: "false",
        },
        {
          id: 4,
          memberName: "Quang Huy",
          memberAvatar: "user5.jpg",
          pjName: "UI UX",
          pjImg: "uiux.png",
          description: "Design manager page",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "90",
          level: "1",
          comple: "false",
        },
        {
          id: 5,
          memberName: "Vũ Hoàng",
          memberAvatar: "user7.jpg",
          pjName: "UI UX",
          pjImg: "uiux.png",
          description: "Design admin page",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "60",
          level: "2",
          comple: "false",
        },
      ],
    },
    {
      id: 3,
      avatar: "design_1.webp",
      name: "Team Design",
      teamMems: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
          pjName: "Java",
          pjImg: "java.png",
          description: "Design MVC Model",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "60",
          level: "5",
          comple: "false",
        },

        {
          id: 2,
          memberName: "Bá Hoàng",
          memberAvatar: "python.jpg",
          pjName: "Java",
          pjImg: "java.png",
          description: "Design usecase",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "60",
          level: "5",
          comple: "false",
        },
        {
          id: 3,
          memberName: "Tuấn Anh",
          memberAvatar: "user6.jpg",
          pjName: "Java",
          pjImg: "java.png",
          description: "Design Admin frame",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "40",
          level: "2",
          comple: "false",
        },
        {
          id: 4,
          memberName: "Quang Huy",
          memberAvatar: "user5.jpg",
          pjName: "Java",
          pjImg: "java.png",
          description: "Design Manager frame",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "30",
          level: "2",
          comple: "false",
        },
        {
          id: 5,
          memberName: "Vũ Hoàng",
          memberAvatar: "user7.jpg",
          pjName: "Java",
          pjImg: "java.png",
          description: "Design Tour frame",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "50",
          level: "3",
          comple: "false",
        },
        {
          id: 6,
          memberName: "Huy Hoàng",
          memberAvatar: "user3.jpg",
          pjName: "Java",
          pjImg: "java.png",
          description: "Coding Login/Register",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "80",
          level: "1",
          comple: "false",
        },
        {
          id: 7,
          memberName: "Hào Quang",
          memberAvatar: "user2.jpg",
          pjName: "Java",
          pjImg: "java.png",
          description: "Coding Tour frame",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "20",
          level: "3",
          comple: "false",
        },
        {
          id: 8,
          memberName: "Minh Quang",
          memberAvatar: "user1.jpg",
          pjName: "Java",
          pjImg: "java.png",
          description: "Coding Home page",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "90",
          level: "2",
          comple: "false",
        },
      ],
    },
    {
      id: 4,
      avatar: "se_2.jpg",
      name: "SE Project",
      teamMems: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
          pjName: "Database",
          pjImg: "database.png",
          description: "Create Admin table",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "50",
          level: "1",
          comple: "false",
        },
        {
          id: 2,
          memberName: "Bá Hoàng",
          memberAvatar: "python.jpg",
          pjName: "Database",
          pjImg: "database.png",
          description: "Create Manager table",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "80",
          level: "2",
          comple: "false",
        },
        {
          id: 3,
          memberName: "Tuấn Anh",
          memberAvatar: "user6.jpg",
          pjName: "Database",
          pjImg: "database.png",
          description: "Create Tour table",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "90",
          level: "4",
          comple: "false",
        },
        {
          id: 4,
          memberName: "Quang Huy",
          memberAvatar: "user5.jpg",
          pjName: "Database",
          pjImg: "database.png",
          description: "Create Address table",
          deadline: new Date(2023, 4, 25, 13, 30),
          percent: "70",
          level: "3",
          comple: "false",
        },
      ],
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
          events={events}
          setEvents={setEvents}
        />
      )}
      {tab === "workspace" && (
        <Workspace workspaces={workspaces} setWorkspaces={setWorkspaces} />
      )}
    </Content>
  );
};

export default Main;
