import React, { useState } from "react";
import { Container } from "./index.style";
import WorkspaceHome from "./WorkspaceHome/WorkspaceHome";
import JoinWorkspace from "./JoinWorkspace/JoinWorkspace";
import CreateWorkspace from "./CreateWorkspace/CreateWorkspace";
import WorkspaceSpecific from "./WorkspaceSpecific/WorkspaceSpecific";

const Workspace = () => {
  const [tab, setTab] = useState("home");
  const [currentWorkspace, setCurrentWorkspace] = useState({});
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
    <Container>
      {tab === "home" && (
        <WorkspaceHome
          setTab={setTab}
          workspaces={workspaces}
          setWorkspaces={setWorkspaces}
          setCurrentWorkspace={setCurrentWorkspace}
        />
      )}
      {tab === "join" && (
        <JoinWorkspace setTab={setTab} workspaces={workspaces} />
      )}
      {tab === "create" && <CreateWorkspace setTab={setTab} />}
      {tab === "specific" && (
        <WorkspaceSpecific
          setTab={setTab}
          currentWorkspace={currentWorkspace}
          workspaces={workspaces}
          setWorkspaces={setWorkspaces}
        />
      )}
    </Container>
  );
};

export default Workspace;
