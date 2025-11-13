// src/pages/Welcome1.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeBaseScreen from '../components/WelcomeBaseScreen.jsx';

const Welcome1 = () => {
  const navigate = useNavigate();

  return (
    <WelcomeBaseScreen
      title="Welcome to ConVenz"
      subtitle="Effortless meetings, connections, and collaboration."
      buttonText="Next"
      onNext={() => navigate('/welcome2')}
      showBack={false}
    />
  );
};

export default Welcome1;