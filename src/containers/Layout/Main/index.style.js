import styled from "styled-components";

const Content = styled.div`
  display: flex;
  .navigate {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 45px;
    right: 0;
    left: 20%;
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
      margin-left: 850px;
      margin-right: 20px;
      .nav {
        background-color: #3f80ea;
        border-radius: 5px;
        margin-left: 2px;
        border: none;
        padding: 5px 10px;
        border: none;
        a {
          color: #fff;
          font-size: 16px;
          text-decoration: none;
        }
      }
    }
    .content {
      display: flex;
      position: fixed;
      top: 75px;
      right: 0;
      left: 20%;
      padding: 4px 0px;
    }
  }
`;

export { Content };
