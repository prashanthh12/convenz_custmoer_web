// src/pages/UserSetupLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const SetupContainer = styled.div`
  background-color: var(--background);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0; /* Remove padding */

  @media (min-width: 768px) {
    padding: 20px; /* Add padding back for desktop */
  }
`;

const SetupContent = styled.div`
  width: 100%;
  background-color: var(--background);
  min-height: 100vh;
  
  @media (min-width: 768px) {
    /* --- FIX: Removed card styles and increased width --- */
    max-width: 960px; /* Wider for two columns */
    min-height: auto;
    border-radius: 20px; /* Keep the rounded corners */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Keep the shadow */
    overflow: hidden; /* This is important! */
  }
`;

// This is the parent component from App.jsx
const UserSetupLayout = () => {
  return (
    <SetupContainer>
      <SetupContent>
        {/* The <Outlet/> renders the active child route */ }
        <Outlet />
      </SetupContent>
    </SetupContainer>
  );
};

export default UserSetupLayout;