import styled from "styled-components";

const CommentStyle = styled.div`
  width: 300px;
  height: 10em;
  border-radius: 20px;
  background-color: #fff;
  padding: 1em;
  box-shadow: 1px 5px 5px #aaaa;
  border: 1px solid black;
  .input {
    height: 70%;
    width: 100%;
    border: none;
    resize: none;
    &:focus {
      outline: none;
    }
  }
  .button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 0.625em 0;
    .Save {
      width: 12%;
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
`;

export { CommentStyle };
