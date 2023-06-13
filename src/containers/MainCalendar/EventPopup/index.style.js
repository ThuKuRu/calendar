import styled from "styled-components";

const Container = styled.div`
  .popup {
    height: 40vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 10px;
    font-family: "Roboto";
    border: 1px solid #eff0f6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    .colorHeading {
      background-color: #2d7fe0;
      height: 44px;
      width: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .content {
      display: flex;
      padding: 10px;
      height: 100%;
      flex-direction: column;
      .header {
        color: #303f9f;
        font-size: 27px;
        font-weight: semi-bold;
        display: flex;
        margin-bottom: 10px;
      }
      .time {
        margin-bottom: 10px;
      }
    }
  }
`;

export { Container };
