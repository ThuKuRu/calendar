import React from "react";
import TopNav from "./TopNav/TopNav";
import SideBar from "./SideBar/SideBar";
import Main from "./Main/Main";
import { LayOut } from "./index.style";

const Layout = () => {
  return (
    <LayOut>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="rightContent">
        <TopNav />
        <Main />
      </div>
    </LayOut>
  );
};

export default Layout;
