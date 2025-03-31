import React from "react";
import "./ResourceCard.css"; // Styling for the card

const ResourceCard = ({ name, image, onClick }) => {
  return (
    <div className="resource-card" onClick={onClick}>
      <img src={image} alt={name} className="resource-image" />
      <h3 className="resource-name">{name}</h3>
    </div>
  );
};

export default ResourceCard;
