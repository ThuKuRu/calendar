import React, { useEffect } from "react";
import {
  FormTodoStyle,
  SelectList,
  MenuItem,
  MemberList,
  MemberMenu,
} from "./index.style";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function isNotNegativeInteger(number) {
  return Number.isInteger(number) && number >= 0;
}

const AddTask = ({
  close,
  id,
  setId,
  currentWorkspace,
  setCurrentWorkspace,
  workspaces,
  setWorkspaces,
  members,
  toDoData,
  setToDoData,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState(new Date());
  const [value, setValue] = React.useState("1");
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [saveColor, setSaveColor] = useState("#978f8f");
  const [saveBgColor, setSaveBgColor] = useState("#d9d9d9");
  const [assignee, setAssignee] = useState("");

  const handleToastError = (message) => {
    toast.error(`Error: ${message}`);
  };

  const handleToastSuccess = () => {
    toast.success("Task created successfully");
  };

  const handleTodo = () => {
    const now = new Date();
    if (
      title !== "" &&
      time !== "" &&
      date !== "" &&
      day !== "" &&
      hour !== "" &&
      minute !== ""
    ) {
      if (assignee === "") {
        handleToastError("Please choose assignee");
        return;
      }
    } else {
      handleToastError("Please fill in all required fields.");
      return;
    }
    // if (
    //   title === "" ||
    //   time === "" ||
    //   date === "" ||
    //   day === "" ||
    //   hour === "" ||
    //   minute === "" ||
    //   assignee === ""
    // ) {
    //   handleToastError("Please fill in all required fields.");
    //   return;
    // }
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

    const workspaceImage = currentWorkspace.teamMems.filter((current) => {
      return current.memberName === assignee;
    });
    const todo = {
      id: id,
      name_img: "thu_1.png",
      memberName: assignee,
      memberAvatar: workspaceImage[0].memberAvatar,
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
      pjName: title,
      pjImg: "python.jpg",
    };

    setId(id + 1);
    let newCurrentWorkspace = {};
    let newWorkspaces = workspaces.map((current) => {
      if (current.id === currentWorkspace.id) {
        let currentNewWorkspace = {
          id: current.id,
          avatar: current.avatar,
          name: current.name,
          todolist: current.todolist,
          teamMems: current.teamMems,
        };
        if (current.todolist === undefined) {
          currentNewWorkspace.todolist = [todo];
          newCurrentWorkspace = currentNewWorkspace;
          return currentNewWorkspace;
        }
        currentNewWorkspace.todolist = [...currentWorkspace.todolist, todo];
        newCurrentWorkspace = currentNewWorkspace;
        return currentNewWorkspace;
      }
      return current;
    });
    setWorkspaces(newWorkspaces);
    setCurrentWorkspace(newCurrentWorkspace);
    if (todo.memberName === "Thu thút") {
      const newTodo = {
        name: todo.pjName,
        name_img: "python.jpg",
        assignee: currentWorkspace.name,
        assignee_img: currentWorkspace.avatar,
        description: todo.description,
        deadline: todo.deadline,
        percent: todo.percent,
        level: todo.level,
        comple: todo.comple,
      };
      setToDoData([...toDoData, newTodo]);
    }
    close();
    handleToastSuccess();
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
      minute === "" ||
      assignee === ""
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
  }, [title, description, time, day, hour, minute, date, assignee]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeSelect = (e) => {
    setAssignee(e.target.value);
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
            <div className="headerText">Assign task</div>
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
              <div className="formTodo-time-container">
                Assignee:
                <div className="assignee">
                  <MemberMenu value={assignee} onChange={handleChangeSelect}>
                    {
                      <MemberList value="" disabled hidden>
                        Choose an Assignee
                      </MemberList>
                    }
                    {members.map((member) => {
                      return (
                        <MemberList key={member.id}>
                          {member.memberName}
                        </MemberList>
                      );
                    })}
                  </MemberMenu>
                </div>
              </div>
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
                      selected={time}
                      placeholderText="Time"
                      onChange={(time) => {
                        setTime(time);
                      }}
                    />
                  </div>
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
            <input
              className="formTodo-address"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add description ..."
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

export default AddTask;
