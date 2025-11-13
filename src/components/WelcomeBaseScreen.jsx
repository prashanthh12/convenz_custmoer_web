// src/components/WelcomeBaseScreen.jsx
import React from 'react';
import styled from 'styled-components';

// This container creates the entire screen layout
const Screen = styled.div`
  height: 100vh;
  width: 100%;
  
  /* --- FIX 1: Allow scrolling if content is too tall --- */
  overflow-y: auto; 
  
  background: linear-gradient(
    to bottom, 
    var(--gradient-light-blue), 
    var(--gradient-dark-blue)
  );
  position: relative;
  display: flex;
  flex-direction: column;
  
  /* --- FIX 2: Center content horizontally, align to top for scrolling --- */
  align-items: center; 
  justify-content: flex-start; /* Aligns content to the top */
  
  color: var(--white);
`;

// This pseudo-element replicates the 'TopRoundedClipper' effect
const CurvedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 400px;
  background: linear-gradient(
    to bottom, 
    var(--white), 
    #3A7A94
  );
  /* The magic for the curve */
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -50%;
    width: 200%;
    height: 200px;
    background: var(--gradient-light-blue);
    border-radius: 50%;
  }
`;

const Content = styled.div`
  position: relative; /* Sits on top of the background */
  z-index: 1;
  display: flex;
  flex-direction: column;
  
  /* --- FIX 3: Remove flex: 1, let content define its own height --- */
  /* flex: 1; */ 

  padding: 60px 24px 40px;

  /* --- Web responsiveness: Constrain width --- */
  width: 100%;
  max-width: 480px; 
`;

const TopImage = styled.img`
  position: absolute;
  top: 85px;
  left: 50%;
  transform: translateX(-50%);
  height: 275px;
  z-index: 2;
`;

const TextContainer = styled.div`
  margin-top: 400px; /* This is correct, it clears the background curve */
  text-align: center; /* Better for responsive layout */
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  margin: 12px 0 0;
`;

// This pushes the button to the bottom
const Spacer = styled.div`
  /* --- FIX 4: Change from flex: 1 to a min-height --- */
  /* This ensures space even when scrolling is needed */
  min-height: 80px;
`;

const WelcomeButton = styled.button`
  width: 100%;
  background: var(--white);
  color: #000;
  padding: 16px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 8px; /* Your button wasn't rounded, but 'PrimaryButton' is */
  cursor: pointer;
`;

/* --- BackButton remains unchanged, position is correct --- */
const BackButton = styled.button`
  position: absolute;
  top: 60px; /* Position from top of screen */
  left: 24px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: #000; /* Color is black as requested */
  z-index: 10; /* Ensure it's on top */
`;

const WelcomeBaseScreen = ({ title, subtitle, buttonText, onNext, showBack, onBack }) => {
  return (
    <Screen>
      {/* Back button is here, relative to the Screen */
      showBack && (
        <BackButton onClick={onBack}>&larr;</BackButton>
      )}

      <CurvedBackground />
      <TopImage src="/assets/images/welcome1.png" alt="Welcome" />
      
      <Content>
        <TextContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextContainer>
        <Spacer />
        <WelcomeButton onClick={onNext}>{buttonText}</WelcomeButton>
      </Content>
    </Screen>
  );
};

export default WelcomeBaseScreen;