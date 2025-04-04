import React from 'react';
import { Lightbulb, Check } from 'lucide-react';
import './ImprovementSuggestions.css';

const ImprovementSuggestions = ({ suggestions }) => {
  return (
    <div className="improve-card">
      <div className="improve-header">
        <Lightbulb className="icon-lightbulb" />
        <h2 className="improve-title">Improvement Suggestions</h2>
      </div>

      <div className="suggestions-list">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="suggestion-card">
            <div className="suggestion-header">
              <h3 className="suggestion-title">{suggestion.title}</h3>
              <span className="suggestion-category">{suggestion.category}</span>
            </div>

            <p className="suggestion-description">{suggestion.description}</p>

            {(suggestion.before || suggestion.after) && (
              <div className="before-after-box">
                {suggestion.before && (
                  <div className="before-text">
                    <p className="before-label">Before:</p>
                    <p className="text-content">{suggestion.before}</p>
                  </div>
                )}

                {suggestion.after && (
                  <div className="after-text">
                    <p className="after-label">After:</p>
                    <p className="text-content">{suggestion.after}</p>
                  </div>
                )}
              </div>
            )}

            <div className="suggestion-actions">
              <button className="btn-apply">
                <Check className="check-icon" />
                Apply Fix
              </button>
              <button className="btn-ignore">Ignore</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImprovementSuggestions;