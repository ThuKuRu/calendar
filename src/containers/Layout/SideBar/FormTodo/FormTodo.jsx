import React from "react";
import { FormTodoStyle } from "./index.style";

const FormTodo = ({ close, setActive }) => {
  return (
    <FormTodoStyle>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      ></link>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
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
                  <div className="formTodo-day">Friday, May 19</div>
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>

                  <div className="formCreate-time">9:30 AM</div>
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </div>
              </div>
              <div className="formTodo-time-container">
                Importance:
                <div className="formTodo-sche-day">
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </div>
              </div>
            </div>

            <div className="formTodo-address">
              Address:
              <br />
              Hanoi University of Science and Technology
            </div>

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
    </FormTodoStyle>
  );
};

export default FormTodo;
