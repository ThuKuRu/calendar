import React from "react";
import { Sidebar, HeaderLogo, CreateButton } from "./index.style";
import Logo from "../../../img/header_logo.png";
import CreateButtonImg from "../../../img/create_button.png";
import MiniCalendar from "./MiniCalendar/MiniCalendar";

const SideBar = () => {
  return (
    <Sidebar>
      <div className="headLogo">
        <HeaderLogo src={Logo} />
      </div>
      <div className="createButton">
        <CreateButton src={CreateButtonImg} />
      </div>
      <div className="miniCalendar">
        <MiniCalendar>

        </MiniCalendar>
      </div>
    </Sidebar>
  );
};

export default SideBar;
