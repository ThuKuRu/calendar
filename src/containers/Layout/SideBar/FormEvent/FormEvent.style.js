import styled from "styled-components";

const Formevent = styled.div`
  font-family: "Poppins";
  .modal {
    position: fixed;
    color: black;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    .modal-container {
      position: fixed;
      left: 35%;
      top: 30%;
      width: 30%;
      border: 1px solid #011627;
      border-radius: 1em;
      // box-shadow: -2px 5px 5px #e71d36;
      background-color: #fdfffc;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      color: #011627;

      .header {
        display: absolute;
        width: 70%;
        // border-bottom: 1px solid gray;
        font-size: 32px;
        text-align: center;
        padding: 5px;
        background-color: white;
      }
      .content {
        display: absolute;
        width: 80%;
        padding: 10px 5px;
        background-color: white;
        font-size: 20px;
        .add-form {
          height: 36px;
          width: 100%;
          border: 1px solid #011627;
          border-radius: 1em;
          padding: 8px 12px;
          font-size: 20px;
        }
        .formCreate-container {
          .formCreate-container-things {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
           
            .formCreate-things {
              border: 1px solid #fff;
              border-radius: 22px;
              font-size: 20px;
              padding: 0 30px;
              background-color: #d9d9d9;
            }
            .formCreate-event {
              background-color: #3f80ea;
              color: #fff;
            }
          }
          
          .formCreate-time-container {
            display: flex;
            justify-content: space-between;
            background-color: #d9d9d9;
            margin-top: 20px;
            margin-bottom: 30px;
            border-radius: 16px;
            padding: 10px 10px;
            font-size: 18px;
            .formCreate-sche-day {
              display: flex;
              align-items: center;
              .material-symbols-outlined {
                font-size: 30px;
              }
              
            }
            .formCreate-times {
              display: flex;
              .material-symbols-outlined{
                font-size: 30px;
              }
            }
        }
        }
      }
      .buttonFormCreate {
        display: flex;
        justify-content: end;
        margin-top: 20px;
        .Cancel {
          border-radius: 16px;
          padding: 5px 10px;
          margin-right: 20px;
        }
        .Save {
          background-color: #d9d9d9;
          border-radius: 16px;
          padding: 5px 30px;
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

export { Formevent };
