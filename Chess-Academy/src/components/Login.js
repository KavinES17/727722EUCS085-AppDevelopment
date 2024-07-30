import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from './AuthContext'; 
import './Auth.css';

const Login = () => {
  const navigate = useNavigate(); 
  const { login } = useAuth(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 

    const isAdmin = email === 'admin@example.com' && password === 'admin123'; 

    if (isAdmin) {
      login({ id: 1, name: 'Admin User', role: 'admin' }); 
      navigate('/admin'); 
    } else {
      login({ id: 2, name: 'Regular User', role: 'user' }); 
      navigate('/'); 
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="cta-button4">Login</button>
      </form>
      <p className="toggle-auth" onClick={() => navigate('/signUp')}>
        Don't have an account? Sign Up
      </p>
    </div>
  );
};

export default Login;