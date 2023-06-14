import React from "react";
import { FormTodoStyle, SelectList, MenuItem } from "./index.style";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

const FormTodo = ({ close, setActive }) => {
  const [time, setTime] = useState();
  const [date, setDate] = useState(new Date());
  const [value, setValue] = React.useState("1");

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
                <div className="formTodo-sche-day">
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
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
            <div className="description">
              Description:
            </div>
            <div className="formTodo-address">
              <textarea placeholder="Add description ..."></textarea>
            </div>
            <div className="buttonFormCreate">
              <div className="Cancel">
                <a className="cancel" onClick={close} href="/#">
                  Cancel
                </a>
              </div>
              <div className="Save">
                <a className="save" href="/#">
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
