import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link className="navbar-title" to="/">Elite Chess Academy</Link>
        <div className="navbar-buttons">
          <Link className="navbar-button" to="/courses">Courses</Link>
          <Link className="navbar-button" to="/tournaments">Tournaments</Link>
          <Link className="navbar-button" to="/plans">Plans</Link>
          <Link className="navbar-button" to="/login">Login</Link>
          <Link className="navbar-button" to="/signup">Signup</Link>
          


        </div>
      </div>
    </div>
  );
};

export default Navbar;
