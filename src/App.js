import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles.css'; 
import NavigationBar from './components/NavigationBar';
import MainContentArea from './components/MainContentArea';

const App = () => {
  const [activeService, setActiveService] = useState('objectDetection'); // Use 'service' for accuracy
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Add login state

  // Example: Fetch initial service list from an API 
  useEffect(() => {
    // TODO: Fetch services data if dynamic
  }, []);

  const services = [
    { name: 'objectDetection', label: 'Object Detection' }, // Add labels for display 
    { name: 'anomalyDetection', label: 'Anomaly Detection' },
    { name: 'countingCar', label: 'Counting Car' },
    { name: 'facialRecognition', label: 'Facial Recognition' },
    { name: 'licenseplateRecognition', label: 'License Plate Recognition' },
    { name: 'peopleCounting', label: 'People Counting' },
    // ... add more services here
  ];

  return (
    <div className="container-fluid app-container"> 
      <NavigationBar 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
      />
      <MainContentArea 
        services={services} //props ka naam services hai
        activeService={activeService}
        setActiveService={setActiveService}
      />
    </div>
  );
};

export default App;
