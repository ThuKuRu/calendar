import styled from "styled-components";

const Minicalendar = styled.div`
  .wrapper {
    width: 100%;
    background-color: #041820;
    border-radius: 10px;
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .current-date {
        font-size: 1.4rem;
        font-weight: 750;
        font-family: "Poppins";
      }
      .icons {
        span {
          height: 38px;
          width: 38px;
          margin: 0 1px;
          text-align: center;
          line-height: 38px;
          border-radius: 50%;
          cursor: pointer;
          &:hover {
            background-color: #2f2f2f;
          }
        }
      }
    }
    .miniCalendar {
      font-family: "Poppins";
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
        }
      }
      .weeks {
        li {
          font-weight: 750;
          font-size: 18px;
        }
      }
      .days {
        li {
          z-index: 1;
          cursor: pointer;
          margin-top: 30px;
          &::before {
            position: absolute;
            content: "";
            height: 40px;
            width: 40px;
            top: 50%;
            left: 50%;
            z-index: -1;
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }
          &:hover {
            &::before {
              background-color: #2f2f2f;
            }
          }
          &.inactive {
            color: #aaa;
          }
          &.active {
            &::before {
              background-color: #3f80ea;
            }
          }
        }
      }
    }
  }
`;

export { Minicalendar };
