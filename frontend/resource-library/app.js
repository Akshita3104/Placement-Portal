import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResourceLibraryPage from "./pages/ResourceLibraryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/resources" element={<ResourceLibraryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
