import React from 'react'; 
import { Link } from "react-router-dom";
import { X } from "lucide-react"; 
import "./Sidebar.css"; 

const Sidebar = ({ isOpen, onClose }) => {
  const handleSidebarClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}onClick={onClose}>
      <div className="sidebar-content" onClick={handleSidebarClick}>
        <button onClick={onClose} className="close-btn">
          <X size={24} /> {/* Lucide React close icon */}
        </button>
        <ul className="menu">
          <li><Link to="/resource-library" onClick={onClose}>Resource Library</Link></li>
          <li><Link to="/resume-builder" onClick={onClose}>Resume Builder</Link></li>
          <li><Link to="/ats-score-checker" onClick={onClose}>ATS Score Checker</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
