import React from "react";
import {
  NavBar,
  Button,
  Icon,
  SelectList,
  MenuItem,
  Avatar,
} from "./index.style";
import SidebarButton from "../../../img/sidebar_button.png";
import NotificationIcon from "../../../img/bell_3.png";
import AvatarImg from "../../../img/thu_1.png";
import { Link, Navlink } from "react-router-dom";
import { Popper } from "@mui/material";
import Notification from "../../Notification/Notification";

const TopNav = () => {
  const [value, setValue] = React.useState("en");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <NavBar>
      <div className="header">
        <div className="headContent">
          <div className="sidebarButton">
            <Button>
              <Icon src={SidebarButton} />
            </Button>
          </div>
          <div className="headContentRight">
            <Icon src={NotificationIcon} onClick={handleClick} />
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Notification />
            </Popper>
            <SelectList value={value} onChange={handleChange}>
              <MenuItem value="en" selected="selected">
                ENGLISH
              </MenuItem>
              <MenuItem value="vi">VIETNAMESE</MenuItem>
            </SelectList>
            <Avatar src={AvatarImg} variant="rounded" />
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default TopNav;
