import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  font-family: "Roboto";
  .h2 {
    margin-bottom: 20px;
  }
  .form {
    display: grid;
    gap: 10px;
  }

  .form input[type="text"],
  .form textarea {
    width: 35vw;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .image-upload {
    position: absolute;
    top: 150px;
    right: 100px;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    .file-upload {
      position: absolute;
      top: 20px;
      right: 0px;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      width: 10vw;
      height: auto;
    }
  }

  .image-upload-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
  }

  .material-symbols-outlined {
    font-size: 144px;
  }

  .image-upload-label-text {
    margin-left: 10px;
  }

  .input-file {
    display: none;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    position: absolute;
    top: 85vh;
    right: 90px;
  }

  .create-button {
    margin-left: 10px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #2d7fe0;
    border-radius: 14px;
    color: #ffffff;
    font-family: "Roboto" !important;
    font-size: 20px;
    cursor: pointer;
    border: none;
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

  .cancel-button {
    margin-left: 10px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 14px;
    color: #868686;
    font-family: "Roboto" !important;
    font-size: 20px;
    cursor: pointer;
    border: none;
    &:focus {
      box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
      transform: translateY(-0.25em);
    }
    &:hover {
      box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
      border-radius: 0.75em;
      transform: translateY(-0.25em);
      background-color: #ffffff;
    }
  }
`;

const SelectList = styled.select`
  text-decoration: none !important;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 12px;
  font-size: 18px;
  font-family: "Roboto" !important;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`;

const MenuItem = styled.option`
  padding: 5px 10px;
  text-align: center;
  background-color: #ccc;
  color: #000;
  list-style: none;
  font-size: 18px;
  font-family: "Roboto" !important;
`;

export { Container, SelectList, MenuItem };
