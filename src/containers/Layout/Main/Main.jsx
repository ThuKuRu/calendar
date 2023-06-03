import React, { useState } from "react";
import { Content } from "./index.style";
import Month from "../../Month/Month";
import Week from "../../Week/Week";
import Day from "../../Day/Day";

const Main = () => {
  const [active, setActive] = useState("month");

  return (
    <Content>
      <div className="navigate">
        <div className="navigateLeft">
          <button type="button" className="nav">
            &lt;
          </button>
          <button type="button" className="nav">
            Today
          </button>
          <button type="button" className="nav">
            &gt;
          </button>
        </div>
        <div className="navigateRight">
          <button
            type="button"
            className="nav"
            onClick={() => setActive("month")}
          >
            Month
          </button>
          <button
            type="button"
            className="nav"
            onClick={() => setActive("week")}
          >
            Week
          </button>
          <button
            type="button"
            className="nav"
            onClick={() => setActive("day")}
          >
            Day
          </button>
        </div>
      </div>
      <div className="content">
        {active === "month" && <Month />}
        {active === "week" && <Week />}
        {active === "day" && <Day />}
      </div>
    </Content>
  );
};

export default Main;
