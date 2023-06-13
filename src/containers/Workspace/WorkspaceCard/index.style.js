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
    .avatar {
      margin-top: 10%;
      margin-bottom: 10%;
    }
    .name {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 5%;
    }
  }
`;

export { Container };
