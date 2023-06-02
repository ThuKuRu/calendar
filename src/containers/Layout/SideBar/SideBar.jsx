import React from "react";
import { Sidebar, HeaderLogo, CreateIcon } from "./index.style";
import Logo from "../../../img/calendar_logo.png";
import CreateIconImg from "../../../img/create_icon.png";
import MiniCalendar from "./MiniCalendar/MiniCalendar";
import FormEvent from "./FormEvent/FormEvent";
import Popup from "reactjs-popup";

const SideBar = () => {
  return (
    <Sidebar>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      ></link>
      <div className="headLogo">
        <HeaderLogo src={Logo} />
        <p>KARENDA</p>
      </div>
      <div className="createButton">
        <CreateIcon src={CreateIconImg} />
        <Popup modal trigger={<p className="createText">CREATE</p>}>
          {/* <FormEvent></FormEvent> */}
          {(close) => <FormEvent close={close} />}
        </Popup>
      </div>
      <div className="miniCalendar">
        <MiniCalendar></MiniCalendar>
      </div>
    </Sidebar>
  );
};

export default SideBar;
