import React from 'react';

// ... (Rest of your imports, if any)

const AnomalyDetection = ({ analysisData }) => {
  console.log(analysisData);
  return (
    <div className="anomaly-detection-results">
      <h3>Anomaly Detection Results:</h3>

      {analysisData.length === 0 ? (
        <p className="no-anomalies">No anomalies detected.</p>
      ) : (
        <ul className="anomaly-list">
          {analysisData.map((anomaly, index) => (
            <li key={index}>
              <i className="fas fa-exclamation-triangle warning-icon"></i> 
              <div className="anomaly-details"> {/* Group details together */}
                <span className="anomaly-type">
                   Anomaly Type: {anomaly.type || 'Unspecified'}
                </span>
                <span className="anomaly-confidence">
                  Confidence: {anomaly.confidence.toFixed(2)}
                </span>
              </div> 
              {/* Add a placeholder for visualization, to be implemented later */}
              <div className="anomaly-visualization">
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

export default AnomalyDetection;
