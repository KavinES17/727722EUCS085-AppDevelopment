import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Admin.css';
import { FaUsers, FaChartLine, FaCog, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';


const Admin = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); 

  const handleManageUsers = () => {
    alert('Manage Users functionality will be implemented here.');
  };

  const handleViewReports = () => {
    alert('View Reports functionality will be implemented here.');
  };

  const handleSettings = () => {
    alert('Settings functionality will be implemented here.');
  };

  const handleManageContent = () => {
    alert('Manage Content functionality will be implemented here.');
  };

  const handleLogout = () => {
    logout(); 
    navigate('/login'); 
  };

  return (
    <div className='h'>
    <div className="admin-container">
      <div className="admin-header">
        
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin dashboard. Here you can manage users, view reports, and access admin functions.</p>
      </div>
      <div className="admin-functions">
        <div className="admin-card" onClick={handleManageUsers}>
          <FaUsers className="admin-icon" />
          <h2>User Management</h2>
          <p>Manage user accounts, roles, and permissions.</p>
          <button>Manage Users</button>
        </div>
        <div className="admin-card" onClick={handleViewReports}>
          <FaChartLine className="admin-icon" />
          <h2>Reports</h2>
          <p>View and analyze user activity and performance reports.</p>
          <button>View Reports</button>
        </div>
        <div className="admin-card" onClick={handleSettings}>
          <FaCog className="admin-icon" />
          <h2>Settings</h2>
          <p>Configure application settings and preferences.</p>
          <button>Settings</button>
        </div>
        <div className="admin-card" onClick={handleManageContent}>
          <FaFileAlt className="admin-icon" />
          <h2>Content Management</h2>
          <p>Manage articles, courses, and other content.</p>
          <button>Manage Content</button>
        </div>
      </div>
      <div className="admin-footer">
        <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
        <p>© 2024 Elite Chess Academy. All rights reserved.</p>
      </div>
    </div>
    </div>
  );
};

export default Admin;