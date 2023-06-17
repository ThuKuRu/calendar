import styled from "styled-components";

const levelColor = {
  5: "#FF0000",
  4: "#FFA500",
  3: "#FFFF00",
  2: "#1AC71A",
  1: "#00BFFF",
};

const AddTaskStyle = styled.div`
  font-family: "Roboto" !important;
  .modal {
    position: fixed;
    color: black;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    display: flex;
    .modal-container {
      width: 35%;
      max-width: 700px;
      height: auto;
      max-height: 600px;
      border: 1px solid #011627;
      border-radius: 1em;
      background-color: #fdfffc;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #011627;

      .header {
        font-size: 32px;
        text-align: center;
        padding: 15px 5px 5px;
        background-color: white;
      }
    }
  }
`;

export { AddTaskStyle };
