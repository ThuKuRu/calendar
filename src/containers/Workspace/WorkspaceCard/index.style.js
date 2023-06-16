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
      margin-top: 0.4375em;
      margin-right: 0.25em;
      padding: 0.125em;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: clamp(0.625rem, 1.06vw, 0.875rem);
    }
  }
  font-family: "Roboto";
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .avatar {
      margin-top: 10%;
      margin-bottom: 1%;
      height: 2vw;
      border-radius: 50px;
    }
    .name {
      font-size: clamp(1rem, 1.3vw, 1.5625rem);
      font-weight: bold;
      margin-bottom: 1%;
    }
    .teamMems {
      display: flex;
      .avatar {
        margin-left: -0.5vw;
        height: 2vw;
      }
      .leftover {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #d9d9d9;
        font-weight: bold;
        width: 2vw;
      }
    }
  }
`;

export { Container };
