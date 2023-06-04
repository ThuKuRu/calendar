import styled from "styled-components";

const LayOut = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  .sidebar {
    display: flex;
    height: 100%;
    width: 22%;
  }
  .rightContent {
    display: flex;
    height: 100%;
    width: 100%;
    min-width: 60%;
    flex-direction: column;
  }
`;

export { LayOut };
