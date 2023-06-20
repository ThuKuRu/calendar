import styled from "styled-components";

const ButtonStyle = styled.div`
  position: relative;
  margin-top: 10px;
  margin-right: 50px;
  height: 50%;
  padding: 0 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 48px;
  font-family: inherit;
  font-size: clamp(0.8rem, 1vw, 1.25rem);
  cursor: pointer;
  font: #121212;
  background-color: #f3f3f3;
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    height: calc(100% - 0.75em);
    width: calc(100% - 0.75em);
    border-radius: 48px;
    border: 1px solid #e2e2e2;
  }
  &:hover {
    background-color: #ffffff;
    &::before {
      z-index: 3;
    }
    &::after {
      z-index: 2;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "";
      height: calc(100% - 0.375em);
      width: calc(100% - 0.375em);
      border-radius: 48px;
      border: 1px solid #d3d3d3;
      background-color: #eaeaea;
    }
  }
`;

export { ButtonStyle };
