import React from "react";
import ResourceCard from "../components/ResourceLibrary/ResourceCard";
import { useNavigate } from "react-router-dom"; // For navigation
import dsaImg from "../assets/dsa.jpg";
import sqlImg from "../assets/sql.jpg";
import "./ResourceLibraryPage.css"; // Page styling

const resources = [
  { name: "Data Structures", image: dsaImg, path: "/resources/dsa" },
  { name: "SQL", image: sqlImg, path: "/resources/sql" },
  { name: "Frontend Development", image: "https://via.placeholder.com/200", path: "/resources/frontend" },
  { name: "Backend Development", image: "https://via.placeholder.com/200", path: "/resources/backend" },
];

const ResourceLibraryPage = () => {
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

export default ResourceLibraryPage;
