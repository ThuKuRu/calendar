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
  }
`;

export { Container };
