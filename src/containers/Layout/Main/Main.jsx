import React from "react";
import { Content } from "./index.style";

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
            <a href="/#">Month</a>
          </button>
          <button type="button" className="nav">
            <a href="/#">Week</a>
          </button>
          <button type="button" className="nav">
            <a href="/#">Day</a>
          </button>
        </div>
      </div>
    </Content>
  );
};

export default Main;
