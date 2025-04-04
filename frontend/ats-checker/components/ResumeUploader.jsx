import React, { useState } from 'react';
import { Upload, File, CheckCircle } from 'lucide-react';
import { Progress } from './Progress.jsx'; 
import { toast } from 'sonner';
import './ResumeUploader.css';

const ResumeUploader = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState('');

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    const fileType = file.type;
    if (
      fileType !== 'application/pdf' &&
      fileType !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      toast.error('Please upload a PDF or DOCX file');
      return;
    }

    setFileName(file.name);
    setIsUploading(true);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsUploading(false);
          const dummyText = `Resume: ${file.name}\n\nEDUCATION\nB.Tech in Computer Science, 2023\nEngineering College\n\nSKILLS\nJavaScript, React, HTML, CSS\n\nPROJECTS\nWeather App - Built using React\nTodo App - Built using JavaScript\n\nEXPERIENCE\nIntern at Tech Company, Summer 2022`;
          onUpload(dummyText);
          toast.success('Resume uploaded successfully!');
        }, 500);
      }
    }, 150);
  };

  return (
    <div className="resume-container">
      {!isUploading && !fileName ? (
        <div
          className={`uploader-container ${isDragging ? 'dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          <input
            id="file-upload"
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileInput}
            style={{ display: 'none' }}
          />
          <Upload className="upload-icon" />
          <h3 className="upload-title">Upload your resume</h3>
          <p className="upload-description">
            Drag and drop your resume file here or click to browse
          </p>
          <p className="upload-hint">
            Supports PDF, DOCX (Max 5MB)
          </p>
          <button className="upload-button">Select File</button>
        </div>
      ) : isUploading ? (
        <div className="upload-card">
          <File className="status-icon" />
          <p className="file-name">{fileName}</p>
          <div className="progress-container">
            <Progress value={uploadProgress} />
          </div>
          <p className="upload-status">Analyzing resume... {uploadProgress}%</p>
        </div>
      ) : (
        <div className="upload-card success">
          <CheckCircle className="status-icon success-icon" />
          <p className="success-title">Resume Uploaded</p>
          <p className="file-name">{fileName}</p>
          <button
            className="upload-button-outline"
            onClick={() => {
              setFileName('');
              setUploadProgress(0);
            }}
          >
            Upload Different Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default ResumeUploader;
