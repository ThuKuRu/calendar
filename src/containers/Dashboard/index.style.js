import styled from "styled-components";

const DashBoard = styled.div`
  .container {
    display: grid;
    grid-template-columns: 35% 65%;
    gap: 1em 2em;
    padding: 0.5em 2em 0 2em;

    .upComingTask {
      background-color: #76bdff;
      border-radius: 2.25rem;
      border: 1px solid #b7b7b7;
      box-shadow: 1px 5px 5px #aaaa;
      .upComingTask-top {
        display: flex;
        justify-content: space-between;
        margin: 0.5em 0.7em;
        .taskStatus {
          font-size: claim(0.75rem, 1.25rem, 3rem);
          background-color: #2d7fe0;
          color: white;
          width: 50%;
          border-radius: 12px;
          padding: 5px 10px;
          text-align: center;
        }
        .upComingTaskDate {
          align-items: center;
        }
      }
      .upComingTaskNoti {
        margin-left: 0.5em;
        .upComingTaskNotify {
          display: flex;
          align-items: center;
          width: 60%;
          margin-top: 1.25rem;
          font-size: claim(0.75rem, 1.25rem, 3rem);
          img {
            border-radius: 50%;
            width: 2em;
            margin-right: 3%;
          }
        }
        .upComingTaskNotifyDes {
          width: 60%;
          margin-top: 0.625rem;
          font-size: claim(0.75rem, 0.75rem, 3rem);
        }
      }

      .upComingTaskMember {
        display: flex;
        flex-direction: row;
        margin: 1.6rem 0 1.6rem 0.5rem;

        img {
          border-radius: 50%;
          width: 2em;
          height: 2em;
          margin-right: 3%;
          fon-size: 1.5rem;
        }
        .afterImg {
          margin-left: -5%;
        }
        .numberMore {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2.25rem;
          height: 2.25rem;
          background-color: #d9d9d9;
          border-radius: 50%;
          font-weight: bold;
          font-size: claim(0.75rem, 1.25rem, 3rem);
          margin-left: -5%;
        }
      }
    }
    .bottomRightDashContainer {
      display: grid;
      grid-template-columns: 45% 45%;
      gap: 1em 2em;
      padding: 0.5em 2em 0 2em;
      .upNextComingTask {
        background-color: #8af;
        border-radius: 36px;
        border: 1px solid #b7b7b7;
        box-shadow: 1px 5px 5px #aaaa;
        border-radius: 2.25rem;
        border: 1px solid #b7b7b7;
        box-shadow: 1px 5px 5px #aaaa;
        .upComingTask-top {
          display: flex;
          justify-content: space-between;
          margin: 0.5em 0.7em;
          .taskStatus {
            font-size: claim(0.75rem, 1.25rem, 3rem);
            background-color: #2d7fe0;
            color: white;
            width: 50%;
            border-radius: 12px;
            padding: 5px 10px;
            text-align: center;
          }
          .upComingTaskDate {
            align-items: center;
          }
        }
        .upComingTaskNotify {
          display: flex;
          align-items: center;
          width: 60%;
          font-size: claim(0.75rem, 1.25rem, 3rem);
          margin-left: 0.5rem;
          img {
            border-radius: 50%;
            width: 2em;
            margin-right: 3%;
          }
        
      }
    }
  }
`;

export { DashBoard };
