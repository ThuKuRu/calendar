import styled from "styled-components";

const DoingStyle = styled.div`
  flex-direction: column;
  width: 100%;
  .specific-task {
    padding: 1em;
    height: 100%;
    width: 100%;
    margin-left: -20px;
    .table {
      width: 100%;
      display: flex;
      font-size: clamp(0.83rem, 0.83vw, 1rem);
      border-bottom: 2px solid #ccc;
      align-items: baseline;
      justify-content: center;
      padding: 0.3125em 0 0.3125em 3.125em;
      text-align: center;
      align-items: center;
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
        .percent {
          display: flex;
          justify-content: flex-start;
          width: clamp(5em, 6.25vw, 7.5em);
          border-radius: 1em;
          padding: 0px;
          margin-right: 0.5em;
          .slider {
            height: 0.5em;
          }
        }

        .doing {
          display: flex;
          padding: 0.0625em 1.5625em 0;
          background-color: #1ac71a;
          border-radius: 20px;
          margin-left: 1em;
        }
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .add-button {
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
`;

const levelColor = {
  Critical: "#FF0000",
  High: "#FFA500",
  Medium: "#FFFF00",
  Low: "#1AC71A",
  Optional: "#00BFFF",
};

const Color = styled.p`
  padding: 0.0625em 1.5625em 0;
  border-radius: 20px;
  background-color: ${({ value }) => levelColor[value]};
  color: ${({ value }) => {
    if (value === "5") return "#ffffff";
  }};
`;

const Img = styled.img`
  text-align: center;
  align-items: center;
  height: 24px;
  width: 22px;
`;

export { DoingStyle, Color, Img };
