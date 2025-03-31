import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ResumeBuilder from './pages/ResumeBuilder';
import AtsChecker from './pages/Atschecker';



function App() {
  return (
    <Router>
      <div className="main-container">
        <Sidebar />
        <main style={{ flex: 1, padding: '16px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/resume/ats-checker" element={<AtsChecker />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
