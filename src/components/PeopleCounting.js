import React from 'react';

const PeopleCounting = ({ detections }) => {
  const personCount = detections.length;

  return (
    <div className="people-counting-results">
      <h3>People Counting Results:</h3>

      {personCount === 0 ? (
        <p className="no-people-detected">No people detected.</p>
      ) : (
        <div className="person-count-display">
          <i className="fas fa-users icon"></i> 
          <span className="count">{personCount}</span> 
        </div>
      )} 
    </div>
  );
};

export default PeopleCounting;
