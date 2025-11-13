// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen.jsx";
//import WelcomeCarousel from "./pages/WelcomeCarousel.jsx";

import Welcome1 from "./pages/Welcome1.jsx";
import Welcome2 from "./pages/Welcome2.jsx";
import Welcome3 from "./pages/Welcome3.jsx";
import UserSetupLayout from "./pages/UserSetupLayout.jsx";
import MobileNumberScreen from "./pages/setup/MobileNumberScreen.jsx";
import OtpScreen from "./pages/setup/OtpScreen.jsx";
import UserDetailsScreen from "./pages/setup/UserDetailsScreen.jsx";
import OnboardingCompleteScreen from "./pages/setup/OnboardingCompleteScreen.jsx";
function App() {
  return (
    <Routes>
      {/* Initial route is the Splash Screen */}
      <Route path="/" element={<SplashScreen />} />
      
      {/* --- REPLACE THE OLD /welcome ROUTE --- */}
      <Route path="/welcome" element={<Welcome1 />} />
      
      {/* --- ADD THESE NEW ROUTES --- */}
      <Route path="/welcome2" element={<Welcome2 />} />
      <Route path="/welcome3" element={<Welcome3 />} />
      
      {/* User Setup Flow uses Nested Routes */}
      <Route path="/setup" element={<UserSetupLayout />}>
        <Route index element={<MobileNumberScreen />} />
        <Route path="otp" element={<OtpScreen />} />
        <Route path="details" element={<UserDetailsScreen />} />
        <Route path="complete" element={<OnboardingCompleteScreen />} />
      </Route>
      
      {/* Add other routes here, e.g., dashboard */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
}

export default App;