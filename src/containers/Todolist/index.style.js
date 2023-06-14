import styled from "styled-components";
const levelColor = {
  5: "#FF0000",
  4: "#FFA500",
  3: "#FFFF00",
  2: "#1AC71A",
  1: "#00BFFF",
};

const percentToDo = {
  0: "0%",
  10: "10%",
  20: "20%",
  30: "30%",
  40: "40%",
  50: "50%",
  60: "60%",
  70: "70%",
  80: "80%",
  90: "90%",
};

const Color = styled.p`
  padding: 1px 25px 0;
  border-radius: 20px;
  background-color: ${({ value }) => levelColor[value]};
`;

const Percent = styled.p`
  display: flex;
  background-color: #2d7fe0;
  height: 24px;
  border-radius: 1em;
  margin: 0px !important;
  width: ${({ percent }) => percentToDo[percent]};
  text-align: center;
  justify-content: center;
  .percentContent {
    font-size: 10px;
    color: #fff;
    font-weight: 600;
  }
`;

const TodolistStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .headerContent {
      display: flex;
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
    margin-left: 10px;
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
      }
      .sort {
        margin-left: 5px;
        cursor: pointer;
      }

      .check {
        height: 24px;
        width: 24px;
      }

      .delete {
        cursor: pointer;
        margin-left: 5px;
      }
      .percent {
        display: flex;
        justify-content: flex-start;
        width: 120px;
        height: 24px;
        border-radius: 1em;
        border: 1px solid #ccc;
        padding: 0px;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    .createDiv {
      display: flex;
      align-items: center;
      margin-left: 20px;
      margin-top: 10px;
      .createButton {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-family: "Roboto" !important;
        font-size: 20px;
        cursor: pointer;
        font-weight: 600;
        .create {
          background-color: #2d7fe0;
          padding: 10px 20px;
          border-radius: 14px;
        }
        .fill {
          background-color: #d9d9d9;
          padding: 10px 20px;
          border-radius: 14px;
          color: #000;
        }
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

export { TodolistStyle, Img, Color, Percent };
