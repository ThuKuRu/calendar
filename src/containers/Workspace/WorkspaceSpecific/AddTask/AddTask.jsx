import React, { useState, useEffect } from "react";
import { AddTaskStyle, SelectList, MenuItem } from "./index.style";
import ReactDatePicker from "react-datepicker";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function isNotNegativeInteger(number) {
  return Number.isInteger(number) && number >= 0;
}

const CreateToDo = ({ close, id, currentWorkspace }) => {
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState();
  const [date, setDate] = useState(new Date());
  const [value, setValue] = React.useState("1");
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [saveColor, setSaveColor] = useState("#978f8f");
  const [saveBgColor, setSaveBgColor] = useState("#d9d9d9");

  const handleToastError = (message) => {
    toast.error(`Error: ${message}`);
  };

  const handleToastSuccess = () => {
    toast.success("Success: Todo created successfully");
  };
  const handleTodo = () => {
    const now = new Date();
    if (
      title === "" ||
      description === "" ||
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
      id: id,
      name: title,
      name_img: "thu_1.png",
      assignee: assignee,
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
    };
    close();
    handleToastSuccess();
  };

  useEffect(() => {
    const now = new Date();
    setSaveColor("#978f8f");
    setSaveBgColor("#d9d9d9");
    if (
      title === "" ||
      description === "" ||
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

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <AddTaskStyle>
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
            <div className="headerText">Add Task</div>
          </div>
          <div className="content">
            <input
              className="add-form"
              type="text"
              placeholder="Add article..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="add-assignee"
              type="text"
              placeholder="Add assignee..."
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            />
            <div className="formCreate-container">
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
    </AddTaskStyle>
  );
};

export default CreateToDo;
