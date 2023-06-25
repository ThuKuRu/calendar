import React from "react";
import { NotiItem, NotiList, NotificationContainer } from "./index.style";
import { TYPE } from "./index.style";

const Notification = () => {
  const notiList = [
    {
      message: "A task is now overdue. Try better to complete all of them!",
      type: TYPE.ERROR,
    },
    {
      message:
        "You have been added to a new workspace. Get ready to achieve great things together!",
      type: TYPE.INFO,
    },
    {
      message: "Successfully create an event.Well done!",
      type: TYPE.SUCCESS,
    },
  ];

  return (
    <NotificationContainer>
      <link
        href="https://fonts.googleapis.com/css?family=DIN"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <NotiList>
        {notiList.map((noti) => (
          <NotiItem notiType={noti.type}>
            <div>
              <p>{noti.message}</p>
            </div>
          </NotiItem>
        ))}
      </NotiList>
    </NotificationContainer>
  );
};

export default Notification;
