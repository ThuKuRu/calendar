import styled from "styled-components";
const levelColor = {
  5: "#FF0000",
  4: "#FFA500",
  3: "#FFFF00",
  2: "#1AC71A",
  1: "#00BFFF",
};

const CreateTodoStyle = styled.div`
font-family: "Poppins" !important;
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
        padding: 5px;
        background-color: white;
      }

      .content {
        width: 80%;
        padding: 10px 5px;
        background-color: white;
        font-size: 20px;
        .add {
          margin-left: 20px;
          height: 30px;
          width: 95%;
          border: 1px solid #011627;
          border-radius: 1em;
          padding: 8px 12px;
          font-size: 20px; 
        }
        .add-form {
          height: 30px;
          width: 95%;
          border: 1px solid #011627;
          border-radius: 1em;
          padding: 8px 12px;
          font-size: 20px;        
        }
        .formTodo-des {
          text-align: left;
          margin-top: 10px;
          border-radius: 1em;
          font-size: 20px;
          font-weight: bold;
        }
        .formCreate-container {
          .formTodo-time-container {
            display: flex;
            margin: 20px 0;
            font-weight: bold;
            align-items: center;
            .formTodo-sche-day {
              display: flex;
              align-items: center;
              border: 1px solid #000;
              border-radius: 1em;
              margin-left: 20px;
              width: 100%;
              padding: 8px 12px;
              font-weight: normal;
              font-size: 18px;
            
              .material-symbols-outlined {
                font-size: 30px;
              }
            }
            .formTodo-times {
              display: flex;
             
              .material-symbols-outlined{
                font-size: 30px;
              }
            }
          }
        }
        .buttonFormCreate {
          display: flex;
          justify-content: end;
          margin: 10px 0;
          cursor: pointer;  
          .Cancel {
            background-color: #d9d9d9;
            border-radius: 16px;
            padding: 5px 10px;
            cursor: pointer;
              a {
                text-decoration: none;
                font-size: 20px;
                color: #000;
              }
            }
          }
          .Save {
            margin-left: 20px;
            background-color: #d9d9d9;
            border-radius: 16px;
            padding: 5px 10px;
             cursor: pointer;
          }
        }     
      }
        .close {
          cursor: pointer;
          position: absolute;
          display: block;
          padding: 2px 5px;
          line-height: 20px;
          right: -10px;
          top: -10px;
          font-size: 24px;
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid #cfcece;
        }
      }
  }
`;

const SelectList = styled.select`
  text-decoration: none !important;
  display: flex;
  align-items: center;
  border: 1px solid #000;
  border-radius: 1em;
  margin-left: 20px;
  width: 100%;
  padding: 8px 12px;
  font-size: 18px;
  font-family: Poppins !important;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${({ value }) => levelColor[value]};
`;

const MenuItem = styled.option`
  padding: 5px 10px;
  text-align: center;
  background-color: #ccc;
  color: #000;
  list-style: none;
  font-size: 18px;
  font-family: Poppins !important;
  background-color: ${({ value }) => levelColor[value]};
`;

export { CreateTodoStyle, SelectList, MenuItem };
