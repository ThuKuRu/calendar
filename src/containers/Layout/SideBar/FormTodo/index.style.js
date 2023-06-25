import styled from "styled-components";
const levelColor = {
  5: "#FF0000",
  4: "#FFA500",
  3: "#FFFF00",
  2: "#1AC71A",
  1: "#00BFFF",
};

const FormTodoStyle = styled.div`
  --font: "DIN";
  font-family: var(--font) !important;
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
      width: clamp(27.5em, 35%, 40em);
      border: 1.5px solid #011627;
      border-radius: 15px;
      background-color: #fdfffc;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #011627;

      .header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;
        font-size: clamp(1.6rem, 1.6vw, 2rem);
      }
      .content {
        width: 80%;
        padding: 0.5em 0.25em;
        font-size: clamp(1rem, 1vw, 1.25rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .add-form {
          width: 95%;
          margin-bottom: 0.55em;
          border: 1px solid #000000;
          border-radius: 15px;
          padding: 0.44em 0.66em;
          font-size: clamp(0.9375rem, 0.9375vw, 1.125rem);
          font-family: var(--font);
        }
        .formTodo-address {
          width: 95%;
          margin-bottom: 0.55em;
          border: 1px solid #000000;
          border-radius: 15px;
          padding: 0.44em 0.66em;
          font-size: clamp(0.9375rem, 0.9375vw, 1.125rem);
          font-family: var(--font);
        }
        .formCreate-container {
          width: 100%;
          .formCreate-container-things {
            display: flex;
            justify-content: space-between;
            margin: 0.625rem 0;
            .formCreate-things {
              border: 1px solid #fff;
              border-radius: 22px;
              font-size: clamp(1.04rem, 1.04vw, 1.4rem);
              padding: 0.23em 1.36em;
              background-color: #d9d9d9;
              font-family: var(--font);
              cursor: pointer;
              &:focus {
                box-shadow: 0 0.5em 0.5em -0.4em #1849aa;
                transform: translateY(-0.25em);
                background-color: #3f80ea;
                color: #fff;
              }
              &:hover {
                box-shadow: 0 0.5em 0.5em -0.4em #1849aa;
                border-radius: 0.75em;
                transform: translateY(-0.25em);
                background-color: #3f80ea;
                color: #fff;
              }
            }
            .formCreate-todo {
              background-color: #3f80ea;
              color: #fff;
              &:focus {
                box-shadow: 0 0.5em 0.5em -0.4em #1849aa;
                transform: translateY(-0.25em);
              }
              &:hover {
                box-shadow: 0 0.5em 0.5em -0.4em #1849aa;
                border-radius: 0.75em;
                transform: translateY(-0.25em);
                background-color: #004796;
              }
            }
          }

          .formTodo-time-container {
            display: flex;
            margin: 1.25rem 0;
            font-weight: bold;
            align-items: center;
            .formTodo-duration {
              display: flex;
              align-items: center;
              background-color: transparent;
              border: 1px solid #000;
              border-radius: 22px;
              margin-left: 1.25em;
              width: 100%;
              padding: 0.5em 0.75em;
              font-weight: normal;
              font-size: clamp(0.83rem, 0.83vw, 1rem);
            }
            .duration {
              display: flex;
              border-radius: 1em;
              .add-form-duration {
                border: none;
                padding: 0.5em 0.75em;
                font-size: clamp(0.83rem, 0.83vw, 1rem);
                text-align: end;
                font-family: var(--font);
              }
              .day {
                width: 30%;
              }
              .hour {
                width: 35%;
              }
              .minute {
                width: 45%;
              }
            }
            label {
              margin: 0px 0.3125em;
              font-size: clamp(0.83rem, 0.83vw, 1rem);
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .deadline {
              display: flex;
              align-items: center;
              background-color: #d9d9d9;
              border: 1px solid #000;
              border-radius: 22px;
              margin-left: 1.25em;
              padding: 0.5em 0.75em;
              font-weight: normal;
              .react-datepicker__input-container {
                display: flex;
                align-items: center;
                justify-content: center;
                input {
                  font-size: clamp(0.83rem, 0.83vw, 1rem);
                  font-family: var(--font);
                  text-align: center;
                }
              }
              .formTodo-sche-day {
                width: 50%;
                display: flex;
                align-items: center;
                .react-datepicker-wrapper {
                  min-width: 10.625em;
                  display: flex;
                  align-items: center;
                  font-family: var(--font);
                  input {
                    width: 100%;
                    border: none !important;
                    background-color: transparent;
                    &:focus {
                      outline: none;
                    }
                  }
                }
                .material-symbols-outlined {
                  font-size: clamp(1.46rem, 1.46vw, 1.75rem);
                }
              }
              .formCreate-times {
                padding: 0px 0.625em;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .react-datepicker-wrapper {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  input {
                    width: 80%;
                    margin-left: 20%;
                    border: none !important;
                    background-color: transparent;
                    &:focus {
                      outline: none;
                    }
                  }
                }
              }
            }
          }
        }
        .buttonFormCreate {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          margin: 0.625em 0;
          .Cancel {
            padding: 0.5em 1em;
            font-size: clamp(1.04rem, 1.04vw, 1.4rem);
            cursor: pointer;
            a {
              text-decoration: none;
              color: rgba(0, 0, 0, 0.8);
            }
          }
          .Save {
            padding: 0.5em 1em;
            font-size: clamp(1.04rem, 1.04vw, 1.4rem);
            text-align: center;
            margin-left: 1em;
            background-color: #d9d9d9;
            border-radius: 15px;
            cursor: pointer;
            a {
              text-decoration: none;
            }
          }
        }
        .description {
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
  font-family: var(--font);
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
  font-family: var(--font);
  background-color: ${({ value }) => levelColor[value]};
`;

export { FormTodoStyle, SelectList, MenuItem };
