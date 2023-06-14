import React, { useEffect } from "react";
import { FormEventStyle } from "./index.style";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

const FormEvent = ({ close, setActive, events, setEvents, id, setId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [saveColor, setSaveColor] = useState("#978f8f");

  const submitForm = () => {
    if (startTime === "" || endTime === "" || title === "") return;
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const event = {
      id: id,
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
    };
    setId(id + 1);
    setEvents([...events, event]);
    close();
  };

  useEffect(() => {
    if (startTime === "" || endTime === "" || title === "") {
      setSaveColor("#978f8f");
      return;
    }
    setSaveColor("#3f80ea");
  }, [title, startTime, endTime]);

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
          <div className="header">
            <div className="headerText"> Create new Event </div>
          </div>
          <div className="content">
            <input
              className="add-form"
              type="text"
              placeholder="Add article..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="formCreate-container">
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
              <div className="formCreate-time-container">
                <div className="formCreate-sche-day">
                  <div className="material-symbols-outlined">schedule</div>
                  <ReactDatePicker
                    selected={date}
                    dateFormat="EEEE, MMMM d"
                    onChange={(date) => setDate(date)}
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
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="buttonFormCreate">
              <div className="Cancel">
                <a className="cancel" onClick={close} href="/#">
                  Cancel
                </a>
              </div>
              <div className="Save">
                <a
                  className="save"
                  style={{ color: saveColor }}
                  onClick={submitForm}
                  href="/#"
                >
                  Save
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormEventStyle>
  );
};

export default FormEvent;
