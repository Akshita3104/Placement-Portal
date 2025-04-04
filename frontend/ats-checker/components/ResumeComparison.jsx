import React, { useState } from 'react';
import { FileUp, Check, X, User, FileCode } from 'lucide-react';
import './ResumeComparison.css';

const ResumeComparison = ({ resumeText }) => {
  const [peerResume, setPeerResume] = useState(null);
  const [jobDescription, setJobDescription] = useState(null);

  const handlePeerUpload = () => {
    setPeerResume("Sample peer resume");
  };

  const handleJobDescriptionUpload = () => {
    setJobDescription("Sample job description");
  };

  const comparisonData = [
    {
      category: 'Technical Skills',
      yours: ['JavaScript', 'React', 'HTML', 'CSS'],
      peer: ['JavaScript', 'React', 'TypeScript', 'Node.js', 'Redux'],
      job: ['JavaScript', 'React', 'TypeScript', 'RESTful APIs']
    },
    {
      category: 'Education',
      yours: ['B.Tech in Computer Science, 2023'],
      peer: ['B.S. Computer Science, Top University, 2022'],
      job: ['Bachelor\'s degree in Computer Science or related field']
    },
    {
      category: 'Projects',
      yours: ['Weather App - React', 'Todo App - JavaScript'],
      peer: ['E-commerce Platform - MERN Stack', 'Data Visualization Dashboard - D3.js'],
      job: ['Experience building web applications with modern frameworks']
    },
    {
      category: 'Experience',
      yours: ['Intern at Tech Company, Summer 2022'],
      peer: ['Software Engineer Intern, Big Tech Co. (6 months)', 'Web Developer, Startup (1 year)'],
      job: ['1+ years of experience in web development']
    }
  ];

  return (
    <div className="resume-card">
      <h2 className="resume-title">Resume Comparison</h2>
      <p className="resume-subtext">
        Compare your resume against job requirements and successful resumes in your field.
      </p>

      <div className="compare-container">
        <div className="compare-card">
          <div className="compare-title">
            <User size={18} />
            <span>Your Resume</span>
          </div>
          <p className="small-text">Your uploaded resume is being used for comparison.</p>
        </div>

        <div className={`compare-card ${!peerResume ? 'upload-placeholder' : ''}`}>
          {!peerResume ? (
            <div className="upload-area">
              <FileUp size={24} className="icon-center" />
              <div className="compare-title">Peer Resume</div>
              <p className="small-text">Upload a successful resume in your field for comparison</p>
              <button className="resume-button" onClick={handlePeerUpload}>Upload Peer Resume</button>
            </div>
          ) : (
            <>
              <div className="compare-title">
                <User size={18} />
                <span>Peer Resume</span>
              </div>
              <p className="small-text">A high-performing resume in your field.</p>
            </>
          )}
        </div>
      </div>

      <div className="resume-card inner-card">
        <div className="compare-title">
          <FileCode size={18} />
          <span>Job Description</span>
        </div>
        <div className="job-section">
          <input
            type="text"
            className="job-search-input"
            placeholder="Paste job description or upload a file..."
          />
          <button className="resume-button" onClick={handleJobDescriptionUpload}>Analyze</button>
        </div>
      </div>

      <div className="resume-card inner-card">
        <h3 className="section-title">Comparison Results</h3>

        {comparisonData.map((item, index) => (
          <div key={index} className="comparison-block">
            <h4 className="category-title">{item.category}</h4>
            <div className="grid-container">
              <div>
                <p className="small-bold">Your Resume:</p>
                <ul className="bullet-list">
                  {item.yours.map((skill, i) => (
                    <li key={i}>
                      {skill}
                      {item.job.includes(skill) && (
                        <Check size={14} className="icon success" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="small-bold">Job Requirements:</p>
                <ul className="bullet-list">
                  {item.job.map((req, i) => (
                    <li key={i}>
                      {req}
                      {item.yours.some(s => s.includes(req)) ? (
                        <Check size={14} className="icon success" />
                      ) : (
                        <X size={14} className="icon error" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {peerResume && (
                <div className="peer-block">
                  <p className="small-bold">Peer Resume:</p>
                  <ul className="bullet-list">
                    {item.peer.map((skill, i) => (
                      <li key={i}>
                        {skill}
                        {item.job.includes(skill) && (
                          <Check size={14} className="icon success" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="improvement-card">
          <h4 className="section-title">Improvement Opportunities</h4>
          <ul className="bullet-list">
            <li>Add TypeScript to your technical skills</li>
            <li>Include experience with RESTful APIs</li>
            <li>Highlight more project details quantifying achievements</li>
            <li>Consider more descriptive job titles that align with industry standards</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeComparison;
