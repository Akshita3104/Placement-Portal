import React from 'react'; 
import { Bell, User, Menu } from "lucide-react";
import "./Navbar.css"; 

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={onMenuClick}>
        <Menu size={24} />
      </button>
      <div className="nav-icons">
        <Bell size={24} />
        <User size={24} />
        <span className="username">Username</span>
      </div>
    </nav>
  );
};

export default Navbar;
