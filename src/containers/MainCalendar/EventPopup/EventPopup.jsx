import React from "react";
import { Container } from "./index.style";
import { useState } from "react";

const EventPopup = ({ event }) => {
  

  return (
    <Container>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
      <div className="popup">
        <div className="colorHeading"></div>
        <div className="content">
          <div className="header">{event.title}</div>
          <div className="time">{event.event.start.toLocaleTimeString()} - {event.event.start.toLocaleDateString()}</div>
          <div className="description">{event.event.description}</div>
        </div>
      </div>
    </Container>
  );
};

export default EventPopup;
