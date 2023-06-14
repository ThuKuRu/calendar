import React, { useState } from "react";
import { CreateTodoStyle, SelectList, MenuItem } from "./index.style";
import ReactDatePicker from "react-datepicker";

const CreateToDo = ({ close, setActive }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [duration, setDuration] = React.useState("15m");

  const handleChangeDuration = (event) => {
    setValue(event.target.value);
  };

  const [time, setTime] = useState();
  const [date, setDate] = useState(new Date());

  return (
    <CreateTodoStyle>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
      <div className="modal">
        <div className="modal-container">
          <div className="header"> Add To Do </div>
          <div className="content">
            <input
              className="add-form"
              type="text"
              placeholder="Add article..."
            />
            <div className="formCreate-container">
              <div className="formTodo-time-container">
                Duration:
                {/* <SelectList value={duration} onChange={handleChangeDuration}>
                  <MenuItem value="15m" selected="selected">
                    15 minutes
                  </MenuItem>
                  <MenuItem value="30m">30 minutes</MenuItem>
                  <MenuItem value="45m">45 minutes</MenuItem>
                  <MenuItem value="1h">1 hour</MenuItem>
                  <MenuItem value="2h">2 hours</MenuItem>
                  <MenuItem value="3h">3 hours</MenuItem>
                </SelectList> */}
                <div className="duration">
                  <input
                    className="add-form-duration"
                    type="text"
                    placeholder="Day..."
                  />
                  <label>Day</label>
                  <input
                    className="add-form-duration"
                    type="text"
                    placeholder="hour..."
                  />
                  <label>h</label>
                  <input
                    className="add-form-duration"
                    type="text"
                    placeholder="minute..."
                  />
                  <label>m</label>
                </div>
              </div>
              <div className="formTodo-time-container">
                Deadline:
                <div className="formTodo-sche-day">
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

            <div className="formTodo-des">Description: </div>
            <input
              className="add-form"
              type="text"
              placeholder="Add description..."
            />

            <div className="buttonFormCreate">
              <div className="Cancel">
                <a className="cancel" onClick={close} href="/#">
                  Cancel
                </a>
              </div>
              <div className="Save"> Save </div>
            </div>
          </div>
        </div>
      </div>
    </CreateTodoStyle>
  );
};

export default CreateToDo;
