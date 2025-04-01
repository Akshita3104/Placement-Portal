import React from "react";
import ResourceCard from "../components/ResourceLibrary/resourceCard"; // Correct path based on the file structure
import { useNavigate } from "react-router-dom"; 
import dsaImg from "../Assets/DSA.jpg"; // Correct image import for DSA
import "./resourceLibrary.css"; // Import the CSS file for styling

const resources = [
  { name: "Data Structures", image: dsaImg, path: "/resources/dsa" },
  { name: "Frontend Development", image: "https://via.placeholder.com/200", path: "/resources/frontend" },
  { name: "Backend Development", image: "https://via.placeholder.com/200", path: "/resources/backend" },
  { name: "AI/ML", image: "https://via.placeholder.com/200", path: "/resources/ai-ml" },
  { name: "Cloud Computing", image: "https://via.placeholder.com/200", path: "/resources/cloud" },
  { name: "Operating Systems", image: "https://via.placeholder.com/200", path: "/resources/os" },
  { name: "Database Systems", image: "https://via.placeholder.com/200", path: "/resources/db" },
  { name: "Software Engineering", image: "https://via.placeholder.com/200", path: "/resources/soe" },
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
