import React from "react";
import { Sidebar, HeaderLogo } from "./index.style";
import Logo from "../../../img/header_logo.png";

const SideBar = () => {
  return (
    <Sidebar>
      <div className="headLogo">
        <HeaderLogo src={Logo} />
      </div>
    </Sidebar>
  );
};

export default SideBar;
