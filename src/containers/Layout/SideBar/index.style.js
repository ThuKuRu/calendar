import styled from "styled-components";

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #041820;
  height: 100%;
  .headLogo {
    height: 75px;
    background-color: #293042;
  }
  .miniCalendar{
    color: #FFFFFF;
  }
`;

const HeaderLogo = styled.img`
  width: 300px;
  height: 75px;
  background-color: #293042;
`;

const CreateButton = styled.img`
  cursor: pointer;
  width: 300px;
  height: 75px;
  background-color: #293042;
`;

export { Sidebar, HeaderLogo, CreateButton};
