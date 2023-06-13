import styled from "styled-components";

const levelColor = {
  5: "#FF0000",
  4: "#FFA500",
  3: "#FFFF00",
  2: "#1AC71A",
  1: "#00BFFF",
};

const TodolistStyle = styled.div`
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .headerContent {
      display: flex;
    }
    .createDiv {
      display: flex;
      align-items: center;
      .createButton {
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background-color: #2d7fe0;
        border-radius: 5px;
        color: #ffffff;
        font-family: "Roboto" !important;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  .table {
    display: flex;
    width: 95%;
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
        background-color: ${({ value }) => levelColor[value]};
      }
      .sort {
        margin-left: 5px;
      }

      .check {
        height: 24px;
        width: 24px;
      }
    }
  }
`;

const Img = styled.img`
  text-align: center;
  align-items: center;
  height: 24px;
  width: 22px;
`;

export { TodolistStyle, Img };
