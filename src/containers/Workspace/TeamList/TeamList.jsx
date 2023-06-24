import React, { useState } from "react";
import { Container } from "./index.style";

const TeamList = ({
  id,
  setId,
  setTab,
  currentWorkspace,
  setCurrentWorkspace,
  workspaces,
  setWorkspaces,
}) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const team = [
    {
      id: 1,
      name: "Team 1",
    },
    {
      id: 2,
      name: "Team 2",
    },
    {
      id: 3,
      name: "Team 3",
    },
  ];
  const handleTeamClick = (team) => {
    setSelectedTeam(team);
    setTab("specific");
  };
  const handleCancel = () => {
    setTab("home");
  };
  const onClickOutTeam = (key) => {
    const newWorkspaces = workspaces.filter((current) => {
      return current.id !== key;
    });
    setWorkspaces([...newWorkspaces]);
  };
  return (
    <Container>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="header">
        <div className="backWorkspace">
          <span class="material-symbols-outlined" onClick={handleCancel}>
            arrow_back_ios_new
          </span>
        </div>
        <div className="headerRight">
          <div className="leaveWorkspace">
            <div className="leaveButton">
              <span
                className="material-symbols-outlined"
                onClick={() => {
                  onClickOutTeam(currentWorkspace.id);
                }}
              >
                logout
              </span>
            </div>
          </div>
          <div className="settingWorkspace">
            <div className="settingButton">
              <span class="material-symbols-outlined">settings</span>
            </div>
          </div>
        </div>
      </div>
      <div className="specific">
        <div className="specificLeft">
          <div className="specific-team">
            <div className="specific-avatar">
              <img
                className="avatar-team"
                src={require("../../../img/" + currentWorkspace.avatar)}
                alt=""
              />
            </div>
            <div className="specific-name">
              <div className="name">
                <p>{currentWorkspace.name}</p>
              </div>
              <div className="description">
                <p>This is a place where the runner-up live and work.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="specific-task">
          <div className="table">
            <div className="col ">
              <span className="material-symbols-outlined">badge</span>
              <p className="name" style={{ display: "inline-block" }}>
                Name
              </p>
            </div>
          </div>
        </div>
        <div className="table">
          {team.map((team) => (
            <div
              key={team.id}
              className="col"
              onClick={() => handleTeamClick(team)}
            >
              <p className="name" style={{ cursor: "pointer" }}>
                {team.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TeamList;
