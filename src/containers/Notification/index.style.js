import styled from "styled-components";

const TYPE = {
  ERROR: "error",
  SUCCESS: "success",
  INFO: "info",
};

const color = {
  [TYPE.ERROR]: "#F52F2F",
  [TYPE.SUCCESS]: "#00893A",
  [TYPE.INFO]: "#1071FF",
};

const NotificationContainer = styled.div`
  font-family: "DIN";
  position: relative;
  right: 145px;
  top: -5px;
  display: flex;
  justify-content: flex-end;
  margin-left: 10px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  padding: 1em;
  background-color: white;
  margin-top: 5px;
  border-radius: 1em;
  box-shadow: 1px 5px 5px #aaaa;
`;

const NotiList = styled.div`
  min-width: 300px;
`;

const NotiItem = styled.div`
  background-color: ${({ notiType }) => color[notiType]};
  padding: 0 1em;
  color: white;
  display: flex;
  align-item: center;
  margin-bottom: 5px;
  padding-left: 10px;
  border-radius: 1em;
`;

export { NotificationContainer, NotiList, NotiItem, TYPE };
