import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      axios.post(`http://localhost:8000/api/v1.0/moviebooking/login/`, {
        username: username,
        password: password
      })
      .then((response) => {
        localStorage.setItem("username",response.data.username)
        console.log(`User Logged In successfully!`);
      })
      .catch((error) => {
        console.log(`Username And Password Failure`);
      })
    };
  
  return (
    <div className="container">
      <h2 class="fs-1 fw-bold text-center">LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" class="form-label fw-bold">Username:</label>
          <input
            className="form-control"
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" class="form-label fw-bold">Password:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-outline-danger" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
