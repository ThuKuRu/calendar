import React, { useState } from "react";
import TopNav from "./TopNav/TopNav";
import SideBar from "./SideBar/SideBar";
import Main from "./Main/Main";
import { LayOut } from "./index.style";

const Layout = () => {
  const [tab, setTab] = useState("dashboard");

  return (
    <LayOut>
      <div className="sidebar">
        <SideBar setTab={setTab} />
      </div>
      <div className="rightContent">
        <TopNav />
        <Main tab={tab} />
      </div>
    </LayOut>
  );
};

export default Layout;
