import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>Home</li>
        <li>Analytics</li>
        <li>Settings</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default Sidebar;
