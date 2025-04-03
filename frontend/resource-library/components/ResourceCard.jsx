import React from "react";
import "./ResourceCard.css";

const ResourceCard = ({ name, image, category, description, onClick }) => {
  return (
    <div className="resource-card" onClick={onClick}>
      <div className="resource-card-image-container">
        <img 
          src={image} 
          alt={name} 
          className="resource-image" 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/images/placeholder.svg"; // Corrected placeholder path
          }}
        />
        <div className="resource-category">{category}</div>
      </div>
      <div className="resource-card-content">
        <h3 className="resource-name">{name}</h3>
        <p className="resource-description">{description}</p>
        <div className="learn-more">
          Learn more <span className="arrow">→</span>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
