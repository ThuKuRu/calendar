import styled from "styled-components";

const levelColor = {
  5: "#FF0000",
  4: "#E67C73",
  3: "#FFBA00",
  2: "#7986CB",
  1: "#9DA7FF",
};

const ToDoModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  background-color: white;
  padding: 20px;
  box-shadow: 24px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const ToDoItem = styled.div`
  border: 1px solid #3788d8;
  border-radius: 10px;
  color: white;
  padding: 2% 6%;
  font-size: 23px;
  margin: 1% 0;
  background-color: ${({ level }) => levelColor[level]};
`;

const ToDosList = styled.div`
  margin-top: 3px;
  max-height: 500px;
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
  border: 1px solid #3788d8;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  font-size: 29px;
  line-height: 29px;
  padding: 2% 4%;
  margin-top: 3%;
  margin-left: auto;
  margin-right: 7%;
  max-width: 23%;
  cursor: pointer;
`;

const Typo = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

export { ToDoModalContainer, ToDoItem, ToDosList, Typo, Button };
