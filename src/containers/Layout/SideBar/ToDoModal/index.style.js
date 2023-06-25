import styled from "styled-components";

const levelColor = {
  Critical: "#FF0000",
  High: "#E67C73",
  Medium: "#FFBA00",
  Low: "#7986CB",
  Optional: "#9DA7FF",
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
    .header {
      font-size: 32px;
      text-align: center;
      padding: 5px;
      background-color: white;
    }
    .button {
      display: flex;
      text-direction: none;
      margin-left: 270px;
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
  border-radius: 16px;
  padding: 5px 10px;
  font-size: 20px;
  margin-top: 3%;
  cursor: pointer;
  margin-left: 10px;
  border: none;
`;

export { ToDoModalContainer, ToDoItem, ToDosList, Button };
