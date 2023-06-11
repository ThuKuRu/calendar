import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import vi from "date-fns/locale/vi";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "./index.style";

const MainCalendar = (props, events) => {
  const locales = {
    "vi-VN": vi,
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  return (
    <Container>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
      <Calendar
        localizer={localizer}
        // events={events}
        startAccessor="start"
        endAccessor="end"
      />
      <div className="createDiv">
        <div className="createButton">
          <p className="create">Create</p>
        </div>
      </div>
    </Container>
  );
};

export default MainCalendar;
