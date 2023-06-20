import React, { useState } from "react";
import { LogoutStyle, Modal } from "./index.style";
import AvatarImg from "../../../../img/thu_1.png";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("Thu Thút");
  const [email, setEmail] = useState("thu.thut@example.com");
  const [phone, setPhone] = useState("1234567890");
  const [address, setAddress] = useState("123 Main St");
  const [company, setCompany] = useState("Example Company");
  const login = () => {
    navigate("/login");
  };
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <LogoutStyle>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="user">
        <img className="userAvatar" src={AvatarImg} alt="/" />
        <p className="userName">Thu Thút</p>
      </div>
      <div className="settingWorkspace">
        <div className="settingButton">
          <span class="material-symbols-outlined">person</span>
        </div>
        <p onClick={openModal}>User profile</p>
      </div>
      <div className="leaveWorkspace">
        <div className="leaveButton">
          <span className="material-symbols-outlined" onClick={login}>
            logout
          </span>
        </div>
        <p onClick={login}>Logout</p>
      </div>
      {showModal && (
        <Modal>
          <div className="modalContent">
            {/* Add content and form fields for user information */}
            <h2>User Information</h2>
            <div className="formInput">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <button onClick={closeModal}>Save</button>
          </div>
        </Modal>
      )}
    </LogoutStyle>
  );
};

export default Logout;
