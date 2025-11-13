// src/pages/Welcome2.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeBaseScreen from '../components/WelcomeBaseScreen.jsx';

const Welcome2 = () => {
  const navigate = useNavigate();

  return (
    <WelcomeBaseScreen
      title="Get Vendors Anytime, Anywhere"
      subtitle="Connect with vendors around you instantly."
      buttonText="Next"
      onNext={() => navigate('/welcome3')}
      showBack={true}
      onBack={() => navigate(-1)} // Simple "go back"
    />
  );
};

export default Welcome2;