import React from 'react';

const FacialRecognition = ({ detections }) => {
  return (
    <div className="facial-recognition-results">
      <h3>Facial Recognition Results:</h3>

      {detections.length === 0 ? (
        <p className="no-faces-detected">No faces detected.</p>
      ) : (
        <ul className="face-list">
          {detections.map((face, index) => (
            <li key={index}>
              <div className="face-details">
                <i className="fas fa-user-secret icon"></i> 
                <div> 
                  <span className="identity">
                    Identity Match: {face.match || 'Unknown'}
                  </span>
                  <span className="confidence">
                    Confidence: {face.confidence.toFixed(2)}
                  </span>
                </div>
              </div>
              {/* Add a placeholder for visualization, to be implemented later */}
              <div className="face-visualization">
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

export default FacialRecognition;
