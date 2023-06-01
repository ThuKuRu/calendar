import React from "react";
import { Content } from "./index.style";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Month from "../../Month/Month";
import Week from "../../Week/Week";
import Day from "../../Day/Day";


const Main = () => {
  return (
    <Content>
      <div className="navigate">
        <div className="navigateLeft">
          <div>
            <button type="button" className="nav">
              &lt;
            </button>
          </div>
          <button type="button" className="nav">
            Today
          </button>
          <div>
            <button type="button" className="nav">
              &gt;
            </button>
          </div>
        </div>
        <div className="navigateRight">

          <button type="button" className="nav">
            <a href="/">Month</a>
          </button>
          <button type="button" className="nav">
            <a href="/week">Week</a>
          </button>
          <button type="button" className="nav">
            <a href="/day">Day</a>
          </button>
          

          <div className="content">
            {/* <BrowserRouter>
              <Routes>
              <Route path="/month" element={<Month title='Month' /> } />
              <Route path="/week" element={<Week title='Week' /> } />
              <Route path="/day" element={<Day title='Day' /> } />
              </Routes>
            </BrowserRouter> */}
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Main;
