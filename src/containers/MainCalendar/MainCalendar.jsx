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
import { Overlay, Tooltip } from "react-bootstrap";
import EventPopup from "./EventPopup/EventPopup";
import Popup from "reactjs-popup";
import FormEvent from "../Layout/SideBar/FormEvent/FormEvent";
import FormTodo from "../Layout/SideBar/FormTodo/FormTodo";
import FormReminder from "../Layout/SideBar/FormReminder/FormReminder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainCalendar = ({
  events,
  setEvents,
  id,
  setId,
  toDoData,
  setToDoData,
}) => {
  const [active, setActive] = useState("event");
  var editMode = false;
  const setEditMode = (bool) => {
    editMode = bool;
  };
  const newEvent = {
    title: "",
    date: new Date(),
    startTime: "",
    endTime: "",
    description: "",
    duration: {
      day: "",
      hour: "",
      minute: "",
    },
    deadline: "",
    level: "1",
    color: "#2d7fe0",
    fontColor: "#fff",
  };
  const [eventCache, setEventCache] = useState(newEvent);
  const resetCache = () => {
    setEventCache(newEvent);
  };
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
              : ref.current.getBoundingClientRect().y > 420
              ? "top"
              : "bottom"
          }
          onHide={closeTooltip}
        >
          <Tooltip id="test" style={{ zIndex: 4 }}>
            <EventPopup
              event={event}
              editMode={editMode}
              setEditMode={setEditMode}
              // eventCache={event.event}
              // setEventCache={setEventCache}
              // editMode={editMode}
              // setEditMode={setEditMode}
              // events={events}
              // setEvents={setEvents}
              // resetCache={resetCache}
              // toDoData={toDoData}
              // setToDoData={setToDoData}
              // closeTooltip={closeTooltip}
            />
          </Tooltip>
        </Overlay>
        {/* {editMode && <div>éc éc</div>} */}
      </div>
    );
  }

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

  const eventStyleGetter = (e) => {
    const backgroundColor = e.color;
    return {
      style: {
        backgroundColor: backgroundColor,
        color: e.fontColor,
      },
    };
  };

  return (
    <Container>
      <ToastContainer />
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
        eventPropGetter={eventStyleGetter}
      />
      <div className="createDiv">
        <Popup
          modal
          trigger={
            <div className="createButton">
              <p
                className="create"
                onClick={() => {
                  setEditMode(false);
                }}
              >
                Create
              </p>
            </div>
          }
        >
          {(close) => (
            <div>
              {active === "event" && (
                <FormEvent
                  close={close}
                  setActive={setActive}
                  events={events}
                  setEvents={setEvents}
                  id={id}
                  setId={setId}
                  eventCache={eventCache}
                  setEventCache={setEventCache}
                  resetCache={resetCache}
                  editMode={editMode}
                />
              )}
              {active === "todo" && (
                <FormTodo
                  close={close}
                  setActive={setActive}
                  events={events}
                  setEvents={setEvents}
                  id={id}
                  setId={setId}
                  toDoData={toDoData}
                  setToDoData={setToDoData}
                  eventCache={eventCache}
                  setEventCache={setEventCache}
                  resetCache={resetCache}
                  editMode={editMode}
                />
              )}
              {active === "reminder" && (
                <FormReminder
                  close={close}
                  setActive={setActive}
                  events={events}
                  setEvents={setEvents}
                  id={id}
                  setId={setId}
                  eventCache={eventCache}
                  setEventCache={setEventCache}
                  resetCache={resetCache}
                  editMode={editMode}
                />
              )}
            </div>
          )}
        </Popup>
      </div>
    </Container>
  );
};

export default MainCalendar;
