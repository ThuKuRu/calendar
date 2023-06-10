import React from "react";
import { NavBar, Icon, SelectList, MenuItem, Avatar } from "./index.style";
import NotificationIcon from "../../../img/bell_3.png";
import AvatarImg from "../../../img/thu_1.png";
import Notification from "../../Notification/Notification";
import Popup from "reactjs-popup";

const TopNav = () => {
  const [value, setValue] = React.useState("en");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <NavBar>
      <div className="header">
        <Popup trigger={<Icon src={NotificationIcon} />}>
          <Notification />
        </Popup>
        <Avatar src={AvatarImg} variant="rounded" />
        <SelectList value={value} onChange={handleChange}>
          <MenuItem value="en" selected="selected">
            Thu thút
          </MenuItem>
          <MenuItem value="vi">VIETNAMESE</MenuItem>
        </SelectList>
      </div>
    </NavBar>
  );
};

export default TopNav;
