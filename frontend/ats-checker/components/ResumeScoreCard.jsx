import React from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import './ResumeScoreCard.css';

const ResumeScoreCard = ({ overallScore, categories }) => {

  const getScoreColor = (score) => {
    switch (true) {
      case score >= 80:
        return 'score-good';
      case score >= 60:
        return 'score-warning';
      default:
        return 'score-poor';
    }
  };

  const getScoreIcon = (score) => {
    switch (getScoreColor(score)) {
      case 'score-good':
        return <CheckCircle className="score-icon" style={{ color: 'green' }} />;
      case 'score-warning':
        return <AlertCircle className="score-icon" style={{ color: 'orange' }} />;
      case 'score-poor':
        return <XCircle className="score-icon" style={{ color: 'red' }} />;
      default:
        return null;
    }
  };

  return (
    <div className="resume-card">
      <div className="resume-card-header">
        <h2 className="resume-title">ATS Compatibility Score</h2>
        <div className="resume-score-wrapper">
          <div className={`resume-score ${getScoreColor(overallScore)}`}>
            {overallScore}%
          </div>
        </div>
        <p className="resume-subtext">
          {(() => {
            switch (true) {
              case overallScore >= 80:
                return 'Excellent! Your resume is well-optimized for ATS systems.';
              case overallScore >= 60:
                return 'Good start, but there is room for improvement.';
              default:
                return 'Your resume needs significant improvements for ATS compatibility.';
            }
          })()}
        </p>
      </div>

      <div className="resume-analysis">
        <h3 className="resume-section-title">Detailed Analysis</h3>

        <div className="resume-category-list">
          {categories.map((category, index) => (
            <div key={index} className="resume-category-card">
              <div className="resume-category-header">
                <div className="resume-category-info">
                  {getScoreIcon(category.score)}
                  <h4 className="resume-category-name">{category.name}</h4>
                </div>
                <span className={`resume-category-score ${getScoreColor(category.score)}`}>
                  {category.score}%
                </span>
              </div>
              <p className="resume-feedback">{category.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeScoreCard;
