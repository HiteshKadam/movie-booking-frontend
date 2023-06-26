import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToRegistration, setRedirectToRegistration] = useState(false);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8000/api/v1.0/moviebooking/login/`, {
        username: username,
        password: password
      })
      .then((response) => {
        localStorage.setItem('username', response.data.username);
        console.log('User Logged In successfully!');
      })
      .catch((error) => {
        console.log('Username And Password Failure');
      });
  };

  const handleRegister = () => {
    setRedirectToRegistration(true);
  };

  if (redirectToRegistration) {
    return <Navigate replace to="/register" />;
  }

  return (
    <div className="container">
      <h2 className="fs-1 fw-bold text-center">LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label fw-bold">
            Username:
          </label>
          <input
            className="form-control"
            type="text"
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <br></br>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label fw-bold">
            Password:
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <br></br>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-outline-danger" type="submit">
            Login
          </button>
          <button className="btn btn-outline-danger" type="button" onClick={handleRegister}>
            New User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
