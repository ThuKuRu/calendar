import styled from "styled-components";

const Minicalendar = styled.div`
  .wrapper {
    width: 300px;
    background-color: #041820;
    border-radius: 10px;
  }
  .wrapper header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header .current-date {
    font-size: 1.4rem;
    font-weight: 500;
  }

  header .icons span{
    height: 38px;
    width: 38px;
    margin: 0 1px;
    text-align: center;
    line-height: 38px;
    border-radius: 50%;
    cursor: pointer;
  }

  header .icons span:hover{
    background-color: #2f2f2f;
  }

  .miniCalendar ul{
    padding-inline-start: 0px;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .miniCalendar ul li{
    position: relative;
    width: calc(100%/7);
    text-align: center;
  }

  .miniCalendar .weeks li{
    font-weight: 500;
  }

  .miniCalendar .days li{
    z-index: 1;
    cursor: pointer;
    margin-top: 30px;
  }

  .miniCalendar .days li::before{
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

  .days li:hover::before{
    background-color: #2f2f2f;
  }

  .days li.inactive{
    color: #aaa;
  }

  .days li.active::before{
    background-color: #3F80EA;
  }
`;

export {Minicalendar};