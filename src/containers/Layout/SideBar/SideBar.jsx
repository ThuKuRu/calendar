import React from "react";
import { Sidebar, HeaderLogo } from "./index.style";
import Logo from "../../../img/header_logo.png";
import ToDoModal from "../../ToDoModal/ToDoModal";
import { Modal, Button } from "@mui/material";

const SideBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

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
          <ToDoModal />
        </Modal>
      </div>
    </Sidebar>
  );
};

export default SideBar;
