import React from 'react';

const LicensePlateRecognition = ({ detections }) => {
  return (
    <div className="license-plate-recognition-results">
      <h3>License Plate Recognition Results:</h3>

      {detections.length === 0 ? (
        <p className="no-plates-detected">No license plates detected.</p>
      ) : (
        <ul className="plate-list">
          {detections.map((plate, index) => (
            <li key={index}>
              <div className="plate-details">
                <i className="fas fa-car-side icon"></i> 
                <div> 
                  <span className="plate-number">
                    Plate Number: {plate.number}
                  </span>
                  <span className="confidence">
                    Confidence: {plate.confidence.toFixed(2)}
                  </span>
                </div>
              </div>
              {/* Add a placeholder for visualization, to be implemented later */}
              <div className="plate-visualization">
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

export default LicensePlateRecognition;
