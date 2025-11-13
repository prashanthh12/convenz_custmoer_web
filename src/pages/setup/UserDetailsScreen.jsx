// src/pages/setup/UserDetailsScreen.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../../components/TextInput.jsx';
import PrimaryButton from '../../components/PrimaryButton.jsx';

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
    left: calc(40% + 20px);
  }
`;

const Logo = styled.img`
  width: 150px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: var(--primary-teal);
  margin-bottom: 40px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

// Wrapper to make the <select> look like the TextInput
const SelectWrapper = styled.div`
  width: 100%;
  background-color: var(--white);
  border-radius: 100px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--primary-teal);
  position: relative;
  
  &:focus-within {
    border-color: var(--accent-mint);
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 16px 20px; /* Match TextInput */
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  color: var(--dark-grey);
  appearance: none; 
  cursor: pointer;
  
  &:invalid {
    color: var(--dark-grey);
    font-weight: 500;
  }
`;

const UserDetailsScreen = () => {
  // ... state and handlers ...
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();
  const handleContinue = () => {
    if (name && gender) {
      navigate('/setup/complete');
    } else {
      alert('Please fill in all details');
    }
  };
  const goBack = () => {
    navigate('/setup/otp');
  };


  return (
    <Container>
      <BackButton onClick={goBack}>&larr;</BackButton>
      <LeftPanel>
        <Logo src="/assets/images/logo.png" alt="Logo" />
      </LeftPanel>
      <RightPanel>
        <Title>Your Details</Title>
        
        <TextInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          labelText="Full Name"
        />
        
        <div style={{ height: '20px' }} />

        <SelectWrapper>
          <StyledSelect value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="" disabled hidden>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </StyledSelect>
        </SelectWrapper>

        <div style={{ height: '40px' }} />
        
        <PrimaryButton text="Continue" onClick={handleContinue} />
      </RightPanel>
    </Container>
  );
};

export default UserDetailsScreen;