import React from "react";
import { DashBoard } from "./index.style";
import MiniCalendar from "../Layout/SideBar/MiniCalendar/MiniCalendar.jsx";
import t1img from "../../img/t1img.png";
import user2 from "../../img/user2.jpg";
import user3 from "../../img/user3.jpg";
import AvatarImg from "../../img/thu_1.png";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "January", Total: 120 },
  { name: "February", Total: 51 },
  { name: "March", Total: 80 },
  { name: "April", Total: 160 },
  { name: "May", Total: 90 },
  { name: "June", Total: 170 },
];
const Dashboard = () => {
  return (
    <DashBoard>
      <div className="container">
        <div className="miniCal">
          <MiniCalendar />
        </div>
        <div className="topRightDash">
          <div className="chart">
            <div className="title">Last 6 Months (Task Completed)</div>
            <ResponsiveContainer width="90%" aspect={2.4 / 1}>
              <AreaChart
                width={730}
                height={200}
                data={data}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#76BDFF" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#76BDFF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="gray" />
                <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Total"
                  stroke="#76BDFF"
                  fillOpacity={1}
                  fill="url(#total)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="upComingTask">
          <div className="upComingTask-top">
            <div className="taskStatus">Upcoming Task</div>
            <div className="upComingTaskDone">
              <span class="material-symbols-outlined">done_outline</span>
            </div>
          </div>

          <div className="upComingTaskNoti">
            <div className="upComingTaskNotify">
              <img src={t1img} />
              UIUX DESIGN
              <div className="upComingTaskDate">Dec 7 2PM</div>
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
              <div className="upComingTaskDone">
                <span class="material-symbols-outlined">done_outline</span>
              </div>
            </div>
            <div className="upComingTaskNotify">
              <img src={t1img} />
              UIUX DESIGN
              <div className="upComingTaskDate">Dec 7 2PM</div>
            </div>
          </div>
          <div className="upNextComingTask">
            <div className="upComingTask-top">
              <div className="taskStatus">Upcoming Task</div>
              <div className="upComingTaskDone">
                <span class="material-symbols-outlined">done_outline</span>
              </div>
            </div>
            <div className="upComingTaskNotify">
              <img src={t1img} />
              UIUX DESIGN
              <div className="upComingTaskDate">Dec 7 2PM</div>
            </div>
          </div>
          <div className="upNextComingTask">
            <div className="upComingTask-top">
              <div className="taskStatus">Upcoming Task</div>
              <div className="upComingTaskDone">
                <span class="material-symbols-outlined">done_outline</span>
              </div>
            </div>
            <div className="upComingTaskNotify">
              <img src={t1img} />
              UIUX DESIGN
              <div className="upComingTaskDate">Dec 7 2PM</div>
            </div>
          </div>
          <div className="upNextComingTask">
            <div className="upComingTask-top">
              <div className="taskStatus">Upcoming Task</div>
              <div className="upComingTaskDone">
                <span class="material-symbols-outlined">done_outline</span>
              </div>
            </div>
            <div className="upComingTaskNotify">
              <img src={t1img} />
              UIUX DESIGN
              <div className="upComingTaskDate">Dec 7 2PM</div>
            </div>
          </div>
        </div>
      </div>
    </DashBoard>
  );
};

export default Dashboard;
