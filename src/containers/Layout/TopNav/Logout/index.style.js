import styled from "styled-components";

const LogoutStyle = styled.div`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  width: 300px;
  position: relative;
  right: 145px;
  top: -5px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  padding: 10px;
  margin-top: 0.3em;
  border-radius: 1em;
  background-color: #fff;
  box-shadow: 1px 5px 5px #aaaa;
  .user {
    display: flex;
    border-bottom: 2px solid #ccc;
    width: 295px;
    padding: 0.2em 0 0.5em 0.3em;
    .userAvatar {
      height: 5vh;
      width: 2.4vw;
      border-radius: 50%;
    }
    .userName {
      margin: 0.3em 0.5em;
      font-size: 20px;
    }
  }
  .users {
    display: flex;
    width: 295px;
    font-size: 14px;
    margin: 0.3em 0;
    color: #2d7fe0;
    padding: 0.3em 0 0.6em 0.3em;
    border-bottom: 2px solid #ccc;
    cursor: pointer;
  }
  .settingWorkspace {
    width: 100%;
    display: flex;
    .settingButton {
      background-color: #d6d6d6;
      border-radius: 50px;
      margin-top: 7px;
      margin-right: 4px;
      padding: 0.3em;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    p {
      font-size: 16px;
      margin: 1em 0 0 0.2em;
    }
  }
  .leaveWorkspace {
    width: 100%;
    display: flex;
    cursor: pointer;
    .leaveButton {
      background-color: #d6d6d6;
      border-radius: 50px;
      margin-top: 7px;
      margin-right: 4px;
      padding: 0.3em;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    p {
      font-size: 16px;
      margin: 1em 0 0 0.2em;
      .logout {
        text-decoration: none;
        color: #000;
      }
    }
  }
`;

export { LogoutStyle };
