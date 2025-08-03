import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import './Login-Register.css';

const LoginRegister = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await axios.get('http://localhost:4030/api/data');
        const user = response.data.find(
          (user) =>
            user.EMAIL.toLowerCase() === formData.email.toLowerCase() &&
            user.PASSWORD === formData.password
        );
        if (user) {
          alert('Login successful!');
          setIsAuthenticated(true); // Update global authentication state
          navigate('/Home'); // Redirect to the Home page
        } else {
          alert('Invalid credentials! Please register.');
        }
      } else {
        await axios.post('http://localhost:4030/api/data', formData);
        alert('Registration successful! You can now log in.');
        setIsLogin(true);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-register-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          {isLogin ? 'Login' : 'Register'}
        </button>
        <p>
          {isLogin ? "Don't have an account?" : 'Already registered?'}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="toggle-btn"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginRegister;
