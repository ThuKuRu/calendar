import styled from "styled-components";

const LayOut = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .sidebar {
    position: sticky;
    top: 0;
    display: flex;
    height: 100%;
    width: 16%;
    min-width: 14em;
    max-width: 20em;
    border-right: 0.25em solid #212329;
  }
  .rightContent {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
`;

export { LayOut };
