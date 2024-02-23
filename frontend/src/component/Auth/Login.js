
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // const navigate = useNavigate();

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={''}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="Enter an email"
            value={user.email}
            onChange={handleInput}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            name="password"
            placeholder='Enter a Password'
            value={user.password}
            onChange={handleInput}
          />
        </label>
        <br />
        <button type="submit">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Signup here</Link>
      </p>
    </div>
  );
};

export default Login;
