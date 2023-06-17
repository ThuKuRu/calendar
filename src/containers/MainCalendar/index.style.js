import styled from "styled-components";

const Container = styled.div`
  --hover: #1849aa;
  width: 100%;
  height: 95%;
  font-family: "Roboto" !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .rbc-calendar {
    border: 0.0625rem solid #000000;
    border-radius: 0.3125rem;
    width: 100%;
    height: 90%;
    button {
      font-family: "Roboto" !important;
      font-size: clamp(0.8rem, 1.3vw, 1.5625rem);
    }
    .rbc-button-link {
      &:focus {
        box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
        transform: translateY(-0.25em);
      }
      &:hover {
        box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
        border-radius: 0.75em;
        transform: translateY(-0.25em);
        color: #2d7fe0;
      }
    }
    .rbc-toolbar {
      border-bottom: 0.0625rem solid #000000;
      padding: 0.625rem;
      button {
        font-size: clamp(0.8rem, 0.625vw, 1.5625rem);
      }
      .rbc-toolbar-label {
        font-size: clamp(0.8rem, 1vw, 1.25rem);
        font-weight: bold !important;
      }
      .rbc-btn-group {
        button {
          color: #7367f0;
          border: 0.0625rem solid #696cff;
        }
        .rbc-active {
          background-color: rgba(104, 93, 216, 0.2);
        }
      }
    }
    .rbc-show-more {
      font-size: 1rem;
      color: #6e6b7b;
    }
    .rbc-month-view {
      .rbc-header {
        padding: 0.25em;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: clamp(0.8rem, 0.73vw, 0.875rem);
        button {
          font-size: clamp(0.8rem, 0.73vw, 0.875rem);
          font-weight: bold;
        }
      }
    }
    .rbc-time-view {
      max-height: 70vh;
      .rbc-header {
        padding: 0.25em;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: clamp(0.8rem, 0.73vw, 0.875rem);
        button {
          font-size: clamp(0.8rem, 0.73vw, 0.875rem);
          font-weight: bold;
        }
      }
    }
    .rbc-events-container {
      width: 100%;
    }
    .rbc-event {
      background-color: #2d7fe0;
      padding: 0.3125em;
      border-radius: 4px;
      font-size: clamp(0.8rem, 0.73vw, 0.875rem);
      color: #fff;
      .rbc-event-label {
        display: none !important;
      }
      .rbc-event-content {
        padding: 0.3125em 0px;
      }
      &:focus {
        box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
        transform: translateY(-0.25em);
      }
      &:hover {
        box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
        border-radius: 0.25em;
        transform: translateY(-0.25em);
        background-color: #004796;
      }
    }
  }
  .createDiv {
    display: flex;
    justify-content: flex-end;
    .createButton {
      margin-top: 1em;
      padding: 0 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #2d7fe0;
      border-radius: 14px;
      color: #ffffff;
      font-family: "Roboto" !important;
      font-size: clamp(0.8rem, 1vw, 1.25rem);
      cursor: pointer;
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
export { Container };
