import styled from "styled-components";

const FormTodoStyle = styled.div`
font-family: "Poppins";
  .modal {
    position: fixed;
    color: black;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    text-align: center;
    .modal-container {
      position: fixed;
      left: 35%;
      top: 30%;
      width: 35%;
      border: 1px solid #011627;
      border-radius: 1em;
      background-color: #fdfffc;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      color: #011627;

      .header {
        display: absolute;
        width: 70%;
        font-size: 32px;
        text-align: center;
        padding: 5px;
        background-color: white;
        margin-bottom: 32px;
      }
      .content {
        display: absolute;
        width: 80%;
        padding: 10px 5px;
        background-color: white;
        font-size: 20px;
        
        .add-form {
          margin-top: -10px;
          height: 30px;
          width: 95%;
          border: 1px solid #011627;
          border-radius: 1em;
          padding: 8px 12px;
          font-size: 20px;
        }
        .formTodo-address {
          text-align: left;
          margin-top: -10px;
          height: auto;
          width: 95%;
          border: 1px solid #011627;
          border-radius: 1em;
          padding: 8px 12px;
          font-size: 20px;
        }
        .formCreate-container {
          margin-top: 20px;
          width: 100%;
          .formCreate-container-things {
            // width: 100%;
            display: flex;
            justify-content: space-between;
            .formCreate-things {
              width: 15%;
              border: 1px solid #fff;
              border-radius: 22px;
              font-size: 20px;
              padding: 0 30px;
              background-color: #d9d9d9;
            }
            .formCreate-todo {
              background-color: #3f80ea;
              color: #fff;
              // width: 20%;
              
            }
          }
          
          .formTodo-time-container {
            display: flex;
            margin: 20px 0;
            font-weight: bold;
            align-items: center;
            .formTodo-sche-day {
              display: flex;
              align-items: center;
              border: 1px solid #000;
              border-radius: 22px;
              margin-left: 20px;
              width: 100%;
              padding: 8px 12px;
              font-weight: normal;
            
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
          margin-top: 60px;
          cursor: pointer;
          justify-content:content;
          .Cancel {
            background-color: #d9d9d9;
            border-radius: 16px;
            padding: 5px 10px;
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
  }
`;

export { FormTodoStyle };
