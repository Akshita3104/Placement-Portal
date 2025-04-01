import React from "react";
import ResourceCard from "../components/ResourceCard";
import { useNavigate } from "react-router-dom"; // For navigation
import dsaImg from "../assets/DSA.jpg";
import "./ResourceLibrary.css"; // Page styling

const resources = [
  { name: "Data Structures", image: dsaImg, path: "/resources/dsa" },
  { name: "Frontend Development", image: "https://via.placeholder.com/200", path: "/resources/frontend" },
  { name: "Backend Development", image: "https://via.placeholder.com/200", path: "/resources/backend" },
];

const ResourceLibrary = () => {
  const navigate = useNavigate();

  return (
    <div className="resource-library">
      <h2 className="page-title">Resource Library</h2>
      <div className="resource-grid">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            name={resource.name}
            image={resource.image}
            onClick={() => navigate(resource.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResourceLibrary;
