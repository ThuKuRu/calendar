import React from "react";
import ReactDOM from "react-dom";
import { Formevent } from "./FormEvent.style";
const FormEvent = ({ close }) => {
  return (
    <Formevent>
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
          <div className="header"> Create New Event </div>
          <div className="content">
            <input
              className="add-form"
              type="text"
              placeholder="Add article..."
            />
            <div className="formCreate-container">
              <div className="formCreate-container-things">
                <div className="formCreate-things formCreate-event">Event</div>
                <div className="formCreate-things">To-do</div>
                <div className="formCreate-things">Reminder</div>
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
                  <span>-</span>
                  <div className="formCreate-time">10:30 AM</div>
                  <span class="material-symbols-outlined">arrow_drop_down</span>
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
                <a className="Cancel" onClick={close}>
                  Cancel
                </a>
              </div>
              <div className="Save"> Save </div>
            </div>
          </div>
        </div>
      </div>
    </Formevent>
  );
};

export default FormEvent;
