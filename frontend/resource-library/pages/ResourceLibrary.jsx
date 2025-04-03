import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResourceCard from "../components/ResourceCard";
import "./ResourceLibrary.css";

// Simple placeholder image
const placeholderImage = "https://via.placeholder.com/150";

// Resource data with categories
const resources = [
  { 
    name: "Data Structures & Algorithms", 
    image: placeholderImage,
    path: "/resources/dsa",
    category: "Programming",
    description: "Learn essential data structures and algorithms for technical interviews and software development."
  },
  { 
    name: "Frontend Development", 
    image: placeholderImage,
    path: "/resources/frontend",
    category: "Web Development",
    description: "Master HTML, CSS, JavaScript and modern frameworks like React, Vue and Angular."
  },
  { 
    name: "Backend Development", 
    image: placeholderImage,
    path: "/resources/backend",
    category: "Web Development",
    description: "Create robust server-side applications with Node.js, Python, Java, and more."
  },
  { 
    name: "Database Management", 
    image: placeholderImage,
    path: "/resources/database",
    category: "Operations",
    description: "Learn SQL, NoSQL databases and data modeling techniques for efficient storage solutions."
  },
  { 
    name: "AI/ML", 
    image: placeholderImage,
    path: "/resources/ai-ml",
    category: "Data Science",
    description: "Explore machine learning algorithms, neural networks, and AI applications."
  },
  { 
    name: "Data Analysis", 
    image: placeholderImage,
    path: "/resources/data-analysis",
    category: "Data Science",
    description: "Master data visualization, statistical analysis, and insights extraction from datasets."
  },
  { 
    name: "DevOps", 
    image: placeholderImage,
    path: "/resources/devops",
    category: "Operations",
    description: "Learn CI/CD pipelines, containerization, and infrastructure automation."
  },
  { 
    name: "Cyber Security", 
    image: placeholderImage,
    path: "/resources/security",
    category: "Security",
    description: "Understand security principles, threat modeling, and defensive programming."
  },
  { 
    name: "Blockchain", 
    image: placeholderImage,
    path: "/resources/blockchain",
    category: "Emerging Tech",
    description: "Explore distributed ledger technologies, smart contracts, and cryptocurrency fundamentals."
  },
];

// All available categories for filters
const categories = [
  "Programming", 
  "Web Development", 
  "Data Science", 
  "Operations", 
  "Security", 
  "Emerging Tech", 
  "App Development"
];

const ResourceLibrary = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter click
  const handleFilterClick = (category) => {
    setActiveFilter(category === activeFilter ? "" : category);
  };

  // Filter resources based on search term and active filter
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "" || resource.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="resource-library">
      <h1 className="page-title">Resource Hub</h1>
      
      <p className="page-subtitle">
        Discover curated learning resources to enhance your skills and accelerate your career in technology.
      </p>
      
      <div className="search-filter-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="filter-container">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-button ${activeFilter === category ? 'active' : ''}`}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="resource-grid">
        {filteredResources.map((resource, index) => (
          <ResourceCard
            key={index}
            name={resource.name}
            image={resource.image}
            category={resource.category}
            description={resource.description}
            onClick={() => handleCardClick(resource.path)}
          />
        ))}
      </div>
    </div>
  );
  
  // Function to handle card clicks
  function handleCardClick(path) {
    console.log("Navigating to:", path);
    navigate(path);
  }
};

export default ResourceLibrary;
