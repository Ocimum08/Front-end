import React from "react";

const ResultsDisplay = ({ analysisData = [] }) => {
  // Default empty array

  return (
    <div className="results-display">
      <h3>Detection Results:</h3>

      {analysisData ? (
        analysisData.length === 0 ? (
          <p className="no-detections">No detections found.</p>
        ) : (
          <ul className="results-list">
            {analysisData.map((result, index) => (
              <li key={index}>
                <div className="result-item">
                  {result.type === "face" && (
                    <i className="fas fa-user-secret icon"></i>
                  )}
                  {result.type === "object" && (
                    <i className="fas fa-search icon"></i>
                  )}
                  {result.type === "car" && (
                    <i className="fas fa-car-side icon"></i>
                  )}
                  {result.type === "anomaly" && (
                    <i className="fas fa-user-secret icon"></i>
                  )}
                  {result.type === "licensePlate" && (
                    <i className="fas fa-user-secret icon"></i>
                  )}
                  {result.type === "people" && (
                    <i className="fas fa-user-secret icon"></i>
                  )}
                  {/* ... Add more cases for other types */}

                  <div className="result-details">
                    <span className="result-label">{result.label}</span>
                    {result.confidence && (
                      <span className="confidence">
                        Confidence: {result.confidence.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )
      ) : (
        <p className="loading-message">
          <i className="fas fa-spinner fa-spin"></i> Loading analysis results...
        </p>
      )}
    </div>
  );
};

export default ResultsDisplay;
