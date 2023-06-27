import React from "react";
import { NavBar, Avatar } from "./index.style";
import AvatarImg from "../../../img/thu_1.png";
import Notification from "../../Notification/Notification";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout/Logout";

const TopNav = () => {
  const [value, setValue] = React.useState("user");
  const navigate = useNavigate();

  return (
    <NavBar>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="header">
        <Popup
          trigger={
            <span className="material-symbols-outlined">notifications</span>
          }
        >
          <Notification />
        </Popup>
        <Popup trigger={<Avatar src={AvatarImg} variant="rounded" />}>
          <Logout />
        </Popup>
      </div>
    </NavBar>
  );
};

export default TopNav;
