// src/pages/Welcome3.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeBaseScreen from '../components/WelcomeBaseScreen.jsx';

const Welcome3 = () => {
  const navigate = useNavigate();

  return (
    <WelcomeBaseScreen
      title="Start Your Journey"
      subtitle="Set up your profile and begin connecting."
      buttonText="Get Started"
      onNext={() => navigate('/setup')} // Navigates to the setup flow
      showBack={true}
      onBack={() => navigate(-1)} // Simple "go back"
    />
  );
};

export default Welcome3;