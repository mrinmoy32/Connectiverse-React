import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing__left-section">
        <div className="welcome-text">
          <h1>Connectiverse</h1>
          <p>
            Your gateway to seamless connections and meaningful interactions
          </p>
        </div>
      </div>
      <div className="landing__right-section">
        <div className="get-started">
          <h2>Get Started</h2>
          <div className="buttons">
            <Link to="/login">
              <button className="landing__login-button">Log in</button>
            </Link>
            <Link to="/signup">
              <button className="landing__signup-button">Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
