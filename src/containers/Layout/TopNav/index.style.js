import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = styled.div`
  display: flex;
  width: 100%;
  .header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 60px;
    width: 100%;
    display: flex;
    .headContent {
      background-color: #ccc;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .headContentTop {
        height: 60px;
        width: 100%;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        .sidebarButton {
          display: flex;
        }
        .headContentRight {
          display: flex;
          margin-right: 21px;
        }
      }
      .headContentBottom {
        background-color: #fff;
        .listItemRight {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }
      }
    }
  }
`;

const SubItem = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  font-size: 20px;
  font-weight: 700;
  height: 100%;
  text-decoration: none;
  &:hover {
    color: #000;
    background-color: #ccc;
  }
  &.active {
    background-color: #000;
    color: #fff;
  }
`;

const HeaderLogo = styled.img`
  width: 300px;
  height: 60px;
  background-color: #293042;
`;

const Icon = styled.img`
  margin-top: 7px;
  width: 50px;
  height: 50px;
  text-aligns: center;
`;

const Button = styled.button`
  height: 60px;
  width: 60px;
  text-aligns: center;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const SelectList = styled.select`
  margin-top: 13px;
  height: 40px;
  text-decoration: none !important;
  font-size: 25px;
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
  margin-top: 10px;
  margin-left: 20px;
  border: 1px solid #000;
  border-radius: 6px;
  height: 40px;
  weight: 40px;
  text-aligns: center;
`;

export {
  NavBar,
  HeaderLogo,
  Button,
  Icon,
  SelectList,
  MenuItem,
  Avatar,
  SubItem,
};
