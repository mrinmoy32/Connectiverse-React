import React from 'react';
import './SignupPage.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div className="signup-page">
      <div className="singup__left-section">
        <div className="signup-text">
          <h1>Join Connectiverse</h1>
          <p>Create your account and connect with others</p>
        </div>
      </div>
      <div className="signup__right-section">
        <form className="signup-form">
          <h2>Welcome aboard</h2>
          <div className="input-container">
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-container">
            <input type="email" placeholder="Email address" />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" />
          </div>
          <button className="signup-button">Sign up</button>
          <Link to="/login">Already have an account? plesae login</Link>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
