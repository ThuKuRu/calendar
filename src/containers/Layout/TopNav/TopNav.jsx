import React from "react";
import { NavBar, SelectList, MenuItem, Avatar } from "./index.style";
import AvatarImg from "../../../img/thu_1.png";
import Notification from "../../Notification/Notification";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const [value, setValue] = React.useState("user");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "logout") {
      navigate("/login");
    }
  };

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
        <Avatar src={AvatarImg} variant="rounded" />
        <SelectList value={value} onChange={handleChange}>
          <MenuItem value="user" selected="selected">
            Thu thút
          </MenuItem>
          <MenuItem value="logout">Logout</MenuItem>
        </SelectList>
      </div>
    </NavBar>
  );
};

export default TopNav;
