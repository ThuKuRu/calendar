import styled from "styled-components";

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: #041820;
  height: 100%;
  justify-content: center;
  .headLogo {
    position: fixed;
    top: 0;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    height: 60px;
    background-color: #293042;
    p {
      margin-left: 10px;
      color: #ffffff;
      font-size: 40px;
      font-family: "Poppins";
      font-weight: bold;
    }
  }
  .miniCalendar {
    margin-top: -30px;
    color: #ffffff;
  }
  .createButton {
    height: 90px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: -100px;
    .createText {
      color: #ffffff;
      margin-left: 10px;
      font-size: 25px;
      font-family: Poppins;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .todolistButton {
    margin-top: -25px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    .todolistText {
      color: #ffffff;
      margin-left: 10px;
      font-size: 25px;
      font-family: Poppins;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const HeaderLogo = styled.img`
  width: 40px;
  height: 40px;
`;

const CreateIcon = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: #293042;
`;

const TodolistIcon = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: #041820;
`;

export { Sidebar, HeaderLogo, CreateIcon, TodolistIcon };
