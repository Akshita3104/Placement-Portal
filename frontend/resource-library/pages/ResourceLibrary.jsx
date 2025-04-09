import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import ResourceGrid from "../components/ResourceGrid.jsx";
import "./ResourceLibrary.css";

const ResourceLibrary = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  // Resource data
  const resources = [
    { 
      id: "dsa", 
      name: "Data Structures & Algorithms", 
      description: "Learn essential data structures and algorithms for technical interviews and software development.",
      category: "Programming"
    },
    { 
      id: "frontend", 
      name: "Frontend Development", 
      description: "Master HTML, CSS, JavaScript and modern frameworks like React, Vue and Angular.",
      category: "Web Development"
    },
    { 
      id: "backend", 
      name: "Backend Development", 
      description: "Create robust server-side applications with Node.js, Python, Java, and more.",
      category: "Web Development"
    },
    { 
      id: "aiml", 
      name: "AI & Machine Learning", 
      description: "Dive into artificial intelligence, machine learning fundamentals and neural networks.",
      category: "Data Science"
    },
    { 
      id: "data", 
      name: "Data Analysis", 
      description: "Learn to analyze and visualize data using Python, R, SQL and powerful BI tools.",
      category: "Data Science"
    },
    { 
      id: "devops", 
      name: "DevOps", 
      description: "Master CI/CD pipelines, containerization, and infrastructure as code.",
      category: "Operations"
    },
    { 
      id: "security", 
      name: "Cyber Security", 
      description: "Learn to protect systems and networks from digital attacks and security threats.",
      category: "Security"
    },
    { 
      id: "blockchain", 
      name: "Blockchain", 
      description: "Explore blockchain technology, smart contracts, and decentralized applications.",
      category: "Emerging Tech"
    },
    { 
      id: "mobile", 
      name: "Mobile Development", 
      description: "Build native and cross-platform mobile apps for iOS and Android devices.",
      category: "App Development"
    }
  ];

  // Get unique categories for filtering
  const categories = Array.from(new Set(resources.map(r => r.category)));

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Actual search is already happening through the filter
  };

  // Handle filter click
  const handleFilterClick = (category) => {
    setActiveFilter(category === activeFilter ? "" : category);
  };

  // Filter resources based on search and category
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !activeFilter || resource.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  const handleResourceClick = (resource) => {
    // For now, just log the resource
    console.log("Resource clicked:", resource);
    // In a full implementation, you would navigate to a resource page
    // navigate(`/resources/${resource.id}`);
  };

  return (
    <div className="resource-page">
      <div className="header-section">
        <div className="resource-library-container">
          <h2 className="page-title">Resource Hub</h2>
          <div className="breadcrumbs">
            <div className="breadcrumb-item">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">›</span>
            </div>
            <div className="breadcrumb-item">
              <span className="breadcrumb-active">Resource Hub</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="content-section">
        <div className="resource-library-container">
          <div className="search-filter-container">
            <form onSubmit={handleSearchSubmit} className="search-form">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button type="submit" className="search-button">
                  <Search size={20} color="#fff" />
                </button>
              </div>
            </form>
            
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="resource-grid-container"
          >
            <ResourceGrid 
              resources={filteredResources} 
              onResourceClick={handleResourceClick} 
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResourceLibrary;
