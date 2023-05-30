import React from "react";
// import { Route } from "react-router-dom";
import TopNav from "./TopNav/TopNav";
import SideBar from "./SideBar/SideBar";
// import Week from "../Week/Week";
// import Day from "../Day/Day";
// import Month from "../Month/Month";
import { Frame } from "./index.style";

const Layout = () => {
  return (
    <div>
      <TopNav />
      <div className="main">
        <SideBar />
        {/* <div className="Content">
          <Route exact path="/" component={Week} />
          <Route exact path="/day" component={Day} />
          <Route exact path="/month" component={Month} />
        </div> */}
      </div>
    </div>
  );
};

export default Layout;
