import React from "react";
import { FormEditTodoStyle } from "./index.style";
const FormEditTodo = ({ close }) => {
  return (
    <FormEditTodoStyle>
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
          <div className="header"> To Do </div>
          <div className="content">
            <div className="add-form">Conference</div>

            <div className="formCreate-container">
              <div className="formTodo-time-container">
                Khoảng thời gian cho phép:
                <div className="formTodo-sche-day">
                  3 ngày
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </div>
              </div>
              <div className="formTodo-time-container">
                Deadline:
                <div className="formTodo-sche-day">
                  <div className="material-symbols-outlined">schedule</div>
                  <div className="formTodo-day">Friday, May 19</div>
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </div>
              </div>
              <div className="formTodo-time-container">
                Mức độ quan trọng:
                <div className="formTodo-sche-day formTodo-sche-day-level">
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
    </FormEditTodoStyle>
  );
};

export default FormEditTodo;
