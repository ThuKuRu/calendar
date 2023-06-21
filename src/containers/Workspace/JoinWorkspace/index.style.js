import styled from "styled-components";

const Container = styled.div`
  --font: "DIN";
  height: 100%;
  width: 100%;
  .header {
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.875em;
    .headerText {
      font-size: clamp(1.2rem, 1.5625vw, 1.875rem);
      color: #6c757d;
      display: flex;
      align-items: center;
      span {
        margin-right: 0.625em;
        cursor: pointer;
        &:focus {
          transform: translateY(-0.25em);
          color: #2d7fe0;
        }
        &:hover {
          border-radius: 0.75em;
          transform: translateY(-0.25em);
          color: #2d7fe0;
        }
      }
    }
    .searchBar {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.8em 0.625em;
      border: 1px solid #000;
      cursor: pointer;
      .searchText {
        font-size: clamp(1rem, 1.3vw, 1.5625rem);
        font-weight: semibold;
        border: none;
        font-family: var(--font);
        &:focus {
          outline: none;
        }
      }
      span {
        margin-left: 0.625em;
      }
    }
  }
  .main {
    over-flow: auto !important;
    display: grid;
    gap: 3.125em 8%;
    padding: 1.5625em 4%;
    grid-template-columns: 19% 19% 19% 19%;
  }
`;

export { Container };
