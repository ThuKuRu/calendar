import styled from "styled-components";

const MinicalendarStyle = styled.div`
  .wrapper {
    background-color: #fff;
    border-radius: 36px;
    border: 1px solid #b7b7b7;
    box-shadow: 1px 5px 5px #aaaa;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .current-date {
        font-size: 16px;
        font-weight: 750;
        font-family: "Poppins";
      }
      .icons {
        span {
          height: 34px;
          width: 34px;
          margin: 0 1px;
          text-align: center;
          line-height: 34px;
          border-radius: 50%;
          cursor: pointer;
          &:hover {
            background-color: #3f80ea;
            color: #fff;
          }
        }
      }
    }
    .miniCalendar {
      font-family: "Poppins";
      width: 90%;
      margin-left: 15px;
      margin-top: -10px;
      ul {
        padding-inline-start: 0px;
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
          position: relative;
          width: calc(100% / 7);
          text-align: center;
          font-size: 12px;
        }
      }
      .weeks {
        li {
          font-weight: 750;
          font-size: 12px;
        }
      }
      .days {
        li {
          font-size: 9px;
          z-index: 1;
          cursor: pointer;
          margin-top: 20px;
          &::before {
            position: absolute;
            content: "";
            height: 36px;
            width: 36px;
            top: 50%;
            left: 50%;
            z-index: -1;
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }
          &:hover {
            color: #fff;
            &.inactive {
              color: #fff;
            }
            &::before {
              background-color: #3f80ea;
            }
          }
          &.inactive {
            color: #aaa;
          }
          &.active {
            color: #fff;
            &::before {
              background-color: #3f80ea;
            }
          }
        }
      }
    }
  }
`;

export { MinicalendarStyle };
