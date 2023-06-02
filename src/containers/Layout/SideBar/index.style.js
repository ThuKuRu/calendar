import styled from "styled-components";

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: #041820;
  height: 100%;
  .headLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    height: 75px;
    background-color: #293042;
    p {
      margin-left: 10px;
      color: #ffffff;
      font-size: 45px;
      font-family: "Poppins";
      font-weight: bold;
    }
  }
  .miniCalendar {
    color: #ffffff;
  }
  .createButton {
    height: 100px;
    justify-content: center;
    align-items: center;
    display: flex;
    .createText {
      color: #ffffff;
      margin-left: 10px;
      font-size: 30px;
      font-family: Poppins;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .todolistButton {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    .todolistText {
      color: #ffffff;
      margin-left: 10px;
      font-size: 30px;
      font-family: Poppins;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const HeaderLogo = styled.img`
  width: auto;
`;

const CreateIcon = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: #293042;
`;

const TodolistIcon = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: #041820;
`;

export { Sidebar, HeaderLogo, CreateIcon, TodolistIcon };
