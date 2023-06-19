import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  .header {
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.875em;
    .headerText {
      font-size: clamp(1.2rem, 1.5625vw, 1.875rem);
      color: #6c757d;
    }
    .joinButton {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.8em 0.625em;
      background-color: #2d7fe0;
      border-radius: 0.75em;
      padding: 0.3125em 0.625em;
      color: #fff;
      cursor: pointer;
      font-size: clamp(1rem, 1.3vw, 1.5625rem);
      .joinText {
        font-weight: semi-bold;
      }
      span {
        margin-right: 0.625em;
      }
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
  .main {
    over-flow: auto !important;
    display: grid;
    gap: 3.125em 8%;
    padding: 1.5625em 4%;
    grid-template-columns: 19% 19% 19% 19%;
    .workspaceComponent-create {
      border: 1px dashed #000000;
      border-radius: 20px;
      height: 25vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .logo {
        cursor: pointer;
      }
      span {
        font-size: 1.875em;
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
      .createText {
        font-size: clamp(1rem, 1.3vw, 1.5625rem);
        font-weight: bold;
        margin-top: 0.625em;
        margin-bottom: 0.3125em;
        text-align: center;
      }
      .eg {
        font-size: clamp(0.64rem, 0.83vw, 1rem);
        color: #828388;
        text-align: center;
      }
    }
  }
`;

export { Container };
