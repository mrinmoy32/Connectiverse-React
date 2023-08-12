import React from 'react';
import './SignupPage.css';
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
            <input type="text" placeholder="Name" required/>
          </div>
          <div className="input-container">
            <input type="email" placeholder="Email address" required/>
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" required/>
          </div>
          <Link to="/user/profile"><button className="signup-button">Sign up</button></Link>
          <Link to="/login">Already have an account? plesae login</Link>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
