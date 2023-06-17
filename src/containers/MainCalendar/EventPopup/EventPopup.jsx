import React from "react";
import { Container } from "./index.style";

const levelColor = {
  5: "#FF0000",
  4: "#FFA500",
  3: "#FFFF00",
  2: "#1AC71A",
  1: "#00BFFF",
};

const EventPopup = ({ event }) => {
  return (
    <Container value={event.event.level}>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
      <div className="popup">
        <div
          className="colorHeading"
          style={{ backgroundColor: levelColor[event.event.level] }}
        ></div>
        <div className="content">
          <div className="header">{event.title}</div>
          <div className="time">
            {event.event.start.toLocaleTimeString()} -{" "}
            {event.event.start.toLocaleDateString()}
          </div>
          <div className="description">{event.event.description}</div>
        </div>
      </div>
    </Container>
  );
};

export default EventPopup;
