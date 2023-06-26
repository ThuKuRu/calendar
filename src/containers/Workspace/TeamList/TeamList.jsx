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
  setCurrentTeam,
}) => {
  const handleTeamClick = (team) => {
    setCurrentTeam(team);
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
              <span
                className="material-symbols-outlined"
                style={{ margin: "16px 0" }}
              >
                badge
              </span>
              <p className="name" style={{ display: "inline-block" }}>
                List of teams
              </p>
            </div>
          </div>
        </div>
        <div className="table" style={{ display: "flex", flexWrap: "wrap" }}>
          {currentWorkspace.team.map((team) => (
            <div key={team.id} data={team} className="col">
              <div
                className="team-box"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "200px",
                  height: "100px",
                  border: "1px solid #000000",
                  margin: "10px",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
                onClick={() => handleTeamClick(team)}
              >
                <p className="name">{team.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .team-box:focus {
          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
          transform: translateY(-0.25em);
        }

        .team-box:hover {
          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
          border-radius: 1.25em;
          transform: translateY(-0.25em);
          background-color: #f5f5f5;
        }
      `}</style>
    </Container>
  );
};

export default TeamList;
