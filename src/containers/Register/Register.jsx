import React, { useState } from "react";
import { RegisterStyle } from "./index.style";
import FormInputComponent from "./FormInput/FormInput";
import { Link } from "react-router-dom";
import Facebook from "../../img/facebook.png";
import Google from "../../img/google.png";

const Register = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number, 1 special character",
      pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      errorMessage: "Password don't match",
      pattern: inputValues.password,
      required: true,
    },
  ];

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  console.log(inputValues);
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
      <RegisterStyle>
        <form>
          <h2>Register Karenda</h2>
          {inputs.map((input) => (
            <FormInputComponent
              key={input.id}
              {...input}
              value={inputValues[input.name]}
              onChange={handleChange}
            />
          ))}
          <button type="submit">Register</button>

          <div className="formLink">
            <span>Already have an account?</span>
            <Link
              to="/login"
              className="formSignup"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Sign In
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
      </RegisterStyle>
    </div>
  );
};

export default Register;
