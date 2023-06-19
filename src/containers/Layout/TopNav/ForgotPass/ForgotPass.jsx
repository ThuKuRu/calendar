import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { LoginStyle } from "./index.style";
import { LoginStyle } from "../../../Login/index.style";

const ForgotPassword = () => {
    const [inputs, setInputs] = useState({
      email: "",
    });
  
    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const navigate = useNavigate();
  
    const handleResetPassword = () => {
      // Add logic to handle password reset
      console.log("Reset password:", inputs.email);
      navigate("/login");
    };
  
    return (
      <div>
        <LoginStyle>
          <form>
            <h2>Forgot Password</h2>
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
            <button type="submit" onClick={handleResetPassword}>
              Reset Password
            </button>
            <div className="formLink">
              <span>Remember your password? </span>
              <Link
                to="/login"
                className="formSignup"
                style={{ textDecoration: "none" }}
              >
                Login
              </Link>
            </div>
          </form>
        </LoginStyle>
      </div>
    );
  };
  
  export default ForgotPassword;
  