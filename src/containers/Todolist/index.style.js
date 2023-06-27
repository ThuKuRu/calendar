import styled from "styled-components";
const levelColor = {
  Critical: "#FF0000",
  High: "#FFA500",
  Medium: "#FFFF00",
  Low: "#1AC71A",
  Optional: "#00BFFF",
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
    if (value === "Critical") return "#ffffff";
  }};
`;

const TodolistStyle = styled.div`
  --hover: #1849aa;
  display: flex;
  flex-direction: column;
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
      .priorityItems {
        min-width: 4rem;
        text-align: center;
      }
      span {
        margin-right: 0.3125em;
      }
      p {
        text-align: left;
        font-size: clamp(0.8rem, 0.93vw, 1.125rem);
        align-items: center;
        margin: 0px 0px 0px 0.3125em;
      }
      .name {
        font-size: clamp(1rem, 1.04vw, 1.4rem);
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
        margin-left: 2em;
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
      .edit {
        cursor: pointer;
        margin-left: 1em;
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
        padding: 0px;
      }
      .uneditable {
        margin-left: 1em;
        opacity: 0.5;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    .fillDiv {
      display: flex;
      margin-top: 1em;
      padding: 0 1em;
      margin-right: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:focus {
        box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
        transform: translateY(-0.25em);
      }
      &:hover {
        box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
        border-radius: 0.75em;
        transform: translateY(-0.25em);
        color: #004796;
      }
    }
    .createDiv {
      display: flex;
      align-items: center;
      .createButton {
        margin-top: 1em;
        padding: 0 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #2d7fe0;
        color: #ffffff;
        font-size: clamp(0.8rem, 1vw, 1.25rem);
        cursor: pointer;
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
    }
  }
`;

const Img = styled.img`
  text-align: center;
  align-items: center;
  height: 24px;
  width: 22px;
`;

export { TodolistStyle, Img, Color };
