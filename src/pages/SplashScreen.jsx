// src/pages/SplashScreen.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// This component would replicate the 'WelcomeBaseScreen' background
// For brevity, we'll just center the logo and loader
const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
    to bottom, 
    var(--gradient-light-blue), 
    var(--gradient-dark-blue)
  );
  color: var(--white);
`;

const Logo = styled.img`
  height: 100px;
  margin-bottom: 50px;
`;

const LoadingText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 17px;
  margin-top: 37.5px;
`;

// A simple CSS loader
const Loader = styled.div`
  border: 2.5px solid rgba(255, 255, 255, 0.3);
  border-top: 2.5px solid var(--white);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Request permissions (Web API equivalent of 'permission.dart')
    // Request location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => console.log('Location access granted'),
        (err) => console.warn('Location access denied')
      );
    }
    // Request notifications
    if ('Notification' in window) {
      Notification.requestPermission()
        .then((perm) => console.log('Notification permission:', perm));
    }

    // 2. Navigate after 10 seconds (was 10, 3s is better for web)
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 3000); // 10 seconds is very long for a web splash, reduced to 3s

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigate]);

  return (
    <SplashContainer>
      <Logo src="/assets/images/convenzlogo.png" alt="Convenz Logo" />
      <Loader />
      <LoadingText>Loading vendor services to you...</LoadingText>
    </SplashContainer>
  );
};

export default SplashScreen;