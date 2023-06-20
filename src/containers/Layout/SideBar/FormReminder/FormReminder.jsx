import React, { useEffect } from "react";
import { FormReminderStyle } from "./index.style";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormReminder = ({
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
  const [date, setDate] = useState(eventCache.date);
  const [time, setTime] = useState(eventCache.deadline);
  const [saveColor, setSaveColor] = useState("#978f8f");
  const [saveBgColor, setSaveBgColor] = useState("#d9d9d9");

  const handleRemind = () => {
    const now = new Date();
    if (title === "" || time === "" || date === " ") {
      toast.error("Error: Please fill in all required fields.");
      return;
    }
    const selectedDateTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes()
    );
    if (
      selectedDateTime < now ||
      (date.getTime() === now.getTime() && time < now)
    ) {
      toast.error("Error: Reminder time must be in the future");
      return;
    }

    const event = {
      id: id,
      title: title,
      deadline: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        time.getHours(),
        time.getMinutes()
      ),
      description: description,
      start: selectedDateTime,
      end: selectedDateTime,
      color: "#2d7fe0",
      fontColor: "#fff",
      eventType: "reminder",
    };
    setId(id + 1);
    setEvents([...events, event]);
    toast.success("Reminder created successfully");
    resetCache();
    close();
  };

  useEffect(() => {
    const now = new Date();
    setSaveColor("#978f8f");
    setSaveBgColor("#d9d9d9");
    if (title === "" || time === "" || date === " ") {
      return;
    }
    const selectedDateTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes()
    );
    if (
      selectedDateTime < now ||
      (date.getTime() === now.getTime() && time < now)
    ) {
      return;
    }
    setSaveColor("#2d7fe0");
    setSaveBgColor("#fff");
  }, [title, time, description, date]);

  return (
    <FormReminderStyle>
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
          <div className="header">
            <div className="headerText">Create new Reminder</div>
          </div>
          <div className="content">
            <input
              className="add-form"
              type="text"
              placeholder="Add article..."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                let newEvent = eventCache;
                newEvent.title = e.target.value;
                setEventCache(newEvent);
              }}
            />
            <div className="formCreate-container">
              {editMode === false && (
                <div className="formCreate-container-things">
                  <button
                    className="formCreate-things "
                    onClick={() => {
                      setActive("event");
                    }}
                  >
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
                  <button className="formCreate-things formCreate-reminder">
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
                      let newEvent = eventCache;
                      newEvent.date = date;
                      setEventCache(newEvent);
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
                    selected={time}
                    placeholderText="Time"
                    onChange={(time) => {
                      setTime(time);
                      let newEvent = eventCache;
                      newEvent.deadline = time;
                      setEventCache(newEvent);
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
                let newEvent = eventCache;
                newEvent.description = e.target.value;
                setEventCache(newEvent);
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
                  onClick={handleRemind}
                  href="/#"
                >
                  Save
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormReminderStyle>
  );
};

export default FormReminder;
