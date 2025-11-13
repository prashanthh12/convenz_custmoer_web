// src/components/PrimaryButton.jsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: var(--button-green);
  color: var(--white);
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  elevation: 0;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PrimaryButton = ({ text, onClick, enabled = true }) => {
  return (
    <StyledButton onClick={onClick} disabled={!enabled}>
      {text}
    </StyledButton>
  );
};

export default PrimaryButton;