import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #000000;
  border-radius: 20px;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto";
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .avatar {
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
  .joinButton {
    width: 30%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin-bottom: 1vh;
    cursor: pointer;
  }
`;

export { Container };