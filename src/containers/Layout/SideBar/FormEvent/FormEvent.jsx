import React, { useEffect } from "react";
import { FormEventStyle } from "./index.style";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormEvent = ({
  close,
  setActive,
  events,
  setEvents,
  id,
  setId,
  eventCache,
  setEventCache,
  resetCache,
  editMode,
}) => {
  const [title, setTitle] = useState(eventCache.title);
  const [description, setDescription] = useState(eventCache.description);
  const [date, setDate] = useState(eventCache.start);
  const [startTime, setStartTime] = useState(eventCache.start);
  const [endTime, setEndTime] = useState(eventCache.end);
  const [saveColor, setSaveColor] = useState("#978f8f");
  const [saveBgColor, setSaveBgColor] = useState("#d9d9d9");

  const submitForm = () => {
    if (startTime === "" || endTime === "" || title === "") return;
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const event = {
      id: editMode ? eventCache.id : id,
      title: title,
      start: new Date(
        year,
        month,
        day,
        startTime.getHours(),
        startTime.getMinutes()
      ),
      end: new Date(year, month, day, endTime.getHours(), endTime.getMinutes()),
      description: description,
      color: "#2d7fe0",
      fontColor: "#fff",
      eventType: "event",
    };
    if (!editMode) {
      setId(id + 1);
      setEvents([...events, event]);
      toast.success("Event created successfully");
    } else {
      setEvents(
        [...events].map((current) => {
          if (current.id === event.id) {
            return event;
          }
          return current;
        })
      );
      toast.success("Event changed successfully");
    }
    resetCache();
    close();
  };

  useEffect(() => {
    const now = new Date();
    setSaveColor("#978f8f");
    setSaveBgColor("#d9d9d9");
    if (title === "" || startTime === "" || date === "" || endTime === "") {
      return;
    }
    const selectedDateTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      startTime.getHours(),
      startTime.getMinutes()
    );
    if (
      selectedDateTime < now ||
      (date.getTime() === now.getTime() && startTime <= now)
    ) {
      return;
    }
    if (startTime >= endTime) {
      return;
    }
    setSaveColor("#2d7fe0");
    setSaveBgColor("#fff");
  }, [title, startTime, endTime, description, date]);

  const handleEvent = () => {
    if (startTime === "" || endTime === "" || title === "" || title === "") {
      toast.error("Error: Please fill in all required fields.");
      return;
    }
    const now = new Date();
    const selectedDateTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      startTime.getHours(),
      startTime.getMinutes()
    );

    if (
      selectedDateTime < now ||
      (date.getTime() === now.getTime() && startTime < now)
    ) {
      toast.error("Error: Selected date and time must be in the future.");
      return;
    }
    if (startTime >= endTime) {
      toast.error("Error: End time must be later than start time.");
      return;
    }
    submitForm();
  };

  return (
    <FormEventStyle>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="modal">
        <div className="modal-container">
          <ToastContainer />
          <div className="header">
            <div className="headerText">
              {" "}
              {!editMode ? "Create new Event" : "Edit event"}{" "}
            </div>
          </div>
          <div className="content">
            <input
              className="add-form"
              type="text"
              placeholder="Add article..."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (!editMode) {
                  let newEvent = eventCache;
                  newEvent.title = e.target.value;
                  setEventCache(newEvent);
                }
              }}
            />
            <div className="formCreate-container">
              {editMode === false && (
                <div className="formCreate-container-things">
                  <button className="formCreate-things formCreate-event">
                    Event
                  </button>

                  <button
                    className="formCreate-things"
                    onClick={() => {
                      setActive("todo");
                    }}
                  >
                    To-do
                  </button>
                  <button
                    className="formCreate-things"
                    onClick={() => {
                      setActive("reminder");
                    }}
                  >
                    Reminder
                  </button>
                </div>
              )}
              <div className="formCreate-time-container">
                <div className="formCreate-sche-day">
                  <div className="material-symbols-outlined">schedule</div>
                  <ReactDatePicker
                    selected={date}
                    dateFormat="EEEE, MMMM d"
                    onChange={(date) => {
                      setDate(date);
                      if (!editMode) {
                        let newEvent = eventCache;
                        newEvent.date = date;
                        setEventCache(newEvent);
                      }
                    }}
                  />
                </div>
                <div className="formCreate-times">
                  <ReactDatePicker
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    selected={startTime}
                    placeholderText="Start time"
                    onChange={(time) => {
                      setStartTime(time);
                      if (!editMode) {
                        let newEvent = eventCache;
                        newEvent.start = time;
                        setEventCache(newEvent);
                      }
                    }}
                  />
                  <div className="dash">-</div>
                  <ReactDatePicker
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    selected={endTime}
                    placeholderText="End time"
                    onChange={(time) => {
                      setEndTime(time);
                      if (!editMode) {
                        let newEvent = eventCache;
                        newEvent.end = time;
                        setEventCache(newEvent);
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            <input
              className="add-form"
              type="text"
              placeholder="Add description..."
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (!editMode) {
                  let newEvent = eventCache;
                  newEvent.description = e.target.value;
                  setEventCache(newEvent);
                }
              }}
            />

            <div className="buttonFormCreate">
              <div className="Cancel">
                <a className="cancel" onClick={close} href="/#">
                  Cancel
                </a>
              </div>
              <div className="Save" style={{ backgroundColor: saveBgColor }}>
                <a
                  className="save"
                  style={{ color: saveColor }}
                  onClick={handleEvent}
                  href="/#"
                >
                  Save
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </FormEventStyle>
  );
};

export default FormEvent;
