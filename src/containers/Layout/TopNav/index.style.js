import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border-bottom: 1px solid;
  padding: 5px 0px;
  .header {
    padding: 0px 2%;
    display: flex;
    justify-content: center;
  }
`;

const Icon = styled.img`
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
  height: 30px;
  text-decoration: none !important;
  font-size: 20px;
  font-weight: 700;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: none;
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
  margin-left: 10px;
  border: 1px solid #000;
  border-radius: 6px;
  height: 30px;
  weight: 30px;
  text-aligns: center;
`;

export { NavBar, Button, Icon, SelectList, MenuItem, Avatar };
