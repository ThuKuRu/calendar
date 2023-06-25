import styled from "styled-components";

const Container = styled.div`
  --hover: #1849aa;
  display: flex;
  flex-direction: column;
  border: 0.0625rem solid #000000;
  border-radius: 0.3125rem;
  width: 100%;
  .header {
    padding: 0.4em 0.9375em;
    margin-top: 0.3125em;
    display: flex;
    .backWorkspace {
      width: 100%;
      font-size: clamp(1.2rem, 1.5625vw, 1.875rem);
      color: #6c757d;
      span {
        cursor: pointer;
        &:focus {
          transform: translateY(-0.25em);
        }
        &:hover {
          border-radius: 0.75em;
          transform: translateY(-0.25em);
          color: #2d7fe0;
        }
      }
    }
    .headerRight {
      display: flex;
      .leaveWorkspace {
        width: 100%;
        display: flex;
        .leaveButton {
          background-color: #d6d6d6;
          border-radius: 10px;
          margin-right: 0.5em;
          padding: 0.25em;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
      .settingWorkspace {
        width: 100%;
        display: flex;
        .settingButton {
          background-color: #d6d6d6;
          border-radius: 10px;
          padding: 0.25em;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }
  }
  .specific {
    display: flex;
    flex-direction: column;
    padding: 1em;
    height: 100%;
    .specificLeft {
      display: flex;
      flex-direction: column;
      margin-right: 4em;
      .specific-team {
        display: flex;
        .specific-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.9375em;
          border-radius: 1em;
          .avatar-team {
            border-radius: 1em;
            width: clamp(5rem, 10.58vw, 12.625rem);
            height: clamp(5rem, 10.58vw, 12.625rem);
          }
        }
        .specific-name {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 0.9375em;
          .name {
            p {
              font-weight: 900;
              font-size: clamp(1.2rem, 1.875vw, 2.25rem);
              margin: 0 0 0.28em 0;
            }
          }
          .description {
            display: flex;
            background-color: #d9d9d9;
            height: 100%;
            border-radius: 1em;
            p {
              padding: 0.625em;
              margin: 0;
              font-size: clamp(0.83rem, 0.83vw, 1rem);
            }
          }
        }
      }
      .specific-task {
        margin-top: 1em; /* Add margin-top to separate the table from the description */
        .table {
          width: 100%;
          display: flex;
          font-size: clamp(0.83rem, 0.83vw, 1rem);
          border-bottom: 2px solid #ccc;
          align-items: baseline;
          justify-content: center;
          padding: 0.3125em 0 0.3125em 3.125em;
          text-align: center;
          .col {
            display: flex;
            align-items: center;
            text-align: center;
            flex: 1;
            span {
              margin-right: 0.3125em;
              display: flex;
            }
            p {
              display: flex;
              text-align: left;
              font-size: clamp(0.8rem, 0.93vw, 1.125rem);
              align-items: center;
              margin: 0px 0px 0px 0.3125em;  
            }
            .name {
              font-size: clamp(1rem, 1.04vw, 1.4rem);
              font-weight: 600;
            }
            .avatar {
              height: 1.5625em;
              width: 1.5625em;
              border-radius: 50%;
              margin-right: 0.3125em;
            }
            .done {
              background-color: #00ff00;
              padding: 0.0625em 0.9375em 0;
              border-radius: 20px;
            }
            .sort {
              margin-left: 0.3125em;
              cursor: pointer;
              &:focus {
                transform: translateY(-0.25em);
                color: #2d7fe0;
              }
              &:hover {
                border-radius: 0.75em;
                transform: translateY(-0.25em);
                color: #2d7fe0;
              }
            }
            .delete {
              cursor: pointer;
              margin-left: 2em;
              &:focus {
                transform: translateY(-0.25em);
                color: #2d7fe0;
              }
              &:hover {
                border-radius: 0.75em;
                transform: translateY(-0.25em);
                color: #2d7fe0;
              }
            }
            .percent {
              display: flex;
              justify-content: flex-start;
              width: clamp(5em, 6.25vw, 7.5em);
              border-radius: 1em;
              border: 1px solid #ccc;
              padding: 0px;
            }
          }
        }
      }
      .buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .add-button {
          margin-top: 1em;
          padding: 0 1em;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #2d7fe0;
          color: #ffffff;
          font-size: clamp(0.8rem, 1vw, 1.25rem);
          cursor: pointer;
          border-radius: 0.75em;
          &:focus {
            box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
            transform: translateY(-0.25em);
          }
          &:hover {
            box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
            border-radius: 0.75em;
            transform: translateY(-0.25em);
            background-color: #004796;
          }
        }
      }
    }
`;

export { Container };
