import React from 'react'; 
import { Link } from "react-router-dom";
import { FileType2, LibraryBig, FileCheck2, Library} from "lucide-react"; 
import "./Sidebar.css"; 

const Sidebar = ({ isOpen, onClose }) => {
  const handleSidebarClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}onClick={onClose}>
      <div className="sidebar-content" onClick={handleSidebarClick}>
        <ul className="menu">
          <li><LibraryBig size={20} /><Link to="/resource-library" onClick={onClose}>Resource Library</Link></li>
          <li><FileType2 size={20} /><Link to="/resume-builder" onClick={onClose}>Resume Builder</Link></li>
          <li><FileCheck2 size={20} /><Link to="/ats-score-checker" onClick={onClose}>ATS Score Checker</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
