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

        .add-form {
          width: 95%;
          margin-bottom: 0.55em;
          border: 1px solid #000000;
          border-radius: 15px;
          padding: 0.44em 0.66em;
          font-size: clamp(0.9375rem, 0.9375vw, 1.125rem);
          font-family: inherit;
        }
        .formCreate-container {
          .formCreate-container-things {
            display: flex;
            justify-content: space-between;
            margin: 0.625em 0;
            padding: 0.125em 0;
            button {
              font-family: inherit;
            }
            .formCreate-things {
              border: 1px solid #fff;
              border-radius: 22px;
              font-size: clamp(1.04rem, 1.04vw, 1.4rem);
              padding: 0.23em 1.36em;
              background-color: #d9d9d9;
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

            .formCreate-reminder {
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

          .formCreate-time-container {
            width: 100%;
            display: flex;
            background-color: #d9d9d9;
            border-radius: 16px;
            padding: 0.625em 0px;
            margin: 1.25em 0;
            .react-datepicker__input-container {
              display: flex;
              align-items: center;
              justify-content: center;
              input {
                font-size: clamp(0.83rem, 0.83vw, 1rem);
                font-family: "Roboto" !important;
                text-align: center;
                &:focus {
                  outline: none;
                }
              }
            }
            .formCreate-sche-day {
              width: 44%;
              display: flex;
              align-items: center;
              padding: 0px 0.625em;
              .react-datepicker-wrapper {
                margin-left: 10px;
                min-width: 10.625em;
                display: flex;
                align-items: center;
                input {
                  width: 100%;
                  border: none !important;
                  background-color: transparent;
                  &:focus {
                    outline: none;
                  }
                }
              }
            }
            .formCreate-times {
              padding: 0px 0.625em;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .dash {
                margin-right: 0.625em;
              }
              .react-datepicker-wrapper {
                display: flex;
                justify-content: center;
                input {
                  width: 80%;
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
        .buttonFormCreate {
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
      }
    }
  }
`;

export { FormReminderStyle };
