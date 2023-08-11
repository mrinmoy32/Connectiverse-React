import React from 'react';
import './LandingPage.css'; // Import the CSS file for styling

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="left-section">
        <div className="welcome-text">
          <h1>Welcome to Social Media App</h1>
          <p>Your platform for connecting and sharing</p>
        </div>
      </div>
      <div className="right-section">
        <div className="get-started">
          <h2>Get Started</h2>
          <div className="buttons">
            <button className="login-button">Log in</button>
            <button className="signup-button">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
