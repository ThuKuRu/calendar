import React from "react";
import { Box } from "@mui/material";
import { ListItemButton, ListItemText, ListItem, List } from "@mui/material";

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
    <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
      <List sx={{ width: 300, bgcolor: "background.paper" }}>
        {notiList.map((noti) => (
          <ListItemButton>
            <ListItemText primary={noti.title} secondary={noti.message} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Notification;
