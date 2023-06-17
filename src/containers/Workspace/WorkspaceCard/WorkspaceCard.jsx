import React, { useState } from "react";
import { Container } from "./index.style";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    fontFamily: "Roboto",
  },
};

const WorkspaceCard = ({
  workspace,
  workspaces,
  setWorkspaces,
  setTab,
  setCurrentWorkspace,
}) => {
  const [isToastShown, setIsToastShown] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLeave = () => {
    setShowConfirmation(true);
  };

  const confirmLeave = () => {
    const newToDoData = workspaces.filter((current) => {
      return current.id !== workspace.id;
    });

    setWorkspaces(newToDoData);
    setIsToastShown(true);
    toast.success("Workspace left successfully!");
    setShowConfirmation(false);
  };

  const cancelLeave = () => {
    setShowConfirmation(false);
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
      <div className="leaveWorkspace">
        <div className="leaveButton">
          <span className="material-symbols-outlined" onClick={handleLeave}>
            logout
          </span>
        </div>
      </div>
      <div
        className="content"
        onClick={() => {
          setCurrentWorkspace(workspace);
          setTab("specific");
        }}
      >
        <img
          className="avatar"
          src={require("../../../img/" + workspace.avatar)}
          alt=""
        />
        <div className="name">{workspace.name}</div>
        {workspace.teamMems !== null && workspace.teamMems.length <= 4 && (
          <div className="teamMems">
            {workspace.teamMems.map((member) => {
              return (
                <img
                  className="avatar"
                  src={require("../../../img/" + member.memberAvatar)}
                  alt=""
                />
              );
            })}
          </div>
        )}
        {workspace.teamMems.length > 4 && (
          <div className="teamMems">
            {workspace.teamMems.slice(0, 3).map((member) => {
              return (
                <img
                  className="avatar"
                  src={require("../../../img/" + member.memberAvatar)}
                  alt=""
                />
              );
            })}
            <div className="avatar leftover">
              +{workspace.teamMems.length - 4}
            </div>
          </div>
        )}
      </div>

      <Modal
        isOpen={showConfirmation}
        onRequestClose={cancelLeave}
        contentLabel="Leave Confirmation"
        style={customStyles}
      >
        <h2>Leave Workspace</h2>
        <p>Are you sure to leave this workspace?</p>
        <button on onClick={confirmLeave} style={{ marginRight: "10px" }}>
          Yes
        </button>
        <button onClick={cancelLeave}>No</button>
      </Modal>
    </Container>
  );
};

export default WorkspaceCard;
