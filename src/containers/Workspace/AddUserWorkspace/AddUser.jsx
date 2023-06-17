import React, { useState, useRef } from "react";
import { Container } from "./index.style";

function AddUser({ setTab }) {
  const [assignees, setAssignees] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [workingStatus, setWorkingStatus] = useState("");
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTab("specific");
  };

  const handleCancel = (e) => {
    setTab("specific");
  };

  const handleChooseImage = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
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
      <h2>Add User to this Workspace</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="assignees">Assignees:</label>
          <input
            type="text"
            id="assignees"
            value={assignees}
            onChange={(e) => setAssignees(e.target.value)}
          />
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="workingStatus">Working Status:</label>
          <input
            type="text"
            id="workingStatus"
            value={workingStatus}
            onChange={(e) => setWorkingStatus(e.target.value)}
          />

          <label htmlFor="message">Description:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="image-upload">
          <label className="image-upload-label" htmlFor="workspaceImage">
            <span
              className="material-symbols-outlined"
              onClick={handleChooseImage}
            >
              add_photo_alternate
            </span>
            <span className="image-upload-label-text">Add image here</span>
          </label>
          <input
            type="file"
            id="workspaceImage"
            accept="image/*"
            ref={fileInputRef}
            className="input-file"
            onChange={handleImageChange}
          />
        </div>

        <div className="buttons">
          <button
            className="cancel-button"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="create-button" type="submit">
            Create
          </button>
        </div>
      </form>
    </Container>
  );
}

export default AddUser;
