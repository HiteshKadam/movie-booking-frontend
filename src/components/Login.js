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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
