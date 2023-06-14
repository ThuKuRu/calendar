import React, { useEffect } from "react";
import { FormTodoStyle, SelectList, MenuItem } from "./index.style";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

function isNotNegativeInteger(number) {
  return Number.isInteger(number) && number >= 0;
}

const FormTodo = ({ close, setActive, id, setId, toDoData, setToDoData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState();
  const [date, setDate] = useState(new Date());
  const [value, setValue] = React.useState("1");
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [saveColor, setSaveColor] = useState("#978f8f");

  const submitForm = () => {
    if (
      isNaN(day) ||
      isNotNegativeInteger(day) ||
      isNaN(hour) ||
      isNotNegativeInteger(hour) ||
      isNaN(minute) ||
      isNotNegativeInteger(minute) ||
      time === "" ||
      title === "" ||
      description === "" ||
      day === "" ||
      hour === "" ||
      minute === ""
    )
      return;
    const todo = {
      id: id,
      name: title,
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
      level: value,
      comple: "false",
    };
    setId(id + 1);
    setToDoData([...toDoData, todo]);
    close();
  };

  useEffect(() => {
    if (
      isNaN(day) ||
      isNotNegativeInteger(day) ||
      isNaN(hour) ||
      isNotNegativeInteger(hour) ||
      isNaN(minute) ||
      isNotNegativeInteger(minute) ||
      time === "" ||
      title === "" ||
      description === "" ||
      day === "" ||
      hour === "" ||
      minute === ""
    ) {
      setSaveColor("#978f8f");
      return;
    }
    setSaveColor("#3f80ea");
  }, [title, description, time, day, hour, minute, date]);

  const handleChange = (event) => {
    setValue(event.target.value);
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
            <div className="headerText">Create new To-do</div>
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

              <div className="formTodo-time-container">
                Duration:
                <div className="formTodo-duration">
                  <div className="duration">
                    <input
                      className="add-form-duration"
                      type="text"
                      placeholder="Day..."
                      value={day}
                      onChange={(e) => {
                        setDay(e.target.value);
                      }}
                    />
                    <label>Day</label>
                    <input
                      className="add-form-duration"
                      type="text"
                      placeholder="hour..."
                      value={hour}
                      onChange={(e) => {
                        setHour(e.target.value);
                      }}
                    />
                    <label>h</label>
                    <input
                      className="add-form-duration"
                      type="text"
                      placeholder="minute..."
                      value={minute}
                      onChange={(e) => {
                        setMinute(e.target.value);
                      }}
                    />
                    <label>m</label>
                  </div>
                </div>
              </div>
              <div className="formTodo-time-container">
                Deadline:
                <div className="formTodo-sche-day">
                  <div class="material-symbols-outlined">schedule</div>
                  <ReactDatePicker
                    selected={date}
                    dateFormat="EEEE, MMMM d"
                    onChange={(date) => setDate(date)}
                  />
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
                    }}
                  />
                </div>
              </div>
              <div className="formTodo-time-container">
                Priority:
                <SelectList value={value} onChange={handleChange}>
                  <MenuItem value="1" selected="selected">
                    Level 1
                  </MenuItem>
                  <MenuItem value="2">Level 2</MenuItem>
                  <MenuItem value="3">Level 3</MenuItem>
                  <MenuItem value="4">Level 4</MenuItem>
                  <MenuItem value="5">Level 5</MenuItem>
                </SelectList>
              </div>
            </div>
            <div className="description">Description:</div>
            <div className="formTodo-address">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add description ..."
              ></textarea>
            </div>
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
    </FormTodoStyle>
  );
};

export default FormTodo;
