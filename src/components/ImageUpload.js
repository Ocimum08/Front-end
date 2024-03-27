import React, { useState, useRef } from 'react';
import axios from 'axios';
import ResultsDisplay from './ResultsDisplay';

// Replace with your actual Azure endpoint and Key
const AZURE_CONFIG = {
  ENDPOINT: 'https://surveillance-object-detection.cognitiveservices.azure.com/', 
  SUBSCRIPTION_KEY: '393e9efc71714cb9bcb6e0d81cd2927c', 
};

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null); // Add error state
  const fileInputRef = useRef(null); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      setPreviewImage(URL.createObjectURL(file)); 
    } else {
      setPreviewImage(null); 
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setErrorMessage(null); // Clear any previous errors

    try {
      const formData = new FormData();
      formData.append('image', selectedFile); 

      const response = await axios.post(AZURE_CONFIG.ENDPOINT, formData, {
        headers: { 'Ocp-Apim-Subscription-Key': AZURE_CONFIG.SUBSCRIPTION_KEY }
      });

      // ... Continue with parsing response and setting analysisData
      setAnalysisData(parseAnalysisData(response.data)); 

    } catch (error) {
      console.error('Error:', error); 
      setErrorMessage("Error analyzing image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to parse Azure Response based on service 
  const parseAnalysisData = (data) => {
     // Implement logic to parse data based on the selected service
     // (Object Detection, Anomaly Detection, etc.)
  }

  return (
      <div className="container image-upload-area">
        <div className="form-group">
          <label htmlFor="imageInput">
            <i className="fas fa-cloud-upload-alt mr-2"></i> Upload Image: 
          </label>
          <input 
            type="file" 
            className="form-control-file" 
            id="imageInput" 
            onChange={handleFileChange}
            ref={fileInputRef} 
          />
        </div>

        {previewImage && (
          <div className="image-preview-container">
            <img src={previewImage} alt="Selected" className="img-preview" /> 
          </div>
        )}

        <button 
          type="button" 
          className="btn btn-primary" 
          onClick={handleSubmit} 
          disabled={isLoading || !selectedFile} // Disable if no file selected
        >
          {isLoading ? (
            <>
              <i className="fas fa-spinner fa-spin mr-2"></i> Analyzing... 
            </>
          ) : (
            'Analyze'
          )}
        </button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {analysisData && <ResultsDisplay analysisData={analysisData}></ResultsDisplay>} 
      </div>
  );
};

export default ImageUpload;
