import styled from "styled-components";

const RegisterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
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
      margin: 12px 0 10px 0;
      transition: 0.5s;
      cursor: pointer;

      &:hover {
        background-color: #00527a;
      }
    }

    .formLink {
      text-align: center;
      .formSignup {
        color: #76bdff;
      }
    }

    .line {
      position: relative;
      height: 1px;
      width: 100%;
      margin: 15px 0px;
      background-color: #d4d4d4;

      &::before {
        content: "Or";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        color: #232836;
        padding: 0 15px;
      }
    }

    .facebook {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      color: #7f869b;
      border: 1px solid #d4d4d4;
      height: 50px;
      width: 100%;
      margin-top: 15px;
      border-radius: 5px;
      transition: all 0.3s ease;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    .facebookIcon,
    .googleImg {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      object-fit: cover;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
    }

    .facebook.google {
      background-color: #fff;
      color: #7f869b;
      border: 1px solid #d4d4d4;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
export { RegisterStyle };
