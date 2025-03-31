import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResourceLibraryPage from "./pages/resourceLibrary"; // Update to match the correct filename

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResourceLibraryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
