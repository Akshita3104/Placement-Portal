import React from 'react'; 
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ResourceLibrary from "./resource-library/pages/ResourceLibrary";
import ResumeBuilder from "./resume-builder/pages/ResumeBuilder";
import ATSChecker from "./ats-checker/pages/ATSChecker";
import "./App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev); 
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar onMenuClick={toggleSidebar} />
        <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
        <div className="main-content">
          <Routes>
            <Route path="/resource-library" element={<ResourceLibrary />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/ats-score-checker" element={<ATSChecker />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
