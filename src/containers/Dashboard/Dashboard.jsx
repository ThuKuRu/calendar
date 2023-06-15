import React from "react";
import { DashBoard } from "./index.style";
import MiniCalendar from "../Layout/SideBar/MiniCalendar/MiniCalendar.jsx";
import t1img from "../../img/t1img.png";
import user2 from "../../img/user2.jpg";
import user3 from "../../img/user3.jpg";
import AvatarImg from "../../img/thu_1.png";

const Dashboard = () => {
  return (
    <DashBoard>
      <div className="container">
        <div className="miniCal">
          <MiniCalendar />
        </div>
        <div className="topRightDash">BBBBB</div>
        <div className="upComingTask">
          <div className="upComingTask-top">
            <div className="taskStatus">Upcoming Task</div>
            <div className="upComingTaskDate">Dec 7 2PM</div>
          </div>
          <div className="upComingTaskNoti">
            <div className="upComingTaskNotify">
              <img src={t1img} />
              UIUX DESIGN
            </div>
            <div className="upComingTaskNotifyDes">
              Time to practice UI/UX. Hurry up or you will be punish~~~
            </div>
          </div>

          <div className="upComingTaskMember">
            <img src={AvatarImg} />
            <img className="afterImg" src={user2} />
            <img className="afterImg" src={user3} />
            <div className="numberMore">+3</div>
          </div>
        </div>
        <div className="bottomRightDashContainer">
          <div className="upNextComingTask">
            <div className="upComingTask-top">
              <div className="taskStatus">Upcoming Task</div>
              <div className="upComingTaskDate">Dec 7 2PM</div>
            </div>
          </div>
          <div className="upNextComingTask">
            <div className="upComingTask-top">
              <div className="taskStatus">Upcoming Task</div>
              <div className="upComingTaskDate">Dec 7 2PM</div>
            </div>
          </div>
          <div className="upNextComingTask">
            <div className="upComingTask-top">
              <div className="taskStatus">Upcoming Task</div>
              <div className="upComingTaskDate">Dec 7 2PM</div>
            </div>
          </div>
          <div className="upNextComingTask">
            <div className="upComingTask-top">
              <div className="taskStatus">Upcoming Task</div>
              <div className="upComingTaskDate">Dec 7 2PM</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="containerH">
        <div className="top-container">
          <div className="miniCal">
            <MiniCalendar />
          </div>
          <div className="graph"></div>
        </div>
        <div className="bottom-container">
          
        </div>
      </div> */}
    </DashBoard>
  );
};

export default Dashboard;
