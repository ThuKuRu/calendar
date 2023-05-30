import React from "react";
import {
  NavBar,
  HeaderLogo,
  Button,
  Icon,
  SelectList,
  MenuItem,
  Avatar,
  SubItem,
} from "./index.style";
import Logo from "../../../img/header_logo.png";
import SidebarButton from "../../../img/sidebar_button.png";
import Notification from "../../../img/bell_3.png";
import AvatarImg from "../../../img/thu_1.png";

const TopNav = () => {
  const [value, setValue] = React.useState("en");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <NavBar>
      <div className="header">
        <div>
          <HeaderLogo src={Logo} />
        </div>
        <div className="headContent">
          <div className="headContentTop">
            <div className="sidebarButton">
              <Button>
                <Icon src={SidebarButton} />
              </Button>
            </div>
            <div className="headContentRight">
              <Icon src={Notification} />
              <SelectList value={value} onChange={handleChange}>
                <MenuItem value="en" selected="selected">
                  ENGLISH
                </MenuItem>
                <MenuItem value="vi">VIETNAMESE</MenuItem>
              </SelectList>
              <Avatar src={AvatarImg} variant="rounded" />
            </div>
          </div>
          <div className="headContentBottom">
          {/* <div className="listItemRight">
            <SubItem exact to="/">
              Week
            </SubItem>
            <SubItem to="/day">Day</SubItem>
            <SubItem to="/month">Month</SubItem>
          </div> */}
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default TopNav;
