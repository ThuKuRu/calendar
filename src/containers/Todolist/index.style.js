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
  padding: 0.0625em 1.5625em 0;
  border-radius: 20px;
  background-color: ${({ value }) => levelColor[value]};
  color: ${({ value }) => {
    if (value === "5") return "#ffffff";
  }};
`;

const Percent = styled.p`
  display: flex;
  background-color: #2d7fe0;
  border-radius: 1em;
  margin: 0px !important;
  width: ${({ percent }) => percentToDo[percent]};
  text-align: center;
  justify-content: center;
  padding: 0.24em 0;
  .percentContent {
    font-size: clamp(0.53rem, 0.53vw, 0.625rem);
    color: #fff;
    font-weight: 600;
  }
`;

const TodolistStyle = styled.div`
  --hover: #1849aa;
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
    font-size: clamp(0.83rem, 0.83vw, 1rem);
    border-bottom: 2px solid #ccc;
    align-items: baseline;
    justify-content: center;
    padding: 0.3125em 0 0.3125em 3.125em;
    text-align: center;
    align-items: center;
    margin-left: 0.6125em;
    .col {
      display: flex;
      align-items: center;
      text-align: center;
      flex: 1;
      span {
        margin-right: 0.3125em;
      }
      p {
        text-align: center;
        font-size: clamp(0.9375rem, 0.9375vw, 1.125rem);
        align-items: center;
        margin: 0px 0px 0px 0.3125em;
      }
      .name {
        font-size: clamp(1.04rem, 1.04vw, 1.4rem);
        font-weight: 600;
      }
      .avatar {
        height: 1.5625em;
        width: 1.5625em;
        border-radius: 50%;
        margin-right: 0.3125em;
      }
      .done {
        background-color: #00ff00;
        padding: 0.0625em 0.9375em 0;
        border-radius: 20px;
      }
      .sort {
        margin-left: 0.3125em;
        cursor: pointer;
        &:focus {
          transform: translateY(-0.25em);
          color: #2d7fe0;
        }
        &:hover {
          border-radius: 0.75em;
          transform: translateY(-0.25em);
          color: #2d7fe0;
        }
      }

      .delete {
        cursor: pointer;
        margin-left: 0.3125em;
        &:focus {
          transform: translateY(-0.25em);
          color: #2d7fe0;
        }
        &:hover {
          border-radius: 0.75em;
          transform: translateY(-0.25em);
          color: #2d7fe0;
        }
      }
      .percent {
        display: flex;
        justify-content: flex-start;
        width: clamp(5em, 6.25vw, 7.5em);
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
        .create {
          background-color: #2d7fe0;
          padding: 10px 20px;
          border-radius: 0.75em;
          &:focus {
            box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
            transform: translateY(-0.25em);
          }
          &:hover {
            box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
            border-radius: 0.75em;
            transform: translateY(-0.25em);
            background-color: #004796;
          }
        }
        .fill {
          background-color: #d9d9d9;
          padding: 10px 20px;
          border-radius: 0.75em;
          color: #000;
          &:focus {
            box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
            transform: translateY(-0.25em);
            background-color: #2d7fe0;
            color: #fff;
          }
          &:hover {
            box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
            border-radius: 0.75em;
            transform: translateY(-0.25em);
            background-color: #2d7fe0;
            color: #fff;
          }
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
