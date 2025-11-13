// src/pages/setup/OtpScreen.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PrimaryButton from '../../components/PrimaryButton.jsx';
import OtpInput from '../../components/OtpInput.jsx';

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
  @media (min-width: 768px) {
    flex: 1.5; 
    padding: 40px 56px; 
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: var(--primary-teal);
  
  @media (min-width: 768px) {
    /* Position inside the right panel on desktop */
    left: calc(40% + 20px); /* 40% is flex: 1 / 2.5 total */
  }
`;

const Logo = styled.img`
  width: 150px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: var(--primary-teal);
  margin-bottom: 10px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: var(--dark-grey);
  margin-bottom: 40px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const OtpContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 320px; 
  margin-bottom: 40px;
  align-self: center; /* Center the OTP boxes */
  @media (min-width: 768px) {
    align-self: flex-start; /* Align left on desktop */
  }
`;

const OtpScreen = () => {
  // ... state, refs, and handlers ...
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };
  const verifyOtp = () => {
    const fullOtp = otp.join('');
    if (fullOtp.length === 4) {
      navigate('/setup/details');
    } else {
      alert('Please enter all 4 digits');
    }
  };
  const goBack = () => {
    navigate('/setup');
  };

  return (
    <Container>
      <BackButton onClick={goBack}>&larr;</BackButton>
      <LeftPanel>
        <Logo src="/assets/images/logo.png" alt="Logo" />
      </LeftPanel>
      <RightPanel>
        <Title>Enter OTP</Title>
        <Subtitle>Sent to +91 **********</Subtitle>
        <OtpContainer>
          {otp.map((value, i) => (
            <OtpInput
              key={i}
              ref={inputRefs[i]}
              value={value}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            />
          ))}
        </OtpContainer>
        <PrimaryButton text="Verify OTP" onClick={verifyOtp} />
      </RightPanel>
    </Container>
  );
};

export default OtpScreen;