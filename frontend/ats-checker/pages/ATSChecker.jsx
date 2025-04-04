import React, { useState } from 'react';
import ResumeUploader from '../components/ResumeUploader.jsx';
import ResumeScoreCard from '../components/ResumeScoreCard.jsx';
import ImprovementSuggestions from '../components/ImprovementSuggestions.jsx';
import ResumeComparison from '../components/ResumeComparison.jsx';
import './ats.css';
import { FileText, BarChart2, GitCompare} from 'lucide-react';

const ATSChecker = () => {
  const [resumeText, setResumeText] = useState(null);
  const [activeTab, setActiveTab] = useState('upload');
  const handleResumeUpload = (text) => {
    setResumeText(text);
    setActiveTab('analysis');
  };
  
  // Demo data
  const scoreCategories = [
    {
      name: 'Format & Structure',
      score: 65,
      feedback: 'Your resume structure is good, but could use better section organization and headers.',
      status: 'warning'
    },
    {
      name: 'Keywords & Skills',
      score: 48,
      feedback: 'Many important technical skills are missing. Add more relevant keywords.',
      status: 'poor'
    },
    {
      name: 'Work Experience',
      score: 72,
      feedback: 'Good use of action verbs, but quantify your achievements with specific metrics.',
      status: 'warning'
    },
    {
      name: 'Education',
      score: 90,
      feedback: 'Education section is well-formatted and includes relevant coursework.',
      status: 'good'
    }
  ];
  
  const improvementSuggestions = [
    {
      id: 1,
      category: 'Format',
      title: 'Improve Resume Headers',
      description: 'Your section headers are not ATS-friendly. Make them clear and standard.',
      before: 'My Tech Journey',
      after: 'PROFESSIONAL EXPERIENCE'
    },
    {
      id: 2,
      category: 'Keywords',
      title: 'Add Missing Technical Skills',
      description: 'Your resume lacks some key technical skills that are often required.',
      before: 'Skills: JavaScript, HTML, CSS',
      after: 'Technical Skills: JavaScript, React, HTML5, CSS3, Node.js, RESTful APIs, Git'
    },
    {
      id: 3,
      category: 'Content',
      title: 'Quantify Your Achievements',
      description: 'Add specific metrics to your project achievements for more impact.',
      before: 'Developed a weather app using React',
      after: 'Developed a weather app using React that improved user engagement by 40% and reduced load time by 3 seconds'
    },
    {
      id: 4,
      category: 'ATS Compatibility',
      title: 'Remove Graphics and Tables',
      description: 'ATS systems struggle with parsing graphics and tables.',
      before: 'Complex table layout for skills section',
      after: 'Simple bullet-point list of skills'
    }
  ];
  
  return (
    <div className="ats-page">
        <main className="ats-container">
          <div className="ats-mb-8">
            <h1 className="ats-text-3xl ats-font-bold ats-mb-2">ATS Resume Checker</h1>
            <p>
              Optimize your tech resume for Applicant Tracking Systems and stand out to recruiters
            </p>
          </div>
          
          <div className="ats-tabs">
            <div className="ats-tabs-list">
              <div 
                className={`ats-tab ${activeTab === 'upload' ? 'active' : ''}`}
                onClick={() => setActiveTab('upload')}
              >
                <FileText className="w-4 h-4" />
                Upload Resume
              </div>
              <div 
                className={`ats-tab ${activeTab === 'analysis' ? 'active' : ''} ${!resumeText ? 'disabled' : ''}`}
                onClick={() => resumeText && setActiveTab('analysis')}
              >
                <BarChart2 className="w-4 h-4" />
                ATS Analysis
              </div>
              <div 
                className={`ats-tab ${activeTab === 'compare' ? 'active' : ''} ${!resumeText ? 'disabled' : ''}`}
                onClick={() => resumeText && setActiveTab('compare')}
              >
                <GitCompare className="w-4 h-4" />
                Compare
              </div>
            </div>
            
            <div className="ats-tab-content">
              {activeTab === 'upload' && (
                <div className="ats-card">
                  <h2 className="ats-text-xl ats-font-bold ats-mb-6 ats-text-center">Upload Your Resume for ATS Analysis</h2>
                  <ResumeUploader onUpload={handleResumeUpload} />
                  
                  <div className="ats-mt-8 ats-border-t ats-pt-8">
                    <h3 className="ats-text-lg ats-font-semibold ats-mb-4">Why Optimize for ATS?</h3>
                    <p className="ats-mb-4">
                      Over 90% of large companies use Applicant Tracking Systems to filter resumes before they reach human recruiters.
                      Most resumes are rejected by ATS systems before a human even sees them.
                    </p>
                    <div className="ats-grid ats-grid-cols-1 ats-grid-cols-md-2 ats-grid-cols-lg-3 ats-gap-4 ats-mt-6">
                      <div className="metric-card">
                        <div className="metric-value">75%</div>
                        <p className="metric-label">
                          of resumes are rejected by ATS before reaching a recruiter
                        </p>
                      </div>
                      <div className="metric-card">
                        <div className="metric-value">15s</div>
                        <p className="metric-label">
                          average time recruiters spend reviewing a resume
                        </p>
                      </div>
                      <div className="metric-card">
                        <div className="metric-value">3x</div>
                        <p className="metric-label">
                          higher interview chance with an optimized resume
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'analysis' && resumeText && (
                <div className="ats-grid ats-grid-cols-1 ats-grid-cols-lg-2 ats-gap-6">
                  <div>
                    <ResumeScoreCard 
                      overallScore={68} 
                      categories={scoreCategories} 
                    />
                  </div>
                  <div>
                    <ImprovementSuggestions 
                      suggestions={improvementSuggestions}
                    />
                  </div>
                </div>
              )}
               
              {activeTab === 'compare' && resumeText && (
                <ResumeComparison resumeText={resumeText} />
              )}
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default ATSChecker;