import React from "react";
import { FormReminderStyle } from "./index.style";
const FormReminder = ({ close }) => {
  return (
    <FormReminderStyle>
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
          <div className="header"> Create New Reminder </div>
          <div className="content">
            <div className="add-form-reminder">Hallooo</div>

            <div className="formCreate-container">
              <div className="formCreate-container-things">
                <div className="formCreate-things ">Event</div>
                <div className="formCreate-things">To-do</div>
                <div className="formCreate-things formCreate-reminder">
                  Reminder
                </div>
              </div>
              <div className="formCreate-time-container">
                <div className="formCreate-sche-day">
                  <div class="material-symbols-outlined">schedule</div>
                  <div className="formCreate-day">Friday, May 19</div>
                  <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
                <div className="formCreate-times">
                  <div className="formCreate-time">9:30 AM</div>
                  <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
              </div>
            </div>

            <input
              className="add-form-reminder"
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
    </FormReminderStyle>
  );
};

export default FormReminder;
