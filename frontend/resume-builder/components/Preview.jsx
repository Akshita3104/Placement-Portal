import React from "react";
import { FileText } from "lucide-react";

const Preview = () => {
  return (
    <div className="section">
      <h2>Preview</h2>
      <div className="preview">
        <FileText size={48} className="preview-icon" />
      </div>
    </div>
  );
};

export default Preview;
