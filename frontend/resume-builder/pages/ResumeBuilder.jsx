import React from "react";
import { Link } from "react-router-dom";
import { Upload, Download } from "lucide-react";
import PersonalInfo from "../components/PersonalInfo";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Preview from "../components/Preview";
import "./ResumeBuilder.css";

const ResumeBuilder = () => {
  return (
    <div className="resume-builder">
      <div className="header-section">
        <div className="resource-library-container">
          <h1 className="page-title">Resume Builder</h1>
          <div className="breadcrumbs">
            <div className="breadcrumb-item">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">›</span>
            </div>
            <div className="breadcrumb-item">
              <span className="breadcrumb-active">Resume Builder</span>
            </div>
          </div>
        </div>
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
          <PersonalInfo />
          <Experience />
          <Education />
          <Skills />
        </div>

        <div className="right-panel">
          <Preview />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
