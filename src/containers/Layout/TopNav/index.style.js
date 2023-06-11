import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid;
  padding: 5px 0px;
  min-height: 6%;
  .header {
    padding: 0px 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    .material-symbols-outlined {
      background-color: #2D7FE0;
      border-radius: 50%;
      color: #FFFFFF;
      padding: 3px;
      cursor: pointer;
      font-variation-settings:
      'FILL' 0,
      'wght' 0,
      'GRAD' 0,
      'opsz' 48
    }
  }
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

export { NavBar, Button, SelectList, MenuItem, Avatar };
