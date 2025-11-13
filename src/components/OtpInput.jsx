// src/components/OtpInput.jsx
import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 60px;
  height: 60px; /* Explicit height */
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #1F465A;
  background-color: var(--white);
  border-radius: 25px; /* From your dart file */
  border: 1.2px solid #1F465A;
  padding: 16px;
  box-sizing: border-box; /* Ensure padding doesn't break size */

  &:focus {
    border-color: #6AACBF;
    border-width: 1.4px;
    outline: none;
    box-shadow: 0 0 5px rgba(106, 172, 191, 0.5);
  }

  /* Hide the number input arrows */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

// We use forwardRef to pass the ref from OtpScreen to the <input> element
const OtpInput = forwardRef(({ value, onChange, onKeyDown, onFilled }, ref) => {
  
  const handleChange = (e) => {
    const val = e.target.value;
    // Only take the last character
    onChange({ target: { value: val.length > 0 ? val[val.length - 1] : '' } });

    // The 'onFilled' logic is now handled in the parent's 'handleChange'
  };

  return (
    <StyledInput
      ref={ref}
      type="tel" // Use 'tel' for better mobile numeric keyboard
      maxLength={1}
      value={value}
      onChange={handleChange}
      onKeyDown={onKeyDown}
    />
  );
});

export default OtpInput;