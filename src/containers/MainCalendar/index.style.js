import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 95%;
  font-family: "Roboto" !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .rbc-calendar {
    border: 1px solid #000000;
    border-radius: 5px;
    width: 100%;
    height: 90%;
    button {
      font-family: "Roboto" !important;
      font-size: 25px;
    }
    
    .rbc-toolbar {
      border-bottom: 1px solid #000000;
      padding: 10px 0px;
      button {
        font-size 12px;
      }
      .rbc-toolbar-label{
        font-size: 20px;
        font-weight: bold !important;
      }
      .rbc-btn-group {
        button{
          color: #7367F0;
          border: 1px solid #696CFF;
        }
        .rbc-active{
          background-color: rgba(104, 93, 216, 0.2);
        }
      }
    }
    .rbc-header{
      height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      button{
        font-size 14px;
        font-weight: bold;
      }
    }
  }
  .createDiv{
    display: flex;
    justify-content: flex-end;
    .createButton{
      height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      background-color: #2D7FE0;
      border-radius: 14px;
      color: #ffffff;
      font-family: "Roboto" !important;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;
export { Container };
