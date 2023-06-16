import React, { useState } from "react";
import { LoginStyle } from "./index.style";
import { Link } from "react-router-dom";
import Facebook from "../../img/facebook.png";
import Google from "../../img/google.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [toggleEye, setToggleEye] = useState(false);

  const [inputType, setInputType] = useState("password");

  const handleToggle = (e) => {
    setToggleEye(!toggleEye);
    setInputType(inputType === "password" ? "text" : "password");
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  // Handle the login button click
  const handleLogin = () => {
    navigate("/");
  };

  console.log(inputs);
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <LoginStyle>
        <form>
          <h2>Login Karenda</h2>
          <div className="formInput">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="formInput pass">
            <input
              type={inputType}
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <div className="eyeIcon" onClick={handleToggle}>
              {toggleEye ? (
                <span class="material-icons"> visibility </span>
              ) : (
                <span class="material-icons"> visibility_off </span>
              )}
            </div>
          </div>
          <button type="submit" onClick={handleLogin}>
            Login
          </button>

          <div className="formLink">
            <span>Don't have an account?</span>
            <Link
              to="/register"
              className="formSignup"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Sign Up
            </Link>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <Link
              to="#"
              className="facebook"
              style={{ textDecoration: "none" }}
            >
              <img src={Facebook} alt="" className="facebookIcon" />
              <span>Login with Facebook</span>
            </Link>
          </div>
          <div className="media-options">
            <Link
              to="#"
              className="facebook google"
              style={{ textDecoration: "none" }}
            >
              <img src={Google} alt="" className="googleImg" />
              <span>Login with Google</span>
            </Link>
          </div>
        </form>
      </LoginStyle>
    </div>
  );
};

export default Login;
