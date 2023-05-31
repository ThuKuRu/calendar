import React from "react";
import { Sidebar, HeaderLogo, CreateIcon } from "./index.style";
import Logo from "../../../img/calendar_logo.png";
import CreateIconImg from "../../../img/create_icon.png";
import MiniCalendar from "./MiniCalendar/MiniCalendar";

const SideBar = () => {
  return (
    <Sidebar>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <div className="headLogo">
        <HeaderLogo src={Logo} />
        <p>KARENDA</p>
      </div>
      <div className="createButton">
        <CreateIcon src={CreateIconImg} />
        <p className="createText">CREATE</p>
      </div>
      <div className="miniCalendar">
        <MiniCalendar>

        </MiniCalendar>
      </div>
    </Sidebar>
  );
};

export default SideBar;
