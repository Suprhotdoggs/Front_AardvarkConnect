import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import "./Signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="account-container">
      <div className="account-box">
        <h2 className="account-title">Create Account</h2>
        <p className="account-subtitle">Join us today!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <AccountCircle className="icon" />
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <AccountCircle className="icon" />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <EmailIcon className="icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account?{" "}
          <a href="/">
            <span className="login-text">Login here</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
