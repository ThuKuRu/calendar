import styled from "styled-components";

const NavBar = styled.div`
  margin-left: 300px;
  .header {
    background-color: #ccc;
    position: fixed;
    top: 0;
    right: 0;
    left: 300px;
    height: 45px;
    display: flex;
    .headContent {
      width: 100%;
      background-color: #fff;
      display: flex;
      height: 40px;
      justify-content: space-between;
      .sidebarButton {
        display: flex;
      }
      .headContentRight {
        display: flex;
        margin-right: 21px;
      }
    }
  }
`;

const Icon = styled.img`
  margin-top: 5px;
  width: 30px;
  height: 30px;
  text-aligns: center;
  cursor: pointer;
`;

const Button = styled.button`
  height: 40px;
  width: 40px;
  text-aligns: center;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const SelectList = styled.select`
  margin-top: 5px;
  height: 30px;
  text-decoration: none !important;
  font-size: 20px;
  font-weight: 700;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 3px solid #000;
`;

const MenuItem = styled.option`
  font-size: 20px;
  padding: 5px 10px;
  text-align: center;
  background-color: #ccc;
  color: #000;
  font-weight: 700;
  list-style: none;
`;

const Avatar = styled.img`
  margin-top: 5px;
  margin-left: 10px;
  border: 1px solid #000;
  border-radius: 6px;
  height: 30px;
  weight: 30px;
  text-aligns: center;
`;

export { NavBar, Button, Icon, SelectList, MenuItem, Avatar };
