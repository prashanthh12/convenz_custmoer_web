// src/components/TextInput.jsx
import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--white);
  border-radius: 100px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  padding-left: 16px;
  border: 1px solid var(--primary-teal);

  &:focus-within {
    border-color: var(--accent-mint);
  }

  /* Your Flutter code had an icon, we'd pass it as a component */
  /* This example just shows text prefix */

  span {
    color: var(--primary-teal);
    font-weight: bold;
    padding-right: 4px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  color: var(--dark-grey);

  &::placeholder {
    color: var(--dark-grey);
    font-weight: 500;
  }
`;

const TextInput = ({
  controller, // In React, you pass `value` and `onChange`
  value,
  onChange,
  labelText,
  keyboardType = 'text',
  maxLength,
  prefixText,
}) => {
  return (
    <InputWrapper>
      {prefixText && <span>{prefixText}</span>}
      <StyledInput
        value={value}
        onChange={onChange}
        placeholder={labelText}
        type={keyboardType === 'number' ? 'tel' : 'text'}
        maxLength={maxLength}
      />
    </InputWrapper>
  );
};

export default TextInput;