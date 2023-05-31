import React from "react";
import { Sidebar, HeaderLogo } from "./index.style";
import Logo from "../../../img/header_logo.png";
import ToDoModal from "../../ToDoModal/ToDoModal";
import { Modal, Button } from "@mui/material";
import { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  // mock data
  const [toDoData, setToDoData] = useState([
    {
      name: "Conference",
      level: 1,
    },
    {
      name: "Conference",
      level: 2,
    },
    {
      name: "Conference",
      level: 3,
    },
    {
      name: "Conference",
      level: 4,
    },
    {
      name: "Conference",
      level: 1,
    },
    {
      name: "Conference",
      level: 4,
    },
    {
      name: "Conference",
      level: 3,
    },
    {
      name: "Conference",
      level: 5,
    },
    {
      name: "Conference",
      level: 5,
    },
    {
      name: "Conference",
      level: 5,
    },
    {
      name: "Conference",
      level: 5,
    },
    {
      name: "Conference",
      level: 5,
    },
  ]);

  return (
    <Sidebar>
      <div className="headLogo">
        <HeaderLogo src={Logo} />
        <Button onClick={handleOpenModal}>To Do List</Button>
        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ToDoModal toDoData={toDoData} setToDoData={setToDoData} />
        </Modal>
      </div>
    </Sidebar>
  );
};

export default SideBar;
