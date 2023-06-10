import styled from "styled-components";

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  height: 100%;
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
      font-family: "Poppins";
      font-weight: bold;
    }
  }
  .navbar{
    flex-direction: column;
    height: 100%;
    padding-left: 5%;
    display: flex;
    div{
      margin: 10px 0px;
      display: flex;
      justify-content: center;
    }
`;

const HeaderLogo = styled.img`
  width: 40px;
  height: 40px;
`;

export { Sidebar, HeaderLogo};
