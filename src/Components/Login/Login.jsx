import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import "./Login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please login to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <AccountCircle className="icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <LockIcon className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="forgot-password">
          Forgot Password? <span className="reset-link">Reset here</span>
        </p>
        <a href="/signup" className="create-account-link">
          <button className="create-button">Create new account</button>
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
