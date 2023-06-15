import styled from "styled-components";

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  height: 100%;
  font-family: "Roboto";
  .headLogo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.625rem 0;
    height: 4rem;
    img {
      height: 3.125rem;
      width: 3.125rem;
    }
    p {
      color: #000000;
      font-size: 2.5rem;
      font-weight: bold;
    }
  }
  .navbar {
    flex-direction: column;
    height: 100%;
    padding-left: 12%;
    display: flex;
    .container {
      padding: 0em 0.3125em;
      margin-top: 0.3125em;
      font-size: clamp(0.9rem, 0.83vw, 1rem);
      width: 76%;
      div {
        margin: 0.625em 0em;
        display: flex;
        align-items: center;
        p {
          cursor: pointer;
          color: #828388;
        }
      }
      &.active {
        background-color: #2d7fe0;
        border-radius: 0.75em;
        div {
          p {
            color: #ffffff;
          }
          span {
            color: #ffffff;
          }
        }
      }
    }
  }
  .material-symbols-outlined {
    color: #828388;
    margin-right: 0.3125em;
    cursor: pointer;
    font-size: clamp(2.7rem ,2.5vw, 3rem);
    font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 48;
  }
`;

export { Sidebar };
