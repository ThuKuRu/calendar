import styled from "styled-components";

const levelColor = {
  5: "#FF0000",
  4: "#E67C73",
  3: "#FFBA00",
  2: "#7986CB",
  1: "#9DA7FF",
};

const ToDoModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  text-align: center;
  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 60%;
    background-color: white;
    padding: 20px;
    box-shadow: 24px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 20px;
    justify-content: center;
    text-align: center;
    .button {
      display: flex;
      float: right;
      margin-left: 150px;
      justify-content: center;
      text-direction: none;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
`;

const ToDoItem = styled.div`
  border: 1px solid #3788d8;
  border-radius: 10px;
  color: white;
  padding: 2% 5%;
  font-size: 18px;
  margin: 1% 0;
  background-color: ${({ level }) => levelColor[level]};
`;

const ToDosList = styled.div`
  max-height: 500px;
  justify-content: center;
  margin-left: 20px;
  width: 90%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.4em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  background-color: #d9d9d9;
  border: 2px solid #000;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  padding: 2% 4%;
  margin-top: 3%;
  width: auto;
  cursor: pointer;
  margin-left: 10px;
`;

const Typo = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin: 0px 20px 10px;
`;

export { ToDoModalContainer, ToDoItem, ToDosList, Typo, Button };
