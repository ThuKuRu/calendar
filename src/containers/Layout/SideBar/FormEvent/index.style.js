import styled from "styled-components";

const FormEventStyle = styled.div`
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
    align-items: center;
     display: flex;
    .modal-container {
      width: 35%;
      max-width: 700px;
      height: auto;
      max-height: 450px;
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
        
        .add-form {
          height: 30px;
          width: 95%;
          border: 1px solid #011627;
          border-radius: 1em;
          padding: 8px 12px;
          font-size: 20px;
          margin-bottom: 10px;         
        }
        .formCreate-container {
          .formCreate-container-things {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            .formCreate-things {
              width: auto;
              border: 1px solid #fff;
              border-radius: 22px;
              font-size: 20px;
              padding: 5px 30px;
              background-color: #d9d9d9;
              
            }
            .formCreate-event {
              background-color: #3f80ea;
              color: #fff;
            }
          }
          
          .formCreate-time-container {
            display: flex;
            justify-content: center;
            background-color: #d9d9d9;
            border-radius: 16px;
            padding: 10px 10px;
            font-size: 16px;
            margin: 20px 0;
            .formCreate-sche-day {
              display: flex;
              align-items: center;
            }
            .formCreate-times {
              display: flex;
              align-items: center;
              .dash {
                margin: 0 5px;
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
          display: block;
          padding: 2px 5px;
          line-height: 20px;
          font-size: 24px;
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid #cfcece;
        }
      }
    }
  }
`;

export { FormEventStyle };
