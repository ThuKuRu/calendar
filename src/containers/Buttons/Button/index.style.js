import styled from "styled-components";

const ButtonStyle = styled.div`
  --normal-color: #d2d2d2;
  margin-top: 10px;
  margin-right: 50px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 48px;
  font-family: inherit;
  font-size: clamp(0.8rem, 1vw, 1.25rem);
  cursor: pointer;
  font: #121212;
  background-color: var(--normal-color);
  &:hover {
    .layer {
      // height: calc(100% - 0.375em);
      // width: calc(100% - 0.375em);

      border-radius: 48px;
      border: 1px solid #d3d3d3;
      background-color: #eaeaea;
    }
  }
  .layer {
    height: 98%;
    width: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    .in-layer {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1em;
      min-width: 4em;
    }
  }
  // &::before {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   content: "";
  //   height: calc(100% - 0.75em);
  //   width: calc(100% - 0.75em);
  //   border-radius: 48px;
  //   border: 1px solid #e2e2e2;
  // }
  // &:hover {
  //   background-color: #ffffff;
  //   &::before {
  //     z-index: 3;
  //   }
`;

export { ButtonStyle };
