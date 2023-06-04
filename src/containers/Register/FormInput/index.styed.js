import styled from "styled-components";

const FormInputStyle = styled.div`
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

  .errorMessage {
    font-size: 12px;
    font-weight: bold;
    color: red;
    display: none;
  }
`;

export { FormInputStyle };