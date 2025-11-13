// src/pages/setup/OnboardingCompleteScreen.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PrimaryButton from '../../components/PrimaryButton.jsx';
import { useNavigate } from 'react-router-dom';

/* --- COPY: Main layout container --- */
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column; 
  @media (min-width: 768px) {
    flex-direction: row; 
    min-height: 700px; 
    align-items: stretch;
  }
`;

/* --- COPY: Left panel for Logo --- */
const LeftPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 28px 40px;
  background-color: #f0f4f8; 
  @media (min-width: 768px) {
    flex: 1; 
    padding: 40px 28px;
  }
`;

/* --- COPY: Right panel for Form --- */
const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 28px 80px; 
  text-align: center; /* Center all content */
  @media (min-width: 768px) {
    flex: 1.5; 
    padding: 40px 56px; 
  }
`;

const Logo = styled.img`
  width: 150px;
  /* On mobile, this logo is in the left panel */
  /* We'll add another one for the right panel on mobile */
  @media (min-width: 768px) {
     width: 150px; /* Logo in left panel on desktop */
  }
`;

/* --- NEW: Mobile-only logo for this screen --- */
const MobileLogo = styled.img`
  width: 100px;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    display: none; /* Hide on desktop */
  }
`;

const AnimatedTick = styled.div`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  background-color: rgba(61, 213, 161, 0.1); 
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
  margin: 0 auto; /* Center the tick */
  
  opacity: ${props => (props.$animate ? 1 : 0)};
  transform: scale(${props => (props.$animate ? 1 : 0.4)});
  transition: opacity 700ms ease-in, transform 700ms cubic-bezier(0.18, 0.89, 0.32, 1.28);

  &::before {
    content: '✔';
    font-size: 80px;
    color: #02BEAF; 
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: var(--primary-teal);
  margin-top: 50px;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: var(--dark-grey);
  line-height: 1.5;
  margin-bottom: 60px;
`;

const OnboardingCompleteScreen = () => {
  // ... state and handlers ...
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);
  const handleGetStarted = () => {
    alert('Navigating to dashboard...');
    // navigate('/dashboard'); 
  };

  return (
    <Container>
      <LeftPanel>
        <Logo src="/assets/images/logo.png" alt="Logo" />
      </LeftPanel>
      <RightPanel>
        <MobileLogo src="/assets/images/logo.png" alt="Logo" />
        <AnimatedTick $animate={animate} />
        <Title>Welcome!</Title>
        <Subtitle>
          You’re all set up! Let’s get started and explore your dashboard.
        </Subtitle>
        <PrimaryButton text="Go to Dashboard" onClick={handleGetStarted} />
      </RightPanel>
    </Container>
  );
};

export default OnboardingCompleteScreen;