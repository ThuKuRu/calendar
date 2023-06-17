import React from "react";
import { LogoutStyle } from "./index.style";
import AvatarImg from "../../../../img/thu_1.png";
import { Link } from "react-router-dom";

const Logout = () => {
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
      <div className="users">Xem tất cả trang cá nhân</div>
      <div className="settingWorkspace">
        <div className="settingButton">
          <span class="material-symbols-outlined">settings</span>
        </div>
        <p>Cài đặt & Quyền riêng tư</p>
      </div>
      <div className="leaveWorkspace">
        <div className="leaveButton">
          <span className="material-symbols-outlined">logout</span>
        </div>
        <p>
          <Link className="logout" to="/login">
            Đăng xuất
          </Link>
        </p>
      </div>
    </LogoutStyle>
  );
};

export default Logout;
