import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 98%;
  padding: 0.625rem;
  padding-right: 1.25rem;
  overflow-y: auto;
  .content {
    display: flex;
    height: 100%;
    .container {
      width: 100%;
    }
  }
`;

export { Content };
