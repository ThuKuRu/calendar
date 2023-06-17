import React, { useState, useRef } from "react";
import { Container } from "./index.style";

function CreateWorkspace({ setTab }) {
  const [workspaceName, setWorkspaceName] = useState("");
  const [assignees, setAssignees] = useState("");
  const [tasks, setTasks] = useState("");
  const [workingStatus, setWorkingStatus] = useState("");
  const [description, setDescription] = useState("");
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTab("home");
  };

  const handleCancel = () => {
    setTab("home");
  };

  const [file, setFile] = useState();
  console.log(file);
  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
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
      <h2>Create Workspace</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="workspaceName">Workspace Name:</label>
          <input
            type="text"
            id="workspaceName"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
          />

          <label htmlFor="assignees">Members:</label>
          <input
            type="text"
            id="assignees"
            value={assignees}
            onChange={(e) => setAssignees(e.target.value)}
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="image-upload">
          {file === undefined && (
            <div>
              <label className="image-upload-label" htmlFor="workspaceImage">
                <span className="material-symbols-outlined">
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
                onChange={handleChange}
              />
            </div>
          )}
          {file !== undefined && (
            <div>
              <img className="file-upload" src={file} alt="/" />
            </div>
          )}
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

export default CreateWorkspace;
