import React, { useState } from "react";
import { FileText, Upload, Download } from "lucide-react";
import "./ResumeBuilder.css"; 

const ResumeBuilder = () => {
  const [atsScore, setAtsScore] = useState(null);

  const calculateATSScore = () => {
    const score = Math.floor(Math.random() * 30) + 70;
    setAtsScore(score);
  };

  return (
    <div className="resume-builder">
      <div className="header">
        <h1>Resume Builder</h1>
        <div className="buttons">
          <button className="btn-outline">
            <Upload size={18} /> Import
          </button>
          <button className="btn">
            <Download size={18} /> Export PDF
          </button>
        </div>
      </div>

      <div className="content">
        <div className="left-panel">
          <div className="section">
            <h2>Personal Information</h2>
            <label>Full Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Phone</label>
            <input type="tel" />
          </div>

          <div className="section">
            <h2>Experience</h2>
            <button className="btn-outline full-width">+ Add Experience</button>
          </div>

          <div className="section">
            <h2>Education</h2>
            <button className="btn-outline full-width">+ Add Education</button>
          </div>

          <div className="section">
            <h2>Skills</h2>
            <button className="btn-outline full-width">+ Add Skills</button>
          </div>
        </div>

        <div className="right-panel">
          <div className="section">
            <h2>Preview</h2>
            <div className="preview">
              <FileText size={48} className="preview-icon" />
            </div>
          </div>

          <div className="section">
            <h2>ATS Score Checker</h2>
            {atsScore !== null ? (
              <div className="score-box">
                <div className="score">{atsScore}%</div>
                <p>Your resume is well-optimized for ATS systems!</p>
              </div>
            ) : (
              <button className="btn full-width" onClick={calculateATSScore}>
                Check ATS Score
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
