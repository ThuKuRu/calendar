import React, { useState } from "react";
import { Content } from "./index.style";
import Month from "../../Month/Month";
import Week from "../../Week/Week";
import Day from "../../Day/Day";

const Main = () => {
  const [active, setActive] = useState("month");

  return (
    <Content>
      <div className="content">
        <Week />
      </div>
    </Content>
  );
};

export default Main;
