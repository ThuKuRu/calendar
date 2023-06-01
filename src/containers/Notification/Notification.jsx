import React from "react";
import { NotiItem, NotiList, NotificationContainer } from "./index.style";

const Notification = () => {
  const notiList = [
    {
      title: "You have been slain",
      message: "You have been slain",
    },
    {
      title: "You have been slain",
      message: "You have been slain",
    },
    {
      title: "You have been slain",
      message: "You have been slain",
    },
  ];

  return (
    <NotificationContainer>
      <NotiList>
        {notiList.map((noti) => (
          <NotiItem>
            <h3>{noti.title}</h3>
            <p>{noti.message}</p>
            <hr />
          </NotiItem>
        ))}
      </NotiList>
    </NotificationContainer>
  );
};

export default Notification;
