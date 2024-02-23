
import React, { useState } from 'react';
// import axios from 'axios';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="signup-container">
    <h1>Register Here!</h1>
    <form onSubmit={handleSubmit}>
      <label>username:</label>
      <input
        type="text"
        name="username"
        placeholder="Enter a username"
        value={user.name}
        onChange={handleInput}
      />
      <br />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Enter an email"
        value={user.email}
        onChange={handleInput}
      />
      <br />
      
      <label>Password:</label>
      <input
        type="number"
        name="phone"
        placeholder="Enter a Phone"
        value={user.phone}
        onChange={handleInput}
      />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Enter a Password"
        value={user.password}
        onChange={handleInput}
      />
      <br />
      <button type="submit">Register</button>
    </form>
    <p>
        Already an account? <Link to="/login">Login </Link>
      </p>
  </div>
);
};

export default Register;