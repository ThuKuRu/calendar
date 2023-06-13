import styled from "styled-components";

const DashBoard = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    .top-container {
      .miniCal {
        margin-left: 5%;
      }
    }
    .bottom-container {
      .upComingTask {
        width: 30%;
        background-color: #ffcdff;
        margin-left: 5%;
        margin-top: 3%;
        padding: 10px 20px;

        .upComingTask-top {
          display: flex;
          justify-content: space-between;
          .taskStatus {
            background-color: #2d7fe0;
            color: white;
            width: 30%;
            border-radius: 12px;
            padding: 5px 10px;
            text-align: center;
          }
          .upComingTaskDate {
            align-items: center;
            font-size: 20px;
          }
        }
        .upComingTaskNotify {
          display: flex;
          align-items: center;
          width: 60%;
          margin-top: 15%;
          font-size: 20px;
          img {
            border-radius: 50%;
            width: 35px;
            margin-right: 3%;
          }
        }
        .upComingTaskNotifyDes {
          margin-top: 5%;
        }
        .upComingTaskMember {
          margin-top: 20%;
          margin-bottom: 5%;
          display: flex;

          img {
            border-radius: 50%;
            width: 35px;
            height: 35px;
            margin-right: 3%;
          }
          .afterImg {
            margin-left: -5%;
          }
          .numberMore {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35px;
            height: 35px;
            background-color: #d9d9d9;
            border-radius: 50%;
            font-weight: bold;
            font-size: 20px;
            margin-left: -5%;
          }
        }
      }
    }
  }
`;

export { DashBoard };
