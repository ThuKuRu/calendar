import React from "react";
import { FormEventStyle } from "./index.style";
const FormEvent = ({ close, setActive }) => {
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
            <div className="headerText"> Create New Event </div>
          </div>
          <div className="content">
            <input
              className="add-form"
              type="text"
              placeholder="Add article..."
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
                  <div class="material-symbols-outlined">schedule</div>
                  <div className="formCreate-day">Friday, May 19</div>
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </div>
                <div className="formCreate-times">
                  <div className="formCreate-time">9:30 AM</div>
                  <span class="material-symbols-outlined">arrow_drop_down</span>
                  <span class="dash">-</span>
                  <div className="formCreate-time">10:30 AM</div>
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </div>
              </div>
            </div>

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
              <div className="Save">
                <a className="save" href="/#">
                  Save{" "}
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
