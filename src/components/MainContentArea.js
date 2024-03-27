import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ResultsDisplay from './ResultsDisplay';
import AnomalyDetection from './AnomalyDetection';
import CountingCar from './CountingCar';
import FacialRecognition from './FacialRecognition';
import LicensePlateRecognition from './LicensePlateRecognition';
import ObjectDetection from './ObjectDetection';
import PeopleCounting from './PeopleCounting';

const MainContentArea = ({services}) => {
  console.log(services, "Services"); 
  const [selectedService, setSelectedService] = useState("anomalyDetection");
  const [analysisData, setAnalysisData] = useState([]); // Updated name
  const [isLoading, setIsLoading] = useState(false);

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
    setAnalysisData([]); // Reset analysis data when switching services
  };

  const handleImageUpload = (image) => {
    setAnalysisData(null); // Reset results when a new image is uploaded
    setIsLoading(true);

    // TODO: 1. Send image to Azure Cognitive Services for analysis
    // TODO: 2. Receive analysis results from Azure
    // TODO: 3. Set analysisData with parsed results (using a helper function)
    // TODO: 4. Set isLoading to false
  };

  return (
    <div className="container-fluid main-content-area">
      <div className="row services-row">
        {
          services.map((data,index)=>{
            return (
              <div key={index} className="col-md-2 service-item">
                <button onClick={() => handleServiceClick(data.name)}>
                  {data.label}
                </button>
              </div>
            )
          })
        }
      </div>

      <div className="row">
        <div className="col-md-4"> 
          <ImageUpload 
            onImageUpload={handleImageUpload}
            disabled={isLoading}
          />
        </div>

        <div className="col-md-8">
          {isLoading ? (
            <p className="loading-message">
              <i className="fas fa-spinner fa-spin"></i> Analyzing image...
            </p>
          ) : (
            <div className="service-component-area"> 
              {selectedService === 'anomalyDetection' && (
                <AnomalyDetection analysisData={analysisData} />
              )}
              {selectedService === 'countingCar' && (
                <CountingCar analysisData={analysisData} />
              )}
              {selectedService === 'facialRecognition' && (
                <FacialRecognition analysisData={analysisData} />
              )}
              {selectedService === 'peopleCounting' && (
                <PeopleCounting analysisData={analysisData} />
              )}
              {selectedService === 'objectDetection' && (
                <ObjectDetection analysisData={analysisData} />
              )}
              {selectedService === 'licensePlateRecognition' && (
                <LicensePlateRecognition analysisData={analysisData} />
              )}
              {/* Add similar conditionals for other services */}
            </div>
          )}
        </div> 
      </div>

      {/* Results Display */}
      <div className="row">
        <div className="col-md-12">
          <ResultsDisplay analysisData={analysisData} />
        </div>
      </div>
    </div>
  );
};

export default MainContentArea;
