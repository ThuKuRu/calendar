import styled from "styled-components";

const LoginStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  // background-color: #4070f4;
  background-color: #fff;
  font-family: "Roboto";
  form {
    background-color: white;
    max-width: 400px;
    padding: 20px;
    width: 100%;
    border-radius: 5px;

    h2 {
      font-size: clamp(0.75rem, 2.6vw, 3rem);
      font-weight: 900;
      color: #232836;
      text-align: center;
      background: -webkit-linear-gradient(#2d7fe0, #76bdff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .formInput {
      display: flex;
      flex-direction: column;
      width: 100%;

      input {
        padding: 10px;
        margin: 7px 0px;
        border: 1px solid #cacaca;
        outline: none;
        font-size: 16px;
        font-weight: 400;
        border: 2px solid #76bdff;
        border-radius: 2px;
        box-sizing: border-box;

        &:focus {
          border-bottom-width: 2px;
        }

        &:invalid[focused="true"] {
          border: 1px solid red;
        }

        &:invalid[focused="true"] ~ .errorMessage {
          display: block;
        }
      }

    button {
      height: 50px;
      width: 100%;
      background-color: #2d7fe0;
      color: white;
      padding: 10px;
      border: 10px;
      border-radius: 5px;
      font-weight: 400;
      font-size: 18px;
      margin: 15px 0 10px 0;
      transition: 0.5s;
      cursor: pointer;

      &:hover {
        background-color: #004796;
      }
    }

    .formLink {
      text-align: center;
      .formSignup {
        color: #76bdff;
      }
    }
  }
`;

export { LoginStyle };
