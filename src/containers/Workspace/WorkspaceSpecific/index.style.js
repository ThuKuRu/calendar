import styled from "styled-components";

const WorkspaceSpecificStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  border: 0.0625rem solid #000000;
  border-radius: 0.3125rem;
  width: 100%;
  height: 90%;
  .header {
    margin-top: 5px;
    display: flex;
    .backWorkspace {
      margin-left: 10px;
      width: 100%;
      cursor: pointer;
      font-size: clamp(1.2rem, 1.5625vw, 1.875rem);
      color: #6c757d;
      font-family: "Roboto";
      span {
        margin-right: 0.5em;
        cursor: pointer;
      }
    }
    .headerRight {
      display: flex;
      margin-right: 10px;
      justify-content: flex-end;
      .leaveWorkspace {
        width: 100%;
        display: flex;
        .leaveButton {
          background-color: #d6d6d6;
          border-radius: 10px;
          margin-top: 7px;
          margin-right: 4px;
          padding: 2px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
      .settingWorkspace {
        width: 100%;
        display: flex;
        .settingButton {
          background-color: #d6d6d6;
          border-radius: 10px;
          margin-top: 7px;
          margin-right: 4px;
          padding: 2px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }
  }
  .specific {
    display: flex;
    width: 99%;
    margin-top: 10px;
    .specificLeft {
      display: flex;
      flex: 5;
      margin-left: 15px;
      flex-direction: column;
      .specific-team {
        display: flex;
        width: 100%;
        .specific-avatar {
          margin-right: 30px;
          border-radius: 1em;
          .avatar-team {
            border-radius: 1em;
          }
        }
        .specific-name {
          display: flex;
          flex-direction: column;
          .name {
            margin: 0px;
            p {
              font-weight: 900;
              font-size: 36px;
              margin: 0px 0px 10px 0px;
            }
          }
          .description {
            display: flex;
            background-color: #d9d9d9;
            width: 54vw;
            height: 16vh;
            border-radius: 1em;

            p {
              padding: 10px;
              margin: 0px;
            }
          }
        }
      }
      .specific-task {
        display; flex;
        width: 65vw;
        margin-left: -10px;
        .table {
          width: 100%;
          display: flex;
          font-size: 16px;
          height: 28px;
          border-bottom: 2px solid #ccc;
          align-items: baseline;
          justify-content: center;
          padding: 5px 0px 5px 50px;
          text-align: center;
          align-items: center;
          .col {
            display: flex;
            align-items: center;
            text-align: center;
            flex: 1;
            margin-left: -30px;
            margin-right: 30px;
            span {
              height: 24px;
              margin-right: 5px;
            }
            p {
              text-align: center;
              height: 24px;
              font-size: 18px;
              align-items: center;
              margin: 0px 0px 0px 5px;
            }
            .name {
              font-size: 20px;
              font-weight: 600;
            }
            .avatar {
              height: 25px;
              width: 25px;
              border-radius: 50%;
              margin-right: 5px;
            }
            .done {
              background-color: #00ff00;
              padding: 1px 15px 0;
              border-radius: 20px;
            }
            .level {
              padding: 1px 20px 0;
              border-radius: 20px;
            }
            .sort {
              margin-left: 5px;
              cursor: pointer;
            }

            .check {
              height: 24px;
              width: 24px;
            }

            .delete {
              cursor: pointer;
              margin-left: 5px;
            }
            .percent {
              display: flex;
              justify-content: flex-start;
              width: 120px;
              height: 24px;
              border-radius: 1em;
              border: 1px solid #ccc;
              padding: 0px;
            }
          }
        }
      }
      .buttons {
        margin-top: 10px;
        margin-right: 10px;
        display: flex;
        justify-content: flex-end;
        .add-button {
          margin-left: 10px;
          height: 22px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background-color: #2d7fe0;
          border-radius: 14px;
          color: #fff;
          font-family: "Roboto" !important;
          font-size: 20px;
          cursor: pointer;
        }
      }
    }
    .specificRight {
      display: flex;
      background-color: #d9d9d9;
      border-radius: 1em;
      flex: 1;
      flex-direction: column;
      justify-content: flex-start;
      height: 72vh;
      .owner {
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        p {
          font-family: "Roboto" !important;
          font-size: 25px;
          font-weight: 700;
          padding: 0px;
          margin: 10px 0px;
        }
        .menbers {
          display: flex;
          .avatar {
            height: 4vh;
            width: 1.725vw;
            border-radius: 50px;
          }
          .name {
            font-family: "Roboto" !important;
            font-size: 20px;
            font-weight: 500;
            margin: 0px 10px;
          }
        }
      }
      .participants {
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        p {
          font-family: "Roboto" !important;
          font-size: 25px;
          font-weight: 700;
          padding: 0px;
          margin: 10px 0px;
        }
        .menbers {
          display: flex;
          margin-bottom: 10px;
          .avatar {
            height: 4vh;
            width: 1.725vw;
            border-radius: 50px;
          }
          .name {
            font-family: "Roboto" !important;
            font-size: 20px;
            font-weight: 500;
            margin: 0px 10px;
          }
        }
      }
      .add-member {
        display: flex;
        padding-left: 10px;
        margin-top: 10px;
        p {
          margin: 0;
          font-size: 18px;
          font-weight: 300;
          margin: 0px 10px;
        }
      }
    }
  }
`;

const levelColor = {
  5: "#FF0000",
  4: "#FFA500",
  3: "#FFFF00",
  2: "#1AC71A",
  1: "#00BFFF",
};

const percentToDo = {
  0: "0%",
  10: "10%",
  20: "20%",
  30: "30%",
  40: "40%",
  50: "50%",
  60: "60%",
  70: "70%",
  80: "80%",
  90: "90%",
};

const Color = styled.p`
  padding: 1px 25px 0;
  border-radius: 20px;
  background-color: ${({ value }) => levelColor[value]};
`;

const Percent = styled.p`
  display: flex;
  background-color: #2d7fe0;
  height: 24px;
  border-radius: 1em;
  margin: 0px !important;
  width: ${({ percent }) => percentToDo[percent]};
  text-align: center;
  justify-content: center;
  .percentContent {
    font-size: 10px;
    color: #fff;
    font-weight: 600;
  }
`;

const Img = styled.img`
  text-align: center;
  align-items: center;
  height: 24px;
  width: 22px;
`;

export { WorkspaceSpecificStyle, Color, Percent, Img };
