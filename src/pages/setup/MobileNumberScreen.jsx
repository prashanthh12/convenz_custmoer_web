// src/pages/setup/MobileNumberScreen.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// --- FIX: Added .jsx to both import paths ---
import TextInput from '../../components/TextInput.jsx';
import PrimaryButton from '../../components/PrimaryButton.jsx';

/* --- NEW: Main layout container --- */
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column; /* Mobile-first: stacked */

  @media (min-width: 768px) {
    flex-direction: row; /* Desktop: side-by-side */
    min-height: 700px; /* App-like height on desktop */
    align-items: stretch;
  }
`;

/* --- NEW: Left panel for Logo --- */
const LeftPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 28px 40px; /* Add padding for mobile */
  background-color: #f0f4f8; /* A slightly different bg for visual separation */

  @media (min-width: 768px) {
    flex: 1; /* Take half the space */
    padding: 40px 28px;
  }
`;

/* --- NEW: Right panel for Form --- */
const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 28px 80px; /* Padding for mobile */

  @media (min-width: 768px) {
    flex: 1.5; /* Give form a bit more space */
    padding: 40px 56px; /* More padding on desktop */
  }
`;

const Logo = styled.img`
  width: 150px;
  /* Removed top/bottom margins */
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: var(--primary-teal);
  margin-bottom: 40px;
  text-align: center; /* Center text in mobile */
  
  @media (min-width: 768px) {
    text-align: left; /* Align left on desktop */
  }
`;

const MobileNumberScreen = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (phone.length === 10) {
      navigate('/setup/otp');
    } else {
      alert('Enter valid 10-digit mobile number');
    }
  };

  return (
    /* --- UPDATED: Use new layout --- */
    <Container>
      <LeftPanel>
        <Logo src="/assets/images/logo.png" alt="Logo" />
      </LeftPanel>
      <RightPanel>
        <Title>Mobile Verification</Title>
        <TextInput
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          labelText="Mobile Number"
          keyboardType="number"
          maxLength={10}
          prefixText="+91 "
        />
        <div style={{ height: '40px' }} />
        <PrimaryButton text="Send OTP" onClick={handleSendOtp} />
      </RightPanel>
    </Container>
  );
};

export default MobileNumberScreen;