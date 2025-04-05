// src/components/ResourceGrid.jsx
import React from "react";
import ResourceCard from "./ResourceCard";
import "./ResourceGrid.css";

const ResourceGrid = ({ resources, onResourceClick }) => {
  return (
    <div className="resource-grid">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          name={resource.name}
          category={resource.category}
          description={resource.description}
          onClick={() => onResourceClick(resource)}
        />
      ))}
    </div>
  );
};

export default ResourceGrid;
