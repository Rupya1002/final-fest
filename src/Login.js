import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

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
          <button onClick={submit}>Login</button>
        </form>
      </div>
      <div className="right-panel">
        <img src="first.gif" alt="Robo" className="robo" />
      </div>
    </div>
  );
};

export default Login;
