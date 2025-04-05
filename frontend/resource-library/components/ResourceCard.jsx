// src/components/ResourceCard.jsx
import React from "react";
import "./ResourceCard.css";
import {
  Code,
  Monitor,
  Database,
  Settings,
  Shield,
  Zap,
  Smartphone
} from "lucide-react";

const ResourceCard = ({ name, category, description, onClick }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Programming":
        return <Code className="category-icon" />;
      case "Web Development":
        return <Monitor className="category-icon" />;
      case "Data Science":
        return <Database className="category-icon" />;
      case "Operations":
        return <Settings className="category-icon" />;
      case "Security":
        return <Shield className="category-icon" />;
      case "Emerging Tech":
        return <Zap className="category-icon" />;
      case "App Development":
        return <Smartphone className="category-icon" />;
      default:
        return <Code className="category-icon" />;
    }
  };

  return (
    <div className="resource-card" onClick={onClick}>
      <div className="resource-card-image-container">
        <div className="resource-card-placeholder">
          <div className="icon-placeholder">{getCategoryIcon(category)}</div>
          <span className="resource-center-text">{name}</span>
        </div>
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
