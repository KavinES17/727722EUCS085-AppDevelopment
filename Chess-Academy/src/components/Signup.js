import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Auth.css';

const Signup = () => {
  const navigate = useNavigate(); 
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" required />
        </div>
        <button type="submit" className="cta-button4">Sign Up</button>
      </form>
      <p className="toggle-auth" onClick={() => navigate('/login')}>
        Already have an account? Login
      </p>
    </div>
  );
};

export default Signup;