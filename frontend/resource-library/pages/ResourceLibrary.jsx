import React from "react";
import ResourceCard from "../components/ResourceCard";
import { useNavigate } from "react-router-dom"; // For navigation
import dsaImg from "../assets/DSA.jpg";
import sqlImg from "../assets/SQL.jpg";
import bdImg from "../assets/BD.jpg";
import fdImg from "../assets/FD.jpg";
import "./ResourceLibrary.css"; // Page styling

const resources = [
  { name: "Data Structures", image: dsaImg},
  { name: "Frontend Development", image: sqlImg},
  { name: "Backend Development", image: bdImg},
  { name: "Frontend Development", image: fdImg},
  { name: "AI/ML", image: "https://via.placeholder.com/200"},
  { name: "Data Analysis", image: "https://via.placeholder.com/200"},
  { name: "DevOPS", image: "https://via.placeholder.com/200"},
    { name: "Cyber Security", image: "https://via.placeholder.com/200"},
  { name: "BlockChain", image: "https://via.placeholder.com/200"},
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
