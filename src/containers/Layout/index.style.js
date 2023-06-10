import styled from "styled-components";

const LayOut = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  .sidebar {
    display: flex;
    height: 100%;
    width: 16%;
    min-width: 16%;
    border-right: 2px solid;
  }
  .rightContent {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
`;

export { LayOut };
