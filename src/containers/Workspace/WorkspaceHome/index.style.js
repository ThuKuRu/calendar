import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  .header {
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    .headerText {
      font-size: 30px;
      color: #6c757d;
      font-family: "Roboto";
    }
    .joinButton {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60%;
      padding: 5px 10px;
      border: 1px solid #000;
      cursor: pointer;
      .joinText {
        font-size: 25px;
        font-family: "Roboto";
        font-weight: semibold;
      }
      span {
        margin-right: 10px;
      }
    }
  }
  .main {
    height: 90%;
    display: flex;
  }
`;

export { Container };
