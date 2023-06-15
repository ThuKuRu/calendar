import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-bottom: 0.0625rem solid;
  padding: 0.3125em 0em;
  min-height: 3em;
  .header {
    padding: 0 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    .material-symbols-outlined {
      background-color: #2d7fe0;
      border-radius: 50%;
      color: #ffffff;
      padding: 0.1875em;
      cursor: pointer;
      font-variation-settings: "FILL" 0, "wght" 0, "GRAD" 0, "opsz" 48;
    }
  }
`;

const Button = styled.button`
  width: 2.5em;
  text-aligns: center;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const SelectList = styled.select`
  height: 1.875em;
  text-decoration: none !important;
  font-size: 1.25em;
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
  margin-left: 0.625em;
  border: 0.0625em, solid #000;
  border-radius: 6px;
  height: 30px;
  text-aligns: center;
`;

export { NavBar, Button, SelectList, MenuItem, Avatar };
