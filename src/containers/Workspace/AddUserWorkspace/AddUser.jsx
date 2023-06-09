import React, { useState, useRef } from "react";
import { Container } from "./index.style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddUser({ setTab }) {
  const [assignees, setAssignees] = useState("");
  const [role, setRole] = useState("");
  const [workingStatus, setWorkingStatus] = useState("");
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleCancel = (e) => {
    setTab("specific");
  };

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (assignees !== "" && role !== "" && workingStatus !== "") {
      if (!file) {
        toast.error("Please add image for user");
        return;
      }
    } else {
      toast.error("Error: Please fill in all required fields.");
      return;
    }

    setTab("specific");
    toast.success("User added successfully!");
  };
  const [file, setFile] = useState();
  console.log(file);

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
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
            Add
          </button>
        </div>
      </form>
    </Container>
  );
}

export default AddUser;
