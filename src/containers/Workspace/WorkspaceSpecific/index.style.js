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
      .buttons {
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
    }
  }
`;

export { WorkspaceSpecificStyle };
