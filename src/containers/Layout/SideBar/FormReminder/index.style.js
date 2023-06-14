import styled from "styled-components";

const FormReminderStyle = styled.div`
  font-family: "Roboto";
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
      max-width: 650px;
      height: auto;
      border: 1.5px solid #011627;
      border-radius: 15px;
      background-color: #fdfffc;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #011627;

      .header {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        .headerText{
          font-size: 32px;
        }
      }

      .content {
        width: 80%;
        padding: 10px 5px;
        font-size: 20px;
        
        .add-form {
          height: 30px;
          width: 95%;
          margin-bottom: 10px;
          border: 1px solid #000000;
          border-radius: 15px;
          padding: 8px 12px;
          font-size: 18px;
          font-family: "Roboto";         
        }
        .formCreate-container {
          .formCreate-container-things {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            height: 40px;
            button {
              font-family: "Roboto" !important;
            }
            .formCreate-things {
              width: auto;
              border: 1px solid #fff;
              border-radius: 22px;
              font-size: 18px;
              padding: 5px 30px;
              background-color: #d9d9d9;
              cursor: pointer;
            }
           
            .formCreate-reminder {
              background-color: #3f80ea;
              color: #fff;
            }
          }
          
          .formCreate-time-container {
            width: 100%;
            display: flex;
            background-color: #d9d9d9;
            border-radius: 16px;
            padding: 10px 0px;
            font-size: 18px;
            margin: 20px 0;
            .react-datepicker__input-container{
              display: flex;
              align-items: center;
              justify-content: center;
              input{
                font-size: 14px;
                font-family: "Roboto" !important;
                text-align: center;
              }
            }
            .formCreate-sche-day {
              width: 44%;
              display: flex;
              align-items: center;
              padding: 0px 20px;
              .react-datepicker-wrapper{
                margin-left: 10px;
                width: 140px;
                display: flex;
                align-items: center;
                input{
                  width: 100%;
                  margin: 0px;
                  padding: 0px 0px;
                  border: none !important;
                  background-color: transparent;
                }
              }
            }
            .formCreate-times {
              width: 100%;
              padding: 0px 0px;
              display: flex;
              align-items: center;
              justify-content: center;
              .react-datepicker-wrapper{
                width: 70%;
                display: flex;
                justify-content: center;
                input{
                  width: 70%;
                  margin: 0px;
                  padding: 0px;
                  border: none !important;
                  background-color: transparent;
                }
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
            padding: 5px 10px;
            a {
              text-decoration: none;
              font-size: 20px;
              color: rgba(0, 0, 0, 0.8);
            }
          }
        }
          .Save {
            width: 20%;
            text-align: center;
            margin-left: 20px;
            background-color: #d9d9d9;
            border-radius: 15px;
            padding: 5px 10px;
            a{
              text-decoration: none;
            }
          }
        }
      }
    }
  }
`;

export { FormReminderStyle };
