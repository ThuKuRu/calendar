import React from "react";
import TopNav from "./TopNav/TopNav";
import SideBar from "./SideBar/SideBar";
import Main from "./Main/Main";

const Layout = () => {
  return (
    <div>
      <TopNav />
      <Main />
      <SideBar />
    </div>
  );
};

export default Layout;
