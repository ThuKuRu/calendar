import React, { useState, useRef } from "react";
import { Container, SelectList, MenuItem } from "./index.style";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateWorkspace({
  setTab,
  id,
  setId,
  workspaces,
  setWorkspaces,
  people,
}) {
  const [workspaceName, setWorkspaceName] = useState("");
  const [members, setMembers] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleCancel = () => {
    setTab("home");
  };

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.files[0].name);
  };

  const createWorkspace = (e) => {
    e.preventDefault();
    if (workspaceName !== "" && members !== "") {
      if (fileName === "") {
        toast.error("Please add image for workspace");
        return;
      }
    } else {
      toast.error("Error: Please fill in all required fields.");
      return;
    }
    const you = {
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
    };
    const newMembers = people.filter((current) => {
      return current.memberName === members;
    });
    const newWorkspace = {
      id: id,
      avatar: fileName,
      name: workspaceName,
      teamMems: [you, ...newMembers],
    };
    setId(id + 1);
    setWorkspaces([...workspaces, newWorkspace]);
    setTab("home");
    toast.success("Workspace created successfully!");
  };

  const handleChangeSelect = (event) => {
    setMembers(event.target.value);
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
      <form onSubmit={createWorkspace}>
        <div className="form">
          <label htmlFor="workspaceName">Workspace Name:</label>
          <input
            type="text"
            id="workspaceName"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
          />

          <label htmlFor="assignees">Members:</label>
          {/* <input
            type="text"
            id="assignees"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          /> */}
          <SelectList value={members} onChange={handleChangeSelect}>
            {
              <MenuItem value="" disable hidden>
                Choose a member
              </MenuItem>
            }
            {people.map((member) => (
              <MenuItem key={member.id}>{member.memberName}</MenuItem>
            ))}
          </SelectList>

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
