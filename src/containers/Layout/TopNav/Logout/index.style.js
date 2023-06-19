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
    cursor: pointer;
    .settingButton {
      background-color: #d6d6d6;
      border-radius: 50px;
      margin-top: 3px;
      margin-bottom: 3px;
      margin-right: 4px;
      padding: 0.3em;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    p {
      font-size: 16px;
      margin: auto 0;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  }
  .leaveWorkspace {
    width: 100%;
    display: flex;
    cursor: pointer;
    .leaveButton {
      background-color: #d6d6d6;
      border-radius: 50px;
      margin-top: 3px;
      margin-bottom: 3px;
      margin-right: 4px;
      padding: 0.3em;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    p {
      font-size: 16px;
      margin: auto 0;
      .logout {
        text-decoration: none;
        color: #000;
      }
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  .modalContent {
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
    width: 400px; /* Adjust the width as per your requirement */
    max-width: 100%;
  }
  h2 {
    text-align: center;
  }

  .formInput {
    margin-bottom: 1rem;
    margin-right: 2rem;
  }

  .formInput label {
    display: block;
    font-weight: bold;
  }

  .formInput input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    margin-top: 2rem;
    float: right;
    display: block;
    padding: 0.5rem 1rem;
    background-color: #2d7fe0;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export { LogoutStyle, Modal };
