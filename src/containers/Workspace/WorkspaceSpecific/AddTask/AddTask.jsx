import React, { useState, useEffect } from "react";
import { AddTaskStyle } from "./index.style";
import ReactDatePicker from "react-datepicker";

function isNotNegativeInteger(number) {
  return Number.isInteger(number) && number >= 0;
}

const AddTask = ({
  close,
  id,
  setId,
  currentWorkspace,
  workspaces,
  setWorkspaces,
}) => {
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
      percent: "0",
      level: value,
      comple: "false",
    };
    setId(id + 1);
    setWorkspaces([...workspaces, todo]);
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
            <div className="headerText">Add new task</div>
          </div>
        </div>
      </div>
    </AddTaskStyle>
  );
};

export default AddTask;
