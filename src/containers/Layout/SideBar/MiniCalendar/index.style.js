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
        font-size: clamp(0.75rem, 1.3vw, 3rem);
        font-weight: 750;
        font-family: inherit;
      }
      .icons {
        span {
          height: 2.125em;
          width: 2.125em;
          margin: 0 1px;
          text-align: center;
          line-height: 2.125em;
          border-radius: 50%;
          cursor: pointer;
          font-size: clamp(0.75rem, 1.3vw, 3rem);
          &:hover {
            background-color: #3f80ea;
            color: #fff;
          }
        }
      }
    }
    .miniCalendar {
      font-family: inherit;
      width: 90%;
      margin-left: 0.9375em;
      margin-top: -0.625em;
      font-size: clamp(0.75rem, 1.3vw, 3rem);
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
          font-size: clamp(0.75rem, 0.97vw, 3rem);
        }
      }
      .weeks {
        li {
          font-weight: 750;
          font-size: clamp(0.75rem, 0.97vw, 3rem);
        }
      }
      .days {
        li {
          z-index: 1;
          cursor: pointer;
          margin-top: 2em;
          font-size: clamp(0.625rem, 0.809vw, 3rem); //10px
          &::before {
            font-size: clamp(0.75rem, 1.3vw, 3rem);
            position: absolute;
            content: "";
            height: 2.25em;
            width: 2.25em;
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
