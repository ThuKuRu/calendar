import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import vi from "date-fns/locale/vi";
import React, { useState, useRef } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "./index.style";
import { Overlay, Tooltip} from "react-bootstrap";
import EventPopup from "./EventPopup/EventPopup";

function Event(event) {
  const [showTooltip, setShowTooltip] = useState(false);

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  const openTooltip = () => {
    setShowTooltip(true);
  };
  const ref = useRef(null);

  const getTarget = () => {
    return ref.current;
  };

  return (
    <div ref={ref} onMouseLeave={closeTooltip}>
      <span onMouseOver={openTooltip}>{event.title}</span>
      <Overlay
        rootClose
        target={getTarget}
        show={showTooltip}
        placement={
          ref.current === null
            ? "top"
            : ref.current.getBoundingClientRect().y > 467
            ? "top"
            : "bottom"
        }
        onHide={closeTooltip}
      >
        <Tooltip id="test" style={{ zIndex: 10 }}>
          <EventPopup event={event} />
        </Tooltip>
      </Overlay>
    </div>
  );
}

const MainCalendar = (props, { setEvents }) => {
  const { events } = props;
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
        components={{ event: Event }}
        events={events}
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
