import styled from "styled-components";
const levelColor = {
  5: "#FF0000",
  4: "#FFA500",
  3: "#FFFF00",
  2: "#1AC71A",
  1: "#00BFFF",
};

const FormTodoStyle = styled.div`
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
      max-width: 650px;
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
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        .headerText {
          font-size: 32px;
        }
      }
      .content {
        width: 80%;
        padding: 10px 0px;
        font-size: 19px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .add-form {
          height: 6vh;
          width: 100%;
          margin-bottom: 10px;
          border: 1px solid #000000;
          border-radius: 15px;
          padding: 8px 12px;
          box-sizing: border-box;
          font-size: 18px;
          font-family: inherit;
        }
        .formTodo-address {
          text-align: left;
          height: 6vh;
          width: 100%;
          border: 1px solid #000000;
          border-radius: 15px;
          box-sizing: border-box;
          font-size: 18px;
          textarea {
            height: 100%;
            width: 100%;
            padding: 6px 10px;
            background-color: transparent;
            border: none;
            resize: none;
            box-sizing: border-box;
            font-family: inherit;
            &:focus {
              outline: none;
            }
          }
        }
        .formCreate-container {
          width: 100%;
          .formCreate-container-things {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            .formCreate-things {
              width: auto;
              border: 1px solid #fff;
              border-radius: 22px;
              font-size: 18px;
              padding: 5px 30px;
              background-color: #d9d9d9;
              cursor: pointer;
              font-family: inherit;
            }
            .formCreate-todo {
              background-color: #3f80ea;
              color: #fff;
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
              background-color: #d9d9d9;
              border: 1px solid #000;
              border-radius: 22px;
              margin-left: 20px;
              width: 100%;
              padding: 8px 12px;
              font-weight: normal;
              font-size: 18px;
              .react-datepicker-wrapper {
                .react-datepicker__input-container {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  input {
                    width: 100%;
                    height: 100%;
                    border: none;
                    background-color: transparent;
                    text-align: center;
                    // &:focus{
                    //   outline: none;
                    // }
                  }
                }
              }
              .material-symbols-outlined {
                font-size: 28px;
                margin-right: 5px;
              }
            }
            .formTodo-times {
              display: flex;
              .material-symbols-outlined {
                font-size: 30px;
              }
            }
          }
        }
        .buttonFormCreate {
          width: 100%;
          display: flex;
          justify-content: flex-end;
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
          .Save {
            margin-left: 20px;
            background-color: #d9d9d9;
            border-radius: 15px;
            padding: 5px 10px;
            a {
              text-decoration: none;
              color: #978f8f;
            }
          }
        }
        .description{
          width: 100%;
          margin-bottom: 2%;
          font-weight: bold;
        }
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
  font-family: inherit;
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
  font-family: inherit;
  background-color: ${({ value }) => levelColor[value]};
`;

export { FormTodoStyle, SelectList, MenuItem };
