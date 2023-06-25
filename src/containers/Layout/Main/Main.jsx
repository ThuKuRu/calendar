import React from "react";
import { useState, useEffect } from "react";
import { Content } from "./index.style";
import MainCalendar from "../../MainCalendar/MainCalendar";
import Dashboard from "../../Dashboard/Dashboard";
import Todolist from "../../Todolist/Todolist";
import Workspace from "../../Workspace/Workspace";
import eventData from "../../../data/events";
import userData from "../../../data/users";

const Main = ({ tab }) => {
  const [id, setId] = useState(500);
  const [events, setEvents] = useState(
    eventData.map((event) => {
      if (event.start.split === undefined) return event;
      let newEvent = event;

      newEvent.start = new Date(
        event.start.split("/")[0],
        event.start.split("/")[1],
        event.start.split("/")[2],
        event.start.split("/")[3],
        event.start.split("/")[4]
      );
      newEvent.end = new Date(
        event.end.split("/")[0],
        event.end.split("/")[1],
        event.end.split("/")[2],
        event.end.split("/")[3],
        event.end.split("/")[4]
      );
      return newEvent;
    })
  );

  const [toDoData, setToDoData] = useState([
    {
      id: 10,
      name: "HTML",
      name_img: "html.png",
      assignee: "You",
      assignee_img: "thu_1.png",
      description: "Study arrow function",
      duration: {
        day: "",
        hour: "",
        minute: "",
      },
      deadline: new Date(2023, 6, 25, 3, 30),
      percent: "70",
      level: "5",
      comple: "false",
      eventType: "todo",
    },
    {
      id: 11,
      name: "SE Project",
      name_img: "se_2.jpg",
      assignee: "Team SE",
      assignee_img: "se_1.jpg",
      description: "Draw Diagram",
      duration: {
        day: "",
        hour: "",
        minute: "",
      },
      deadline: new Date(2023, 6, 12, 5, 0),
      percent: "50",
      level: "5",
      comple: "false",
      eventType: "todo",
    },
    {
      id: 12,
      name: "UI UX",
      name_img: "uiux.png",
      assignee: "T2 Team",
      assignee_img: "t2.jpg",
      description: "Coding Homepage",
      duration: {
        day: "",
        hour: "",
        minute: "",
      },
      deadline: new Date(2023, 9, 30, 9, 30),
      percent: "40",
      level: "2",
      comple: "false",
      eventType: "todo",
    },
    {
      id: 13,
      name: "Figma",
      name_img: "figma.png",
      assignee: "Team design",
      assignee_img: "design_1.webp",
      description: "Design Figma",
      duration: {
        day: "",
        hour: "",
        minute: "",
      },
      deadline: new Date(2023, 7, 1, 7, 0),
      percent: "30",
      level: "3",
      comple: "false",
      eventType: "todo",
    },
    {
      id: 14,
      name: "Java",
      name_img: "java.png",
      assignee: "You",
      assignee_img: "thu_1.png",
      description: "Design MVC Model",
      duration: {
        day: "",
        hour: "",
        minute: "",
      },
      deadline: new Date(2023, 6, 9, 20, 30),
      percent: "90",
      level: "4",
      comple: "false",
      eventType: "todo",
    },
    {
      id: 15,
      name: "Python",
      name_img: "python.jpg",
      assignee: "You",
      assignee_img: "thu_1.png",
      description: "ML research",
      duration: {
        day: "",
        hour: "",
        minute: "",
      },
      deadline: new Date(2023, 6, 25, 13, 30),
      percent: "20",
      level: "3",
      comple: "false",
      eventType: "todo",
    },
    {
      id: 16,
      name: "HTML",
      name_img: "html.png",
      assignee: "You",
      assignee_img: "thu_1.png",
      description: "Complete the code",
      duration: {
        day: "",
        hour: "",
        minute: "",
      },
      deadline: new Date(2023, 5, 25, 19, 30),
      percent: "80",
      level: "5",
      comple: "false",
      eventType: "todo",
    },
    {
      id: 17,
      name: "Database",
      name_img: "database.png",
      assignee: "You",
      assignee_img: "thu_1.png",
      description: "Update database",
      duration: {
        day: "",
        hour: "",
        minute: "",
      },
      deadline: new Date(2023, 5, 20, 21, 0),
      percent: "10",
      level: "1",
      comple: "false",
      eventType: "todo",
    },
  ]);
  const [people, setPeople] = useState(userData);

  // [
  //   {
  //     id: 1,
  //     memberName: "Thu thút",
  //     memberAvatar: "thu_1.png",
  //     pjName: "Python",
  //     pjImg: "python.jpg",
  //     description: "Coding Homepage",
  //     deadline: new Date(2023, 5, 20, 16, 30),
  //     percent: "20",
  //     level: "3",
  //     comple: "false",
  //   },
  //   {
  //     id: 2,
  //     memberName: "Bá Hoàng",
  //     memberAvatar: "python.jpg",
  //     pjName: "Python",
  //     pjImg: "python.jpg",
  //     description: "Coding Login/Sign up",
  //     deadline: new Date(2023, 5, 20, 21, 30),
  //     percent: "60",
  //     level: "3",
  //     comple: "false",
  //   },
  //   {
  //     id: 3,
  //     memberName: "Tuấn Anh",
  //     memberAvatar: "user6.jpg",
  //     pjName: "Python",
  //     pjImg: "python.jpg",
  //     description: "Learning Design Rules",
  //     deadline: new Date(2023, 5, 20, 22, 0),
  //     percent: "30",
  //     level: "4",
  //     comple: "false",
  //   },
  //   {
  //     id: 4,
  //     memberName: "Quang Huy",
  //     memberAvatar: "user5.jpg",
  //     pjName: "Python",
  //     pjImg: "python.jpg",
  //     description: "Coding Layout",
  //     deadline: new Date(2023, 5, 21, 13, 30),
  //     percent: "80",
  //     level: "2",
  //     comple: "false",
  //   },
  //   {
  //     id: 5,
  //     memberName: "Vũ Hoàng",
  //     memberAvatar: "user7.jpg",
  //     pjName: "UI UX",
  //     pjImg: "uiux.png",
  //     description: "Design admin page",
  //     deadline: new Date(2023, 5, 26, 10, 0),
  //     percent: "60",
  //     level: "2",
  //     comple: "false",
  //   },
  // ];
  const [workspaces, setWorkspaces] = useState([
    {
      id: 1,
      avatar: "thu_1.png",
      name: "Công ty Thu Cuối",
      todolist: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
          pjName: "Python",
          pjImg: "python.jpg",
          description: "Coding Homepage",
          deadline: new Date(2023, 5, 20, 16, 30),
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
          deadline: new Date(2023, 5, 20, 21, 30),
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
          deadline: new Date(2023, 5, 20, 22, 0),
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
          deadline: new Date(2023, 5, 21, 13, 30),
          percent: "80",
          level: "2",
          comple: "false",
        },
      ],

      teamMems: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
        },
        {
          id: 2,
          memberName: "Bá Hoàng",
          memberAvatar: "python.jpg",
        },
        {
          id: 3,
          memberName: "Tuấn Anh",
          memberAvatar: "user6.jpg",
        },
        {
          id: 4,
          memberName: "Quang Huy",
          memberAvatar: "user5.jpg",
        },
      ],
    },
    {
      id: 2,
      avatar: "database.png",
      name: "Quản lý Cuộc đời",
      todolist: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
          pjName: "UI UX",
          pjImg: "uiux.png",
          description: "Design home page",
          deadline: new Date(2023, 5, 21, 22, 0),
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
          deadline: new Date(2023, 5, 25, 15, 0),
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
          deadline: new Date(2023, 5, 25, 19, 0),
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
          deadline: new Date(2023, 5, 26, 9, 30),
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
          deadline: new Date(2023, 5, 26, 10, 0),
          percent: "60",
          level: "2",
          comple: "false",
        },
      ],
      teamMems: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
        },
        {
          id: 2,
          memberName: "Bá Hoàng",
          memberAvatar: "python.jpg",
        },
        {
          id: 3,
          memberName: "Tuấn Anh",
          memberAvatar: "user6.jpg",
        },
        {
          id: 4,
          memberName: "Quang Huy",
          memberAvatar: "user5.jpg",
        },
        {
          id: 5,
          memberName: "Vũ Hoàng",
          memberAvatar: "user7.jpg",
        },
      ],
    },
    {
      id: 3,
      avatar: "design_1.webp",
      name: "Thiết kế Tương lai",
      todolist: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
          pjName: "Java",
          pjImg: "java.png",
          description: "Design MVC Model",
          deadline: new Date(2023, 5, 28, 17, 30),
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
          deadline: new Date(2023, 5, 28, 21, 0),
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
          deadline: new Date(2023, 5, 30, 15, 0),
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
          deadline: new Date(2023, 6, 1, 21, 30),
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
          deadline: new Date(2023, 6, 2, 7, 30),
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
          deadline: new Date(2023, 6, 2, 12, 30),
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
          deadline: new Date(2023, 6, 3, 7, 30),
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
          deadline: new Date(2023, 6, 3, 8, 30),
          percent: "90",
          level: "2",
          comple: "false",
        },
      ],
      teamMems: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
        },

        {
          id: 2,
          memberName: "Bá Hoàng",
          memberAvatar: "python.jpg",
        },
        {
          id: 3,
          memberName: "Tuấn Anh",
          memberAvatar: "user6.jpg",
        },
        {
          id: 4,
          memberName: "Quang Huy",
          memberAvatar: "user5.jpg",
        },
        {
          id: 5,
          memberName: "Vũ Hoàng",
          memberAvatar: "user7.jpg",
        },
        {
          id: 6,
          memberName: "Huy Hoàng",
          memberAvatar: "user3.jpg",
        },
        {
          id: 7,
          memberName: "Hào Quang",
          memberAvatar: "user2.jpg",
        },
        {
          id: 8,
          memberName: "Minh Quang",
          memberAvatar: "user1.jpg",
        },
      ],
    },
    {
      id: 4,
      avatar: "se_2.jpg",
      name: "SE Project",
      todolist: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
          pjName: "Database",
          pjImg: "database.png",
          description: "Create Admin table",
          deadline: new Date(2023, 6, 3, 9, 30),
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
          deadline: new Date(2023, 6, 3, 13, 30),
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
          deadline: new Date(2023, 6, 3, 17, 30),
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
          deadline: new Date(2023, 6, 3, 20, 30),
          percent: "70",
          level: "3",
          comple: "false",
        },
      ],
      teamMems: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
        },
        {
          id: 2,
          memberName: "Bá Hoàng",
          memberAvatar: "python.jpg",
        },
        {
          id: 3,
          memberName: "Tuấn Anh",
          memberAvatar: "user6.jpg",
        },
        {
          id: 4,
          memberName: "Quang Huy",
          memberAvatar: "user5.jpg",
        },
      ],
    },
  ]);

  const [workspacesToJoin, setWorkspacesToJoin] = useState([
    {
      id: 5,
      avatar: "thu_1.png",
      name: "Công ty Thu cười",
      teamMems: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
          pjName: "Python",
          pjImg: "python.jpg",
          description: "Coding Homepage",
          deadline: new Date(2023, 6, 3, 8, 30),
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
          deadline: new Date(2023, 6, 4, 8, 30),
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
          deadline: new Date(2023, 6, 5, 8, 30),
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
          deadline: new Date(2023, 5, 21, 8, 30),
          percent: "80",
          level: "2",
          comple: "false",
        },
      ],
    },
    {
      id: 6,
      avatar: "database.png",
      name: "Quản lý Số",
      teamMems: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
          pjName: "UI UX",
          pjImg: "uiux.png",
          description: "Design home page",
          deadline: new Date(2023, 5, 22, 8, 30),
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
          deadline: new Date(2023, 5, 21, 20, 30),
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
          deadline: new Date(2023, 5, 22, 20, 30),
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
          deadline: new Date(2023, 5, 23, 20, 30),
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
          deadline: new Date(2023, 5, 24, 20, 30),
          percent: "60",
          level: "2",
          comple: "false",
        },
      ],
    },
    {
      id: 7,
      avatar: "design_1.webp",
      name: "Thiết kế nhà đất",
      teamMems: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
          pjName: "Java",
          pjImg: "java.png",
          description: "Design MVC Model",
          deadline: new Date(2023, 5, 25, 20, 30),
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
          deadline: new Date(2023, 5, 30, 20, 30),
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
          deadline: new Date(2023, 5, 25, 20, 30),
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
          deadline: new Date(2023, 5, 27, 20, 30),
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
          deadline: new Date(2023, 5, 28, 20, 30),
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
          deadline: new Date(2023, 5, 30, 20, 30),
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
          deadline: new Date(2023, 5, 30, 13, 30),
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
          deadline: new Date(2023, 5, 30, 17, 30),
          percent: "90",
          level: "2",
          comple: "false",
        },
      ],
    },
    {
      id: 8,
      avatar: "se_2.jpg",
      name: "ES Project",
      teamMems: [
        {
          id: 1,
          memberName: "Thu thút",
          memberAvatar: "thu_1.png",
          pjName: "Database",
          pjImg: "database.png",
          description: "Create Admin table",
          deadline: new Date(2023, 6, 1, 13, 30),
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
          deadline: new Date(2023, 5, 25, 13, 0),
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
          deadline: new Date(2023, 5, 29, 13, 0),
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
          deadline: new Date(2023, 5, 30, 13, 0),
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
        <Workspace
          id={id}
          setId={setId}
          workspaces={workspaces}
          setWorkspaces={setWorkspaces}
          workspacesToJoin={workspacesToJoin}
          setWorkspacesToJoin={setWorkspacesToJoin}
          people={people}
          toDoData={toDoData}
          setToDoData={setToDoData}
        />
      )}
    </Content>
  );
};

export default Main;
