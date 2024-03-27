import React from 'react';

const CarCounting = ({ detections }) => {
  const carCount = detections.length;

  return (
    <div className="car-counting-results">
      <h3>Car Counting Results:</h3>

      {carCount === 0 ? (
        <p className="no-cars-detected">No cars detected.</p>
      ) : (
        <div className="car-count-display">
          <i className="fas fa-car icon"></i> 
          <span className="count">{carCount}</span> 
        </div>
      )} 
    </div>
  );
};

export default CarCounting;
