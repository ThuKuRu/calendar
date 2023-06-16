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
  border: 1px solid black;
  padding: 10px;
  background-color: white;
  margin-top: 10px;
`;

const NotiList = styled.div`
  width: 300px;
`;

const NotiItem = styled.div`
  background-color: ${({ notiType }) => color[notiType]};
  color: white;
  display: flex;
  align-item: center;
  margin-bottom: 5px;
  padding-left: 10px;
`;

export { NotificationContainer, NotiList, NotiItem, TYPE };
