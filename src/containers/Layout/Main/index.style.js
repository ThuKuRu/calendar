import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .nav {
    height: 30px;
  }
  .navigate {
    height: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 4px 0px;
    background-color: #fff;
    .navigateLeft {
      margin-left: 20px;
      display: flex;
      .nav {
        background-color: #3f80ea;
        color: #fff;
        font-size: 16px;
        border-radius: 5px;
        margin-left: 2px;
        border: none;
        padding: 5px 10px;
      }
    }
    .navigateRight {
      display: flex;
      margin-right: 20px;
      .nav {
        background-color: #3f80ea;
        font-size: 16px;
        border-radius: 5px;
        margin-left: 2px;
        border: none;
        padding: 5px 10px;
        border: none;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .content {
    display: flex;
    height: 100%;
    padding: 10px 10px;
  }
`;

export { Content };
