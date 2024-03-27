import React from 'react';

const ObjectDetection = (detections) => {
  const {analysisData} = detections;

  return (
    <div className="object-detection-results">
      <h3>Object Detections:</h3>

      {analysisData.length === 0 ? (
        <p className="no-objects-detected">No objects detected.</p>
      ) : (
        <ul className="object-list">
          {analysisData.map((object, index) => (
            <li key={index}>
              <div className="object-details">
                <i className="fas fa-search icon"></i> {/* General search icon */}
                <div> 
                  <span className="object-label">Label: {object.label}</span>
                  <span className="confidence">
                    Confidence: {object.confidence.toFixed(2)}
                  </span>
                </div>
              </div>
              {/* Add a placeholder for visualization, to be implemented later */}
              <div className="object-visualization">
                 {/* Placeholder:  */}
                 Visualization (Coming Soon) 
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ObjectDetection;
