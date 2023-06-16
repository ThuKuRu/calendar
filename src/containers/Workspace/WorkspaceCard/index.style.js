import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #000000;
  border-radius: 20px;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .leaveWorkspace {
    width: 100%;
    display: flex;
    justify-content: flex-end;
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
  font-family: "Roboto";
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    .avatar {
      margin-top: 10%;
      margin-bottom: 1%;
      height: 4vh;
      border-radius: 50px;
    }
    .name {
      font-size: 23px;
      font-weight: bold;
      margin-bottom: 1%;
    }
    .teamMems {
      display: flex;
      .avatar {
        margin-left: -0.5vw;
        height: 4vh;
        width: 2vw;
      }
      .leftover {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #d9d9d9;
        font-weight: bold;
        width: 4vh;
      }
    }
  }
`;

export { Container };
