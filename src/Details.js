// src/Login.js
import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [event, setEvent] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    // Save all details to localStorage
    localStorage.setItem("username", username.toUpperCase());
    localStorage.setItem("email", email);
    localStorage.setItem("college", college);
    localStorage.setItem("branch", branch);
    localStorage.setItem("year", year);
    localStorage.setItem("event", event);

    navigate("/profile");
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="login-text">
          <h1>Welcome to the Fest</h1>
          <p>Join us for an amazing experience!</p>
        </div>
        <form className="login-form" onSubmit={submit}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="College"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
          <input
            type="text"
            placeholder="Branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
          <input
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            type="text"
            placeholder="Event Name"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="right-panel">
        <img src="first.gif" alt="Robo" className="robo" />
      </div>
    </div>
  );
};

export default Login;
