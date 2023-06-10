import styled, { css } from "styled-components";

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
    padding: 10px 0;
    height: 60px;
    p {
      margin-left: 10px;
      color: #000000;
      font-size: 40px;
      font-weight: bold;
    }
  }
  .navbar {
    flex-direction: column;
    height: 100%;
    padding-left: 12%;
    display: flex;
    .container {
      padding: 0px 5px;
      margin-top: 5px;
      width: 76%;
      div {
        margin: 10px 0px;
        display: flex;
        align-items: center;
        p {
          font-size: 16px;
          cursor: pointer;
          color: #828388;
        }
      }
      &.active {
        background-color: #2d7fe0;
        border-radius: 12px;
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
    margin-right: 5px;
    cursor: pointer;
    font-size: 48px;
    font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 48;
  }
`;

const HeaderLogo = styled.img`
  width: 40px;
  height: 40px;
`;

export { Sidebar, HeaderLogo };
