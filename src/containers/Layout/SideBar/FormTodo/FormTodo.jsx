import React, { useEffect } from "react";
import { FormTodoStyle, SelectList, MenuItem } from "./index.style";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function isNotNegativeInteger(number) {
  return Number.isInteger(number) && number >= 0;
}

const levelColor = {
  Critical: "#FF0000",
  High: "#FFA500",
  Medium: "#FFFF00",
  Low: "#1AC71A",
  Optional: "#00BFFF",
};

const levelFontColor = {
  Critical: "#fff",
  High: "#fff",
  Medium: "#000",
  Low: "#fff",
  Optional: "#fff",
};

const FormTodo = ({
  close,
  setActive,
  id,
  setId,
  toDoData,
  setToDoData,
  events,
  setEvents,
  eventCache,
  setEventCache,
  resetCache,
  editMode,
}) => {
  const [title, setTitle] = useState(eventCache.title);
  const [description, setDescription] = useState(eventCache.description);
  const [time, setTime] = useState(eventCache.deadline);
  const [date, setDate] = useState(eventCache.deadline);
  const [value, setValue] = useState(eventCache.level);
  const [day, setDay] = useState(eventCache.duration.day);
  const [hour, setHour] = useState(eventCache.duration.hour);
  const [minute, setMinute] = useState(eventCache.duration.minute);
  const [saveColor, setSaveColor] = useState("#978f8f");
  const [saveBgColor, setSaveBgColor] = useState("#d9d9d9");

  const handleToastError = (message) => {
    toast.error(`Error: ${message}`);
  };

  const handleToastSuccess = () => {
    toast.success("To-do created successfully");
  };

  const handleTodo = () => {
    const now = new Date();
    if (
      title === "" ||
      time === "" ||
      date === "" ||
      day === "" ||
      hour === "" ||
      minute === ""
    ) {
      handleToastError("Please fill in all required fields.");
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
      handleToastError("Deadline must be in the future.");
      return;
    }

    if (
      isNotNegativeInteger(day) ||
      isNotNegativeInteger(hour) ||
      isNotNegativeInteger(minute)
    ) {
      handleToastError(
        "Please enter positive integers for day, hour, and minute"
      );
      return;
    }

    if (day < 0 || hour < 0 || minute < 0) {
      handleToastError(
        "Please enter positive integers for day, hour, and minute"
      );
      return;
    }
    const todo = {
      id: editMode ? eventCache.id : id,
      title: title,
      name_img: "thu_1.png",
      assignee: "you",
      assignee_img: "thu_1.png",
      duration: {
        day: day,
        hour: hour,
        minute: minute,
      },
      description: description,
      deadline: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        time.getHours(),
        time.getMinutes()
      ),
      percent: "0",
      level: value,
      comple: "false",
      color: levelColor[value],
      fontColor: levelFontColor[value],
      eventType: "todo",
    };
    if (!editMode) {
      setId(id + 1);
      setToDoData([...toDoData, todo]);
      handleToastSuccess();
    } else {
      setEvents(
        [...events].map((current) => {
          if (current.id === todo.id) {
            return todo;
          }
          return current;
        })
      );
      setToDoData(
        [...toDoData].map((current) => {
          if (current.id === todo.id) {
            return todo;
          }
          return current;
        })
      );
      toast.success("To-do changed successfully");
    }
    close();
    resetCache();
  };

  useEffect(() => {
    const now = new Date();
    setSaveColor("#978f8f");
    setSaveBgColor("#d9d9d9");
    if (
      title === "" ||
      time === "" ||
      date === "" ||
      day === "" ||
      hour === "" ||
      minute === ""
    ) {
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

    if (
      isNotNegativeInteger(day) ||
      isNotNegativeInteger(hour) ||
      isNotNegativeInteger(minute)
    ) {
      return;
    }

    if (day < 0 || hour < 0 || minute < 0) {
      return;
    }
    setSaveColor("#2d7fe0");
    setSaveBgColor("#fff");
  }, [title, description, time, day, hour, minute, date]);

  const handleChange = (e) => {
    setValue(e.target.value);
    let newEvent = eventCache;
    newEvent.level = e.target.value;
    newEvent.color = levelColor[e.target.value];
    setEventCache(newEvent);
  };

  return (
    <FormTodoStyle>
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
            <div className="headerText">
              {!editMode ? "Create new To-do" : "Edit to-do"}
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
                  <button
                    className="formCreate-things "
                    onClick={() => {
                      setActive("event");
                    }}
                  >
                    Event
                  </button>
                  <button className="formCreate-things formCreate-todo">
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
              <div className="formTodo-time-container">
                Duration:
                <div className="formTodo-duration">
                  <div className="duration">
                    <input
                      className="add-form-duration day"
                      type="text"
                      placeholder="..."
                      value={day}
                      onChange={(e) => {
                        setDay(e.target.value);
                        if (!editMode) {
                          let newEvent = eventCache;
                          newEvent.duration.day = e.target.value;
                          setEventCache(newEvent);
                        }
                      }}
                    />
                    <label>day</label>
                    <input
                      className="add-form-duration hour"
                      type="text"
                      placeholder="..."
                      value={hour}
                      onChange={(e) => {
                        setHour(e.target.value);
                        if (!editMode) {
                          let newEvent = eventCache;
                          newEvent.duration.hour = e.target.value;
                          setEventCache(newEvent);
                        }
                      }}
                    />
                    <label>h</label>
                    <input
                      className="add-form-duration minute"
                      type="text"
                      placeholder="..."
                      value={minute}
                      onChange={(e) => {
                        setMinute(e.target.value);
                        if (!editMode) {
                          let newEvent = eventCache;
                          newEvent.duration.minute = e.target.value;
                          setEventCache(newEvent);
                        }
                      }}
                    />
                    <label>m</label>
                  </div>
                </div>
              </div>
              <div className="formTodo-time-container">
                Deadline:
                <div className="deadline">
                  <div className="formTodo-sche-day">
                    <div class="material-symbols-outlined">schedule</div>
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
                      selected={time}
                      placeholderText="Time"
                      onChange={(time) => {
                        setTime(time);
                        if (!editMode) {
                          let newEvent = eventCache;
                          newEvent.deadline = time;
                          setEventCache(newEvent);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="formTodo-time-container">
                Priority:
                <SelectList value={value} onChange={handleChange}>
                  <MenuItem value="Critical" selected="selected">
                    Critical
                  </MenuItem>
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Optional">Optional</MenuItem>
                </SelectList>
              </div>
            </div>
            <div className="description">Description:</div>

            <input
              className="formTodo-address"
              value={description}
              placeholder="Add description ..."
              onChange={(e) => {
                setDescription(e.target.value);
                let newEvent = eventCache;
                newEvent.description = e.target.value;
                setEventCache(newEvent);
              }}
            ></input>

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
                  onClick={handleTodo}
                  href="/#"
                >
                  Save
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormTodoStyle>
  );
};

export default FormTodo;
